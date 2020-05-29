// pages/taskInf/taskInf.js
const db=wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task:[],
    rcId:[]
  },

  //获得发布人信息
  getIdentity(){
    db.collection("identityList").where({
      nickName:_.eq(this.data.task.nickName)
    }).get()
    .then(res=>{
      console.log(res)
      this.setData({
        rcId:res.data[0]
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var task = wx.getStorageSync('mpTask')
    this.setData({
      task:task.cloudTaskList[task.currentIndexNav]
    })
    console.log(this.data.task)
    this.getIdentity()
    wx.clearStorageSync('mpTask')
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