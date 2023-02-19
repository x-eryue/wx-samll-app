// pages/home/home.js
import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store.js'
Page({
  // 页面的初始数据
  data: {
    lbt: []
  },
  // oberserv
  // 获取轮播图
  getLbt() {
    wx.request({
      url: 'http://127.0.0.1:3000/api/pics/getlunbo',
      method: "GET",
      success: res => {
        this.setData({
          lbt: res.data.message
        })
      }
    })
  },
  // 生命周期函数--监听页面加载
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['count', 'carData']
    })
    this.storeBindings.updateStoreBindings()
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady() {
    this.getLbt()
  },

  // 生命周期函数--监听页面显示
  onShow() {
    wx.setTabBarBadge({
      index: 2,
      text: this.data.count + "",
    })
  },
  // 生命周期函数--监听页面隐藏
  onHide() {},

  // 生命周期函数--监听页面卸载
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom() {

  },

  //  用户点击右上角分享
  onShareAppMessage() {

  }
})