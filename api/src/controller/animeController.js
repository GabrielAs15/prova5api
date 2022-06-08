import { Router } from 'express'
import { enviarAnime, procurarAnime, procurarTodosAnimes } from '../repository/animeRepository.js';

const server = Router();

server.get('/anime/:id', async (req,resp) => {
   
   try {
    const id = req.params.id;
    const resposta = await procurarAnime(id);

        resp.send({
            anime: resposta
        })}
    catch(err) { 
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.post('/anime', async (req,resp) => { 
    try {
        const nome = req.body;
        const r = await enviarAnime(nome);
        
        resp.send(r)
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.get('/anime/', async (req,resp) =>{
    try{
        const resposta = await procurarTodosAnimes();

        resp.send({
            anime: resposta
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
});

export default server;


