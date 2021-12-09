// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud1-7grejwxtd37cc7ce'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID  // event.userInfo.openId

  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()

  let returnResult = []
  for (let i = 0; i < groupList.data.length; i++) {
    const oneGroup = await db.collection('group').where({
      _id: groupList.data[i].groupId,
      delete: false
    }).get()

    if (oneGroup.data.length > 0) { // 拿到可至少一条该账号创建的群组信息
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()

      // 整理数据结构
      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = groupList.data[i]._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a, b) => b.createTime - a.createTime)
}