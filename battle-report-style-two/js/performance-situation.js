$(function () {
  function renderCompanyBarChart(name, requestData) {
    var _this = this;

    var barData2 = [];
    for (var i = 0; i < requestData.data.length; i++) {
      barData2[i] = {
        value: requestData.MaxValue,
        label: {
          formatter: '' + requestData.data[i],
        }
      }
    }
    var option = {
      grid: {
        show: false, //是否显示直角坐标系网格
        top: '15%',
        right: 0,
        left: 0
      },
      xAxis: {
        data: requestData.titleData, // data
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: requestData.textColor, //  字体color
          interval: '0',
        }
      },
      yAxis: {
        show: false,
        splitLine: { show: false }
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: requestData.barColor1 // 柱形底色
          },
          silent: true,
          barWidth: 22,
          label: {
            show: true,
            position: 'top',
            color: requestData.barTextColor1   //数字文字颜色
          },
          data: barData2,
        },
        {
          type: 'bar',
          barWidth: 22,
          data: requestData.data,
          itemStyle: {
            color: requestData.barColor2
          },
          barGap: '-100%',  // 偏移
          z: 10,
        }]
    };
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }
  var requestData = {
    data: [996, 1120, 3300, 3900],//value值
    MaxValue: 3900,//Maxvalue值
    titleData: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'], //x轴标题
    textColor: '#a9a9a9', //x轴字体颜色
    barColor1: '#fff4cc', //浅色柱形颜色
    barTextColor1: '#2d2a16', //value值的颜色
    barColor2: '#ffc601',//深色柱形颜色
  }
  renderCompanyBarChart('newHouse', requestData);
  requestData = {
    data: [796, 1323, 3300, 3900],
    MaxValue: 3900,
    titleData: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'],
    textColor: '#a9a9a9',
    barColor1: '#e4f5e0',
    barTextColor1: '#2d2a16',
    barColor2: '#79cd65',
  }
  renderCompanyBarChart('threeSales', requestData);
  requestData = {
    data: [200, 600, 1000, 1400],
    MaxValue: 1400,
    titleData: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'],
    textColor: '#a9a9a9',
    barColor1: '#d1e6f0',
    barTextColor1: '#2d2a16',
    barColor2: '#1782b4',
  }
  renderCompanyBarChart('threeRent', requestData);
});
