import axios from 'axios'

const get = ({ url, params }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      params
    })
      .then(result => {
        resolve(result)
      })
      .then(error => {
        reject(error)
      })
  })
}

const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}
const post1 = ({ url, params }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      params
    })
      .then(result => {
        resolve(result)
      })
      .then(error => {
        reject(error)
      })
  })
}
const put = ({ url, params }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'put',
      params
    })
      .then(result => {
        resolve(result)
      })
      .then(error => {
        reject(error)
      })
  })
}

// const put = (url,params) => {
//   return new Promise((resolve, reject) => {
//     axios.put(url,params)
//   .then(res => {
//       resolve(res);
//   })
//   .catch(err =>{
//       reject(err)
//   })
// });
// }

const del = ({ url, params }) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'delete',
      params
    })
      .then(result => {
        resolve(result)
      })
      .then(error => {
        reject(error)
      })
  })
}


export {
  get,
  put,
  post,
  del,
  post1
}