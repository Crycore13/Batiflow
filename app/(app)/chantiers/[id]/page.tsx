import { notFound } from "next/navigation";
import { modifierChantier } from "@/app/actions";
import { ChantierForm } from "@/components/chantier-form";
import { requireProUser } from "@/lib/access";
import { getChantierById } from "@/lib/batiflow-data";

export default async function EditChantierPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await requireProUser();

  const chantier = await getChantierById(user.id, id);

  if (!chantier) {
    notFound();
  }

  return (
    <ChantierForm
      action={modifierChantier.bind(null, chantier.id)}
      submitLabel="Enregistrer"
      heading={`Modifier ${chantier.nomClient}`}
      description="Mettez à jour votre dossier chantier et vos statuts de paiement."
      initialValues={chantier}
    />
  );
}
