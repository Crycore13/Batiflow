import { ajouterChantier } from "@/app/actions";
import { ChantierForm } from "@/components/chantier-form";

export default function NouveauChantierPage() {
  return (
    <ChantierForm
      action={ajouterChantier}
      submitLabel="Ajouter le chantier"
      heading="Ajouter un chantier"
      description="Renseignez les informations essentielles pour alimenter votre prévision de trésorerie."
    />
  );
}
