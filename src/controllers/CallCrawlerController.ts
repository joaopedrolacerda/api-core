import { Request, Response } from 'express';
import {GetDataFromCrawler} from '../services';
export type IauthData = {
  auth: IAuth;
  cpf: string;
}
export type IAuth ={
  userName: string,
  password: string
}

export  class CallCrawller {
  async find(request: Request, response: Response): Promise<Response> {
    const { auth, cpf } = request.body;
   
    try {
      const getDataFromCrawler = new GetDataFromCrawler();

      const getPageData = await getDataFromCrawler.execute({ auth, cpf });
      
      return response.json(getPageData);

    } catch (error) {
      return response.status(422).json({  "error": error.message });
    }
  }
}
