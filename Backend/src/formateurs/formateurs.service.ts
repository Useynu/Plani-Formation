import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formateur } from './formateur.entity.js';

@Injectable()
export class FormateursService {
  constructor(
    @InjectRepository(Formateur)
    private formateurRepository: Repository<Formateur>,
  ) {}

  afficherFormateurs() {
    return this.formateurRepository.find();
  }

  ajouterFormateur(formateur: Partial<Formateur>) {
    const nouveauFormateur = this.formateurRepository.create(formateur);
    return this.formateurRepository.save(nouveauFormateur);
  }

  async modifierFormateur(id: number, nouvellesDonnees: Partial<Formateur>) {
    await this.formateurRepository.update(id, nouvellesDonnees);
    return this.formateurRepository.findOneBy({ id });
  }

  supprimerFormateur(id: number) {
    return this.formateurRepository.delete(id);
  }
}