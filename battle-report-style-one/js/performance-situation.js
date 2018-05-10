$(function () {
  //指定图标的配置和数据
  // var option = {
  //   grid: {
  //     show: false, //是否显示直角坐标系网格
  //     top: '15%',
  //     right: 0,
  //     left: 0
  //   },
  //   xAxis: {
  //     data: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'],
  //     axisLine: {
  //       show: false
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     axisLabel: {
  //       color: '#52503a',
  //       interval: '0',
  //     }
  //   },
  //   yAxis: {
  //     // type: 'value',
  //     show: false,
  //     splitLine: { show: false }
  //   },
  //   series: [
  //     {
  //       type: 'bar',
  //       itemStyle: {
  //         normal: {
  //           color: '#3e3c2e'
  //         }
  //       },
  //       silent: true,
  //       barWidth: 22,
  //       barGap: '-100%', // Make series be overlap
  //       data: [{
  //         value: 3900,
  //         label: {
  //           show: true,
  //           position: 'top',
  //           formatter: '996',   //数字文本
  //           color: '#c1bb87'   //数字文字颜色
  //         }
  //       }, {
  //         value: 3900,
  //         label: {
  //           show: true,
  //           position: 'top',
  //           formatter: '1120',
  //           color: '#c1bb87'
  //         }
  //       }, {
  //         value: 3900,
  //         label: {
  //           show: true,
  //           position: 'top',
  //           formatter: '3300',
  //           color: '#c1bb87'
  //         }
  //       }, {
  //         value: 3900,
  //         label: {
  //           show: true,
  //           position: 'top',
  //           formatter: '3900',
  //           color: '#c1bb87'
  //         }
  //       }]  // Maxmath
  //     }, {
  //       type: 'bar',
  //       barWidth: 22,
  //       data: [{
  //         value: 996
  //       }, {
  //         value: 1120
  //       }, {
  //         value: 3300
  //       }, {
  //         value: 3900
  //       }],
  //       itemStyle: {
  //         color: '#ffc601'
  //       },
  //       barGap: '-100%',
  //       z: 10,
  //     }]
  // };

  //初始化echarts实例
  // var myChart = echarts.init(document.getElementById('newHouse'));
  //使用制定的配置项和数据显示图表
  // myChart.setOption(option);


  var data = {}


  function renderCompanyBarChart(data) {
    var _this = this;
    var option = {
      grid: {
        show: false, //是否显示直角坐标系网格
        top: '15%',
        right: 0,
        left: 0
      },
      xAxis: {
        data: ['1-1至1-20', '2-1至2-20', '3-1至3-20', '4-1至4-20'], // data
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#52503a', //  字体color
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
            color: '#79cd65' // 柱形底色
          },
          silent: true,
          barWidth: 22,
          label: {
            show: true,
            position: 'top',
            color: '#c1bb87'   //数字文字颜色
          },
          data: [{
            // value: data.MaxValue
            value: 3900,  // max
            label: {
              formatter: '996',  //数字文本
            }
          }, {
            value: 3900,
            label: {
              formatter: '1120',
            }
          }, {
            value: 3900,
            label: {
              formatter: '3300',
            }
          }, {
            value: 3900,
            label: {
              formatter: '3900',
            }
          }]  // Maxmath
        },
        {
          type: 'bar',
          barWidth: 22,
          data: [996, 1120, 3300, 3900],
          itemStyle: {
            color: '#ffc601'
          },
          barGap: '-100%',  // 偏移
          z: 10,
        }]
    };
    var myChart = echarts.init(document.getElementById(data));
    myChart.setOption(option);
  }

  renderCompanyBarChart('newHouse');
  renderCompanyBarChart('threeSales');
  renderCompanyBarChart('threeRent');
});
