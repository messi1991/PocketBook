import { prequest } from '../../request/http'
var appInstance = getApp();
const formatDate = (date) => {
  date = date ? new Date(date) : new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: appInstance.globalData,
    active: 0,
    isShowPoput: false,
    isShowCalendar: false,
    minDate: new Date(2010, 0, 1).getTime(),
    date: formatDate(''),
    list: [],
    listIndex: 0,
    remark: '',
    amount: 0,
  },

  onChange(event) {
    
  },
  onClick({ currentTarget: { dataset: { index = 0 } } }) {
    this.setData({
      isShowPoput: true,
      listIndex: index
    })
  },

  async getTypes() {
    // { method: 'POST' }
    const { data } = await prequest('/types');
    this.setData({
      list: data
    })

  },
  onClose() {
    this.setData({
      isShowPoput: false
    })
  },
  onSucess() {
    this.onClose()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getTypes();
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