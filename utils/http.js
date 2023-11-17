// 预设一些常用状态值
export const HttpState = {
    SUCCESS: 0,
    ERROR: -1,
    TIMEOUT: 61,
};

export const request = (url, {
    success,
    fail,
    data,
    ...rest
}) => {
    // 接口地址
    baseUrl = 'https://dev-matrix-api.qyeah.net'

    tt.request({
        url: baseUrl + url,
        success: (res) => {
            if (res.statusCode === 200 && res.data && success) {
                success(res.data);
            }
        },
        fail,
        data,
        ...rest
    })
};

// 需要toast的
export const requestNeedToast = (url, {
    success,
    fail,
    ...rest
}) => {
    request(url, {
        success: ({
            data,
            code,
            message
        }) => {
            if (code === HttpState.SUCCESS) {
                tt.showToast({
                    title: message || '操作成功',
                    icon: 'success',
                });
                if (success) success(data);

            } else {
                tt.showToast({
                    title: message || '操作失败',
                    icon: 'fail'
                });
            }

        },
        fail: (res) => {
            console.error(res);
            tt.showToast({
                title: '系统繁忙',
                icon: 'fail'
            });
            if (fail) fail(res);
        },
        ...rest,
    })
}