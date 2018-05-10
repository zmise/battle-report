$(function () {


  function renderCompanyLineChart(name, requestData) {
    var option = {
      legend: {
        data: requestData.title,
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
        {
          offset: 5,
          data: requestData.titleData, // data
          axisLine: {
            lineStyle: {
              color: requestData.color,
              width: 2,
            }
          },
          axisTick: {
            inside: true,
            lineStyle: {
              color: requestData.color,
              width: 2,
            },
          },
          axisLabel: {
            color: requestData.color, //  文字体color
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
          name: requestData.title[0],
          type: 'line',
          smooth: false,
          lineStyle: { width: 1, color: requestData.lineColor1 },
          itemStyle: {
            borderWidth: 4,
            color: requestData.lineColor1,
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
                offset: 0, color: requestData.lineColor1 // 0% 处的颜色
              }, {
                offset: 1, color: '#fff' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            opacity: 0.3,
          },
          label: {
            show: true,
          },
          data: requestData.lineData1// housePrice
        },
        {
          name: requestData.title[1],
          type: 'line',
          smooth: false,
          lineStyle: { width: 1, color: requestData.lineColor2 },
          itemStyle: {
            borderWidth: 4,
            color: requestData.lineColor2,
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
                offset: 0, color: requestData.lineColor2 // 0% 处的颜色
              }, {
                offset: 1, color: '#fff' // 100% 处的颜色
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
          data: requestData.lineData2
        }
      ]
    }
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }
  requestData = {
    title: ['个人', '公司'],
    color: '#b4b4b4',
    titleData: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'],
    lineData1: [0.14, 0.11, 0.29, 0.22],
    lineColor1: '#ff9933',
    lineData2: [0.06, 0.05, 0.18, 0.19],
    lineColor2: '#00ae66',
  }
  renderCompanyLineChart('data', requestData);

});
