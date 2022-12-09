<template>
  <div>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%"
      height="350px"
    >
      <el-table-column prop="address" label="工位信息"> </el-table-column>
      <el-table-column prop="name" label="报警等级"> </el-table-column>
      <el-table-column prop="date" label="报警时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      loading: true,
      product_line_id: "",
      report_Data: "",
      storyOrder: [],
      workList: "",
      tableData: [{}],
    };
  },
  methods: {
    shwoData(is) {
      let storyOrders = [];
      let tableDatas = [];
      var tableDatass = [];
      let user = JSON.parse(sessionStorage.getItem("user"));
      // var workList = this.workList;
      $.ajax({
        url: "http://8.142.1.120/rex/r/180570716453060608/data",
        dataType: "json",
        type: "GET",
        data: {
          limit: "100",
        },
        headers: {
          //151315828379048320
          //修改请求方式为json(默认为form-data)
          "Content-Type": "application/json;charset=UTF-8",
          //在这里向请求头中加入token携带发送
          Authorization: "Bearer " + user.token,
          "X-Tenant-Id": user.tenant_id, //租户id
          "X-Team-Id": user.team_id, //组织id
        },
        success(data) {
          this.report_Data = data;

          tableDatas = this.report_Data.filter((datas) => {
            return datas.station_id[0] === is;
          });

          for (let index = 0; index < tableDatas.length; index++) {
            tableDatass.push(tableDatas[index]);
          }
        },
        error: function (err) {
          throw err;
        },
      });
      console.log("8", tableDatas);

      // 问题等级三个等级
      $.ajax({
        url: " http://8.142.1.120/rex/r/179437927070547968/data",
        dataType: "json",
        type: "GET",
        data: {
          limit: "100",
        },
        headers: {
          //修改请求方式为json(默认为form-data)
          "Content-Type": "application/json;charset=UTF-8",
          //在这里向请求头中加入token携带发送
          Authorization: "Bearer " + user.token,
          "X-Tenant-Id": user.tenant_id, //租户id
          "X-Team-Id": user.team_id, //组织id
        },
        success: function (data) {
          for (let index = 0; index < data.length; index++) {
            storyOrders.push(data[index]);
          }
        },
        error: function (err) {
          console.log(err);
        },
      });

      setTimeout(() => {
        this.tableData = [];
        for (let index = 0; index < tableDatass.length; index++) {
          for (let index = 0; index < storyOrders.length; index++) {
            if (
              tableDatass[index].issue_grade_id[0] === storyOrders[index].id
            ) {
              this.tableData.unshift({
                date: storyOrders[index].create_time,
                name: storyOrders[index].grade_name,
                address: this.workList,
              });
            }
          }
        }
      }, 1500);
    },
  },
  watch: {
    product_line_id: {
      handler: function (newVal) {
        this.shwoData(newVal);
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      },
      immediate: true,
    },
  },
  mounted() {
    this.$bus.$on("product_line_id", (data) => {
      this.product_line_id = data;
    });
    //接收车间
    this.$bus.$on("label", (data) => {
      this.workList = data;
      console.log("520", this.workList);
    });
  },
};
</script>

<style></style>
