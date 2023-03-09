import { HTTPClient } from '../types/axiosTypes'
import axios from 'axios'

export class AxiosAdapter implements HTTPClient {

  async get(url:string): Promise<void> {
    return axios.get(url)
  }

  async post(url:string, data:any): Promise<void> {

    return axios.post(url,data)
  }
}