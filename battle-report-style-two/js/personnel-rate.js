$(function () {


  function renderCompanyColumnBarChart(name, requestData) {
    var barData = requestData.data;
    for (var i = 0; i < requestData.specialIndex.length; i++) {
      barData[requestData.specialIndex[i]] = {
        value: barData[requestData.specialIndex[i]], label: {
          color: requestData.specialColor  //特殊的颜色
        },
      }
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
        // data: ['七星经理', '六星经理', '五星经理', '四星经理', '三星经理', '二星经理', '一星经理', '超级合伙人', '高级合伙人', '合伙人', '预备合伙人', '培训期', '考研期'],
        data: requestData.titleData,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: requestData.color, //  字体color
          interval: '0',
        }
      },
      series: [
        {
          type: 'bar',
          barWidth: 14,
          silent: true,
          itemStyle: {
            color: requestData.barColor // 柱形底色
          },
          label: {
            show: true,
            position: 'right',
            color: requestData.barTextColor,   //数字文字颜色
            formatter: '{c}%'
          },
          data: barData,
          //  数据 值
          // data: [50, 100, 88, 91, 73, 68, 67, 57, 51, 51, 55,
          //   {
          //     value: 35, label: {
          //       color: 'red'  //特殊值的颜色 判断
          //     },
          //   },
          //   {
          //     value: 36, label: {
          //       color: 'red'  //特殊的颜色
          //     },
          //   },
          // ],
        }

      ]
    };
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }
  var requestData = {
    data: [50, 100, 88, 91, 73, 68, 67, 57, 51, 51, 55, 35, 36],//value值
    titleData: ['七星经理', '六星经理', '五星经理', '四星经理', '三星经理', '二星经理', '一星经理', '超级合伙人', '高级合伙人', '合伙人', '预备合伙人', '培训期', '考研期'],//y轴标题
    textColor: '#52503a', //y轴字体颜色
    barColor: '#79cd65', // 柱形颜色
    barTextColor: '#c1bb87', //value值的颜色
    specialIndex: [11, 12],  //标记的颜色
    specialColor: 'red', //标记的颜色
  }

  renderCompanyColumnBarChart('columnBar', requestData);



});

