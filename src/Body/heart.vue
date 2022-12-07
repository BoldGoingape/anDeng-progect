<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="text-align: center"
    >
      <el-menu-item index="1" style="width: 50%">
        <router-link
          to="/heart/report_message"
          replace
          style="text-decoration: none"
          >实时报警情况</router-link
        >
      </el-menu-item>
      <el-menu-item index="2" style="width: 50%">
        <router-link
          to="/heart/add_anomaly"
          replace
          style="text-decoration: none"
          >添加异常汇总</router-link
        >
      </el-menu-item>
    </el-menu>
    <div class="line">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "heart-",
  data() {
    return {
      HeadTitle: "",
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect() {},
  },
  mounted() {
    this.$bus.$emit("hello", this.$route.query);
  },
};
</script>

<style scoped>
.box-img {
  width: 100%;
  height: 250px;
  background-color: pink;
}
</style>
