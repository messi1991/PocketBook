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
    show: true,
    isShowCalendar: false,
    minDate: new Date(2010, 0, 1).getTime(),
    date: formatDate(''),
    list: [
      {
        title: '餐饮',
        icon: 'cart-circle-o'
      },
      {
        title: '购物',
        icon: 'cart-circle-o'
      },
      {
        title: '超市',
        icon: 'cart-circle-o'
      },
      {
        title: '交通',
        icon: 'cart-circle-o'
      },
      {
        title: '医疗',
        icon: 'cart-circle-o'
      },
      {
        title: '学习',
        icon: 'cart-circle-o'
      },
      {
        title: '礼金',
        icon: 'cart-circle-o'
      },
      {
        title: '日用',
        icon: 'cart-circle-o'
      },
      {
        title: '通讯',
        icon: 'cart-circle-o'
      },
      {
        title: '美容',
        icon: 'cart-circle-o'
      },
      {
        title: '健身',
        icon: 'cart-circle-o'
      },
      {
        title: '其他',
        icon: 'cart-circle-o'
      },
    ],
    value: ''
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
  onClick(index) {
    console.log("index", index);
    this.setData({
      show: true
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // { method: 'POST' }
    prequest('/users').then(res => {
      console.log('查看值', res)
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