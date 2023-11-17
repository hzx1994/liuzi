import {
  requestNeedToast
} from "../utils/http"

export const login = (params) => {
  requestNeedToast('/api/douyin/mini/Login', {
    data: params,
    method: 'POST',
    noAuth: true,
    success: (res) => {
      tt.setStorageSync('user', res.List[0]);
      tt.setStorageSync('author', res.List);
      tt.switchTab({
        url: '/pages/index/index'
      });
    }
  })
}