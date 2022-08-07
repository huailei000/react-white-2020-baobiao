import React from 'react';
import { StackBar, PacketBar, BasicBar } from '../../utils/chart';
import {
  moviedata1,
  movietile,
  movielData30,
  ndmovdata,
  ndyydata,
  comparelData2,
  nyylData30,
  nyytile,
} from '../../apiData/movieData';
import { TableLi } from '../TableLi';
import { InView } from 'react-intersection-observer';
import { reportClick } from '../../utils/pv';
const Movie = () => (
  <div className="swiperPage">
    <div className="banner"></div>
    <div className="bangdan" style={{ marginTop: '0' }}>
      <div
        className="titleLogo"
        style={{
          backgroundImage:
            '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mvtitle1.png") 2x)',
          height: '0.95rem',
        }}
      ></div>
      <InView triggerOnce rootMargin='0px 0px -250px 0px'>
        {({ inView, ref }) => {
          if (inView) {
            StackBar(moviedata1, 'movie1', ['#1AB8E8', '#FAC829']);
          }
          return (
            <div className="con" ref={ref} style={{ marginTop: '0rem' }}>
              <p className="title">总票房及Top10票房占比</p>
              <p className="info">2016-2020年中国内地电影</p>
              <canvas id="movie1" width={325} height={325}></canvas>
            </div>
          );
        }}
      </InView>
    </div>
    <div className="bangdan">
      <div
        className="titleLogo"
        style={{
          backgroundImage:
            '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mvtitle2.png") 2x)',
          height: '0.93rem',
        }}
      ></div>
      <InView triggerOnce rootMargin='0px 0px -250px 0px'>
        {({ inView, ref }) => {
          if (inView) {
            PacketBar(comparelData2, 'movie2', ['#1AB8E8', '#FAC829', '#41CC97']);
          }
          return (
            <div className="con" ref={ref}>
              <p className="title">2016-2020年中美电影票房对比</p>
              <canvas id="movie2" width={345} height={475}></canvas>
            </div>
          );
        }}
      </InView>
    </div>
    <div className="bangdan">
      <div
        className="titleLogo"
        style={{
          backgroundImage:
            '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mntitle3.png") 2x)',
          height: '1.09rem',
        }}
      ></div>
      <InView triggerOnce rootMargin='0px 0px -250px 0px'>
        {({ inView, ref }) => {
          if (inView) {
            BasicBar(ndmovdata, 'PacketBar', ['#1AB8E8']);
          }
          return (
            <div className="con" ref={ref} style={{ marginTop: '0rem' }}>
              <p className="title">2016-2020年中国内地银幕数</p>
              <canvas id="PacketBar" width={300} height={275} style={{ marginBottom: '0rem' }}></canvas>
              <p className="info" style={{ marginBottom: '0.2rem' }}>2016-2020年中国内地银幕数</p>
            </div>
          );
        }}
      </InView>
      <InView triggerOnce rootMargin='0px 0px -250px 0px'>
        {({ inView, ref }) => {
          if (inView) {
            BasicBar(ndyydata, 'yy', ['#FAC829']);
          }
          return (
            <div className="con" ref={ref} style={{ marginTop: '0.15rem' }}>
              <p className="title">2016-2020年中国内地影院数</p>
              <canvas id="yy" width={300} height={275} style={{ marginBottom: '0rem' }}></canvas>
              <p className="info" style={{ marginBottom: '0.2rem' }}>2016-2020年中国内地影院数</p>
            </div>
          );
        }}
      </InView>
    </div>
    <div className="bangdan">
      <div
        className="titleLogo"
        style={{
          backgroundImage:
            '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mvtitle4.png") 2x)',
          height: '1.1rem',
        }}
      ></div>
      <div className="con mt0" style={{ marginTop: '0rem' }}>
        <TableLi
          data={movielData30}
          columns={movietile}
          colorLi={'#FAC829'}
          width={['1.9rem', '1rem']}
          tdSum={3}
        ></TableLi>
      </div>
    </div>
    <div className="bangdan">
      <div
        className="titleLogo"
        style={{
          backgroundImage:
            '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mvtitle5.png") 2x)',
          height: '0.66rem',
        }}
      ></div>
      <div className="con" style={{ marginTop: '0rem' }}>
        <TableLi
          data={nyylData30}
          columns={nyytile}
          colorLi={'#FAC829'}
          lh1={'0.22rem'}
          lh2={'0.18rem'}
          fontSize={'0.135rem'}
          maxheight={'0.6rem'}
          width={['0.75rem', '0.6rem', '0.75rem', '0.75rem']}
          tdSum={5}
        ></TableLi>
      </div>
    </div>
    <div className="gotoDown" onClickCapture={(e) => {
      reportClick('whitepage');
    }}>
      <a href="https://mat1.gtimg.com/qqcdn/xw/whitePaper/20210111.pdf">下载</a>
    </div>
  </div>
);

export default Movie;
