const crypto = require('crypto') // node 内置
const axios = require('axios')
const { Post } = require('./utils/request')

/**
 * 参考链接：https://www.bilibili.com/read/cv11459481/
 */

const Webhook = 'https://oapi.dingtalk.com/robot/send?access_token=44b2468ed19d421bf275d29cddcdce9bdec0ecc1191e04d09c0db56997427631'
const SECRET = 'SEC75dc3bcd508e87b4cb4bb899e6cb6a0c196f1e4ed6bd2b0ec1659f99ae206155' // 加签


// 加签模式
const sendDing = async (data) => {
  const timestamp = Date.now()

  const str = timestamp + "\n" + SECRET
  const sign = crypto.createHmac('sha256', SECRET).update(str).digest('base64')
  const signEncodeUrl = encodeURIComponent(sign)
  console.log('signEncodeUrl', signEncodeUrl)

  const url = `${Webhook}&timestamp=${timestamp}&sign=${signEncodeUrl}`

  let text;

  if (data.code) {
    const { lottery_name, lottery_image, cont_count, sum_count } = data

    text = `#### 掘金签到 @17686506616 
    \n > 抽奖礼物\n > 
    \n > 礼物----${ lottery_name  }\n > 
    ![screenshot](${ lottery_image })
    \n > 签到天数、矿石总量\n
    \n > 连续签到--${ cont_count }天\n
    \n > 共签到--${ sum_count }天\n
    \n > 矿石总量--${ data.data }\n >
    `


  } else {
    const { msg, cont_count, sum_count } = data

    text = `#### 掘金签到 @17686506616 
    \n > 失败原因----${ msg  }\n > 
    \n > 签到天数、矿石总量\n
    \n > 连续签到--${ cont_count }天\n
    \n > 共签到--${ sum_count }天\n
    \n > 矿石总量--${ data.data }\n >
    `

  }

  const res = await Post(url, {
    msgtype: 'markdown',
    markdown: {
      title: '掘金签到',
      text
    },
    at: {
      atMobiles: [
        '17686506616'
      ],
      atUserIds: [
        'user123'
      ],
      isAtAll: false
    }
  })

  console.log('ding', res)


}

module.exports = {
  sendDing
}