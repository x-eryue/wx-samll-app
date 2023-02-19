// pages/users/users.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  login() {
    wx.getUserProfile({
      desc: '用于测试',
      success: res => {
        let user_name = Math.round(Math.random() * (9999 - 1000) + 1000)
        const {
          avatarUrl: avatar,
          nickName: nick_name,
        } = res.userInfo
        this.setData({
          userInfo: {
            avatar,
            nick_name,
            user_name
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.showToast({
      title: '你还没有登录',
    })
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