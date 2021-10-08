import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections } from "typeorm";

@Entity()
export class Cidade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    async retornaCidades(): Promise<Cidade> {
        await createConnections();
        const repository = getRepository(Cidade)
        const cidades = await repository.findOne(2);
        return cidades
    }

}
