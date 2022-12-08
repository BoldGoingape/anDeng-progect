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
                    <span data-index="0" @click="showData($event)">工艺</span>
                    <!-- <el-button type="text" class="button">安全</el-button> -->
                    <!-- <el-popconfirm
                      x="10"
                      title="提交安全问题吗？"
                      @confirm="showData($event)"
                    >
                      <el-button slot="reference" type="text" class="button"
                        >安全</el-button
                      > 
                    </el-popconfirm>-->
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
                    <span data-index="1" @click="showData($event)">生产</span>
                    <!-- <el-popconfirm
                      title="提交质量问题吗？"
                      @confirm="showData($event)"
                    >
                      <el-button
                        data-index="002"
                        slot="reference"
                        type="text"
                        class="button"
                        >质量</el-button
                      >
                    </el-popconfirm> -->
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
                    <span data-index="2" @click="showData($event)">库房</span>
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
                    <span data-index="3" @click="showData($event)">研发</span>
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
                    <span data-index="4" @click="showData($event)">质量</span>
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
                    <span data-index="5" @click="showData($event)">安全</span>
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
import { nanoid } from "nanoid";
import $ from "jquery";
export default {
  name: "img-",
  data() {
    return {
      auditData: [],
      work_shop_id: "",
      product_line_id: "",
      station_id: "",
      auditDataID: "",
      dateTiem: new Date().toLocaleString(),
      info: {},
    };
  },

  methods: {
    showData(e) {
      // console.log(e.target.dataset.index);
      let index = e.target.dataset.index;
      this.info = {
        issue_type_id: this.auditData[index].id, //问题类型
        duty_department_id: this.auditData[index].duty_department_id[0], //责任部门
        duty_person_id: this.auditData[index].duty_person_id[0], //责任人
        issue_grede_id: this.auditData[index].issue_grade_id[0], //问题等级
        work_shop_id: this.auditDataID.work_shop_id,
        product_line_id: this.auditDataID.product_line_id,
        station_id: this.auditDataID.station_id,
        ecalation_time: this.dateTiem,
        id: parseInt(Math.random() * 100000),
        operator_type: 0,
      };
      console.log(nanoid());
      //发送请求
      let user = JSON.parse(sessionStorage.getItem("user"));
      let data = this.info;
      data = JSON.stringify(data);
      if (this.auditDataID.station_id) {
        $.ajax({
          url: "http://8.142.1.120/rex/r/180570716453060608/data",
          dataType: "json",
          type: "POST",
          data: data,
          headers: {
            //修改请求方式为json(默认为form-data)
            "Content-Type": "application/json;charset=UTF-8",
            //在这里向请求头中加入token携带发送
            Authorization: "Bearer " + user.token,
            "X-Tenant-Id": user.tenant_id, //租户id
            "X-Team-Id": user.team_id, //组织id
          },
          success: function () {
            alert("提交成功");
          },
          error: function () {
            throw "出错啦";
          },
        });
      } else {
        alert("请选择车间产线工位");
      }
    },
  },
  mounted() {
    this.$bus.$on("audit", (data) => {
      this.auditData = data;
    });
    this.$bus.$on("id", (data) => {
      this.auditDataID = data;
    });
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
