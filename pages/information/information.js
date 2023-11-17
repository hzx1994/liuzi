const app = getApp()

Page({
  data: {
    clueComponentId: 'bb7d3ff5464d7b293b98823302700337', // 这里填写在留资分发配置后台创建的配置 ID
    conversionTarget: 1,
    clueType: 1,
    connection:[
      {
        id:"1700129651505",
        text:"通讯地址",
        value:"位置:天津市和平区 天津港湾中心1701"
      },
      {
        id:"1700129651509",
        text:"商务合作",
        value:"电话:13800000000"
      },
    ]
  },
  onLoad: function () {
    tt.login()
  },
  getPhoneNumber(e) {
    console.log(`getPhoneNumber success: `, e)
  },
  formSubmit(e) {
    console.log('formSubmit: ', e.detail);
    tt.showToast({
      title: '提交成功',
      icon: 'success'
    });
  },
})