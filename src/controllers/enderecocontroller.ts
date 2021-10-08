import { Request, Response, NextFunction } from 'express'
import { Endereco } from '../entity/endereco'
import { getRepository } from 'typeorm'

export class EnderecoController {

    async index(req: Request, res: Response) {
        try {
            const repository = getRepository(Endereco)
            const allEndereco = await repository.find()
            return res.json(allEndereco)
        } catch (err) {
            return res.status(400).json("Ocorreu algum erro!")
        }
    }

}