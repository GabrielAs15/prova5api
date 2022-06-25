import { useState } from "react";
import { Link } from "react-router-dom";
import { cadastrarAnimes } from "../api/animeAPI";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export default function Index(){
    const [nome, setNome] = useState(''); 
    const [lancamento, setLancamento] = useState('');
    const [avaliacao, setAvaliacao] = useState(0);


    async function salvarClick(){
        try {
            const r = await cadastrarAnimes(nome, lancamento, avaliacao);

            toast.dark('Anime cadastrado com sucesso!')
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }


    return(
        <div>
            <ToastContainer />

            <div> Cadastrar </div>
            <div> 
                <label>Nome:</label>
                <input type="text" placeholder="Insira o nome do anime" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div> 
                <label>Lançamento:</label> 
                <input type="date" value={lancamento} onChange={e => setLancamento(e.target.value)}/>
            </div>
            <div> 
                <label>Avaliação:</label>
                <input type="number" placeholder="0" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
            </div>
            <div>
                <button onClick={salvarClick}>SALVAR</button>
            </div>
        </div>
    );
}