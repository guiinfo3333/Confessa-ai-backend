import { Entity, PrimaryGeneratedColumn, Column, getRepository, createConnections, ManyToOne } from "typeorm";
import { Paroquia } from "./paroquia";
import { Dia_Semana } from "./dia_semana";

@Entity()
export class Horario_Confissao {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time' })
    horario_missa: string;

    @ManyToOne(type => Paroquia, paroquia => paroquia.horario_confissao)
    paroquia: Paroquia;

    @ManyToOne(type => Dia_Semana, dia_semana => dia_semana.horario_confissao)
    dia_semana: Dia_Semana;

    // async retornaUsuarios(): Promise<User> {
    //     await createConnections();
    //     const repository = getRepository(User)
    //     const user = await repository.findOne(2);
    //     return user
    // }

}
