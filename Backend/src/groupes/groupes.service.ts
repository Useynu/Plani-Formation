import { Injectable } from '@nestjs/common';

@Injectable()
export class GroupesService {

  // =================================
  // LISTE DES GROUPES
  // =================================

  private groupes: any[] = [];

  // =================================
  // AFFICHER LES GROUPES (READ)
  // =================================

  afficherGroupes() {
    return this.groupes;
  }
 // =================================
// AJOUTER UN GROUPE (CREATE)
// =================================

ajouterGroupe(groupe: any) {
  const nouvelId = this.groupes.length + 1;

  const nouveauGroupe = {
    id: nouvelId,
    ...groupe,
  };

  this.groupes.push(nouveauGroupe);

  return nouveauGroupe;
}
// =================================
// MODIFIER UN GROUPE (UPDATE)
// =================================

modifierGroupe(id: number, nouvellesDonnees: any) {
  const groupe = this.groupes.find(
    (g) => g.id === id
  );

  if (!groupe) {
    return null;
  }

  Object.assign(groupe, nouvellesDonnees);

  return groupe;
}
// =================================
// SUPPRIMER UN GROUPE (DELETE)
// =================================

supprimerGroupe(id: number) {
  const index = this.groupes.findIndex(
    (g) => g.id === id
  );

  if (index === -1) {
    return null;
  }

  return this.groupes.splice(index, 1);
}

}