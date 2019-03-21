//logs.js
let util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    iconData: [
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '热点问题',
        righticon: '/static/images/icon/right.png',
        array: [],
        url: '/pages/search/search',
        type: 'url'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '我的收藏',
        righticon: '/static/images/icon/right.png',
        array: ['美国', '中国', '巴西', '日本'],
        url: '/pages/search/search',
        type: 'url'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '我的地址',
        righticon: '/static/images/icon/right.png',
        array: [],
        url: '/pages/search/search',
        type: 'url'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '投诉与建议',
        righticon: '/static/images/icon/right.png',
        array: ['通用', '男', '女'],
        url: '/pages/search/search',
        type: 'url'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '关于我们',
        righticon: '/static/images/icon/right.png',
        array: ['全新', '九成新', '八成新', '七成新', '六成新'],
        url: '/pages/search/search',
        type: 'url'
      }
    ]
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