import conexao from './connection.js'


export async function listarFilmes() {
  const comando =
    `select id_filme        id,
            nm_filme        nome,
            dt_lancamento   lancamento,
            vl_avaliacao    avaliacao,
            bt_disponivel   disponivel 
       from tb_filme`;
  const resultado = await conexao.query(comando);
  return resultado[0];
}


export async function consultarFilme(id) {
  const comando =
    `select id_filme        id,
            nm_filme        nome,
            dt_lancamento   lancamento,
            vl_avaliacao    avaliacao,
            bt_disponivel   disponivel,
            ds_sinopse      sinopse,
            img_filme       imagem
        from tb_filme 
        where id_filme = ?`;
  
  const resultado = await conexao.query(comando, id);
  return resultado[0][0];
}


export async function salvarFilme(filme) {
  const comando =
    `insert into tb_filme (nm_filme, dt_lancamento, vl_avaliacao, bt_disponivel, ds_sinopse)
                   values (?, ?, ?, ?, ?)`;
  
  
  const resultado = await conexao.query(comando, [filme.nome, filme.lancamento, filme.avaliacao, filme.disponivel, filme.sinopse]);
  filme.id = resultado[0].insertId;

  return filme;
}


export async function alterarFilme(id, filme) {
  const comando = 
    `update tb_filme 
        set nm_filme = ?,
            dt_lancamento = ?,
            vl_avaliacao = ?,
            bt_disponivel = ?,
            ds_sinopse = ?
        where id_filme = ?`
  
  const resultado = await conexao.query(comando, [filme.nome, filme.lancamento, filme.avaliacao, filme.disponivel, filme.sinopse, id]);
  return resultado[0].affectedRows;
}


export async function removerFilme(id) {
  const comando =
    `delete from tb_filme where id_filme = ?`;
  
  const resultado = await conexao.query(comando, [id]);
  return resultado[0].affectedRows;
}

