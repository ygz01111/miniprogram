// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const productsCollection = db.collection('products')
// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('products').add({
    data: {
      title: "product 3",
      image: "https://c-ssl.duitang.com/uploads/item/201410/24/20141024011242_kwnFH.jpeg",
      tags: ['tag1', 'tag3'],
      price: 120.12,
      color: 'red'
    }

  })
}