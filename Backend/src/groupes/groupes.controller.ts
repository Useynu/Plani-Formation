import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupesService } from './groupes.service.js';

@Controller('groupes')
export class GroupesController {

  constructor(private readonly groupesService: GroupesService) {}

  // AFFICHER LES GROUPES (READ)
  @Get()
  afficherGroupes() {
    return this.groupesService.afficherGroupes();
  }

  // AJOUTER UN GROUPE (CREATE)
  @Post()
  ajouterGroupe(@Body() groupe: any) {
    return this.groupesService.ajouterGroupe(groupe);
  }

  // MODIFIER UN GROUPE (UPDATE)
  @Patch(':id')
  modifierGroupe(
    @Param('id') id: string,
    @Body() nouvellesDonnees: any
  ) {
    return this.groupesService.modifierGroupe(
      Number(id),
      nouvellesDonnees
    );
  }

  // SUPPRIMER UN GROUPE (DELETE)
  @Delete(':id')
  supprimerGroupe(@Param('id') id: string) {
    return this.groupesService.supprimerGroupe(Number(id));
  }
}