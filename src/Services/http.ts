import axios from "axios"

export class Http {
    baseUrl: string = "http://192.168.1.14:3000/api/"

    get(url: string): Promise<any> {
        return axios.get(this.baseUrl + url)
    }
    post(url: string, data: any): Promise<any> {
        return axios.post(this.baseUrl + url, data)
    }

}