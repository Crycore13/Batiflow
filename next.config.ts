import type { NextConfig } from "next";

function getOriginHost(value: string | undefined) {
  if (!value) {
    return null;
  }

  const normalizedValue = value.startsWith("http") ? value : `https://${value}`;

  try {
    return new URL(normalizedValue).host;
  } catch {
    return null;
  }
}

const allowedOrigins = Array.from(
  new Set(
    [
      getOriginHost(process.env.APP_BASE_URL),
      getOriginHost(process.env.VERCEL_PROJECT_URL),
      "pagehush.nanocorp.app",
    ].filter((value): value is string => Boolean(value)),
  ),
);

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins,
    },
  },
};

export default nextConfig;
