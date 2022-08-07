import React from 'react';
import {
  columns,
  columns1,
  columns2,
  columns3,
  nmxjzData,
  mmxjzData,
  nmhotData,
  mmhotData,
  gmdData,
} from '../../apiData/starData';
import { Table } from '../Table';

const StarPage = () => (
  <div className="starPage">
    <div className="bangdan bgone">
      <Table
        data={nmxjzData}
        columns={columns}
        colorTop={'#fac829'}
        colorLi={'#eab81b'}
        width={['1.2rem', '1.7rem']}
        tdSum={3}
        classname={'three'}
        titleBg={
          'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mxtile1.png'
        }
        logo={'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/bpstitle.png'}
        logoindex={'king1'}
      ></Table>
    </div>
    <div className="bangdan">
      <Table
        data={mmxjzData}
        columns={columns}
        colorTop={'#FAC829'}
        colorLi={'#eab81b'}
        width={['1.2rem', '1.7rem']}
        tdSum={3}
        classname={'three'}
        titleBg={
          'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mxtile2.png'
        }
        logo={'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/bpstitle.png'}
      ></Table>
    </div>
    <div className="bangdan">
      <Table
        data={nmhotData}
        columns={columns1}
        colorTop={'#EF3E3E'}
        colorLi={'#E02E2E'}
        fontcolor={'#fff'}
        width={['1.2rem', '1.7rem']}
        tdSum={3}
        classname={'three'}
        titleBg={
          'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mxtitle3.png'
        }
        logo={'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/bpstitle2.png'}
      ></Table>
    </div>
    <div className="bangdan">
      <Table
        data={mmhotData}
        columns={columns2}
        colorTop={'#EF3E3E'}
        colorLi={'#E02E2E'}
        fontcolor={'#fff'}
        width={['1.2rem', '1.7rem']}
        tdSum={3}
        classname={'three'}
        titleBg={
          'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mxtitle4.png'
        }
        logo={'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/bpstitle2.png'}
      ></Table>
    </div>
    <div className="bangdan">
      <Table
        data={gmdData}
        columns={columns3}
        colorTop={'#23AF79'}
        colorLi={'#1B9E6C'}
        fontcolor={'#fff'}
        width={['1.2rem', '1.7rem']}
        tdSum={3}
        classname={'three'}
        titleBg={
          'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/mxtile5.png'
        }
        logo={'https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/bpstitle2.png'}
      ></Table>
    </div>
    <div className="down_ico">
      <img alt="" src="https://mat1.gtimg.com/qqcdn/xw/whitePaper/static/down_ico.png" />
    </div>
  </div>
);
export default StarPage;
