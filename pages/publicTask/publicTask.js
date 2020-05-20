// pages/publicTask/publicTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskList:["交易","食堂","外卖","快递"],
    taskType:">",
    taskTime:">",
    textareaValue:"",
    inputValue:""
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
    switch(e.detail.value){
      case "0":
        this.setData({
          taskType: "交易"
        })
        break;
      case "1":
        this.setData({
          taskType: "食堂"
        })
        break;
      case "2":
        this.setData({
          taskType: "外卖"
        })
        break;
      case "3":
        this.setData({
          taskType: "快递"
        })
        break;
    }
  },

  /**
   * 清空函数
   */
  clearValue:function(){
    this.setData({
      taskType:">",
      taskTime:">",
      textareaValue:"",
      inputValue:""
    })
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