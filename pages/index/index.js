//index.js
//获取应用实例
let app = getApp()
// 获取wx.request封装
const req = require('../../utils/request.js')
Page({
  data: {
    dialogData: {
      msg: 'shabi?',
      title: ''
    },
    tabData: [
      {
        id: 0,
        text: '附近闲置'
      },
      {
        id: 1,
        text: '最新闲置'
      },
      {
        id: 2,
        text: '最多浏览'
      }
    ],
    iconListData: [{
        pic: '/static/images/icon/icon-01.png',
        id: '1002',
        text: '孕妈用品'
      },
      {
        pic: '/static/images/icon/icon-02.png',
        id: '1002',
        text: '绘本玩具'
      },
      {
        pic: '/static/images/icon/icon-03.png',
        id: '1002',
        text: '童车童床'
      },
      {
        pic: '/static/images/icon/icon-04.png',
        id: '1002',
        text: '尿裤湿巾'
      },
      {
        pic: '/static/images/icon/icon-05.png',
        id: '1002',
        text: '婴儿喂养'
      },
      {
        pic: '/static/images/icon/icon-06.png',
        id: '1002',
        text: '婴儿服饰'
      },
      {
        pic: '/static/images/icon/icon-07.png',
        id: '1002',
        text: '洗护用品'
      },
      {
        pic: '/static/images/icon/icon-08.png',
        id: '1002',
        text: '婴儿防护'
      },
      {
        pic: '/static/images/icon/icon-09.png',
        id: '1002',
        text: '背带凳枕'
      },
      {
        pic: '/static/images/icon/icon-10.png',
        id: '1002',
        text: '其他'
      }
    ],
    listData: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onPullDownRefresh() {
    req.get('goodsList', {}).then(res => {
      this.setData({
        listData: res.data.data
      })
      wx.stopPullDownRefresh();
    }).catch(e => {
      this.showDialog(e.msg)
    })
  },
  onLoad: function () {
    req.get('goodsList', {}).then(res => {
      this.setData({
        listData: res.data.data
      })
    }).catch(e => {
      this.showDialog(e.msg)
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom () {
    req.get('goodsList', {}).then(res => {
      this.setData({
        listData: this.data.listData.concat(res.data.data)
      })
    }).catch(e => {
      this.showDialog(e.msg)
    })
  },
  showTab: function (e) {
    console.log(e.detail);
    req.get('goodsList', {}).then(res => {
      this.setData({
        listData: res.data.data
      })
    }).catch(e => {
      this.showDialog(e.msg)
    })
  },
  showDialog: function (msg) {
    wx.showModal({
      content: msg,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
  }
})