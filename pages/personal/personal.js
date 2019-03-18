//logs.js
let util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
    console.log('修改数据')
  },
  showInfos() {
    console.log(111)
    wx.getUserInfo({
      success(res) {
        const userInfo = res.userInfo
        const nickName = userInfo.nickName
        const avatarUrl = userInfo.avatarUrl
        const gender = userInfo.gender // 性别 0：未知、1：男、2：女
        const province = userInfo.province
        const city = userInfo.city
        const country = userInfo.country
        console.log(res)
      }
    })
  }
})
