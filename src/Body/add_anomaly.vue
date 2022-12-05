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
            name: "",
            type: "bar",
            data: this.TiemData,
          },
        ],
      });
    },
  },
  // 图标二
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
