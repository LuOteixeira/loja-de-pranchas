import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Prancha {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: number;

  @Column()
  tamanhoEmPes: number;

  @Column()
  cor: string;
}
