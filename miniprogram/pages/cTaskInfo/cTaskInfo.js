// pages/pTaskInfo/pTaskInfo.js
const app=getApp()
const db=wx.cloud.database()
const _ =db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cloudTaskList:[],
    currentIndexNav:0
  },

  // 获取点击的框
  activeNav:function(e){
    console.log(e.target.dataset)
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
    // // console.log(this.data)
    wx.setStorageSync('mpTask', this.data)
    wx.navigateTo({
      url: '../taskInf2/taskInf2',
    })
  },

  // 获取数据
  getData(){
    db.collection("tasklist").where({
      recipient:_.eq(app.globalData.userInfo.nickName)
    }).orderBy('createTime','desc')
    .get()
    .then(res=>{
      console.log(res)
      this.setData({
        cloudTaskList:res.data
      })
      console.log(this.data.cloudTaskList)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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