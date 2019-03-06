Component({
  data: {
    inputValue: ''
  },
  methods: {
    listenerInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
      console.log('Phone='+this.data.inputValue) // 调用必须用this.data
    },
    skip: function () {
      wx.navigateTo({  //跳转到搜索页，并可以通过back键返回
        url: '../../pages/search/search?searchName=' + this.data.inputValue
      })
    }
  },
  pageLifetimes: {
    show() {
      // 页面被展示 清空搜索记录
      this.setData({
        inputValue: ''
      })
    },
    hide() {
      // 页面被隐藏
    },
    resize(size) {
      // 页面尺寸变化
    }
  }
})