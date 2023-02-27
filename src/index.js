import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import PingController from './controller/PingController.js'
import './repository/connection.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.use(PingController);



servidor.listen(process.env.PORT,
                () => console.log(`API subiu com sucesso na porta ${process.env.PORT}`))

