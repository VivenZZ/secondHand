Page({
  data: {
    submitData: {
      primarySize: 'default',
      warnSize: 'default',
      disabled: false,
      plain: false,
      loading: false
    },
    files: [],
    iconData: [
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '标题',
        righticon: '/static/images/icon/right.png',
        array: [],
        type: 'input'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '品牌',
        righticon: '/static/images/icon/right.png',
        array: ['美国', '中国', '巴西', '日本'],
        type: 'picker'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '规格',
        righticon: '/static/images/icon/right.png',
        array: [],
        type: 'input'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '性别',
        righticon: '/static/images/icon/right.png',
        array: ['通用', '男', '女'],
        type: 'picker'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '新旧程度',
        righticon: '/static/images/icon/right.png',
        array: ['全新', '九成新', '八成新', '七成新', '六成新'],
        type: 'picker'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '适用年龄',
        righticon: '/static/images/icon/right.png',
        array: ['0-3个月', '3-6个月', '3岁以下', '3岁以上'],
        type: 'picker'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '配送方式',
        righticon: '/static/images/icon/right.png',
        array: ['自提', '邮寄'],
        type: 'picker'
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '自提地址',
        righticon: '/static/images/icon/right.png',
        array: ['随便选', '随便挑'],
        type: 'picker'
      }
    ]
  },
  showTab: function(e) {
    console.log(e.detail);
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        console.log(that.data.files)
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  setLoading(e) {
    this.setData({
      'submitData.loading': !this.data.submitData.loading
    })
    // 模拟请求
    setTimeout(()=>{
      this.setData({
        'submitData.loading': !this.data.submitData.loading
      })
    },1000)
  },
})