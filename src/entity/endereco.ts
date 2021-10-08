import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Cidade } from './cidade'
import { Estado } from "./estado";

@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rua: string;

    @Column()
    bairro: string;

    @Column()
    numero: string;

    @OneToOne(type => Cidade)
    @JoinColumn()
    cidade: Cidade;

    @OneToOne(type => Estado)
    @JoinColumn()
    estado: Estado;



    // async retornaUsuarios(): Promise<User> {
    //     await createConnections();
    //     const repository = getRepository(User)
    //     const user = await repository.findOne(2);
    //     return user
    // }

}
