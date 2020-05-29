// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('identityList').where({
      nickName: _.eq(event.nickName)
    })
    .update({
      data: {
        name:event.name,
        num:event.num,
        genderPicker:event.genderPicker,
        academyPicker:event.academyPicker,
        address:event.address,
        QQ:event.QQ,
        telephone:event.telephone,
        level:event.level
      },
    })
  } catch(e) {
    console.error(e)
  }
}