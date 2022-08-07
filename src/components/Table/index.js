import React from 'react';

export const Table = (props) => {
  const {
    data,
    columns,
    colorTop,
    colorLi,
    titleBg,
    fontcolor,
    logoHeight,
    width,
    fontSize,
    tdSum,
    classname,
    logo,
    logoindex,
  } = props;
  const rankData = [];
  const titleData = [];
  const listData = [];
  let width1 = '';
  let width2 = '';
  let width3 = '';
  if (width) {
    width1 = width.slice(0, 1);
    width2 = width.slice(1, 2);
    width3 = width.slice(2, 3);
  }
  let fontsize = '';
  if (fontSize) {
    fontsize = fontSize;
  }


  // 人物前三名排行
  rankData.push(
    data.slice(0, 3).map((item, index) => (
      <div className="oneRank" key={index}>
        <img src={item.logo} alt="" />
        <p className="name">
          {item.name}
          {index === 0 ? <span className={`king ${logoindex}`}></span> : ''}
        </p>
        <p className="precent">
          No.{item.rank} {item.percent}
        </p>
      </div>
    )),
  );
  // 标题信息
  titleData.push(
    columns.map((item, index) => (
      <li
        key={index}
        style={{
          background: `${colorLi}`,
          color: `${fontcolor}`,
          fontSize: `${fontsize}`,
        }}
      >
        {tdSum === 3 ? (
          <div className={classname}>
            <span className="rank">{item.rank}</span>
            <span className="name" style={{ width: `${width1}` }}>
              {item.name}
            </span>
            <span className="percent" style={{ width: `${width2}` }}>
              {item.percent}
            </span>
          </div>
        ) : (
          <div>
            <span className="rank">{item.rank}</span>
            <span className="name" style={{ width: `${width1}` }}>
              {item.name}
            </span>
            <span className="value" style={{ width: `${width2}` }}>
              {item.sex}
            </span>
            <span className="percent" style={{ width: `${width3}` }}>
              {item.percent}
            </span>
          </div>
        )}
      </li>
    )),
  );
  // 列表信息
  listData.push(
    data.slice(3, 10).map((item, index) => (
      <li key={index} style={{ fontSize: `${fontsize}` }}>
        {tdSum === 3 ? (
          <div className={classname}>
            <span className="rank">{item.rank}</span>
            <span className="name" style={{ width: `${width1}` }}>
              {item.name}
            </span>
            <span className="percent" style={{ width: `${width2}` }}>
              {item.percent}
            </span>
          </div>
        ) : (
          <div>
            <span className="rank">{item.rank}</span>
            <span className="name" style={{ width: `${width1}` }}>
              {item.name}
            </span>
            <span className="value" style={{ width: `${width2}` }}>
              {item.sex}
            </span>
            <span className="percent" style={{ width: `${width3}` }}>
              {item.percent}
            </span>
          </div>
        )}
      </li>
    )),
  );
  return (
    <div className="tableList">
      <div className="sanTOP" style={{ background: `${colorTop}` }}>
        <div className="logo"></div>
        <div className="title"></div>
        <div className="people">{rankData}</div>
      </div>
      <ul>
        {titleData}
        {listData}
      </ul>
      <style jsx>{`
        .tableList .logo {
          background-image: -webkit-image-set(url("${logo}") 2x);
        }
        .tableList .title {
          background-image: -webkit-image-set(url("${titleBg}") 2x);
          height: ${logoHeight};
        }
      `}</style>
    </div>
  );
};
