const Cron = require('cron').CronJob
const { check } = require('./juejin')
const { log } = require('./utils/tools')


let job = new Cron('0 19 14 * * *', async () => {
  check()
}, null, false)

log('开始运行')

job.start();