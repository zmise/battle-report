$(function () {
  var myChart = echarts.init(document.getElementById('data'));
  myChart.setOption({
    title: {
      text: 'xxxxx',
      left: '0',
      top: '10',
      textStyle: {
        fontSize: '20',
        color: '#c1bb87',
        fontWeight: 700
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
      {
        offset: 5,
        data: ['2017-1', '2017-2', '2017-3', '4-1至4-20'], // data
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
        name: 'Name',// houseName
        type: 'line',
        smooth: false,
        lineStyle: { width: 1, color: '#ff9933' },
        itemStyle: {
          borderWidth: 4,
          color: '#ff9933',
          shadowBlur: 5
        },
        label: {
          show: true,
        },
        data: [0, 0, 10, 0]// housePrice
        // data: housePrice
      }
    ]
  });

});
// font-size: .3rem;
//     padding: 0.15rem 0.6rem .3rem;
//     color: #c1bb87;
//     font-weight: 700;
