$(function () {
  var myChart = echarts.init(document.getElementById('data'));
  myChart.setOption({
    legend: {
      data: ['个人', '公司'],
      left: 0,
      textStyle: {
        color: '#52503a'
      }
    },
    tooltop: {
      trigger: 'item'
    },
    calculable: true,
    grid: { // 上下左右间距
      show: false,
      left: 0,
      right: 0
    },
    xAxis: [
      // {
      //   show: false,
      //   type: 'value',
      // },
      {
        offset: 5,
        data: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'], // data
        axisLine: {
          lineStyle: {
            color: '#3f3f3a',
            width: 2,
          }
        },
        axisTick: {
          inside: true,
          lineStyle: {
            color: '#3f3f3a',
            width: 2,
          },
        },
        axisLabel: {
          color: '#52503a', //  文字体color
        },
      },
    ],
    yAxis: [
      {
        show: false,
        type: 'value',
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '个人',
        type: 'line',
        smooth: false,
        lineStyle: { width: 1, color: '#ff9933' },
        itemStyle: {
          borderWidth: 4,
          color: '#ff9933',
          shadowBlur: 5
        },
        areaStyle: {
          // 区域图，纵向渐变填充
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#ffc601' // 0% 处的颜色
            }, {
              offset: 1, color: '#30312a' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          opacity: 0.3,
        },
        label: {
          show: true,
        },
        data: [0.14, 0.11, 0.29, 0.22]// housePrice
        // data: housePrice
      },
      {
        name: '公司',// name
        type: 'line',
        smooth: false,
        lineStyle: { width: 1, color: '#00ae66' },
        itemStyle: {
          borderWidth: 4,
          color: '#00ae66',
          shadowBlur: 5
        },
        areaStyle: {
          // 区域图，纵向渐变填充
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#79cd65' // 0% 处的颜色
            }, {
              offset: 1, color: '#30312a' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          opacity: 0.3,

        },
        label: {
          show: true,
          position: 'bottom'
        },
        tooltop: {
          position: ['50%', '50%'],
        },
        // data: areaPrice
        data: [0.06, 0.05, 0.18, 0.19]
      }
    ]
  });

});
