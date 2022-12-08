<template>
  <div>
    <div style="margin: 10px">
      <el-row :gutter="20">
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <span>运行状态</span> <br /><span style="color: #8be5ca">运行</span>
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
            <span>开机率</span><br />
            <span>6.56%</span>
          </div></el-col
        >
      </el-row>
    </div>
    <!-- 主体图 -->
    <div class="box-img">
      <img
        src="https://pic.vjshi.com/2017-03-01/0f6d8b9e92ec7ee18d5ed00516a17bab/00002.jpg?x-oss-process=style/watermark"
        alt=""
      />
    </div>
    <!-- 列表图 -->
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        style="text-align: center"
      >
        <el-menu-item index="2" style="width: 50%">
          <router-link
            to="/message/work_massage"
            replace
            style="text-decoration: none"
            >工位信息</router-link
          >
        </el-menu-item>
        <el-menu-item index="1" style="width: 50%">
          <router-link
            to="/message/report_list"
            replace
            style="text-decoration: none"
            >报警列表</router-link
          >
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 展示 -->
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "message-",
  data() {
    return {
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
  height: 200px;
}
.box-img img {
  width: 100%;
  height: 100%;
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
.text-color {
  color: blue;
}
</style>
