<template>
  <div class="">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="700px"
      v-loading="loading"
    >
      <el-table-column prop="address" label="工位名称"> </el-table-column>
      <el-table-column prop="name" label="报警等级">
        <template scope="scope">
          <span v-if="scope.row.name === '等级一'" style="color: red">{{
            scope.row.name
          }}</span>
          <span v-if="scope.row.name === '等级二'" style="color: #fa9e18">{{
            scope.row.name
          }}</span>
          <span v-if="scope.row.name === '等级三'" style="color: green">{{
            scope.row.name
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="报警时间"> </el-table-column>
      <el-table-column prop="" label="到场处理">
        <template scope="scope">
          <span
            ><el-button
              type="warning"
              plain
              size="small"
              @click="Handle(scope.row.id)"
              >处理</el-button
            ></span
          >
        </template>
      </el-table-column>
      <el-table-column prop="address" label="验收" width="0">
        <template scope="scope">
          <span>
            <el-button
              type="primary"
              plain
              size="small"
              @click="check(scope.row.id)"
              >验收&nbsp;</el-button
            ></span
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
export default {
  name: "obj-list",
  data() {
    return {
      loading: "true",
      tableData: [],
      dateTime: new Date().toLocaleString(),
    };
  },
  methods: {
    //验收方法
    Handle(id) {
      var user = JSON.parse(sessionStorage.getItem("user"));
      axios({
        url: `http://8.142.1.120/rex/r/180570716453060608/data/${id}`,
        method: "PUT",
        headers: {
          //151315828379048320
          //修改请求方式为json(默认为form-data)
          "Content-Type": "application/json;charset=UTF-8",
          //在这里向请求头中加入token携带发送
          Authorization: "Bearer " + user.token,
          "X-Tenant-Id": user.tenant_id, //租户id
          "X-Team-Id": user.team_id, //组织id
        },
        data: {
          handle_time: this.dateTime,
          operator_type: 1,
          record_information: "wwj到场处理",
        },
      }).then(
        () => {},
        (error) => {
          throw error;
        }
      );
    },
    check(id) {
      var user = JSON.parse(sessionStorage.getItem("user"));
      axios({
        url: `http://8.142.1.120/rex/r/180570716453060608/data/${id}`,
        method: "PUT",
        headers: {
          //151315828379048320
          //修改请求方式为json(默认为form-data)
          "Content-Type": "application/json;charset=UTF-8",
          //在这里向请求头中加入token携带发送
          Authorization: "Bearer " + user.token,
          "X-Tenant-Id": user.tenant_id, //租户id
          "X-Team-Id": user.team_id, //组织id
        },
        data: {
          check_time: this.dateTime,
          operator_type: 2,
          remark: "wwj确认验收",
        },
      }).then(
        () => {},
        (error) => {
          throw error;
        }
      );
    },
  },
  mounted() {
    var user = JSON.parse(sessionStorage.getItem("user"));
    let storyOrders = [];
    axios({
      url: "http://8.142.1.120/rex/r/180570716453060608/data",
      method: "GET",
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
    }).then((response) => {
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
          storyOrders = data;
        },
        error: function (err) {
          console.log(err);
        },
      });
      setTimeout(() => {
        for (let index = 0; index < response.data.length; index++) {
          for (let indexx = 0; indexx < storyOrders.length; indexx++) {
            if (
              response.data[index].issue_grade_id[0] === storyOrders[indexx].id
            ) {
              this.tableData.push({
                id: response.data[index].id,
                address: "产线一",
                date: response.data[index].create_time,
                name: storyOrders[indexx].grade_name,
              });
            }
            // address: response.data[indexx].__product_line_id[0].v,
          }
        }
        this.loading = false;
      }, 1000);
    });
    //发送Ajax请求

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
      success() {},
      error: function (err) {
        throw err;
      },
    });
    //头部标题的路由
    this.$bus.$emit("hello", this.$route.query);
  },
};
</script>

<style scoped></style>
