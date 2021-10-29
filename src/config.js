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
  cookie: "_ga=GA1.2.1824402066.1606741149; MONITOR_WEB_ID=df99d920-2746-41a1-b0d2-12ff872cf818; passport_csrf_token_default=de8263a4220ce0ca9401bc884d1c22a1; passport_csrf_token=de8263a4220ce0ca9401bc884d1c22a1; _gid=GA1.2.172398303.1635142406; _tea_utm_cache_2018={%22utm_source%22:%22gold_browser_extension%22}; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; odin_tt=4d53597afbfde22ff71c5a4d4f218769f9c6ebf9532a0f5250e75f52f33ecc0529478e6ef3a7b81ed55ba1e8cc1c971e08e86e177e0e369afdec047f86606d15; passport_auth_status=5bcbeb7e4b273488a9b054ea01a4bd9f%2C; passport_auth_status_ss=5bcbeb7e4b273488a9b054ea01a4bd9f%2C; n_mh=CyqGqmMsT5783I96zHKlwGZoYFrofrv4r1YUtgeQ3JQ; sid_guard=1fefad1559ff9d62ee6c2b7909772798%7C1635322108%7C5184000%7CSun%2C+26-Dec-2021+08%3A08%3A28+GMT; uid_tt=4f715295dea9e7f5730ea3aeb8dfa951; uid_tt_ss=4f715295dea9e7f5730ea3aeb8dfa951; sid_tt=1fefad1559ff9d62ee6c2b7909772798; sessionid=1fefad1559ff9d62ee6c2b7909772798; sessionid_ss=1fefad1559ff9d62ee6c2b7909772798; sid_ucp_v1=1.0.0-KDQxOTNhZmMxNjdlM2M2NmM1NmU5ZDUzMmVjMzNiMGUwYTgxNmUzNmQKFwju7bDA_fXZBBD8keSLBhiwFDgCQO8HGgJsZiIgMWZlZmFkMTU1OWZmOWQ2MmVlNmMyYjc5MDk3NzI3OTg; ssid_ucp_v1=1.0.0-KDQxOTNhZmMxNjdlM2M2NmM1NmU5ZDUzMmVjMzNiMGUwYTgxNmUzNmQKFwju7bDA_fXZBBD8keSLBhiwFDgCQO8HGgJsZiIgMWZlZmFkMTU1OWZmOWQ2MmVlNmMyYjc5MDk3NzI3OTg",
  email: {
    163: {
      user: "js8491709937@163.com",
      from: "js8491709937@163.com",
      to: "js8491709937@163.com",
      pass: "TCNAGBOQHLETSHZJ"
    }
  }
}