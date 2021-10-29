const axios = require('axios')
const { cookie } = require('../config')

const Get = (url,data) => {
  return new Promise((resolve,reject) => {
    axios({
      url,
      method: 'get',
      data,
      headers: {
        cookie
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

const Post = (url,data) => {
  return new Promise((resolve,reject) => {
    axios({
      url,
      method: 'post',
      data,
      headers: {
        cookie
      }
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = {
  Get,
  Post
}