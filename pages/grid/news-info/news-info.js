// pages/gird/news-info/news-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    newsInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      news_id
    } = options
    this.setData({
      id: news_id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.request({
      url: `http://127.0.0.1:3000/api/getnew/${this.data.id}`,
      method: "GET",
      success: res => {
        this.setData({
          newsInfo: res.data.message
        })
      }
    })
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