type EmailContent = {
  body: string;
  subject: string;
  to: string;
};

type MagicLinkEmailInput = {
  email: string;
  magicLinkUrl: string;
};

const DEFAULT_RESEND_FROM = "BatiFlow <onboarding@resend.dev>";

function renderMagicLinkEmail({ email, magicLinkUrl }: MagicLinkEmailInput): EmailContent {
  const subject = "Votre lien de connexion BatiFlow";
  const body = [
    `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#17212b">`,
    `<p>Bonjour,</p>`,
    `<p>Voici votre lien magique pour ouvrir votre espace BatiFlow avec <strong>${email}</strong>.</p>`,
    `<p><a href="${magicLinkUrl}" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#d55b2d;color:#ffffff;text-decoration:none;font-weight:700">Ouvrir mon tableau de bord</a></p>`,
    `<p>Ce lien expire dans 20 minutes et ne peut être utilisé qu’une seule fois.</p>`,
    `<p>Si vous n’êtes pas à l’origine de cette demande, ignorez simplement cet e-mail.</p>`,
    `<p>BatiFlow</p>`,
    `</div>`,
  ].join("");

  return {
    to: email,
    subject,
    body,
  };
}

function getNanoCorpEmailConfig() {
  const apiUrl = process.env.NANOCORP_EMAILS_API_URL ?? process.env.NANOCORP_BACKEND_URL;
  const token = process.env.NANOCORP_EMAILS_TOKEN ?? process.env.AGENT_SECRET;

  if (!apiUrl || !token) {
    return null;
  }

  return { apiUrl, token };
}

export function getConfiguredEmailProvider() {
  if (process.env.RESEND_API_KEY) {
    return "resend";
  }

  if (getNanoCorpEmailConfig()) {
    return "nanocorp";
  }

  return null;
}

async function sendWithResend(email: EmailContent) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? DEFAULT_RESEND_FROM,
      to: [email.to],
      subject: email.subject,
      html: email.body,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend a refusé l’envoi (${response.status}).`);
  }
}

async function sendWithNanoCorp(email: EmailContent) {
  const config = getNanoCorpEmailConfig();

  if (!config) {
    throw new Error("Le transport NanoCorp n'est pas configuré.");
  }

  const response = await fetch(`${config.apiUrl}/internal/tools/send_email/execute`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      arguments: {
        body: email.body,
        subject: email.subject,
        to: email.to,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`NanoCorp emails a refusé l’envoi (${response.status}).`);
  }
}

export async function sendMagicLinkEmail(input: MagicLinkEmailInput) {
  const email = renderMagicLinkEmail(input);

  if (process.env.RESEND_API_KEY) {
    await sendWithResend(email);
    return;
  }

  if (getNanoCorpEmailConfig()) {
    await sendWithNanoCorp(email);
    return;
  }

  throw new Error(
    "Aucun transport e-mail n'est configuré. Ajoutez RESEND_API_KEY ou NANOCORP_EMAILS_TOKEN.",
  );
}
