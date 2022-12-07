<template>
  <div>
    <div id="myChart" :style="{ width: '100%', height: '300px' }"></div>
    <div id="myChartTwo" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: "hello-",
  data() {
    return {
      Errdata: ["分钟 ", "生产", "维修", "工艺", "质量", "物流"],
      TiemData: [0, 5, 2, 5, 14, 10],
    };
  },
  mounted() {
    this.drawLine();
    this.drawLineTwo();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "时间汇总", subtext: "", left: "center" },
        tooltip: {},
        xAxis: {
          data: this.Errdata,
        },
        yAxis: {},
        series: [
          {
            name: "数据",
            type: "bar",
            data: this.TiemData,
          },
        ],
      });
    },
    // 图标二
    drawLineTwo() {
      // var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(document.getElementById("myChartTwo"));
      var option;

      option = {
        title: { text: "次数汇总", subtext: "", left: "center" },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["次数", "生产", "维修", "工艺", "质量", "物流"],
        },
        yAxis: {
          type: "value",
        },
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#ff5f2d", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#ffe9db", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        // visualMap: {
        //   type: "piecewise",
        //   show: false,
        //   dimension: 0,
        //   // seriesIndex: 0,

        // },
        series: [
          {
            data: [0, 5, 7, 9, 8, 7],
            type: "line",
            areaStyle: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
  padding-top: 100px;
}
#newCharts {
  margin: 0 auto;
  width: 800px;
  height: 800px;
}
</style>
