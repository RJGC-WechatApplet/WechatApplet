// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ =db.command
// 云函数入口函数
exports.main = async (event, context) => {
  var select=event.select
  return await db.collection("tasklist").where({type:_.eq(select),state:_.eq(event.state)}).orderBy('createTime','desc').get()
}