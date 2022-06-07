import { con } from './connection.js'

export async function procurarAnime(nome) { 
    const comando = `
    SELECT id_anime 	id,
           nm_anime		nome	
    FROM   tb_anime
    WHERE  nm_anime    = ?`;


const [linhas] = await con.query(comando, [nome]);
return linhas[0];
}