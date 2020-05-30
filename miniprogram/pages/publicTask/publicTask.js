const db=wx.cloud.database()
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskList:["交易","食堂","外卖","快递"],
    taskType:">",
    taskTime:">"
  },

  /**
   * 时间选择函数
   */
  bindTimeChange:function(e){
    this.setData({
      taskTime: e.detail.value
    })
  },

  /**
   * 类型选择函数
   */
  bindTypeChange:function(e){
    this.setData({
      taskType:this.data.taskList[e.detail.value]
    })
  },

  /**
   * 清空函数
   */
  clearValue(){
    this.setData({
      taskType:">",
      taskTime:">"
    })
  },

  authorize:function(e){
    app.globalData.userInfo=e.detail.userInfo
  },

  /**
   * 提交表单
   */
  btnSub(res){
    if(!app.globalData.hasIdentity)
    {
      wx.showToast({
        icon:"none",
        title: '请先填写身份信息！',
        duration: 1000
      })
    }else{
      var {content, type, time, money}=res.detail.value
      if(content==''|type=='>'|time=='>'|money=='')
      {
        wx.showToast({
          icon:"none",
          title: '请输入完整任务内容！',
          duration: 1000
        })
      }else{
      wx.showModal({
        cancelColor: 'cancelColor',
        title: '提交任务',
        content: '确定要提交吗？',
        success: function (res) {
          if (res.cancel) {
             //点击取消,默认隐藏弹框
          } else {
             //点击确定
             db.collection("tasklist").add({
              data:{
                content:content,
                type:type,
                time:time,
                money:money,
                nickName:app.globalData.userInfo.nickName,
                nickPhoto:app.globalData.userInfo.avatarUrl,
                state:1,
                recipient:"",
                level:"",
                createTime:db.serverDate()
              }
            })
            wx.showToast({
              title: '提交成功',
              duration: 1000
            })
          }
        }
      })
    }
    }
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