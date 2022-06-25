import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscaPorNome, mostrarAnimes } from "../api/animeAPI";
import './index.scss'


export default function Index(){
    const [animes, setAnimes] = useState([]);
    const [filtro, setFiltro] = useState('');


    
    async function filtrar() { 
        const resp = await buscaPorNome(filtro);
        setFiltro(resp);
    }

    async function carregarTodosAnimes(){
        const resp = await mostrarAnimes();
        console.log(resp)
        setAnimes(resp);
    }

    useEffect(() => {
        carregarTodosAnimes();
    }, []);
    
    return(
        <div>
            <div> Consultar Animes </div>
            <div>
                <input type="text" placeholder="Busca por Nome" value={filtro} onChange={e => setFiltro(e.target.value)} />
                <img className="procurar" src='./images/procurar.png' alt='buscar'  onClick={filtrar} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th> Identificação </th>
                        <th> Anime         </th>
                        <th> Lançamento    </th>
                        <th> Avaliação </th> 
                    </tr>
                </thead>
                <tbody>
                    {animes.map (item => 
                            <tr>
                                <td> {item.id_anime} </td>
                                <td> {item.nm_anime} </td>
                                <td> {item.dt_lancamento.substr(0, 10)} </td>
                                <td> {item.vl_avaliacao} </td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}