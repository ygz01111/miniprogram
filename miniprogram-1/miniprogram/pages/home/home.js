Page({

  navigateToAdd: function(event){
  wx.navigateTo({
    url: '../add/add',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
  },
    navigateToIndex: function (event) {
    wx.navigateTo({
      url: '../index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
    navigateToComplex: function (event) {
    wx.navigateTo({
      url: '../complex/complex',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})