// c:\Users\iceha\miniprograms\青椰管家\components\Slide\Slide.js
Component({
  data: {
    visible: false,
    activeStyle: '',
    deactiveStyle: ''
  },
  properties: {
    visible: Boolean,
    type: 'top' | 'bottom',
  },
  observers: {
    type(val) {
      const offsetVal = '-50%';
      const radiustVal = '20rpx';
      const deType = val === 'top' ? 'bottom' : 'top'
      this.setData({
        activeStyle: val + ':0' + ';border-' + deType + '-left-radius:' + radiustVal + ';border-' + deType + '-right-radius:' + radiustVal,
        deactiveStyle: val + ':' + offsetVal + ';border-' + deType + '-left-radius:' + radiustVal + ';border-' + deType + '-right-radius:' + radiustVal
      })
    }
  },
  methods: {
    onShow() {
      this.setData({
        tagVisible: true
      })
    },
    onCancel() {
      this.setData({
        tagVisible: false
      })
    },
    onConfirm() {
      this.onCancel();
    },
  }
})