// 数据仓库通常专门写在一个独立的 js 文件中。
// 在这个JS文件中，专门来创建store的实例对象
import {
  action,
  observable
} from 'mobx-miniprogram'
let carData = JSON.parse(wx.getStorageSync('carData') || '[]')
export const store = observable({
  // 数据
  carData,
  // getters
  get count() {
    let cou = 0;
    this.carData.map((item) => {
      if (item.select) {
        cou += item.cou;
      }
    });
    return cou;
  },
  get count_goods_price() {
    let price = 0;
    let floatPrice;
    this.carData.map((item) => {
      if (item.select) {
        floatPrice = (item.sell_price * 10 * item.cou) / 10;
        price += floatPrice;
      }
    });
    return price;
  },
  // actions  修改store 中的数据
  add_to_car: action(function (data) {
    // 判断是否有该商品
    // id筛选
    let carArr = this.carData.filter((item) => item.id == data.id);
    if (this.carData.length == 0 || carArr.length == 0) {
      // 空 或id不重复 直接添加
      this.carData.push(data);
    } else {
      // 重复 
      carArr[0].cou += data.cou;
    }
    // 本地存储
    wx.setStorageSync('carData', JSON.stringify(this.carData))
  }),
  update_car_num: action(function (data) {
    let carArr = this.carData.filter((item) => item.id == data.id);
    carArr[0].cou = data.cou;
    wx.setStorageSync('carData', JSON.stringify(this.carData))
  }),
  remove_goods: action(function (id) {
    let index = this.carData.findIndex((item) => item.id == id);
    this.carData.splice(index, 1);
    wx.setStorageSync('carData', JSON.stringify(this.carData))
  }),
  update_select: action(function (data) {
    let carArr = this.carData.filter((item) => item.id == data.id);
    carArr.select = data.select;
    wx.setStorageSync('carData', JSON.stringify(this.carData))
  })
})