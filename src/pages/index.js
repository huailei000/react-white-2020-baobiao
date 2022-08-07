/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import StarPage from '../components/StarPage';
import router from 'next/router';
import { movie, list } from '../apiData/urls';
import { setReturnBtnActionType } from '../utils/share';
function MainSwiper() {
  useEffect(() => {
    // loading加载
    const createjs = require('../utils/createjs');
    window.createjs = createjs;
    const queue = new createjs.LoadQueue(true);
    const onProgress = (event) => {
      const percent = `${Math.round(event.loaded * 100)}%`;
      document.querySelector('.txt').innerHTML = percent;
      // console.log('progress', percent);
    };
    queue.on('progress', onProgress);
    queue.addEventListener('complete', () => {
      document.querySelector('.loading-page').style.display = 'none';
    });
    queue.loadManifest({ src: 'https://new.qq.com/qqfile/20whitepaper/src/apiData/imgurl.json', type: 'manifest' });

    // 客户端返回按钮
    setReturnBtnActionType(true);

  });

  return (
    <div className="main_container">

      <div className="loading-page">
        <div className="loading">
          <img alt="" className=" animated rotate infinite linear" src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/load.png" />
          <div className="txt"></div>
        </div>
      </div>
      <div className="swiper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          direction={'vertical'}
          id="swiperindex"
          onSlideChange={(swiper) => {
          }}
          onSwiper={(swiper) => {
            const swiperHeight = document.documentElement.clientHeight || document.body.clientHeight;
            // console.log(swiper);
            swiper.height = swiperHeight;
            // console.log(swiper.height);
            let startScroll;
            let touchStart;
            let touchCurrent;
            swiper.slides.on('touchstart', function (e) {
              startScroll = this.scrollTop;
              touchStart = e.targetTouches[0].pageY;
            }, true);
            swiper.slides.on('touchend', function (e) {
              startScroll = this.scrollTop;
              const slide = this;
              const onlytab = (startScroll + slide.clientHeight >= slide.scrollHeight);
              if (onlytab && slide.className.indexOf('introduction') !== -1) {
                window.location.replace(list);
              }
            }, true);
            swiper.slides.on('touchmove', function (e) {
              touchCurrent = e.targetTouches[0].pageY;
              const touchesDiff = touchCurrent - touchStart;
              const slide = this;
              const onlyScrolling =
                (slide.scrollHeight > slide.offsetHeight) &&
                (
                  (touchesDiff < 0 && startScroll === 0) ||
                  (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
                  (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
                );
              if (onlyScrolling && slide.className.indexOf('introduction') !== -1) {
                e.stopPropagation();
              }
            }, true);
          }}
        >
          {/* 封面 */}
          <SwiperSlide className="fengmian">
            {/* <div className="fengpic" style={{
              backgroundImage:
                '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/fengmian1.png") 2x)'
            }}></div> */}
            <img className="fengpic" alt="" src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/fengmian1.png" />
            <div className="down">
              <img alt="" src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/down_ico.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="introduction">
            {/* 明星片 */}
            <StarPage></StarPage>
          </SwiperSlide>
          {/* 电影 电视剧 音乐 综艺 */}

        </Swiper>
      </div>
    </div >
  );
}

export default MainSwiper;
