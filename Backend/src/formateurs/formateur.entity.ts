import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('formateur')
export class Formateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  specialite: string;

  @Column({ nullable: true })
  telephone: string;
}