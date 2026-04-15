import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/batiflow-data";

export default async function HomePage() {
  const user = await getCurrentUser();

  redirect(user ? "/tableau-de-bord" : "/connexion");
}
