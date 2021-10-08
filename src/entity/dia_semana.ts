import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections, OneToMany } from "typeorm";
import { Horario_Missa } from './horario_missa'
import { Horario_Confissao } from "./horario_confissao";

@Entity()
export class Dia_Semana {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(type => Horario_Missa, horario_missa => horario_missa.paroquia)
    horario_missa: Horario_Missa[];

    @OneToMany(type => Horario_Confissao, horario_confissao => horario_confissao.dia_semana)
    horario_confissao: Horario_Confissao[];


}
