import { con } from './connection.js'

export async function login(email, senha){
    const comando =  `
    SELECT id_usuario  	id,
	       ds_email 	email
    FROM   tb_usuario
    WHERE  ds_email	   = 'admin@admin.com.br'
    AND	   ds_senha    = '1234'
    `
    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}