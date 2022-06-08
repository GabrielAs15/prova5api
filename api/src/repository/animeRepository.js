import { con } from './connection.js'

export async function procurarAnime(id) { 
    const comando = `
    SELECT id_anime 	id,
           nm_anime		nome	
    FROM   tb_anime
    WHERE  id_anime    = ?`;


const [linhas] = await con.query(comando, [id]);
return linhas[0];
}

export async function enviarAnime(nome) {
    const comando = `
    INSERT INTO tb_anime (nm_anime)
        VALUES(?) `;

const [linhas] = await con.query(comando,[nome.nome])
return linhas;
}

export async function procurarTodosAnimes() { 
    const comando = `
    SELECT * FROM tb_anime`; 
    
    const [linhas] = await con.query(comando);
    return linhas;
}