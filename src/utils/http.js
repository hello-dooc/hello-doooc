<<<<<<< HEAD
<<<<<<< HEAD
import axios from 'axios'

const get = ({url}) => {
  return new Promise((resolve, reject) => {
    axios({
      url
    })
    .then(result => {
      resolve(result)
    })
    .then(error => {
      reject(error)
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
>>>>>>> origin/zhangyan
    })
  })
}

<<<<<<< HEAD
export {
  get
=======
import axios from 'axios'

const get = ({url,params}) => {
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
const post = (url,data)=>{
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(response=>{
      resolve(response,data);
    },err=>{
      reject(err);
    })
  })
}

export {
  get,
  post
>>>>>>> hm
=======
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
>>>>>>> origin/zhangyan
}