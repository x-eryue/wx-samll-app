// pages/gird/news-list/news-list.js
Page({
  // 页面的初始数据
  data: {
    list: []
  },
  // 跳转到详情页
  goToNewsInfo(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/grid/news-info/news-info?news_id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 生命周期函数--监听页面初次渲染完成
  onReady() {
    wx.request({
      url: 'http://127.0.0.1:3000/api/news/getnewslist',
      method: "GET",
      success: res => {
        this.setData({
          list: res.data.message
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