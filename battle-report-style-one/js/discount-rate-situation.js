$(function () {


  function renderCompanyColumnBarChart(name) {
    var option = {
      title:{
        text:data.name,
        right:'0',
        top:'10',
        textStyle:{
        fontSize:'30',
        color:'#fff'
        }     
      },
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
        // data: ['北京', '南京', '广州', '苏州', '佛山', '中山', '香港', '珠海', '杭州', '深圳东', '深圳西', '上海', '深圳中',
        data: ['100%以上', '90%-100%', '80%-90%', '70%-80%', '60%-70%', '50%-60%', '40%-50%', '30%-40%', '0%-30%'],
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
            color: data.color // 柱形底色
          },
          label: {
            show: true,
            position: 'right',
            color: '#c1bb87'   //数字文字颜色
          },
          data: [551, 86, 108, 81, 50, 33, 7, 4, 0],
        }

      ]
    };
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }

    var data = {
    color:'#79cd65',
    name:'租'
  }
  renderCompanyColumnBarChart('columnBar',data);
     data = {
    color:'#1782B4',
    name:'售'
    
  }
  renderCompanyColumnBarChart('columnBar1',data);



});
