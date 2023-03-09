import { HTTPClient } from '../types/axiosTypes'
import axios from 'axios'

export class AxiosAdapter implements HTTPClient {

  async get(url:string): Promise<any> {
    return axios.get(url)
  }

  async post(url:string, data:any): Promise<any> {

    return axios.post(url,data)
  }
}