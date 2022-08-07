import React, { useEffect } from 'react';
import { StackBar, BasicColumn, OtherLine } from '../../utils/chart';
import {
  tvData1,
  tvTitle,
  tvHotData,
  kbdata,
  Linedata,
  Line2data,
  Line3data,
  nameTitle,
  hotmanData,
  hotwmData,
} from '../../apiData/TvData';
import { TableLi } from '../TableLi';
import { InView } from 'react-intersection-observer';
import { reportClick } from '../../utils/pv';
const TvPlay = () => {
  useEffect(() => {
  });

  return (
    <div className="swiperPage tvPlay">
      <div className="banner" style={{ backgroundImage: ' -webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/dsj_bg.png") 2x)' }}></div>
      {/* 020年剧集市场概况*/}
      <div className="bangdan one" style={{ marginTop: '0' }}>
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle1.png") 2x)',
            height: '1.555rem',
          }}
        ></div>
        <InView triggerOnce rootMargin='0px 0px -100px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              StackBar(tvData1, 'tv1', ['#1AB8E8', '#FAC829']);
            }
            return (
              <div className="con" ref={ref}>
                <p className="title">2020年剧集市场概况</p>
                <canvas id="tv1" width={300} height={300}></canvas>
                <p className="zhus">注：数据来源广电总局；数据截止时间12月20日，2020年数据为广电总局备案1月至11月部数和12月估算数据总和。</p>
              </div>
            );
          }}
        </InView>
      </div>
      {/* 《三十而已》成为年度最热电视剧 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle2.png") 2x)',
            height: '1.36rem',
          }}
        ></div>
        <div className="con" style={{ marginTop: '-0.15rem' }}>
          <TableLi
            data={tvHotData}
            columns={tvTitle}
            colorLi={'#FAC829'}
            width={['1.9rem', '1rem']}
            tdSum={3}
            classname={'three'}
          ></TableLi>
        </div>
      </div>
      {/* 短剧的春天：稳健增长，口碑爆棚 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle3.png") 2x)',
            height: '1.45rem',
          }}
        ></div>
        <InView triggerOnce rootMargin='0px 0px -250px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              BasicColumn(kbdata, 'tv2', ['#1AB8E8']);
            }
            return (
              <div className="con border1" ref={ref}>
                <p className="title" style={{ width: '3rem' }}>
                  2020年六大视频平台短剧播出数量</p>
                <canvas id="tv2" width={300} height={250}></canvas>
              </div>
            );
          }}
        </InView>
        <InView triggerOnce rootMargin='0px 0px -250px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              OtherLine(Linedata, 'tv3', '%');
            }
            return (
              <div className="con borderr" ref={ref}>
                <p className="title">口碑排行TOP20剧中短剧占比</p>
                <canvas id="tv3" width={300} height={200}></canvas>
              </div>
            );
          }}
        </InView>
      </div>
      {/* 悬疑剧迎来“收获之 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle4.png") 2x)',
            height: '1.065rem',
          }}
        ></div>
        <InView triggerOnce rootMargin='0px 0px -250px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              OtherLine(Line2data, 'tv4', '%');
            }
            return (
              <div className="con" ref={ref}>
                <p className="title">悬疑剧五年播出数量占比变化</p>
                <canvas id="tv4" width={300} height={200}></canvas>
              </div>
            );
          }}
        </InView>
      </div>
      {/* 喜剧分化趋势：下饭剧VS泡面番 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle5.png") 2x)',
            height: '1.045rem',
          }}
        ></div>
        <InView triggerOnce rootMargin='0px 0px -250px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              OtherLine(Line3data, 'tv5', '%');
            }
            return (
              <div className="con mt0" ref={ref}>
                <p className="title">2020年播出喜剧单集时长占比</p>
                <canvas id="tv5" width={300} height={200}></canvas>
              </div>
            );
          }}
        </InView>
      </div>
      {/* 最受欢迎的电视剧男演员top10 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle6.png") 2x)',
            height: '0.985rem',
          }}
        ></div>
        <div className="con">
          <TableLi
            data={hotmanData}
            columns={nameTitle}
            colorLi={'#FAC829'}
            lh1={'0.18rem'}
            maxheight={'0.66rem'}
            width={['0.65rem', '0.65rem', '1.5rem']}
            tdSum={4}
          ></TableLi>
        </div>
      </div>
      {/* 最受欢迎的电视剧女演员top10*/}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/tvtitle7.png") 2x)',
            height: '0.915rem',
          }}
        ></div>
        <div className="con">
          <TableLi
            data={hotwmData}
            columns={nameTitle}
            colorLi={'#FAC829'}
            lh1={'0.22rem'}
            maxheight={'0.6rem'}
            width={['0.65rem', '0.65rem', '1.5rem']}
            tdSum={4}
          ></TableLi>
        </div>
      </div>
      <div className="gotoDown" onClick={(e) => {
        reportClick('whitepage');
      }}>
        <a href="https://mat1.gtimg.com/qqcdn/xw/whitePaper/20210111.pdf">下载</a>
      </div>
    </div>
  );
};

export default TvPlay;
