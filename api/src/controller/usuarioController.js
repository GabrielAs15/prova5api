import { Router } from "express";
import { login } from "../repository/usuarioRepository.js";

const server = Router();

server.post('/usuario/login', async (req,resp) => { 
    try {
        const {email, senha} = req.body;
        const r = await login(email, senha);
        
        resp.send( {
            email: email,
            senha: senha 
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
});

export default server;