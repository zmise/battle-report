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
        data: ['七星经理', '六星经理', '五星经理', '四星经理', '三星经理', '二星经理', '一星经理', '超级合伙人', '高级合伙人', '合伙人', '预备合伙人', '培训期', '考研期'],
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
            color: '#c1bb87',   //数字文字颜色
            formatter:'{c}%'
          },
          //  数据 值
          data: [50, 100, 88, 91, 73, 68, 67, 57, 51, 51, 55, 
            {
            value: 35, label: {
              color: 'red'  //特殊值的颜色 判断
            },
          },
            {
            value: 36, label: {
              color: 'red'  //特殊的颜色
            },
          },
],
        }

      ]
    };
    var myChart = echarts.init(document.getElementById(data));
    myChart.setOption(option);
  }
  renderCompanyColumnBarChart('columnBar');



});

