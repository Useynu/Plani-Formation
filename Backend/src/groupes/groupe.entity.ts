import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('groupe')
export class Groupe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  effectif: number;

  @Column({ nullable: true })
  niveau: string;
}