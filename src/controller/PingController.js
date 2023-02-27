import { Router } from "express";
const endpoints = Router();

endpoints.get('/ping', (req, resp) => {
  resp.send('Pingg!!');
})




export default endpoints;