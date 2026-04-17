import { DashboardView } from "@/components/dashboard-view";
import { requireProUser } from "@/lib/access";
import { listChantiersByUser } from "@/lib/batiflow-data";

export default async function TableauDeBordPage() {
  const user = await requireProUser();

  const chantiers = await listChantiersByUser(user.id);

  return <DashboardView chantiers={chantiers} />;
}
