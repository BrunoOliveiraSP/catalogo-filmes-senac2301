import { Router } from "express";
const endpoints = Router();

endpoints.get('/ping', (req, resp) => {
  resp.send('Pongg!!');
})




export default endpoints;