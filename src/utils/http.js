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
}