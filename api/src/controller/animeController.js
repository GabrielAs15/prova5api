import { Router } from 'express'
import { buscaPorNome, enviarAnime, procurarTodosAnimes } from '../repository/animeRepository.js';

const server = Router();

server.get('/anime/busca', async (req,resp) => {
   
    try {
        const { nome } = req.query;
        
        const resposta = await buscaPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/anime', async (req,resp) => { 
    try {
        const nome = req.body;
        
        
        if(!nome.nome )
            throw new Error('Nome do Anime é obrigatório')
        if(!nome.lancamento )
            throw new Error('A data de lançamento é obrigatória')
        if(!nome.avaliacao )
            throw new Error('A avaliação é obrigatória')
        
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

        resp.send( resposta)
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
});

export default server;


