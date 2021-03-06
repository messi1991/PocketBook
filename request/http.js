import { create, PreQuest } from './index.js';

//PreQuest.defaults.baseURL = 'http://localhost:3000';
PreQuest.defaults.baseURL = 'https://messi1937.cn';

const prequest = create(wx.request)
const wxUpload = create(wx.uploadFile)
const wxDownload = create(wx.downloadFile)


prequest.use(async (ctx,next) => {
  console.log('查看请求参数', ctx.request)
  wx.showLoading({
    title: '加载中',
  });
  await next()
  wx.hideLoading();
  console.log('查看响应数据', ctx.response)
})


export { prequest, wxUpload, wxDownload }