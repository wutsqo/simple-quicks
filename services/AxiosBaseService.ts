import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

const client = axios.create({
  baseURL: "/api",
})

const request = async (options: AxiosRequestConfig<any>) => {
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response
    return data
  }

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response)
  }

  return client(options).then(onSuccess).catch(onError)
}

export default request
