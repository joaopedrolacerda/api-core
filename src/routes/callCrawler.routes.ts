import { Router } from 'express';

import { CallCrawller } from '../controllers';
const tweetsRouter = Router();

const callCrawler = new CallCrawller();

tweetsRouter.post('/', callCrawler.find);

export default tweetsRouter;
