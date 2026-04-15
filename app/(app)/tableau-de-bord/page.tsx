import { redirect } from "next/navigation";
import { DashboardView } from "@/components/dashboard-view";
import { getCurrentUser, listChantiersByUser } from "@/lib/batiflow-data";

export default async function TableauDeBordPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/connexion");
  }

  const chantiers = await listChantiersByUser(user.id);

  return <DashboardView chantiers={chantiers} />;
}
