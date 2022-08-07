/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { reportBossPv } from '../utils/pv';
import Share from 'tencent-share';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // const Vconsole = require('vconsole');
    // const v = new Vconsole();
    // console.log('vconsole', v);

    // 上报
    reportBossPv('whitepage');
    // 分享信息
    const shareData = {
      title: '2020腾讯娱乐白皮书_腾讯新闻',
      desc: '大数据多维解析，一次读懂中国娱乐行业变化趋势',
      img: 'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/share.png',
      link: 'https://new.qq.com/qqfile/20whitepaper/out/index.html',
    };
    const share = new Share(shareData); // 可以在初始化时即传入要设置的分享信息，也可以不传入
    share.setShareInfo(shareData); // 可以调用setShareInfo单独设置分享信息
  });

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          // eslint-disable-next-line max-len
          content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover'
        />
        <meta name="format-detection" content="telephone=no" />
        {/* 隐藏导航条 */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='full-screen' content='true' />
        <meta name='x5-fullscreen' content='true' />
        <meta name='360-fullscreen' content='true' />
        <meta name="fullscreen" content="yes" />
        <style>{'html {font-size: 100px;} body {font-size: 16px;}'}</style>
        <link rel='shortcut icon' href='https://www.qq.com/favicon.ico' type='image/x-icon' />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              var cacheWidth = 0;
              var timer;
              var docEl = document.documentElement;
              var recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                clientWidth = Math.max(Math.min(clientWidth, 450), 320);
                if(cacheWidth !== clientWidth) {
                  clearInterval(timer);
                  cacheWidth = clientWidth;
                  docEl.style.fontSize = clientWidth / 375 * 100 + 'px'; // 部分Android环境存在rem计算问题，扩大100倍解决
                }
              }
              recalc();
              setTimeout(recalc, 300);
              if (!window.addEventListener) return;
              var resizeWithTimer = function() { timer = setInterval(recalc, 10); }
              if ('onorientationchange' in window) window.addEventListener('orientationchange', resizeWithTimer);
              if ('onresize' in window) window.addEventListener('resize', resizeWithTimer);
            })();
        `,
          }}></script>
        <title>2020腾讯娱乐白皮书</title>
        <link rel="preload" href="https://new.qq.com/qqfile/20whitepaper/src/apiData/imgurl.json" as="script"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
