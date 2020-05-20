// pages/identityInfo/identityInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderList:["男","女"],
    academyList:["文理学部","信息学部","工学部","医学部"],
    name:"",
    num:"",
    gender:">",
    academy:">",
    address:"",
    QQ:"",
    telephone:""
  },

  /**
   * 性别选择函数
   */
  genderTypeChange:function(e){
    switch(e.detail.value){
      case "0":
        this.setData({
          gender: "男"
        })
        break;
      case "1":
        this.setData({
          gender: "女"
        })
        break;
    }
  },

  /**
   * 学部选择函数
   */
  academyTypeChange:function(e){
    switch(e.detail.value){
      case "0":
        this.setData({
          academy: "文理学部"
        })
        break;
      case "1":
        this.setData({
          academy: "信息学部"
        })
        break;
      case "2":
        this.setData({
          academy: "工学部"
        })
        break;
      case "3":
        this.setData({
          academy: "医学部"
        })
        break;
    }
  },

  /**
   * 清空函数
   */
  clearValue:function(){
    this.setData({
      name:"",
      num:"",
      gender:">",
      academy:">",
      address:"",
      QQ:"",
      telephone:""
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