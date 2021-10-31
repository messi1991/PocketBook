import { prequest } from './../../request/http'
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
    show: false,
    isShowCalendar: false,
    minDate: new Date(2010, 0, 1).getTime(),
    date: formatDate(''),
    list: [],
    listIndex: 0,
    remark: '',
    amount: 0,
  },
  onCalendarShow() {
    this.setData({ isShowCalendar: true });
  },
  onCalendarClose() {
    this.setData({ isShowCalendar: false });
  },
  onCalendarConfirm(event) {
    this.setData({
      isShowCalendar: false,
      date: formatDate(event.detail),
    });
  },

  onChange(event) {
    
  },
  onClick({ currentTarget: { dataset: { index = 0 } } }) {
    console.log("index", index);
    this.setData({
      show: true,
      listIndex: index
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },

  async getTypes() {
    // { method: 'POST' }
    const { data } = await prequest('/types');
    console.log("data", data);
    this.setData({
      list: data
    })

  },

  async submitPayData() {
    // { method: 'POST' }
    const body = {
      payTime: this.data.date,
      amount: this.data.amount,
      remark: this.data.remark,
      type: this.data.list[this.data.listIndex].id
    }

    console.log("submit", body);
    const { data } = await prequest(
      '/pay/add',
      { 
        method: 'POST',
        body,
        data: body
      }
    );
    

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