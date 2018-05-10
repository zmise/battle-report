$(function () {

  function renderCompanyPieChart(name, requestData) {


    var pieData1 = [];
    for (var i = 0; i < requestData.data.length; i++) {
      pieData1[i] = {
        selected: true,
        value: requestData.data[i]
      }
    }

    var pieData2 = [];
    for (var j = 0; j < requestData.data.length; j++) {
      pieData2[j] = {
        selected: true,
        value: requestData.data[j],
        name: requestData.name[j],
        itemStyle: {
          color: requestData.dataColor[j]
        }
      }
    }
    console.log(pieData2);

    var option = {
      title: {
        show: true,
        text: '{a|' + requestData.time + '}月',  // 3月
        x: 'center',
        y: 'center',
        textStyle: {
          color: '#2d2a16',
          rich: {
            a: {
              fontSize: 26,
              fontWeight: 700,
            },
          }
        }
      },
      legend: {
        type: 'scroll',
        show: false
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '75%'],
          selectedMode: 'multiple',
          selectedOffset: 2,
          startAngle: 270,
          label: {
            show: true,
            position: 'inner',
            formatter: "{d}%",
            color: '#fff'
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            opacity: 0
          },
          data: pieData1
        },
        {
          type: 'pie',
          radius: ['40%', '75%'],
          selectedOffset: 2,
          startAngle: 270,
          label: {
            show: true,
            position: 'outside',
            color: '#999'
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: pieData2
        }
      ]
    }
    var myChart = echarts.init(document.getElementById(name));
    myChart.setOption(option);
  }

  var requestData = {
    time: 3,
    data: [38, 13, 49],
    name: ['直接访问', '邮件营销', '联盟广告'],
    dataColor: ['#79cd65', '#1782b4', '#ffc601']
  }
  renderCompanyPieChart('pie1', requestData);
  var requestData = {
    time: 4,
    data: [20, 30, 50],
    name: ['三级售', '其他售', '新房售'],
    dataColor: ['#79cd65', '#1782b4', '#ffc601']


  }

  renderCompanyPieChart('pie2', requestData);
});
