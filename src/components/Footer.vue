<template>
  <div>
    <el-footer>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "footer-",
};
</script>

<style>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
