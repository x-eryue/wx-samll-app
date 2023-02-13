// components/swiper/swiper.js
Component({

  // options: {
  //   styleIsolation: "shared"
  // },
  /**
   * 组件的属性列表
   */
  properties: {
    lbtArr: {
      type: Array,
      value: []
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 4000
    },
    frameHeight: {
      type: String,
      value: "150px"
    },
    width: {
      type: String,
      value: "100%"
    },
    height: {
      type: String,
      value: "100%"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})