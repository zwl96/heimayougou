Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [
      { id: 1, name: '项目' },
      { id: 2, name: '文件' },
      { id: 3, name: '编辑' },
      { id: 4, name: '工具' }
    ],
    flag: true,
    swiper_list: [],
    classification_list: [],
    storey_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res) => {
        // console.log(res)
        this.setData({
          swiper_list: res.data.message
        })
      }
    }),
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
        success: (res) => {
          // console.log(res)
          this.setData({
            classification_list: res.data.message
          })
        }
      }),
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
        success: (res) => {
          console.log(res)
          this.setData({
            storey_list: res.data.message
          })
        }
      })
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