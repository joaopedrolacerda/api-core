export interface getData {
  get(url: string): Promise<void>
}

export interface PostData {
  post(url: string, data: any): Promise<void>
}

export interface HTTPClient 
extends getData,PostData{}