/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React from 'react';
// import { AttaTree, AttaClick } from '@tencent/xw-react-atta';
import { movie, tvplay, music, vshow } from '../../apiData/urls';
const TabCon = (props) => {
    const { currentIndex } = props;
    return (
        <div>
            {/* <AttaTree data={{ pagetype: 'hd', qudao: 'whitepage' }}>
                <AttaClick data={{ fun: 'movie_click' }}>
                    {currentIndex == 0 ? <div className="tab active0"><a href={movie}>电影篇</a></div> : <div className="tab"><a href={movie}>电影篇</a></div>}
                </AttaClick>
                <AttaClick data={{ fun: 'tvplay_click' }}>
                    {currentIndex == 1 ? <div className="tab active1"><a href={tvplay}>电视剧篇</a></div> : <div className="tab"><a href={tvplay}>电视剧篇</a></div>}
                </AttaClick>
                <AttaClick data={{ fun: 'music_click' }}>
                    {currentIndex == 2 ? <div className="tab active2"><a href={music}>音乐篇</a></div> : <div className="tab"><a href={music}>音乐篇</a></div>}
                </AttaClick>
                <AttaClick data={{ fun: 'vshow_click' }}>
                    {currentIndex == 3 ? <div className="tab active3"><a href={vshow}>综艺篇</a></div> : <div className="tab"><a href={vshow}>综艺篇</a></div>}
                </AttaClick>
            </AttaTree> */}
        </div>

    );
};

export default TabCon;
