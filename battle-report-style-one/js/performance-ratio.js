$(function () {
  var myChart = echarts.init(document.getElementById('data'));
  myChart.setOption({
    title: {
      show: true,
      text: '{a|3}月',  // 3月
      x: 'center',
      y: 'center',
      textStyle: {
        color: '#c1bb87',
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
          position: 'inner', color: '#c1bb87',
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

        data: [
          { selected: true, value: 38 }, //圆环的颜色和名字，占比
          { selected: true, value: 13 },
          { selected: true, value: 49 },
        ]

      },
      {
        type: 'pie',
        radius: ['40%', '75%'],
        selectedOffset: 2,
        startAngle: 270,
        label: {
          show: true,
          position: 'outside'
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { selected: true, value: 38, name: '直接访问', itemStyle: { color: '#ffc601' }, }, //圆环的颜色和名字，占比
          { selected: true, value: 13, name: '邮件营销', itemStyle: { color: '#79cd65' }, },
          { selected: true, value: 49, name: '联盟广告', itemStyle: { color: '#1782b4' }, },
        ]
      }
    ]
  });
});
