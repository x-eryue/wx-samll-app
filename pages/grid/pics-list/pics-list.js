// pages/gird/pics-list/pics-list.js
Page({
  // 页面的初始数据
  data: {
    category: [],
    list: [],
    active: 0,
  },
  getCate() {
    wx.request({
      url: 'http://127.0.0.1:3000/api/pics/getimgcategory',
      method: "GET",
      success: res => {
        res.data.message.unshift({
          cateId: 0,
          title: "全部"
        })
        this.setData({
          category: res.data.message
        })
      }
    })
  },
  getList(id) {
    wx.request({
      url: `http://127.0.0.1:3000/api/pics/getimages/${id}`,
      method: "GET",
      success: res => {
        this.setData({
          list: res.data.message
        })
      }
    })
  },
  clickCate(e) {
    // 更改active
    const {
      cateid
    } = e.currentTarget.dataset
    this.setData({
      active: cateid
    })
    // 获取列表
    this.getList(cateid)
  },
  // 跳转图片详情页
  goToPicsInfo(e) {
    const {
      id
    } = e.currentTarget.dataset

    wx.navigateTo({
      url: `/pages/grid/pics-info/pics-info?id=${id}`,
    })
  },
  // 生命周期函数--监听页面加载
  onLoad(options) {

  },

  // 生命周期函数--监听页面初次渲染完成
  onReady() {
    this.getCate()
    this.getList(0)
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