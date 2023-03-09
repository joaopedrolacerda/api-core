import {CallCrawller} from '../../controllers'
import {GetDataFromCrawler} from '../../services'

jest.mock('../../services/getDataFromCrawlerService')

 interface IResponse {
  response: IReturns
}
interface IReturns {
  beneficios: string
}
describe('CallCrawlerController', () => {
  let getDataFromCrawler: any

  let sut: CallCrawller

  let request: any;
  let response: any;
  beforeEach(() => {
    request = {
      body: {}
    };
    sut = new CallCrawller()
    response = {
      send: jest.fn((param) => param),
      json: jest.fn((json) => json ),
      status: jest.fn((status) => status).mockReturnThis(),
    };

  })
  describe('find', () => {
    it('should call service', async  () => {
      const mockedCallcrawlerService = GetDataFromCrawler as jest.MockedClass<typeof GetDataFromCrawler>
      mockedCallcrawlerService.prototype.execute = jest.fn().mockResolvedValue({"response": {
        "beneficios": "1231213"
      }})

      request.body = {
        "auth": {
          "userName": 'testekonsi',
          "password": 'testekonsi'
        },
        "cpf": '099.387.965-91'
      }
      const callCrallerController = await sut.find(request, response) as any
      expect(callCrallerController).toBeDefined()
      expect(callCrallerController.response.beneficios).toBeDefined()
      expect(mockedCallcrawlerService.prototype.execute).toHaveBeenCalled()

    })
    it('should return some error when call service', async  () => {
      const mockedCallcrawlerService = GetDataFromCrawler as jest.MockedClass<typeof GetDataFromCrawler>
      mockedCallcrawlerService.prototype.execute = jest.fn().mockResolvedValue( new Error('Ocorreu um erro inesperado'))

      request.body = {
        "auth": {
          "userName": 'testekonsi',
          "password": 'testekonsi'
        },
        "cpf": '099.387.965-91'
      }
      const callCrallerController = await sut.find(request, response) as any
      expect(callCrallerController).toBeDefined()
      expect(callCrallerController.message).toEqual('Ocorreu um erro inesperado')
    })
  })

})
