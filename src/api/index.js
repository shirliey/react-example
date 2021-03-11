import Axios from 'axios'

//post请求头
let baseURL
if(process.env.NODE_ENV=='development'){
    baseURL = 'http://139.196.72.138'
}else{
    baseURL = 'http://139.196.72.138'
}
Axios.defaults.baseURL = baseURL
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.timeout = 120000

// get-post-exports定义
export function get(url, params) {
  return new Promise((resolve, reject) => {
    Axios.get(url, { params: params }).then(res => {
      if(!res.data.statusCode || res.data.statusCode === 200) {
            resolve(res.data)
        }else{
            alert(res.data.msg)
        }
    }).catch(error => {
        alert(error)
        reject(error.data)
    })
  })
}

export function post(url, params){
    return new Promise((resolve, reject) => {
        Axios.post(url, params).then(res => {
            if(!res.data.statusCode || res.data.statusCode === 200) {
                resolve(res.data)
            }else{
                alert(res.data.msg)
            }
        }).catch(error => {
            alert(error)
            reject(error.data)
        })
    })
}
export function exports(url, data, name){
    return new Promise((resolve, reject) => {
        let params = new URLSearchParams()-
        params.append(name, JSON.stringify(data))
        Axios.post(url, params, { responseType: 'blob' }).then(res => {
            resolve(res.data)
        }).catch(error => {
            alert(error)
            reject(error.data)
        })
    })
}

//获取城市列表
export const getCityList = () =>  get('/api/city_list')
