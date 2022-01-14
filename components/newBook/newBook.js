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
    amount: '',
  },
  observers: {
    'params': function(e) {
      const _params = e || {}
      console.log("params", _params)
      this.setData({
        date: _params.payTime || formatDate(''),
        remark: _params.remark || '',
        amount: _params.amount || '',
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
      const _arr = ['/pay/add', '/pay/update']
      const { code, data } = await prequest(
        _arr[this.data.type],
        { 
          method: 'POST',
          data: {
            payTime: this.data.date,
            amount: this.data.amount-0,
            remark: this.data.remark,
            type: this.data.params.id || 0,
            id: this.data.params.id || 0
          }
        }
      );
      if(code === 0) {
        this.triggerEvent('sucess')
      }
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
