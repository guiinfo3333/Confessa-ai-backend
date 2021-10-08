import { Request, Response, NextFunction } from 'express';
import { Horario_Missa } from '../entity/horario_missa';
import { getRepository } from 'typeorm';

export class Horario_Missa_Controller {
    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Horario_Missa);
            const allHorarioMissa = await repository.find();
            return res.json(allHorarioMissa)
        } catch (err) {
            return res.status(400).json("Ocorreu algum erro!")
        }
    }
}