import { prequest } from './../../request/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: {
      total: '',
      dataList: []
    },
    isShowPoput: false,
    params: {}
  },

  async getList() {
    // { method: 'POST' }
    const { code, data } = await prequest('/pay/list');
    if (code === 0) {
      this.setData({
        listData: data
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    
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
    this.getList();
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

  },
  onClickCall(e) {
    const params = e.currentTarget.dataset.params || {};
    console.log("click", params)
    this.setData({
      isShowPoput: true,
      params: params
    })
  },
  onClose() {
    this.setData({
      isShowPoput: false
    })
  }
})