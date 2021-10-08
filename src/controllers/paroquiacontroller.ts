import { Request, Response, NextFunction } from 'express'
import { Paroquia } from '../entity/paroquia'
import { getRepository } from 'typeorm'

export class ParoquiaController {

    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Paroquia)
            const allParoquia = await repository.find()
            return res.json(allParoquia)
        } catch (err) {
            return res.status(400).json("Ocorreu algum erro!")
        }
    }

}