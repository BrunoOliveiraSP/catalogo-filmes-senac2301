import conexao from './connection.js'


export async function listarFilmes() {
  const comando = 'select * from tb_filme';
  const resultado = await conexao.query(comando);
  return resultado[0];
}

