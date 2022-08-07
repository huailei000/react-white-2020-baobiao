/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { setReturnBtnActionType } from '../utils/share';
import 'swiper/swiper-bundle.min.css';
import Movie from '../components/Movie';
import Music from '../components/Music';
import TvPlay from '../components/TvPlay';
import Vshow from '../components/Vshow';
import { index, list } from '../apiData/urls';
import ReactPullLoad, { STATS } from 'react-pullload';

const ListPage = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [action, setaction] = useState(STATS.init);
  const tabInfo = [
    {
      title: '电影篇',
    },
    {
      title: '电视剧篇',
    },
    {
      title: '音乐篇',
    },
    {
      title: '综艺篇',
    },
  ];
  const headroom = [];

  function checkTitleindex(index) {
    return index === currentIndex ? 'tab active' : 'tab';
  }
  headroom.push(
    tabInfo.map((item, index) => (
      <div
        key={index}
        className={checkTitleindex(index)}
        onClick={() => {
          setcurrentIndex(index);
          window.localStorage.clear();
          window.localStorage.setItem('uindex', index);
          // 重置滚动位置为文档的左上角);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        {item.title}
      </div>
    )),
  );

  const handleAction = (act) => {
    let uindex = Number(window.localStorage.getItem('uindex'));
    if (action === act) {
      return false;
    }
    if (act === STATS.refreshing) {
      // 下滑回倒 翻页
      console.log('翻页', currentIndex);
      if (currentIndex < 1) {
        window.location.replace(index);
      } else {
        setcurrentIndex(uindex - 1);
        window.localStorage.setItem('uindex', uindex - 1);
      }
    } else if (act === STATS.loading) {
      // 滑动到底部翻页
      console.log('下滑翻页', uindex, currentIndex);
      setTimeout(() => {
        if (uindex === 3) {
          uindex = 0;
          setcurrentIndex(uindex);
          window.localStorage.setItem('uindex', uindex);
        } else if (uindex < 3) {
          setcurrentIndex(uindex + 1);
          window.localStorage.setItem('uindex', uindex + 1);
        }
        // 重置滚动位置为文档的左上角);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 500);
    } else {
      // DO NOT modify below code
      setaction(act);
    }
  };

  useEffect(() => {
    // 兼容安卓滑动事件
    const swiper = document.getElementById('swiperList');
    const scale = window.screen.height / window.screen.width;
    swiper.style.height = `${document.body.clientWidth * scale}px`;

    // 监听刷新页面事件方法
    window.onbeforeunload = () => {
      window.localStorage.clear();
    };
    // 页面关闭是清除本次存储
    window.onunload = () => {
      window.localStorage.clear();
    };
    // 客户端返回按钮
    setReturnBtnActionType(true);
  });
  return (
    <div className="ListPage onlyan" id="swiperList">
      <div className="headroom">{headroom}</div>
      <ReactPullLoad
        downEnough={100}
        action={action}
        handleAction={handleAction}
      >
        <div className="swipercon">
          <div className="introduction onlytab">
            {currentIndex === 0 ? (
              <Movie></Movie>
            ) : currentIndex === 1 ? (
              <TvPlay></TvPlay>
            ) : currentIndex === 2 ? (
              <Music></Music>
            ) : (
              <Vshow></Vshow>
            )}
          </div>
        </div>
      </ReactPullLoad>
    </div>
  );
};

export default ListPage;
