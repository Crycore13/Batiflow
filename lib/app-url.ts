function normalizeBaseUrl(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  return trimmedValue.startsWith("http") ? trimmedValue : `https://${trimmedValue}`;
}

export function getConfiguredAppBaseUrl() {
  return normalizeBaseUrl(
    process.env.APP_BASE_URL ??
      process.env.NEXT_PUBLIC_APP_URL ??
      process.env.VERCEL_PROJECT_URL ??
      "",
  );
}
