// pages/gird/pics-info/pics-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picId: null,
    picInfo: {},
    thum: []
  },
  preview(e) {
    const current = e.currentTarget.dataset.src
    let thum = this.data.thum
    let urls = []
    for (let i = 0; i < thum.length; i++) {
      urls.push(thum[i].src)
    }
    wx.previewImage({
      current, // 当前显示图片的 http 链接
      urls // 需要预览的图片 http 链接列表
    })

  },
  getPicInfo() {
    wx.request({
      url: `http://127.0.0.1:3000/api/pics/getimageInfo/${this.data.picId}`,
      method: "GET",
      success: res => {
        this.setData({
          picInfo: res.data.message
        })
      }
    })
  },
  getThum() {
    wx.request({
      url: `http://127.0.0.1:3000/api/pics/getgoodsthum/${this.data.picId}`,
      method: "GET",
      success: res => {
        this.setData({
          thum: res.data.message
        })
      }
    })
  },
  // 生命周期函数--监听页面加载
  onLoad(options) {
    const picId = options.id
    this.setData({
      picId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getPicInfo()
    this.getThum()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})