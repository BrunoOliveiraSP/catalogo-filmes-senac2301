import { alterarFilme, alterarImagem, consultarFilme, listarFilmes, removerFilme, salvarFilme } from "../repository/FilmeRepository.js";

import fs from 'fs'
import multer from 'multer'

import { Router } from "express";
const endpoints = Router();


const upload = multer({ dest: 'storage/' })



endpoints.get('/filme', async (req, resp) => {
  const nome = req.query.nome || '';
  const resultado = await listarFilmes(nome);
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


endpoints.put('/filme/:id/imagem', upload.single('imagem'), async (req, resp) => {
  const caminho = req.file.path;
  const id = req.params.id;

  const resultado = await alterarImagem(id, caminho);
  resp.send({ linhasAfetadas: resultado });
})


endpoints.get('/filme/:id/imagem', async (req, resp) => {
  const id = req.params.id;
  
  const resultado = await consultarFilme(id);
  const caminho = resultado.imagem;

  const imagem = fs.readFileSync(caminho);
  
  resp.send(imagem)
})


export default endpoints;