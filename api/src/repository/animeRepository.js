import { con } from './connection.js'

export async function procurarAnime(nome) { 
    const comando = `
    SELECT id_anime 	id,
           nm_anime		nome	
    FROM   tb_anime
    WHERE  id_anime    = ?;`
}

const [linhas] = await con.body(comando [nome]);
return linhas;