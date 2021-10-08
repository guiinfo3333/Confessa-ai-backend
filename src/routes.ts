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
const horarioConfissaoController = new Horario_Confissao_Controller()
const horarioMissaController = new Horario_Missa_Controller()
const paroquiaController = new ParoquiaController()

const routes = express.Router()

//cidade
routes.get('/cidades', cidadeController.index)

//endereco
routes.get('/enderecos', enderecoController.index)

//estados
routes.get('/estados', estadoController.index)

//horarios_confissao
routes.get('/horariosconfissao', horarioConfissaoController.index)

//horarios_missa
routes.get('/horariosmissa', horarioMissaController.index)

//horarios_paroquia
routes.get('/paroquias', paroquiaController.index)


export default routes;

