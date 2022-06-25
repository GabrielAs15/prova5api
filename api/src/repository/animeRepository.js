import { con } from './connection.js'

export async function buscaPorNome(nome){
    const comando = `
    SELECT id_anime             id,
           nm_anime             anime,
           dt_lancamento        lancamento,
           vl_avaliacao         avaliacao
           FROM tb_anime
           WHERE nm_anime      like   ? `;
    
    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;    
}

export async function enviarAnime(nome) {
    const comando = `
    INSERT INTO tb_anime (nm_anime, dt_lancamento, vl_avaliacao)
        VALUES(?, ?, ?) `;

const [linhas] = await con.query(comando,[nome.nome, nome.lancamento, nome.avaliacao])
return linhas;
}

export async function procurarTodosAnimes() { 
    const comando = `
    SELECT * FROM tb_anime`; 
    
    const [linhas] = await con.query(comando);
    return linhas;
}