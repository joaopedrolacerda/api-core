import { GetDataFromCrawler } from '../../services'
import { AxiosAdapter } from '../../adapters/axiosAdapter'

jest.mock('../../adapters/axiosAdapter')
// jest.mock('../../adapters/axiosAdapter', () => ({
//   post: jest.fn((url: any, data:any) => {'ok'}),
// }));
jest.mock('axios', () => ({
  post: jest.fn((url: any, data: any) => { 'ok' }),
}));
describe('getDataFromCrawlerService', () => {
  let sut: GetDataFromCrawler

  beforeEach(() => {
    sut = new GetDataFromCrawler()

  })
  describe('execute', () => {
    it('should return the beneficts', async () => {

      const axiosAdapter = AxiosAdapter as jest.MockedClass<typeof AxiosAdapter>
      axiosAdapter.prototype.post = jest.fn().mockResolvedValue({ data: { "response": { "beneficios": "32123121" } } })

      const returnBenefts = await sut.execute({ auth: { userName: "alo", password: "alo" }, cpf: "12312312" })

      expect(returnBenefts).toBeDefined()
      expect(axiosAdapter.prototype.post).toHaveBeenCalledTimes(1)
    })


    it('should return some error', async () => {
      try {
        const axiosAdapter = AxiosAdapter as jest.MockedClass<typeof AxiosAdapter>
        axiosAdapter.prototype.post = jest.fn().mockImplementation(() => { throw new Error('error') })

        const returnBenefts = await sut.execute({ auth: { userName: "alo", password: "alo" }, cpf: "12312312" })

        expect(returnBenefts).toBeDefined()
      } catch (error) {
        expect(error).toBeDefined()
        expect(error.message).toBeDefined()
        expect(error.message).toEqual('Ocorreu um erro na busca do crawler')
      }
    })
  })

})
