import { Request, Response, NextFunction } from 'express'
import { Estado } from '../entity/estado'
import { getRepository } from 'typeorm'

export class EstadoController {

    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Estado)
            const allEstado = await repository.find()
            return res.json(allEstado)
        } catch (err) {
            return res.status(400).json("Ocorreu algum erro!")
        }
    }

}