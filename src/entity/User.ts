import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;


    async retornaUsuarios(): Promise<User> {
        await createConnections();
        const repository = getRepository(User)
        const user = await repository.findOne(2);
        return user
    }

}
