import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('salle')
export class Salle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  capacite: number;

  @Column({ nullable: true })
  equipement: string;
}