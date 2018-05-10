$(function () {

  function renderCompanyLineChart(name, requestData) {
    var option = {
      title: {
        text: requestData.title,
        left: '0',
        top: '10',
        textStyle: {
          fontSize: '24',
          color: '#000'
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
          type: 'line',
          smooth: false,
          lineStyle: { width: 1, color: requestData.lineColor },
          itemStyle: {
            borderWidth: 4,
            color: requestData.lineColor,
          },
          label: {
            show: true,
          },
          // data: [0, 0, 10, 0]// housePrice
          data: requestData.lineData
        }
      ]
    }
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }
  requestData = {
    title: 'xxxxxx',
    titleData: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'],
    color: '#b4b4b4',
    lineData: [0, 0, 10, 0],
    lineColor: '#ff9933',
  }
  renderCompanyLineChart('data', requestData);

});
