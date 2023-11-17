
Page({
  data: {
    //map地图相关数据
    longitude: 117.20523925372372,
    latitude: 39.13013588852377,
    showLocation: true,
    markers: [
      {
        id: 1,
        longitude: 117.211851,
        latitude: 39.129737,
        callout: {
          content: '青椰科技',
          color: '#222222',
          fontSize: 12,
          borderRadius: 12,
          padding: 4,
          display: 'ALWAYS',
          textAlign: 'center',
          borderWidth: 1,
          borderColor: '#222222',
          bgColor: '#ffffff',
          anchorX: 0,
          anchorY: 0,
        },
      },
    ],
    scale: 15,
    rotate: 10,
    skew: 5,
    showscale: true,
    showcompass: true,
    //其他
    url: '../../static/img/case/2.png',
    imageUrl: '../../static/img/case/客户1.png',
    imageUrl2: '../../static/img/case/客户2.png',
    imageUrl3: '../../static/img/case/客户3.png',
    imageUrl4: '../../static/img/case/客户4.png',
    imageUrl5: '../../static/img/case/客户5.png',
    imageUrl6: '../../static/img/case/客户6.png',

    D_imageUrl: '../../static/img/case/投放.png',
    D_imageUr2: '../../static/img/case/客户4.png',
  },
  moveToLocation() {
    this.mapCtx.moveToLocation({
      success(res) {
        console.log('move 成功: ', res);
      },
      fail(err) {
        console.log('move 失败: ', err);
      },
      complete(res) {
        console.log('move 完成', res);
      }
    });
  },
  // Auth
  authLocation() {
    tt.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        console.log(res, res.data);
        if (res.data['scope.userLocation'] === 'ok') this.msg('您已允许授权');
      },
      fail: (err) => {
        console.log(err);
        this.msg('您已拒绝授权');
      },
    });
  },
  getScale() {
    this.mapCtx.getScale({
      success(res) {
        console.log('getScale 成功', res);
        tt.showModal({
          content: `当前缩放级别：${res.scale}`,
          showCancel: false
        })
      },
      fail(err) {
        console.log('getScale 失败', err);
      },
      complete(res) {
        console.log('getScale complete', res);
      }
    })
  },
  onSwitchShowScale() {
    this.setData({
      showScale: !this.data.showScale
    });
  },
  onSwitchEnableZoom() {
    this.setData({
      enableZoom: !this.data.enableZoom
    });
  },
  onSwitchEnableScroll() {
    this.setData({
      enableScroll: !this.data.enableScroll
    });
  },
  onSwitchEnableSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    });
  },
  onSwitchEnableTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    });
  },
  onSwitchEnablePoi() {
    this.setData({
      enablePoi: !this.data.enablePoi
    });
  },
  labelTap(e) {
    console.log(e, 'labelTap');
    this.msg('labelTap');
  },
  updated(e) {
    console.log(e, 'updated');
    this.msg('updated');
  },
  anchorpointTap(e) {
    console.log(e, 'anchorpointTap');
    this.msg('anchorpointTap');
  },
  onChangeScale(e) {
    const { name } = e.target.dataset,
      inputNum = Number(e.detail.value);

    switch (name) {
      case 'minScale':
        if (inputNum < this.data.maxScale) {
          this.setData({
            [name]: inputNum,
          });
        }
        break;
      case 'maxScale':
        if (inputNum > this.data.minScale) {
          this.setData({
            [name]: inputNum,
          });
        }
        break;
      default:
        break;
    }
  }
});
