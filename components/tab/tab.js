Component({
  properties: {
    tabData: {
      type: Array
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    changeIndex(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent('showTab', e._relatedInfo.anchorRelatedText);
    }
  }
})