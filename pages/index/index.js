<<<<<<< HEAD


Page({})
=======
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
  
>>>>>>> c446e2beca659919a5dcf56de8e7f432c2e94b7d
