//index.js
//获取应用实例
data: {
    slides: []
  }
  onLode: function (options) {
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success: res => {
        this.setData({
          slides: res.data
        })
      }
    })
  }
  