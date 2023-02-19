// pages/gird/goods-info/goods-info.js
import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    gInfo: {},
    lbt: [],
    num: 1,
  },
  // 获取详情
  getGoodsInfo() {
    wx.request({
      url: `http://127.0.0.1:3000/api/goods/getinfo/${this.data.id}`,
      method: "GET",
      success: res => {
        this.setData({
          gInfo: res.data.message
        })
      }
    })
  },
  // 获取轮播
  getLbt() {
    wx.request({
      url: `http://127.0.0.1:3000/api/goods/getgoodslunbo/${this.data.id}`,
      method: "GET",
      success: res => {
        this.setData({
          lbt: res.data.message
        })
      }
    })
  },
  // 监听数量
  onChangeNum(e) {
    this.setData({
      num: e.detail
    })
  },
  // 加入购物车
  addToCar() {
    const {
      cou = this.data.num, id, title, sell_price, img_url
    } = this.data.gInfo
    this.add_to_car({
      cou,
      id,
      title,
      sell_price,
      img_url,
      select: true
    })
  },
  // 生命周期函数--监听页面加载
  onLoad(options) {
    const gid = options.id
    this.setData({
      id: gid
    })
    this.storeBindings = createStoreBindings(this, {
      store, //需要绑定的数据仓库
      actions: ['add_to_car']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getGoodsInfo()
    this.getLbt()
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
    this.storeBindings.destroyStoreBindings()
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