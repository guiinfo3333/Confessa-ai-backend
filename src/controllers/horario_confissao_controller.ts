import { Request, Response, NextFunction } from 'express';
import { Horario_Confissao } from '../entity/horario_confissao';
import { getRepository } from 'typeorm';

export class Horario_Confissao_Controller {
    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Horario_Confissao);
            const allHorarioConfissao = await repository.find();
            return res.json(allHorarioConfissao)
        } catch (err) {
            return res.status(400).json("Ocorreu algum erro!")
        }
    }
}