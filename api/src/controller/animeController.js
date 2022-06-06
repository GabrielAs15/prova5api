import { Router } from 'express'
import { procurarAnime } from '../repository/animeRepository';

const server = Router();

server.get('/anime', async (req,resp) => {
   
   try {
    const { nome } = await req.body;
    
    const resposta = await procurarAnime(nome) 
    if(!resposta) {
        throw new Error('Credenciais inválidas')
    }
        resp.send({
        nome: nome
    })}
    catch(err) { 
        resp.status(404).send({
            erro: err.message
        })
    }
})


