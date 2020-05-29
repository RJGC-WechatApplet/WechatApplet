// pages/myInf/myInf.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    userListInfo: [ {
      icon: '../../icons/public.png',
      text: '我的信息',
      url: '../identityInfo/identityInfo'
    }, {
      icon: '../../icons/public.png',
      text: '我发布的任务',
      url: '../pTaskInfo/pTaskInfo'
    }, {
      icon: '../../icons/public.png',
      text: '我接受的任务',
      url: '../cTaskInfo/cTaskInfo'
    }, {
      icon: '../../icons/public.png',
      text: '常见问题',
      url: '../kefu/kefu'
    }]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../identityInfo/identityInfo'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})