/* eslint-disable camelcase */
import { getBrowserInfo } from 'gh-qqnews-utils/ua';

export const getCookie = (name) => {
  try {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  } catch (error) {
    return undefined;
  }
};

export const setReturnBtnActionType = (status) => {
  const app = getBrowserInfo();
  if (!app.qqnews.is) {
    return Promise.resolve('this is browser');
  }
  import('@tencent/news-jsapi')
    .then(({ setReturnBtnActionType }) => {
      setReturnBtnActionType(status);
      console.log('返回键直接关闭按钮', status);
    })
    .catch((e) => {
      console.log(e);
    });
};
