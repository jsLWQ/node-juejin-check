const axios = require('axios');
const { log }  = require('./utils/tools')
const { Get, Post } = require('./utils/request')
const { apiUrl } = require('../src/config')
const { emailSignUp } = require('./emailer')
const { sendDing } = require('./sendDing')

const { getLotteryConfig, getTodayStatus, drawLottery, checkIn, getCounts, getCurPoint } = apiUrl

let checkInfo = {}


// 登录
// async function Login () {
//   let time = Date().now
//   const res = await axios({
//     url: login,
//     method: 'post',
//     data: {
//       account: '2e3d333432333d33303533333433',
//       password: '697d7d343c3c332b2b'
//     },
//     headers: {
//       Cookie: 'sid_ucp_v1=1.0.0-KDViNWYwYmI3NWFiODE3MjNmZDYyYTY0OTRkNjlhNzFmOGViYzk0ZmEKFgju7bDA_fXZBBDJ07mLBhiuFDgIQAsaAmxmIiAxMmI2ZGUxOTM2NGFjNTczZWZjNDY0ZTliNDBmZmM4NQ; ssid_ucp_v1=1.0.0-KDViNWYwYmI3NWFiODE3MjNmZDYyYTY0OTRkNjlhNzFmOGViYzk0ZmEKFgju7bDA_fXZBBDJ07mLBhiuFDgIQAsaAmxmIiAxMmI2ZGUxOTM2NGFjNTczZWZjNDY0ZTliNDBmZmM4NQ; passport_csrf_token=67372e8afec569fcace03601daadf364; passport_csrf_token_default=67372e8afec569fcace03601daadf364; MONITOR_WEB_ID=38a325f4-affb-46b1-a69b-0fa0c14beee9; _ga=GA1.2.452622904.1634955858; _gid=GA1.2.1783198481.1635210418; d_ticket=be89a82d310d009973f7284c42d3cd59e60d4; n_mh=CyqGqmMsT5783I96zHKlwGZoYFrofrv4r1YUtgeQ3JQ; sid_guard=e3ebb0c8d61314aae3e71e07f509d43c%7C1635315982%7C21600%7CWed%2C+27-Oct-2021+12%3A26%3A22+GMT; uid_tt=2e86074a3fab8c268e9394f81c442225; uid_tt_ss=2e86074a3fab8c268e9394f81c442225; sid_tt=e3ebb0c8d61314aae3e71e07f509d43c; sessionid_ss=e3ebb0c8d61314aae3e71e07f509d43c; odin_tt=44524f6308a2eed439d92345627aa61b109d5d81c10e1e86f95f2da95147d9b5316ebfca7c80ebff8729f097f85d13e068ff1bec2b900a2626c048f061bbcc476e8bbb972f62db81f84de1ffd116d3fe',
//       'x-tt-token': '00e3ebb0c8d61314aae3e71e07f509d43c04fd547f6b28decd70006cf180b75794d51c8236e2f175deab6df47f870aae077f63b5dd1b8f3913f1050453bcb5f4ef36b9ee0bb76f4aed5f4d1b0a7d140941e231ad19f33ad8ed294e068250b8dac84bd-1.0.1',
//       'x-vc-bdturing-sdk-version': '2.1.0-rc.7',
//       'content-type': 'application/x-www-form-urlencoded',
//       'x-ss-cookie':	'odin_tt=44524f6308a2eed439d92345627aa61b109d5d81c10e1e86f95f2da95147d9b5316ebfca7c80ebff8729f097f85d13e068ff1bec2b900a2626c048f061bbcc476e8bbb972f62db81f84de1ffd116d3fe; sessionid_ss=e3ebb0c8d61314aae3e71e07f509d43c; sid_guard=e3ebb0c8d61314aae3e71e07f509d43c%7C1635315982%7C21600%7CWed%2C+27-Oct-2021+12%3A26%3A22+GMT; sid_tt=e3ebb0c8d61314aae3e71e07f509d43c; uid_tt=2e86074a3fab8c268e9394f81c442225; uid_tt_ss=2e86074a3fab8c268e9394f81c442225; d_ticket=be89a82d310d009973f7284c42d3cd59e60d4; n_mh=CyqGqmMsT5783I96zHKlwGZoYFrofrv4r1YUtgeQ3JQ; _ga=GA1.2.452622904.1634955858; _gid=GA1.2.1783198481.1635210418; MONITOR_WEB_ID=38a325f4-affb-46b1-a69b-0fa0c14beee9; passport_csrf_token=67372e8afec569fcace03601daadf364; passport_csrf_token_default=67372e8afec569fcace03601daadf364; sid_ucp_v1=1.0.0-KDViNWYwYmI3NWFiODE3MjNmZDYyYTY0OTRkNjlhNzFmOGViYzk0ZmEKFgju7bDA_fXZBBDJ07mLBhiuFDgIQAsaAmxmIiAxMmI2ZGUxOTM2NGFjNTczZWZjNDY0ZTliNDBmZmM4NQ; ssid_ucp_v1=1.0.0-KDViNWYwYmI3NWFiODE3MjNmZDYyYTY0OTRkNjlhNzFmOGViYzk0ZmEKFgju7bDA_fXZBBDJ07mLBhiuFDgIQAsaAmxmIiAxMmI2ZGUxOTM2NGFjNTczZWZjNDY0ZTliNDBmZmM4NQ',
//       'tt-request-time':	'1635316014079',
//       'user-agent':	'xitu 6.0.6 rv:6.0.6.12 (iPhone; iOS 15.0.1; zh_CN) Cronet',
//       'x-tt-passport-csrf-token':	'67372e8afec569fcace03601daadf364',
//       'sdk-version':	2,
//       'passport-sdk-version':	'5.13.3',
//       'x-ss-stub':	'7E36CD5C200CB048C9485CE2DD5755B8',
//       'x-tt-trace-id':	'00-c06e1d7c0a10648b740459aaad210a2e-c06e1d7c0a10648b-01',
//     }
//   })
//   console.log('res',res)
// }

// 查询免费抽奖次数
const GetLotteryConfig = async () => {
  const res = await Get(getLotteryConfig)
  return {
    err_no: res.data.err_no,
    free_count: res.data.data.free_count
  }
}

// 是否签到
const GetTodayStatus = async () => {
  const res = await Get(getTodayStatus)
  console.log(`是否签到$`,res.data)
  if(res.err_no) {
    // 发送邮件
    checkInfo = {
      code: 0,
      msg: '查询是否签到失败'
    }
    getAllInfo()
  }
  return {
    error: res.err_no != 0,
    isTodayStatus: res.data.data
  }
}

// 签到
const check = async () => {
  let { error, isTodayStatus } = await GetTodayStatus()
  if(!error) return log('查询是否签到失败', true)
  // if(isTodayStatus) return log('今日已签到')
  const res = await Post(checkIn)
  if(res.data.err_no != 0) {
    checkInfo = {
      code: 0,
      msg: '签到失败'
    }
    getAllInfo()
    log(res.data.err_msg)
  }else {
    DrawLottery()
  }
  
}

// 抽奖
const DrawLottery = async () => {
  const { err_no, free_count } = await GetLotteryConfig()
  console.log('免费抽奖次数',free_count)
  if(!free_count) {
    log('免费抽奖次数--0')
    checkInfo = {
      code: 0,
      msg: '免费抽奖次数为零'
    }
  }else {
    const res = await Post(drawLottery)
    console.log('抽奖礼物',  res.data.data.lottery_name, res.data.data.lottery_image)
    checkInfo = {
      code: 1,
      lottery_name: res.data.data.lottery_name,
      lottery_image: res.data.data.lottery_image
    }
  }
  getAllInfo()
}

// 获取签到天数、矿石总量
const getAllInfo = async () => {
  const counts = await Get(getCounts)
  const curPoint = await Get(getCurPoint)
  checkInfo = {
    ...checkInfo,
    cont_count: counts.data.data.cont_count,
    sum_count: counts.data.data.sum_count,
    data: curPoint.data.data
  }
  await sendDing(checkInfo)
  emailSignUp(checkInfo)
}

module.exports = {
  check
}