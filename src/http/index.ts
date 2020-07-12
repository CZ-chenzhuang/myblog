import AxiosInstance, { 
  AxiosStatic, 
  AxiosPromise, 
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { message } from 'antd'

type requestFn = (url: string, params?: Object, data?: Object | null) => AxiosPromise

class Http {
  private axios: AxiosStatic = AxiosInstance

  constructor(){
    const { axios } = this
    axios.defaults.timeout = 10000
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
    this.initInterceptors()
  }

  // 拦截器初始化
  private initInterceptors () {
    // 请求拦截器
    this.axios.interceptors.request.use((config: AxiosRequestConfig) => {
      // 可以设置请求头，token 等
      return config
    }, (err: AxiosError) => Promise.reject(err))

    // 响应拦截器
    this.axios.interceptors.response.use((res: AxiosResponse) => {
      if (res.data.code === '000') {
        message.error('服务器错误')
      }
      return res
    }, (err: AxiosError) => Promise.reject(err))
  }

  private featchData (type: string, url: string, options?: object, isComplex?: boolean) {
    // 如果是post类型的请求，使用路径拼接参数，平铺参数
    if (isComplex) {
      return this.axios[type](url, null, options)
    }
    return this.axios[type](url, options)
  }

  private commonRequest (type: string, url: string, data?: object | null, params?: object ) {
    // 如果只传data
    if (data && !params) {
      return this.featchData(type, url, data)
    }
    // 如果只传params, post请求，路径拼接参数
    if (params && !data) {
      return this.featchData(type, url, { params }, true)
    }
  }

  // get方法
  public get (url: string, params?: object) {
    if (!params) {
      return this.featchData('get', url)
    }
    return this.featchData('get', url, { params })
  }

  public post (url: string, data?: object | null, params?: object ) {
    return this.commonRequest('post', url, data, params)
  }

  public put (url: string, data?: object | null, params?: object ) {
    return this.commonRequest('put', url, data, params)
  }

  public delete (url: string, data?: object | null, params?: object ) {
    return this.commonRequest('delete', url, data, params)
  }
}

export default new Http()