const baseUrl = "https://api.juejin.cn"

module.exports = {
  baseUrl,
  apiUrl: {
    getTodayStatus: baseUrl + "/growth_api/v1/get_today_status", // 判断用户今天是否已签到
    checkIn: baseUrl + "/growth_api/v1/check_in", // 用户签到
    getLotteryConfig: baseUrl + "/growth_api/v1/lottery_config/get", // 获取今天免费抽奖的次数
    drawLottery: baseUrl + "/growth_api/v1/lottery/draw", // 抽奖
    getCounts: baseUrl + '/growth_api/v1/get_counts', // 获取签到天数的汇总信息
    getCurPoint: baseUrl + '/growth_api/v1/get_cur_point' // 获取当前的矿石数量
  },
  cookie: "",
  email: {
    163: {
      user: "js8491709937@163.com",
      from: "js8491709937@163.com",
      to: "js8491709937@163.com",
      pass: ""
    }
  }
}