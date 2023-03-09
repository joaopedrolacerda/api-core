import {AxiosAdapter} from '../adapters'
interface IParams {
  auth: IAuth;
  cpf: string;
}
interface IAuth {
  userName: string,
  password: string
}

export class GetDataFromCrawler {


  public async execute({ auth,cpf }: IParams): Promise<any> {
    try {
      const axiosAdapter = new AxiosAdapter();
      const response = await axiosAdapter.post('http://localhost:3333/tweets/',{auth, cpf})
      return response.data
    } catch (error) {
      throw new Error('Ocorreu um erro na busca do crawler');
    }
  }
}
