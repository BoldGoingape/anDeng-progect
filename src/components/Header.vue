<template>
  <div>
    <el-header style="height: 100px">
      <h1>{{ HeadTitle }}</h1>
      <div style="display: flex; justify-content: flex-end">
        <div style="width: 70px">
          <el-select
            v-model="value"
            placeholder="车间"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <!-- 2 -->
        <div style="width: 70px">
          <el-select
            v-model="value"
            placeholder="车间"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <!-- 3 -->
        <div style="width: 70px">
          <el-select
            v-model="value"
            placeholder="车间"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤dfdds",
        },
      ],
      value: "车间",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      this.HeadTitle = data;
    });
  },
};
</script>

<style>
.el-header {
  background-color: #1083fb;
  height: 150px;
  line-height: 60px;
  padding-right: 0px;
}
.wj-input__inner i {
  width: 30px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 20px;
}
.wj-input__inner input {
  padding: 0 8px;
  border: 0px;
  color: aliceblue;
  width: 70px;
  background-color: #1083fb;
}
</style>
