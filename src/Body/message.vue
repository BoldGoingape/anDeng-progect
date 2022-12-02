<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <span>运行状态</span> <span style="color: #8be5ca">运行</span>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <span>启机</span> <br /><span style="color: #1486fb"> 24天</span>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <span>停机</span><br /><span>324天</span>
        </div></el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <span>开机率</span> <span>6.56%</span>
        </div></el-col
      >
    </el-row>
    <!-- 主体图 -->
    <div class="box-img"></div>
    <!-- 列表图 -->
  </div>
</template>

<script>
export default {
  name: "message-",
};
</script>

<style>
.box-img {
  width: 100%;
  height: 200px;
  background-color: pink;
}
.el-row {
  margin-bottom: 20px;
  background-color: #ffffff;
  margin: -10px;
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #7f0eac;
}
.bg-purple {
  /* background: #d3dce6; */
}
.bg-purple-light {
  /* background: #e5e9f2; */
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 0px 0px;
  background-color: #1347b1;
}
</style>
