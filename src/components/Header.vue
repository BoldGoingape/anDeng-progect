<template>
  <div>
    <el-header style="height: 100px">
      <h1 style="padding-top: 10px">{{ HeadTitle }}</h1>
      <div style="display: flex; justify-content: flex-end">
        <!-- 下拉1 -->
        <div style="width: 70px">
          <el-select
            v-model="workshop_value"
            placeholder="车间"
            size="mini"
            class="wj-input__inner"
            @change="slectChange($event)"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in workshop_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <!-- 下拉2 -->
        <div style="width: 70px">
          <el-select
            v-model="produce_value"
            placeholder="产线"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in produce_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <!-- 下拉3 -->
        <div style="width: 70px">
          <el-select
            v-model="workList_value"
            placeholder="工位"
            size="mini"
            class="wj-input__inner"
          >
            <el-option
              class="wj-input__inner"
              v-for="item in workList_options"
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
import md5 from "js-md5";
import $ from "jquery";
export default {
  name: "header-",
  data() {
    return {
      HeadTitle: "Andon管理",
      workshop_options: [],
      produce_options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      workList_options: [
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
          label: "北京烤鸭",
        },
      ],
      workshop_value: "车间",
      produce_value: "产线",
      workList_value: "工位",
    };
  },
  methods: {
    slectChange(value) {
      console.log(value);
    },
  },
  mounted() {
    var selectArr = [];
    $.ajax({
      url: "http://8.142.1.120/khaan/oauth/token",
      type: "POST",
      dataType: "json",
      data: JSON.stringify({
        username: "liqinkun",
        password: md5("123456"),
        grant_type: "password",
        scope: "server",
      }),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        //在这里向请求头中加入token携带发送
        Authorization: "Basic dGVzdDp0ZXN0",
      },
      success: function (data) {
        // console.log(data);
        let user = {
          token: data.access_token,
          tenant_id: data.tenants[0].id,
          team_id: data.tenants[0].rootTeamId,
        };
        sessionStorage.setItem("user", JSON.stringify(user));
      },
      error: function (err) {
        console.log(err);
      },
    });
    //ajax2
    let user = JSON.parse(sessionStorage.getItem("user"));
    $.ajax({
      url: "http://8.142.1.120/rex/r/180135654829965312/data",
      type: "get",
      dataType: "json",
      data: {
        type: 1,
      },
      headers: {
        //修改请求方式为json(默认为form-data)
        "Content-Type": "application/json;charset=UTF-8",
        //在这里向请求头中加入token携带发送
        Authorization: "Bearer " + user.token,
        "X-Tenant-Id": user.tenant_id, //租户id
        "X-Team-Id": user.team_id, //组织id
      },
      success: function () {
        //这个是主页
        // console.log(data);
      },
      error: function (err) {
        console.log(err);
      },
    });

    $.ajax({
      url: " http://8.142.1.120/rex/r/179503208451129344/data",
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
        //车间产线工位
        selectArr = data.filter((item) => {
          return item.ms_type == 1;
        });
      },
      error: function (err) {
        console.log(err);
      },
    });

    setTimeout(() => {
      for (let index = 0; index < selectArr.length; index++) {
        this.workshop_options.unshift({
          value: selectArr[index].id,
          label: selectArr[index].ms_name,
        });
      }
    }, 500);
    // console.log(this.options[0].id);
    //注册全局事件
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
  line-height: 38px;
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
  width: 75px;
  background-color: #1083fb;
}
</style>
