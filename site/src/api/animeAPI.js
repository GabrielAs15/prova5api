import axios from 'axios';
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarAnimes(nome, lancamento, avaliacao){
    const resposta = await api.post('/anime', {
      nome: nome,
      lancamento: lancamento,
      avaliacao: avaliacao
    })
    return resposta.data;
}

export async function buscaPorNome(nome){
    const resposta = await api.get(`/anime/busca?nome=${nome}`);
    return resposta.data;    
}


export async function mostrarAnimes(){
    const resposta = await api.get('/anime/');
    return resposta.data;
}
