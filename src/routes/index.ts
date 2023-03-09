import { Router } from 'express';
import tweetsRouter from './callCrawler.routes';
const routes = Router();

routes.use('/getDataFromCrawler', tweetsRouter);

export default routes;
