<template>
  <div style="margin-top: 35px">
    <el-row>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col>
              <el-card
                :body-style="{ padding: '10px' }"
                style="
                  border: 1px solid #46a0fc;
                  background-color: #edf6ff;
                  text-align: center;
                "
              >
                <img src="../assets/anquan.png" class="image" />
                <div style="padding: 0px">
                  <div class="bottom clearfix">
                    <!-- <span>安全</span> -->
                    <el-button type="text" class="button">安全</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col>
              <el-card
                :body-style="{ padding: '10px' }"
                style="
                  border: 1px solid #46a0fc;
                  background-color: #edf6ff;
                  text-align: center;
                "
              >
                <img src="../assets/zhiliang.png" class="image" />
                <div style="padding: 0px">
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">质量</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col>
              <el-card
                :body-style="{ padding: '10px' }"
                style="
                  border: 1px solid #46a0fc;
                  background-color: #edf6ff;
                  text-align: center;
                "
              >
                <img src="../assets/yanfa.png" class="image" />
                <div style="padding: 0px">
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">研发</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- 第二 -->
    <el-row>
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col>
              <el-card
                :body-style="{ padding: '10px' }"
                style="
                  border: 1px solid #46a0fc;
                  background-color: #edf6ff;
                  text-align: center;
                "
              >
                <img src="../assets/kufang.png" class="image" />
                <div style="padding: 14px">
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">库房</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col>
              <el-card
                :body-style="{ padding: '10px' }"
                style="
                  border: 1px solid #46a0fc;
                  background-color: #edf6ff;
                  text-align: center;
                "
              >
                <img src="../assets/shengchan.png" class="image" />
                <div style="padding: 14px">
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">生产</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col>
              <el-card
                :body-style="{ padding: '10px' }"
                style="
                  border: 1px solid #46a0fc;
                  background-color: #edf6ff;
                  text-align: center;
                "
              >
                <img src="../assets/gongyi.png" class="image" />
                <div style="padding: 14px">
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">工艺</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "img-",
  mounted() {
    this.$bus.$emit("hello", this.$route.query);
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /* background: #99a9bf; */
}
.bg-purple {
  /* background: #d3dce6; */
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
/* 卡片样式 */
.time {
  font-size: 25px;

  /* color: #999; */
}

.bottom {
  margin-top: 0px;
  line-height: 20px;
}

.button {
  padding: 0;
  /* float: right; */
}

.image {
  width: 60%;
  height: 60px;
  margin: 0 auto;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
