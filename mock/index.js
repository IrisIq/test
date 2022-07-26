import data from './userInfo.json'

const Mock = require('mockjs')

Mock.mock('http://localhost:8080/test', {
  code: 0,
  msg: 'mock测试'
})

Mock.mock('http://localhost:8080/api/get', data)
