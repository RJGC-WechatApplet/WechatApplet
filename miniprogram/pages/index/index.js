const app = getApp()
const db = wx.cloud.database()
const _ =db.command
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被选中的首页导航索引
    currentIndexNav:0,
    // 任务广场选项
    taskList:["交易","食堂","外卖","快递"],
    cloudTaskList:[],
    time:""
  },

  // 点击首页导航按钮
  activeNav(e){
    // console.log(e)
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
    this.getData()
  },

    // 获取点击的框
    activeNav2:function(e){
      this.setData({
        currentIndexNav:e.target.dataset.index
      })
      wx.setStorageSync('mpTask', this.data)
      wx.navigateTo({
        url: '../taskInf3/taskInf3',
      })
    },

  // 获取数据
  getData(){
    wx.cloud.callFunction({
      name:"getData",
      data:{
        select:this.data.taskList[this.data.currentIndexNav],
        state:1,
      }
    }).then(res=>{
      // console.log(res)
      this.setData({
        cloudTaskList:res.result.data
      })
      // console.log(this.data.cloudTaskList)
    })
  },

  // 授权按钮
  getUserInfo:function(e){
    app.globalData.userInfo=e.detail.userInfo
    console.log(app.globalData.userInfo)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getData()
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