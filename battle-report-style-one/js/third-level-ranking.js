$(function () {

  var data = {}

  function renderCompanyColumnBarChart(data) {
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        show: false, //是否显示直角坐标系网格
        left: '0',
        right: '15%',
        bottom: '0',
        top: '0',
        containLabel: true
      },
      xAxis: {
        show: false,
        type: 'value',
      },
      yAxis: {
        type: 'category',
        // inverse: true, // 反向坐标轴
        // data: ['北京', '南京', '广州', '苏州', '佛山', '中山', '香港', '珠海', '杭州', '深圳东', '深圳西', '上海', '深圳中'],
        data: ['深圳中', '上海', '深圳西', '深圳东', '杭州', '珠海', '香港', '中山', '佛山', '苏州', '广州', '南京', '北京'],
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
      series: [
        {
          type: 'bar',
          barWidth: 14,
          silent: true,
          itemStyle: {
            color: '#79cd65' // 柱形底色
          },
          label: {
            show: true,
            position: 'right',
            color: '#c1bb87'   //数字文字颜色
          },
          data: [{
            value: 7972, itemStyle: {
              color: '#ffc601'  //特殊的颜色
            },
          }, 3860, 3527, 2573, 2403, 1768, 1511, 1065, 910, 848, 418, 348, 187],
        }

      ]
    };
    var myChart = echarts.init(document.getElementById(data));
    myChart.setOption(option);
  }
  renderCompanyColumnBarChart('columnBar');



});
