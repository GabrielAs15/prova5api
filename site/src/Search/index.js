import { Link } from "react-router-dom";

export default function Index(){
    const [animes, setAnimes] = useState([]);

    
    return(
        <div>
            <div> Consultar Animes </div>
            <input type="text" placeholder="Busca por Nome" />
            <table>
                <thead>
                    <td> Identificação </td>
                    <td> Anime         </td>
                    <td> Lançamento    </td>
                    <td> Avaliação </td> 
                </thead>
                <tbody>
                    {animes.map(item => {
                        <div> 
                            <td> {item.id} </td>
                            <td> {item.anime} </td>
                            <td> {item.lancamento} </td>
                            <td> {item.avaliacao} </td>
                        </div>
                    })}
                </tbody>
            </table>
        </div>
    );
}