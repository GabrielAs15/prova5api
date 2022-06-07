import { Router } from 'express'
import { procurarAnime } from '../repository/animeRepository.js';

const server = Router();

server.get('/anime', async (req,resp) => {
   
   try {
    const { nome } = await req.body;
    
    const resposta = procurarAnime(nome);

    resp.send(resposta)
    }
    catch(err) { 
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;                     