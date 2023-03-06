import { alterarFilme, consultarFilme, listarFilmes, removerFilme, salvarFilme } from "../repository/FilmeRepository.js";

import { Router } from "express";
const endpoints = Router();


endpoints.get('/filme', async (req, resp) => {
  const resultado = await listarFilmes();
  resp.send(resultado);
})


endpoints.get('/filme/:id', async (req, resp) => {
  const id = req.params.id;
  const resultado = await consultarFilme(id);
  resp.send(resultado);
})

endpoints.post('/filme', async (req, resp) => {
  const filme = req.body;

  const resultado = await salvarFilme(filme);
  resp.send(resultado);
})

endpoints.put('/filme/:id', async (req, resp) => {
  const id = req.params.id;
  const filme = req.body;

  const resultado = await alterarFilme(id, filme);
  resp.send({ linhasAfetadas: resultado });
})


endpoints.delete('/filme/:id', async (req, resp) => {
  const id = req.params.id;

  const resultado = await removerFilme(id);
  resp.send({ linhasAfetadas: resultado })
})

export default endpoints;