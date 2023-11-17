import {
  HttpState
} from '../../utils/http.js';

Component({
  data: {
    list: [],
    scrollTop: 0,
    page: 1,
    noMore: false, //返回数据数小于pageSize 上划刷新就不执行了
    refresherTriggered: false,
    user: {}
  },
  properties: {
    pageSize: {
      type: Number,
      value: 5
    },
    height: {
      value: '100vh',
      type: String
    },
    params: {
      type: Object,
      observer(val) {
        this.getInitData(val);
      }
    },
    listName: {
      value: 'list',
      type: String
    }
  },
  observers: {
    list(val) {
      this.triggerEvent("onChangeList", {
        list: val
      });
    }
  },
  lifetimes: {
    attached: function () {
      const user = tt.getStorageSync("user");
      this.setData({
        user
      });

      // 没有params则拉取初始数据 有params会走到params的observer里
      if (Object.keys(this.properties.params).length === 0)
        this.getInitData();

    },
  },
  pageLifetimes: {
    show: function ({}) {
      // 切换账号后需要重新加载
      const user = tt.getStorageSync("user");
      if (user.id !== this.data.user.id) {
        this.setData({
          user
        }, () => {
          this.getInitData();
        });
      }
    },
  },
  methods: {
    bindrefresherrefresh() {
      setTimeout(() => {
        this.setData({
          refresherTriggered: false
        })
        this.getInitData();

      }, 1000)
    },
    bindrefresherpulling() {
      this.setData({
        refresherTriggered: true
      })
    },
    getInitData(data = {}) {
      this.setData({
        page: 1,
        noMore: false,
        scrollTop: 0,
        list: [],
      }, () => this.getData(data))
    },
    bindscrolltolower(e) {
      if (!this.data.noMore) {
        tt.showLoading({
          title: '加载中'
        });

        this.setData({
          page: this.data.page + 1
        }, () => {
          this.getData({}, () => {
            tt.hideLoading();
          })
        })
      }
    },
    getData(data, success) {
      const {
        pageSize,
        page,
        list
      } = this.data;
      const myEventDetail = {
        params: {
          pageSize,
          page,
          ...this.properties.params,
          ...data,
        },
        success: (res) => {
          if (res.code === HttpState.SUCCESS) {
            const ds = res.data[this.data.listName] || [];
            this.setData({
              list: [...list, ...ds]
            })

            // if (ds.length < this.data.pageSize && this.data.page > 1) {

            if (ds.length < this.data.pageSize) {
              this.setData({
                noMore: true
              })
            }


            if (success) success();
          }
        }
      }
      this.triggerEvent("getList", myEventDetail);
    }
  }
})