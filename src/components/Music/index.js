import React, { useEffect } from 'react';
import { BasicColumn, BasicBar, BasicPie, OtherLine } from '../../utils/chart';
import {
  musicData1,
  ffLinedata,
  muTitle,
  muHotData,
  mu2Title,
  muTopData,
  columns,
  thTopData,
  mu3Title,
  muhotData,
  yhhxData,
  mumap,
  mupieData,
  mupieData1, mumap1,
  mupieData2, mumap2,
  mupieData3, mumap3,
  columns1, qgTopData,
  zjmap1, zjpieData1,
  zjmap2, zjpieData2,
  zjmap3, zjpieData3,
  zjmap4, zjpieData4,
  zjmap5, zjpieData5,
  zjmap6, zjpieData6,
} from '../../apiData/musicData';
import { TableLi } from '../TableLi';
import { InView } from 'react-intersection-observer';
import { reportClick } from '../../utils/pv';
const Music = () => {
  useEffect(() => {
  });

  return (

    <div className="swiperPage music">
      <div className="banner" style={{ backgroundImage: '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/music_bg1.png") 2x) ' }}></div>
      {/* 2018-2020年中国数字音乐市场规模 */}
      <div className="bangdan" style={{ marginTop: '0' }}>
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mstitle1.png") 2x)',
            height: '0.925rem',
          }}
        ></div>
        <InView triggerOnce rootMargin='0px 0px -100px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              BasicColumn(musicData1, 'music', ['#1AB8E8']);
            }
            return (
              <div className="con border1" ref={ref} style={{ marginTop: '0rem' }}>
                <p className="title" style={{ fontSize: '0.18rem' }}>
                  2018-2020年中国数字音乐市场规模</p>
                <p className="info" style={{ fontSize: '0.14rem' }}>
                  （亿元）</p>
                <canvas id="music" width={300} height={275}></canvas>
              </div>
            );
          }}
        </InView>
        <InView triggerOnce rootMargin='0px 0px -100px 0px'>
          {({ inView, ref }) => {
            if (inView) {
              OtherLine(ffLinedata, 'musicLine', '');
            }
            return (
              <div className="con borderr" ref={ref}>
                <p className="title" style={{ fontSize: '0.18rem', marginTop: '0rem' }}>
                  2018-2020年腾讯音乐集团付费会员数量<i>（万）</i></p>
                <canvas id="musicLine" width={300} height={275}></canvas>
              </div>
            );
          }}
        </InView>
      </div>
      {/* 疫情时代新常态 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mstitle2.png") 2x)',
            height: '1.37rem',
          }}
        ></div>
        <div className="con mt0">
          <TableLi
            data={muHotData}
            columns={muTitle}
            colorLi={'#FAC829'}
            fontSize={'0.12rem'}
            width={['2.25rem', '0.6rem']}
            tdSum={3}
          ></TableLi>
        </div>
      </div>
      {/* 看线上演唱会时我们再看什么*/}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mstitle3.png") 2x)',
            height: '1.105rem',
          }}
        ></div>
        <div className="con mt0">
          <div className="ms_huaxinag">
            <p className="title">观看动机</p>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicBar(yhhxData, 'hx2', ['#1AB8E8'], '%');
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <canvas id="hx2" width={300} height={250} style={{ marginBottom: '0' }}></canvas>
                  </div>
                );
              }}
            </InView>
          </div>
          <div className="ms_pies">

            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(mupieData2, mumap2, 'hx5', ['#1AB8E8', '#FAC829', '#41CC97']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">是否愿意付费</p>
                    <canvas id="hx5" width={160} height={230}></canvas>
                  </div>
                );
              }}
            </InView>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(mupieData3, mumap3, 'hx6', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">单场可接受付费金额</p>
                    <canvas id="hx6" width={160} height={300}></canvas>
                  </div>
                );
              }}
            </InView>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(mupieData, mumap, 'hx3', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">画质的需求</p>
                    <canvas id="hx3" width={160} height={300}></canvas>
                  </div>
                );
              }}
            </InView>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(mupieData1, mumap1, 'hx4', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">单次观看时长</p>
                    <canvas id="hx4" width={160} height={280}></canvas>
                  </div>
                );
              }}
            </InView>

          </div>
        </div>
      </div>
      {/* 2020华语数字专辑销量TOP10*/}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mstitle4.png") 2x)',
            height: '1.03rem',
          }}
        ></div>
        <div className="con mt20">
          <TableLi
            data={muTopData}
            columns={mu2Title}
            colorLi={'#FAC829'}
            lh1={'0.18rem'}
            width={['1.1rem', '0.75rem', '1.05rem']}
            tdSum={4}
          ></TableLi>
          <p className="zhus">注：数据截至12月20日</p>
        </div>
      </div>
      {/* 2020数字专辑抢购速度TOP10*/}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mstitle5.png") 2x)',
            height: '0.35rem',
          }}
        ></div>
        <div className="con">
          <TableLi
            data={qgTopData}
            columns={columns1}
            colorLi={'#FAC829'}
            width={['1rem', '1rem', '0.75rem']}
            lh1={'0.18rem'}
            tdSum={4}
          ></TableLi>
          <p className="zhus">注：数据来源腾讯音乐娱乐集团由你音乐榜（UNI-CHART），截至12月13日。</p>
        </div>
      </div>
      {/* 	2020数字专辑囤货TOP10 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/musictitle10.png") 2x)',
            height: '0.835rem',
          }}
        ></div>
        <div className="con mt0">
          <TableLi
            data={thTopData}
            columns={columns}
            colorLi={'#FAC829'}
            lh1={'0.18rem'}
            width={['1.65rem', '1.1rem']}
            tdSum={3}
            classname={'three'}
          ></TableLi>
          <p className="zhus">注：数据来源腾讯音乐娱乐集团由你音乐榜（UNI-CHART），截至12月13日。</p>
        </div>
      </div>
      {/* 2020年各说各话自唱自嗨新曲热度前10 */}
      <div className="bangdan">
        <div
          className="titleLogo"
          style={{
            backgroundImage:
              '-webkit-image-set(url("https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mstitle7.png") 2x)',
            height: '0.99rem',
          }}
        ></div>
        <div className="con mt0">
          <TableLi
            data={muhotData}
            columns={mu3Title}
            lh1={'0.18rem'}
            colorLi={'#FAC829'}
            width={['0.8rem', '0.6rem', '0.8rem', '0.6rem']}
            tdSum={5}
          ></TableLi>
          <p className="zhus">注：数据来源腾讯音乐娱乐集团由你音乐榜（UNI-CHART），截至12月13日。</p>
        </div>
      </div>
      {/* 案例分析 1*/}
      <div className="bangdan  mt10">
        <div className="con">
          <div className="ms_top">
            <div className="hb">
              <img src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zj1.png" alt="" />
            </div>
            <div className="Info">
              <h5>《Mojito》</h5>
              <p className="first"><span>歌手: </span>周杰伦</p>
              <p><span>专辑: </span>《Mojito》</p>
              <p><span>发布时间: </span>2020/6/12</p>
            </div>
          </div>
          <div className="ms_pies">
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(zjpieData1, zjmap1, 'zj2', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">听歌人群画像</p>
                    <canvas id="zj2" width={160} height={250}></canvas>
                  </div>
                );
              }}
            </InView>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(zjpieData2, zjmap2, 'zj1', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757', '#cc5e0f']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">听歌人群年龄分布</p>
                    <canvas id="zj1" width={160} height={300}></canvas>
                  </div>
                );
              }}
            </InView>
          </div>
        </div>
      </div>
      {/* 案例分析 2*/}
      <div className="bangdan mt10">
        <div className="con">
          <div className="ms_top">
            <div className="hb">
              <img src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zj2.png" alt="" />
            </div>
            <div className="Info">
              <h5>《光点》</h5>
              <p className="first"><span>歌手: </span>肖战</p>
              <p><span>专辑: </span>《光点》</p>
              <p><span>发布时间: </span>2020/4/25</p>
            </div>
          </div>
          <div className="ms_pies">
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(zjpieData3, zjmap3, 'zj3', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">听歌人群画像</p>
                    <canvas id="zj3" width={160} height={250}></canvas>
                  </div>
                );
              }}
            </InView>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(zjpieData4, zjmap4, 'zj4', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757', '#cc5e0f']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">听歌人群年龄分布</p>
                    <canvas id="zj4" width={160} height={300}></canvas>
                  </div>
                );
              }}
            </InView>
          </div>
        </div>
      </div>
      {/* 案例分析 2*/}
      <div className="bangdan mt10">
        <div className="con">
          <div className="ms_top">
            <div className="hb">
              <img src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/zj4.png" alt="" />
            </div>
            <div className="Info">
              <h5>《后来遇见他》 </h5>
              <p className="first"><span>歌手: </span>胡66</p>
              <p><span>专辑: </span>《另一个我》</p>
              <p><span>发布时间: </span>2020/3/20</p>
            </div>
          </div>
          <div className="ms_pies">
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(zjpieData5, zjmap5, 'zj5', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">听歌人群画像</p>
                    <canvas id="zj5" width={160} height={250}></canvas>
                  </div>
                );
              }}
            </InView>
            <InView triggerOnce rootMargin='0px 0px -100px 0px'>
              {({ inView, ref }) => {
                if (inView) {
                  BasicPie(zjpieData6, zjmap6, 'zj6', ['#1AB8E8', '#FAC829', '#41CC97', '#FA5757', '#cc5e0f']);
                }
                return (
                  <div className="hxcon" ref={ref}>
                    <p className="title">听歌人群年龄分布</p>
                    <canvas id="zj6" width={160} height={300}></canvas>
                  </div>
                );
              }}
            </InView>
          </div>
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

export default Music;
