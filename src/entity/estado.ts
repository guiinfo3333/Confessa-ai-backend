import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections } from "typeorm";

@Entity()
export class Estado {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rua: string;

    @Column()
    bairro: string;

    @Column()
    numero: string;


    // async retornaUsuarios(): Promise<User> {
    //     await createConnections();
    //     const repository = getRepository(User)
    //     const user = await repository.findOne(2);
    //     return user
    // }

}
