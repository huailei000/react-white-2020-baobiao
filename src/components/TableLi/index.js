/* eslint-disable no-nested-ternary */
import React from 'react';

export const TableLi = (props) => {
  const {
    data,
    columns,
    colorLi,
    fontcolor,
    width,
    lh1,
    lh2,
    fontSize,
    maxheight,
    tdSum,
    classname,
  } = props;

  let width1 = '';
  let width2 = '';
  let width3 = '';
  let width4 = '';
  if (width) {
    width1 = width.slice(0, 1);
    width2 = width.slice(1, 2);
    width3 = width.slice(2, 3);
    width4 = width.slice(3, 4);
  }
  let fontsize = '';
  if (fontSize) {
    fontsize = fontSize;
  }

  // 人物前三名排行
  const titleData = [];
  const listData = [];

  // 标题信息
  titleData.push(
    columns.map((item, index) => (
      <li
        key={index}
        style={{
          background: `${colorLi}`,
          color: `${fontcolor}`,
          fontSize: `${fontsize}`,
          height: `${maxheight}`,
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
        ) : tdSum === 4 ? (
          <div>
            <span className="rank">{item.rank}</span>
            <span className="name" style={{ width: `${width1}` }}>
              {item.name}
            </span>
            <span className="value" style={{ width: `${width2}` }}>
              {item.sex}
            </span>
            <span className="percent" style={{ width: `${width3}`, lineHeight: `${lh1}` }}>
              {item.percent}
            </span>
          </div>
        ) : (
          <div>
            <span className="rank">{item.rank}</span>
            <span className="name" style={{ width: `${width1}`, lineHeight: `${lh1}` }}>
              {item.name}
            </span>
            <span
              className="value"
              style={{
                width: `${width2}`,
                lineHeight: `${lh1}`,
              }}
            >
              {item.sex}
            </span>
            <span
              className="percent"
              style={{
                width: `${width3}`,
                lineHeight: `${lh2}`,
              }}
            >
              {item.percent}
            </span>
            <span className="percent" style={{ width: `${width4}`, lineHeight: `${lh1}` }}>
              {item.hotPrecent}
            </span>
          </div>
        )}
      </li>
    )),
  );
  // 列表信息
  listData.push(
    data.map((item, index) => (
      <li key={index} style={{ fontSize: `${fontsize}`, height: `${maxheight}` }}>
        {tdSum === 3 ? (
          <div className={classname}>
            {index <= 2 ? (
              <span className="rank" style={{ color: '#DC4646' }}>
                {item.rank}
              </span>
            ) : (
              <span className="rank">{item.rank}</span>
            )}

            <span className="name" style={{ width: `${width1}` }}>
              {item.name}
            </span>
            <span className="percent" style={{ width: `${width2}` }}>
              {item.percent}
            </span>
          </div>
        ) : tdSum === 4 ? (
          <div>
            {index <= 2 ? (
              <span className="rank" style={{ color: '#DC4646' }}>
                {item.rank}
              </span>
            ) : (
              <span className="rank">{item.rank}</span>
            )}
            <span className="name" style={{ width: `${width1}`, lineHeight: `${lh1}` }}>
              {item.name}
            </span>
            <span className="value" style={{ width: `${width2}` }}>
              {item.sex}
            </span>
            <span className="percent" style={{ width: `${width3}`, lineHeight: `${lh1}` }}>
              {item.percent}
            </span>
          </div>
        ) : (
          <div>
            {index <= 2 ? (
              <span className="rank" style={{ color: '#DC4646' }}>
                {item.rank}
              </span>
            ) : (
              <span className="rank">{item.rank}</span>
            )}
            <span
              className="name"
              style={{ width: `${width1}`, lineHeight: `${lh1}` }}
            >
              {item.name}
            </span>
            <span className="value" style={{ width: `${width2}`, lineHeight: `${lh1}` }}>
              {item.sex}
            </span>
            <span className="percent" style={{ width: `${width3}`, lineHeight: `${lh1}` }}>
              {item.percent}
            </span>
            <span
              className="percent"
              style={{ width: `${width4}`, lineHeight: `${lh1}` }}
            >
              {item.hotPrecent}
            </span>
          </div>
        )}
      </li>
    )),
  );
  return (
    <div className="tableList">
      <ul>
        {titleData}
        {listData}
      </ul>
    </div>
  );
};
