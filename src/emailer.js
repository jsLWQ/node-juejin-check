const nodemailer = require('nodemailer')
// const html = require('./index.html')
const { email } = require('./config')
const { log } = require('./utils/tools')

const { user, to, pass, from } = email[163]

let transporter = nodemailer.createTransport({
  host: 'smtp.163.com',//使用内置的163发送邮件  
  // port: 587,
  secure: true, // 是否使用tls加密。默认为false，当我们设置为true时，建议端口设置为465
  auth: {
    user,
    pass,
  },
})

// 邮件服务器准备
const emailSignUp = (data) => {
  let html;
  if (data.code) {
    const { lottery_name, lottery_image, cont_count, sum_count } = data

    html = `<div>
              <h2>抽奖礼物</h2>
              <div>礼物----${ lottery_name  }</div>
              <img src=${ lottery_image } />
              <h2>签到天数、矿石总量</h2>
              <div>连续签到--${ cont_count }天</div>
              <div>共签到--${ sum_count }天</div>
              <div>矿石总量--${ data.data }</div>
            </div>`

  } else {
    const { msg, cont_count, sum_count } = data

    html = `<div>
              <div>失败原因----${ msg  }</div>
              <h2>签到天数、矿石总量</h2>
              <div>连续签到--${ cont_count }天</div>
              <div>共签到--${ sum_count }天</div>
              <div>矿石总量--${ data.data }</div>
            </div>`
  }



  // 发送信息的内容
  let options = {
    from,  // 这里是你开启SMTP服务的QQ邮箱号
    to,  // 这个是前端注册页面输入的邮箱号
    subject: '掘金签到',
    html,
    // attachments: [
    //   {
    //     filename: 'circle.svg',
    //     path: './circle.svg'
    //   },
    //   {
    //     filename: 'content',
    //     content: 'content-content'
    //   }
    // ]  // 附件
  }

  // 发送邮件
  transporter.sendMail(options, function (err, msg) {
    if (err) {
      return log('邮箱发送失败')
    } else {
      return log('邮箱发送成功')
    }
  })
}

module.exports = {
  emailSignUp
}
