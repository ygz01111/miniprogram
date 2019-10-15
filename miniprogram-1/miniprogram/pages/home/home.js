const users = wx.cloud.database().collection("users")
Page({
  data: {
    userlist: []
  },
  onLoad: function(options) {
    users.get().then(res => {
      this.setData({
        userlist: res.data
      })
    })
  },
  getUserInfo: function(result) {
    wx.cloud.callFunction({
      name: "getOpenid",
      complete: res => {
        users.where({
          _openid: res.result.openid
        }).count().then(res2 => {
            if (res2.total == 0) {
              users.add({
                data: result.detail.userInfo
              }).then(res => {
                console.log(res)
              })
            }




          }

        )
      }
    })
  }
})