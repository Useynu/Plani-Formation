import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SallesService } from './salles.service.js';

@Controller('salles')
export class SallesController {

  constructor(private readonly sallesService: SallesService) {}

  // AFFICHER LES SALLES (READ)
  @Get()
  afficherSalles() {
    return this.sallesService.afficherSalles();
  }

  // AJOUTER UNE SALLE (CREATE)
  @Post()
  ajouterSalle(@Body() salle: any) {
    return this.sallesService.ajouterSalle(salle);
  }

  // MODIFIER UNE SALLE (UPDATE)
  @Patch(':id')
  modifierSalle(
    @Param('id') id: string,
    @Body() nouvellesDonnees: any
  ) {
    return this.sallesService.modifierSalle(
      Number(id),
      nouvellesDonnees
    );
  }

  // SUPPRIMER UNE SALLE (DELETE)
  @Delete(':id')
  supprimerSalle(@Param('id') id: string) {
    return this.sallesService.supprimerSalle(Number(id));
  }
}