// pages/taskInf/taskInf.js
const db=wx.cloud.database()
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelList:['1','2','3','4','5','6','7','8','9','10'],
    task:[],
    rcId:[],
    delS:true,
    level:'>'
  },

  /**
   * 类型选择函数
   */
  bindTypeChange:function(e){
    this.setData({
      level:this.data.levelList[e.detail.value]
    })
  },

  //获得接收人信息
  getIdentity(){
    db.collection("identityList").where({
      nickName:_.eq(this.data.task.recipient)
    }).get()
    .then(res=>{
      // console.log(res)
      this.setData({
        rcId:res.data[0]
      })
    })
  },

  //删除任务
  delTask(){
    let that=this
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '删除任务',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.cancel) {
           //点击取消,默认隐藏弹框
        } else {
           //点击确定
           db.collection("tasklist").doc(that.data.task._id)
           .update({
            data:{
              state:4
            }
           })
           that.setData({
             delS:false
           })
           wx.showToast({
            title: '删除成功',
            duration: 1000
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1  
            })
          }, 1000)
        }
      }
    })
  },

  //更改任务状态
  changeState(){
    if(this.data.level=='>'){
      wx.showToast({
        title: '请评分！',
        icon:"none",
        duration: 1000
      })
    } else{
      let that=this
      wx.showModal({
        cancelColor: 'cancelColor',
        title: '确认完成',
        content: '确定任务完成了吗？',
        success: function (res) {
          if (res.cancel) {
            //点击取消,默认隐藏弹框
          } else {
            //点击确定
            db.collection("tasklist").doc(that.data.task._id)
            .update({
              data:{
                level:that.data.level,
                state:3
              }
            })
            wx.showToast({
              title: '确定成功',
              duration: 1000
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 1  
              })
            }, 1000)
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var task = wx.getStorageSync('mpTask')
    console.log(task)
    this.setData({
      task:task.cloudTaskList[task.currentIndexNav]
    })
    wx.clearStorageSync('mpTask')
    console.log(this.data.task)
    this.getIdentity()
    // db.collection("tasklist").watch({
    //   onChange:res=>{
    //     if(this.data.delS){
    //       console.log(res.docs)
    //       // this.setData({
    //       //   task:res.docs[task.currentIndexNav]
    //       // })
    //     }
    //   },
    //   onError:err=>{
    //     console.log(err)
    //   }
    // })
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