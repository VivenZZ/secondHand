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
})
