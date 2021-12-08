// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud1-7grejwxtd37cc7ce'
cloud.init()
const db = cloud.database({env});
// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 先查询数据库中有无该用户
  const checkUser = await db.collection('user').where({
    openId:userInfo.openId
  }).get()

  // 如果有，则更新用户信息
  if(checkUser.data.length > 0){
    await db.collection('user').doc(checkUser.data[0]._id).update({
      avatarUrl:event.avatarUrl,
      nickName:event.name,
      sex:event.sex
    })
  }else{
    await db.collection('user').add({
      data:{
        avatarUrl:event.avatarUrl,
        nickName:event.name,
        sex:event.sex,
        name:'',
        openId:event.userInfo.openId,
        creatTime:new Date()
      }
    })
  }
}