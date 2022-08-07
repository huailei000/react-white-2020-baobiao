/* eslint-disable no-undef */
import F2 from '@antv/f2';

// 横向条状图
export function BasicBar(data, domID, color, danwei) {
  const chart = new F2.Chart({
    id: domID,
    padding: [20, 40, 'auto', 'auto'],
    pixelRatio: window.devicePixelRatio,
  });
  chart.source(data, {
    sales: {
      tickCount: 6,
    },
  });
  chart.coord({
    transposed: true,
  });
  chart.tooltip({
    showItemMarker: false,
    onShow: function onShow(ev) {
      const {
        items,
      } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = `¥ ${items[0].value}`;
    },
  });

  data.forEach((obj) => {
    let zhi = '';
    if (danwei) {
      zhi = `${obj.sales}${danwei}`;
    } else {
      zhi = obj.sales
    }
    chart.guide().text({
      position: [obj.year, obj.sales],
      content: zhi,
      style: {
        textBaseline: 'bottom',
        textAlign: 'center',
      },
      offsetX: 20,
      offsetY: 3,
    });
  });
  chart
    .interval()
    .position('year*sales')
    .size(10) // 根据条件设置柱子宽度
    .color(color)
    .style({
      lineWidth: 5,
      radius: [13, 13, 13, 13],
    });
  chart.render();
}

// 纵向柱状图
export const BasicColumn = (data, domID, color) => {
  const chart = new F2.Chart({
    id: domID,
    padding: [20, 0, 'auto', 'auto'],
    pixelRatio: window.devicePixelRatio,
  });

  chart.source(data, {
    sales: {
      tickCount: 6,
    },
  });
  chart.tooltip({
    showItemMarker: false,
    onShow: function onShow(ev) {
      const {
        items,
      } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = `¥ ${items[0].value}`;
    },
  });
  chart
    .interval()
    .position('year*sales')
    .color(color)
    .size(10) // 根据条件设置柱子宽度
    .adjust({
      type: 'dodge',
      marginRatio: 0.1, // 设置分组间柱子的间距
    })
    .style({
      lineWidth: 1,
      radius: [13, 13, 13, 13],
    });
  chart.render();
};

//  分组条状图
export function PacketBar(data, domID, color) {
  const padd = [20, 30, 'auto', 'auto'];
  const chart = new F2.Chart({
    id: domID,
    padding: padd,
    pixelRatio: window.devicePixelRatio,
  });
  chart.source(data);
  chart.coord({
    transposed: true,
  });

  chart.legend({
    position: 'bottom',
    align: 'center',
  });
  chart
    .interval()
    .position('year*value')
    .color('name', color)
    .size(10) // 根据条件设置柱子宽度
    .adjust({
      type: 'dodge',
      marginRatio: 0.5, // 设置分组间柱子的间距
    })
    .style({
      lineWidth: 1,
      radius: [13, 13, 13, 13],
      stroke: '#fff',
      lineJoin: '',
      lineCap: '',
    });
  chart.render();
}

// 饼图
export const BasicPie = (data, map, domID, color) => {
  const chart = new F2.Chart({
    id: domID,
    padding: [10, 'auto', 'auto', 'auto'],
    pixelRatio: window.devicePixelRatio,
  });
  chart.source(data, {
    percent: {
      formatter: function formatter(val) {
        return `${val * 100}%`;
      },
    },
  });
  chart.legend({
    position: 'bottom',
    align: 'center',
    itemFormatter: function itemFormatter(val) {
      return `${val}${map[val]}`;
    },
  });
  chart.tooltip(false);
  chart.coord('polar', {
    transposed: true,
    radius: 0.85,
  });
  chart.axis(false);
  chart
    .interval()
    .position('a*percent')
    .color('name', color)
    .adjust('stack')
    .style({
      lineWidth: 1,
      stroke: '#fff',
      lineJoin: 'round',
      lineCap: 'round',
    })
    .animate({
      appear: {
        duration: 1200,
        easing: 'bounceOut',
      },
    });
  chart.render();
};

// 折线图
export const OtherLine = (data, domID, danwei) => {
  const chart = new F2.Chart({
    id: domID,
    padding: [30, 20, 'auto', 'auto'],
    pixelRatio: window.devicePixelRatio,
  });

  chart.source(data, {
    value: {
      tickCount: 6,
      min: 0,
    },
    day: {
      range: [0, 1],
    },
  });
  chart.tooltip({
    showCrosshairs: true,
    showItemMarker: false,
    onShow: function onShow(ev) {
      const {
        items,
      } = ev;
      items[0].name = null;
      items[0].value = `$ ${items[0].value}`;
    },
  });
  chart.axis('day', {
    label: function label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    },
  });
  chart.line().position('day*value').color('#1AB8E8');

  chart.point().position('day*value').style({
    stroke: '#1AB8E8',
    lineWidth: 1,
  });
  const forecastData = data;
  forecastData.forEach((obj) => {
    // 预测数据点添加point和label
    chart.guide().point({
      position: [obj.day, obj.value],
      style: {
        fill: '#1AB8E8',
        r: 0,
      },
    });
    chart.guide().text({
      position: [obj.day, obj.value],
      content: `${obj.value}${danwei}`,
      style: {
        fill: '#1AB8E8',
        textAlign: 'center',
      },
      offsetY: -15,
    });
  });

  chart.render();
};

// 分组 柱状图
export const StackBar = (data, domID, color) => {
  const chart = new F2.Chart({
    id: domID,
    padding: [60, 'auto', 'auto'],
    pixelRatio: window.devicePixelRatio,
  });

  chart.source(data);

  chart.legend(false);

  // Tooltip 配置
  chart.tooltip({
    showTitle: true, // 展示  tooltip 的标题
  });

  chart.axis('year', {
    line: F2.Global._defaultAxis.line,
    grid: null,
  });
  chart.axis('value', {
    line: null,
    grid: F2.Global._defaultAxis.grid,
    label: function label(text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    },
  });

  chart.legend({
    position: 'bottom',
    align: 'center',
  });
  chart
    .interval()
    .position('year*value')
    .color('name', color)
    .size(10) // 根据条件设置柱子宽度
    .style({
      lineWidth: 1,
      radius: [13, 13, 13, 13],
      stroke: '#fff',
      lineJoin: '',
      lineCap: '',
    })
    .adjust({
      type: 'dodge',
      marginRatio: 1 / 32,
    });
  chart.render();
};

// 分段条状图
export const TiaoBar = (data, domID, color) => {
  const chart = new F2.Chart({
    id: domID,
    padding: [30, 20, 50, 100],
    pixelRatio: window.devicePixelRatio,
  });
  chart.source(data, {
    percent: {
      min: 0,
      formatter: function formatter(val) {
        return `${(val * 100).toFixed(0)}%`;
      },
    },
  });
  chart.coord({
    transposed: true,
  });

  chart.legend({
    position: 'bottom',
    align: 'center',
    clickable: false,
  });
  chart
    .interval()
    .position('name*percent')
    .color('country', color)
    .size(10) // 根据条件设置柱子宽度
    .style({
      lineWidth: 1,
      radius: [13, 13, 13, 13],
      stroke: '',
      textStyle: {
        fill: '#222222',
        fontWeight: '200',
      },
    })
    .adjust('stack');
  chart.render();
};