import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import animeController from './controller/animeController.js'
import usuarioController from './controller/usuarioController.js';
const server = express();

server.use(cors());
server.use(express.json());
server.use(animeController);
server.use(usuarioController)

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))

export default server;