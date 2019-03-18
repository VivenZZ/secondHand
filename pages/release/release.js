Page({
  data: {
    iconData: [
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '品牌',
        righticon: '/static/images/icon/right.png',
        array: ['美国', '中国', '巴西', '日本']
      },
      {
        index: 0,
        image: '/static/images/icon/order_back.png',
        text: '适用年龄',
        righticon: '/static/images/icon/right.png',
        array: ['0-3个月', '3-6个月', '3岁以下', '3岁以上']
      }
    ]
  },
  showTab: function(e) {
    console.log(e.detail);
  }
})