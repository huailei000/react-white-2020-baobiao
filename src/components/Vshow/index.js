import React, { useEffect } from 'react';
import { PacketBar, BasicBar, BasicPie, BasicColumn } from '../../utils/chart';
import {
  bfllData,
  czytitle,
  zytopData,
  kbdata,
  zyxntitle,
  zyxnData,
  map,
  pieData,
  ysdata,
  ysjmldata,
  mingxtitle,
  namxData,
  nvmxData,
} from '../../apiData/vshowData';
import { TableLi } from '../TableLi';
import { InView } from 'react-intersection-observer';
import { reportClick } from '../../utils/pv';
const Vshow = () => {
  useEffect(() => { });

  return (
    <div className="swiperPage vshow">
      <div className="banner" style={{ backgroundImage: '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zy_bg.png") 2x)' }}></div>
      <div className="bangdan" style={{ marginTop: '0' }}>
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitle1.png") 2x)',
            height: '1.125rem',
          }}
        ></div>
        <InView triggerOnce rootMargin="0px 0px -250px 0px">
          {({ inView, ref }) => {
            if (inView) {
              PacketBar(bfllData, 'vshow1', [
                '#1AB8E8',
                '#FAC829',
                '#41CC97',
              ]);
            }
            return (
              <div className="con mt0" ref={ref}>
                <p className="title">2020年国产综艺年度市场概况</p>
                <canvas id="vshow1" width={300} height={300}></canvas>
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
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitle2.png") 2x)',
            height: '1.365rem',
          }}
        ></div>
        <div className="con  mt0">
          <TableLi
            data={zytopData}
            columns={czytitle}
            colorLi={'#FAC829'}
            width={['2.05rem', '0.8rem']}
            tdSum={3}
          ></TableLi>
        </div>
      </div>
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitleq5.png") 2x)',
            height: '1.065rem',
          }}
        ></div>
        <InView triggerOnce rootMargin="0px 0px -250px 0px">
          {({ inView, ref }) => {
            if (inView) {
              BasicBar(kbdata, 'vshow2', ['#1AB8E8']);
            }
            return (
              <div
                className="con"
                style={{ margin: '-0.14rem 0.15rem 0' }}
                ref={ref}
              >
                <p className="title">2020年综艺口碑榜</p>
                <canvas id="vshow2" width={345} height={300}></canvas>
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
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitle01.png") 2x)',
            height: '1.295rem',
          }}
        ></div>
        <div className="con tabone  mt0">
          <TableLi
            data={zyxnData}
            columns={zyxntitle}
            colorLi={'#FAC829'}
            lh1={'0.18rem'}
            fontSize={'0.135rem'}
            width={['1.75rem', '0.75rem', '0.9rem']}
            tdSum={4}
          ></TableLi>
        </div>
      </div>
      <div className="bangdan  mt10">
        <InView triggerOnce rootMargin="0px 0px -250px 0px">
          {({ inView, ref }) => {
            if (inView) {
              BasicPie(pieData, map, 'vshowPie', ['#1AB8E8', '#FAC829']);
            }
            return (
              <div className="con" ref={ref}>
                <p className="title">2020综艺节目吸纳品牌数占比</p>
                <canvas id="vshowPie" width={300} height={300}></canvas>
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
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitle5.png") 2x)',
            height: '1.155rem',
          }}
        ></div>
        <InView triggerOnce rootMargin="0px 0px -250px 0px">
          {({ inView, ref }) => {
            if (inView) {
              BasicColumn(ysdata, 'vshow3', ['#1AB8E8']);
            }
            return (
              <div
                className="con"
                style={{ paddingTop: '0.15rem' }}
                ref={ref}
              >
                <canvas id="vshow3" width={300} height={250}></canvas>
              </div>
            );
          }}
        </InView>
      </div>
      <div className="bangdan  mt10">
        <InView triggerOnce rootMargin="0px 0px -250px 0px">
          {({ inView, ref }) => {
            if (inView) {
              BasicBar(ysjmldata, 'vshow4', ['#1AB8E8']);
            }
            return (
              <div className="con" ref={ref}>
                <p className="title">衍生节目数量排行榜</p>
                <canvas
                  id="vshow4"
                  width={345}
                  height={300}
                  style={{ marginBottom: '0rem' }}
                ></canvas>
                <p className="zhus">
                  注：数据截至12月20日，统计维度为国产季播网综衍生类节目。
                </p>
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
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitle6.png") 2x)',
            height: '0.99rem',
          }}
        ></div>
        <div className="con">
          <TableLi
            data={namxData}
            columns={mingxtitle}
            colorLi={'#FAC829'}
            lh1={'0.18rem'}
            width={['1.5rem', '1.35rem']}
            tdSum={3}
            classname={'three'}
          ></TableLi>
        </div>
      </div>
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zytitle7.png") 2x)',
            height: '0.945rem',
          }}
        ></div>
        <div className="con">
          <TableLi
            data={nvmxData}
            columns={mingxtitle}
            colorLi={'#FAC829'}
            lh1={'0.18rem'}
            width={['1.5rem', '1.35rem']}
            tdSum={3}
            classname={'three'}
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

export default Vshow;
