// pages/car/car.js
import {
  createStoreBindings
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],

  },
  // 监听Switch
  onChangeSwitch(e) {
    let select = e.detail
    const {
      id: gId
    } = e.currentTarget.dataset
    console.log(e.detail);
    this.update_select({
      id: gId,
      select
    })
  },
  // 监听数量
  onChangeNum(e) {
    const {
      id: gId
    } = e.currentTarget.dataset
    const cou = e.detail
    this.update_car_num({
      id: gId,
      cou
    })
  },
  // 删除
  removeGoods(e) {
    const {
      id: gId
    } = e.currentTarget.dataset
    this.remove_goods(gId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['carData'],
      actions: ["update_car_num", "remove_goods", "update_select"]
    })
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
    // 解绑
    this.storeBindings.destroyStoreBindings()
  }
})