import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormateursService } from './formateurs.service.js';

@Controller('formateurs')
export class FormateursController {

  constructor(private readonly formateursService: FormateursService) {}

  // Récupérer tous les formateurs
  @Get()
  afficherFormateurs() {
    return this.formateursService.afficherFormateurs();
  }

  // Ajouter un nouveau formateur
  @Post()
  ajouterFormateur(@Body() formateur: any) {
    return this.formateursService.ajouterFormateur(formateur);
  }
  //modifier un formateur
  @Patch(':id')
modifierFormateur(
  @Param('id') id: string,
  @Body() nouvellesDonnees: any
) {
  return this.formateursService.modifierFormateur(
    Number(id),
    nouvellesDonnees
  );
}
//Supprimer un formateur
  // SUPPRIMER UN FORMATEUR (DELETE)
@Delete(':id')
supprimerFormateur(@Param('id') id: string) {
  return this.formateursService.supprimerFormateur(Number(id));
}
}