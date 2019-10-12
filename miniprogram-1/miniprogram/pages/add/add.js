
// const db = wx.cloud.database()
// const productsCollection = db.collection('products')
Page({
  addData: function(event) {
    //   console.log(event)
    // productsCollection.add({
    //   data:{
    //     title:"product 1",
    //     image:"https://c-ssl.duitang.com/uploads/item/201410/24/20141024011242_kwnFH.jpeg",
    //     tags:['tag1','tag2'],
    //     price:120.12,
    //     color:'red'
    //   },success:res=>{console.log(event)}
    // })
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'addData'
    }).then(res => {
      console.log(res.result._id)
    })
  }

})