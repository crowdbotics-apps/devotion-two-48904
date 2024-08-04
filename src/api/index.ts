import axios from "axios"

const url = process.env.baseURL

export const request = axios.create({
  baseURL: url
})

request.interceptors.request.use(function (config: any) {
  // if (token) {
  //   config.headers["Authorization"] = "Token " + token
  // }

  return config
})

request.interceptors.response.use(
  (response: any) => {
    return response
  },
  async function (error: any) {
    if (error?.response?.status === 401) {
    }
    return Promise.reject(error)
  }
)
