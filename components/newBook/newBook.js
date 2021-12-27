// components/newBook.js
import { prequest } from '../../request/http';
const formatDate = (date) => {
  date = date ? new Date(date) : new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      value: 0 //0:新建  1:修改
    },
    isShowPoput: {
      type: Boolean,
      value: false
    },
    params: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowCalendar: false,
    minDate: new Date(2010, 0, 1).getTime(),
    date: formatDate(''),
    remark: '',
    amount: 0,
  },
  observers: {
    'params': function(e) {
      console.log("params", e)
      this.setData({
        date: e.payTime || formatDate(''),
        remark: e.remark || '',
        amount: e.amount || 0,
      })
    }
  },

  lifetimes: {
    ready: function() {
      console.log("ready", this.data.params, this.data.formData)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async submitPayData() {
      const _arr = ['/pay/add', '/pay/add']
      const { data } = await prequest(
        _arr[this.data.type],
        { 
          method: 'POST',
          data: {
            payTime: this.data.date,
            amount: this.data.amount-0,
            remark: this.data.remark,
            type: this.data.params.typeId || 0
          }
        }
      );
      this.setData({
        show: false
      })
      console.log("aaaa", this.data.formData)
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
    onClose() {
      console.log('onClose')
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {}
      this.triggerEvent('close', myEventDetail, myEventOption)
    }
  }
})
