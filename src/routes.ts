import express from 'express'

import { CidadeController } from './controllers/cidadecontroller'
import { EnderecoController } from './controllers/enderecocontroller'
import { EstadoController } from './controllers/estadocontroller'
import { Horario_Confissao_Controller } from './controllers/horario_confissao_controller'
import { Horario_Missa_Controller } from './controllers/horario_missa_controller'
import { ParoquiaController } from './controllers/paroquiacontroller'

const cidadeController = new CidadeController()
const enderecoController = new EnderecoController()
const estadoController = new EstadoController()
const horario_confissao_Controller = new Horario_Confissao_Controller()
const horario_missa_Controller = new Horario_Missa_Controller()
const paroquiaController = new ParoquiaController()

const routes = express.Router()

///cidade
routes.get('/cidades', cidadeController.index)
routes.get('/enderecos', cidadeController.index)
routes.get('/cidades', cidadeController.index)
routes.get('/cidades', cidadeController.index)
routes.get('/cidades', cidadeController.index)
routes.get('/cidades', cidadeController.index)


export default routes;

