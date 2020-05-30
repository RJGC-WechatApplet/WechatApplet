// pages/identityInfo/identityInfo.js
const db=wx.cloud.database()
const _=db.command
const app=getApp()
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
    telephone:"",
    level:'',
    exist:0 //身份是否存在
  },

  /**
   * 性别选择函数
   */
  genderTypeChange:function(e){
    this.setData({
      gender:this.data.genderList[e.detail.value]
    })
  },

  /**
   * 学部选择函数
   */
  academyTypeChange:function(e){
    this.setData({
      academy:this.data.academyList[e.detail.value]
    })
  },

  authorize:function(e){
    app.globalData.userInfo=e.detail.userInfo
  },

  /**
   * 清空函数
   */
  clearValue(){
    this.setData({
      gender:">",
      academy:">",
    })
  },

  /**
   * 提交表单
   */
  btnSub(res){
    var {name, num, genderPicker, academyPicker, address, QQ, telephone}=res.detail.value
    if(name==''|num==''|genderPicker=='>'|academyPicker=='>'|address==''|QQ==''|telephone=='')
    {
      wx.showToast({
        icon:"none",
        title: '请补全信息',
        duration: 1000
      })
    }else{
      let that =this
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '提交身份信息',
      content: '确定要提交吗？',
      success: function (res) {
        if (res.cancel) {
           //点击取消,默认隐藏弹框
        } else {
           //点击确定
           app.globalData.hasIdentity=true
           if(that.data.exist==0){
            db.collection("identityList").add({
              data:{
                nickName:app.globalData.userInfo.nickName,
                name:name,
                num:num,
                genderPicker:genderPicker,
                academyPicker:academyPicker,
                address:address,
                QQ:QQ,
                telephone:telephone
              }
            })
          }else{           
            wx.cloud.callFunction({
              name:"idChange",
              data:{
                nickName:app.globalData.userInfo.nickName,
                name:name,
                num:num,
                genderPicker:genderPicker,
                academyPicker:academyPicker,
                address:address,
                QQ:QQ,
                telephone:telephone
              }
            })
          }
          wx.showToast({
            title: '提交成功',
            duration: 1000
          })
        }
      }
    })
    }   
  },

  // 计算评价分
  calLevel(){
    var point = 0.0
    db.collection("tasklist")
    .where({
      nickName:_.eq(app.globalData.userInfo.nickName),
      state:_.eq(3).or(_.eq(4)),
      level:_.neq('')
    }).get()
    .then(res=>{
      console.log(res)
      for(var i=0;i<res.data.length;i++){
        point=point + parseFloat(res.data[i].level)
      }
      point=point/res.data.length
      this.setData({
        level:point.toString()
      })
      wx.cloud.callFunction({
        name:"changeLevel",
        data:{
          nickName:app.globalData.userInfo.nickName,
          point:point
        }
      }).then(res=>{
        console.log(res)
      })
    })
  },

  // 获取身份信息
  getIdentity(){
    db.collection("identityList")
    .where({
      nickName:_.eq(app.globalData.userInfo.nickName)
    }).get()
    .then(res=>{
      if(res.data.length == 1){
        this.setData({
          name:res.data[0].name,
          num:res.data[0].num,
          gender:res.data[0].genderPicker,
          academy:res.data[0].academyPicker,
          address:res.data[0].address,
          QQ:res.data[0].QQ,
          telephone:res.data[0].telephone,
          exist:1
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calLevel()
    this.getIdentity()
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