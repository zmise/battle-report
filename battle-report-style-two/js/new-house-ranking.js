$(function () {
  var data = {}

  function renderCompanyColumnBarChart(name, requestData) {
    var barData = requestData.data;
    barData[requestData.specialIndex] = {
      value: barData[requestData.specialIndex], itemStyle: {
        color: requestData.specialColor  //特殊的颜色
      },
    }
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
        data: requestData.titleData,
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
            color: '#333'   //数字文字颜色
          },
          // data: [{
          //   value: 7972, itemStyle: {
          //     color: '#ffc601'  //特殊的颜色
          //   },
          // }, 3860, 3527, 2573, 2403, 1768, 1511, 1065, 910, 848, 418, 348, 187],
          data: barData,
        }

      ]
    };
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }
  var requestData = {
    data: [7972, 3860, 3527, 2573, 2403, 1768, 1511, 1065, 910, 848, 418, 348, 187],//value值
    titleData: ['深圳中', '上海', '深圳西', '深圳东', '杭州', '珠海', '香港', '中山', '佛山', '苏州', '广州', '南京', '北京'], //y轴标题
    textColor: '#abaaa6', //y轴字体颜色
    barColor: '#79cd65', //柱形颜色
    barTextColor: '#333', //value值的颜色
    specialIndex: 0,
    specialColor: '#ffc601',
  }
  renderCompanyColumnBarChart('columnBar', requestData);

});
