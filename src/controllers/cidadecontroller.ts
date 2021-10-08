import { Request, Response, NextFunction } from 'express'
import { Cidade } from '../entity/cidade'
import { getRepository } from 'typeorm'

export class CidadeController {

    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Cidade)
            const allCidades = await repository.find()
            return res.json(allCidades)
        } catch (err) {
            return res.status(400).json("Ocorreu algum erro!")
        }
    }

}