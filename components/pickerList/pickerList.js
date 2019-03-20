// components/pickerList/pickerList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pickerListData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      console.log(this.properties.pickerListData.text)
      let data = {
        text: this.properties.pickerListData.text,
        index: e.detail.value
      }
      this.triggerEvent('showTab', data);
      this.setData({
        index: e.detail.value
      })
    },
  }
})
