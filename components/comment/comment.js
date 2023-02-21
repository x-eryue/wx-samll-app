// components/comment/comment.js
import Toast from '@vant/weapp/toast/toast';

import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store.js'
Component({
  // behaviors是小程序中,用于实现组件间代码共享的特性,类似于vue的"mixins"
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: ['user']
  },
  // 组件的属性列表
  properties: {
    news_id: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    pageindex: 1,
    list: [],
    token: null,
    val: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    textInput(e) {
      this.setData({
        val: e.detail.value
      })
    },
    getCmtList() {
      wx.request({
        url: `http://127.0.0.1:3000/api/cmts/getcmts/${this.data.news_id}?pageindex=${this.data.pageindex}`,
        method: "GET",
        success: res => {
          this.setData({
            list: res.data.message
          })
        }
      })
    },
    clickBtn() {
      if (this.data.val == '') {
        Toast({
          message: "内容不能为空",
          context: this
        });
        return
      }
      if (!this.data.user.user_name) {
        // user没登录
        wx.switchTab({
          url: '/pages/users/users',
        })
      } else {

        var cmtObj = {
          contents: this.data.val,
          add_time: new Date().toISOString(),
          user_avatar: this.data.user.avatar,
          nick_name: this.data.user.nick_name
        }
        var arr = this.data.list
        arr.unshift(cmtObj)
        this.setData({
          list: arr
        })
      }

    },
    verifyToken() {
      wx.request({
        url: 'http://127.0.0.1:3000/api/users/verifyToken',
        method: "POST",
        header: {
          Authorization: `Bearer ${this.data.token}`,
        }
      })
    },

    postCmt() {

    }
  },
  lifetimes: {
    created() {},
    attached() {},
    ready() {},
    moved() {},
    detached() {},
    error() {}
  },
  pageLifetimes: {
    show() {
      this.getCmtList()
    },
    hide() {},
    resize() {}
  }

})