import { redirect } from "next/navigation";
import { getCurrentUser, type CurrentUser } from "@/lib/batiflow-data";

export async function requireUser(): Promise<CurrentUser> {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/connexion");
  }

  return user;
}

export async function requireProUser(): Promise<CurrentUser> {
  const user = await requireUser();

  if (user.subscriptionStatus !== "pro") {
    redirect("/abonnement");
  }

  return user;
}
