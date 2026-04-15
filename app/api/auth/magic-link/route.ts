import { NextResponse } from "next/server";
import {
  consumeMagicLink,
  getSessionCookieOptions,
  sessionCookieName,
} from "@/lib/batiflow-data";

function buildRedirectUrl(requestUrl: string, status?: string) {
  const url = new URL("/connexion", requestUrl);

  if (status) {
    url.searchParams.set("magicLink", status);
  }

  return url;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token")?.trim();

  if (!token) {
    return NextResponse.redirect(buildRedirectUrl(request.url, "missing"));
  }

  const result = await consumeMagicLink(token);

  if (result.status !== "consumed") {
    return NextResponse.redirect(buildRedirectUrl(request.url, result.status));
  }

  const response = NextResponse.redirect(new URL(result.redirectTo, request.url));
  response.cookies.set(sessionCookieName, result.sessionToken, getSessionCookieOptions());

  return response;
}
