<template>
  <div>
    <el-header>
      <!-- <h3>{{ HeadTitle }}</h3> -->
      <div>
        <select name="" id="workshop">
          <option value="">车间</option>
          <option value="">车间1</option>
        </select>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "header-",
  data() {
    return {
      HeadTitle: "Andon管理",
    };
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
.el-header {
  background-color: #0a80fc;
  color: #333;

  line-height: 60px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
