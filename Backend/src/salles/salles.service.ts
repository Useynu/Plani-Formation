import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salle } from './salle.entity.js';

@Injectable()
export class SallesService {
  constructor(
    @InjectRepository(Salle)
    private salleRepository: Repository<Salle>,
  ) {}

  afficherSalles() {
    return this.salleRepository.find();
  }

  ajouterSalle(salle: Partial<Salle>) {
    const nouvelleSalle = this.salleRepository.create(salle);
    return this.salleRepository.save(nouvelleSalle);
  }

  async modifierSalle(id: number, nouvellesDonnees: Partial<Salle>) {
    await this.salleRepository.update(id, nouvellesDonnees);
    return this.salleRepository.findOneBy({ id });
  }

  supprimerSalle(id: number) {
    return this.salleRepository.delete(id);
  }
}