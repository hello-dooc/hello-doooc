<<<<<<< HEAD
import axios from 'axios'
axios.defaults.timeout = 5000

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'token': localStorage.getItem('token') // 获取token缓存
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

export default {
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  get: function (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  post: function (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }
=======
import axios from 'axios'

const get = (url) => {
  return new Promise((resolve, reject) => {
    axios(url     
    )     
    .then(res => {
      resolve(res)
    })
    .then(err => {
      reject(err)
    })
  })
}

const put = (url) => {
  return new Promise((resolve, reject) => {
    axios.put(url)
  .then(res => {
      resolve(res);
  })
  .catch(err =>{
      reject(err)
  })
});
}

const post = (url, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url, JSON.stringify(params))
    .then(res => {
        resolve(res);
    })
    .catch(err =>{
        reject(err)
    })
  });
}


  
export {
  get,
  put,
  post
>>>>>>> origin/lyx
}