import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Endereco } from './endereco'
import { Horario_Confissao } from "./horario_confissao"
import { Horario_Missa } from "./horario_missa";

@Entity()
export class Paroquia {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: number;

    @Column()
    hashsenha: string;

    @Column({ nullable: true })
    imagem: number;

    @OneToOne(type => Endereco)
    @JoinColumn()
    endereco: Endereco;

    @OneToMany(type => Horario_Confissao, horario_confissao => horario_confissao.paroquia)
    horario_confissao: Horario_Confissao[];

    @OneToMany(type => Horario_Missa, horario_missa => horario_missa.paroquia)
    horario_missa: Horario_Missa[];



    // async retornaUsuarios(): Promise<User> {
    //     await createConnections();
    //     const repository = getRepository(User)
    //     const user = await repository.findOne(2);
    //     return user
    // }

}
