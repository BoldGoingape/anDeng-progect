//
import VueRouter from "vue-router";
//引入跳转组件
import heart from "../Body/heart";
import manage from "../Body/manage";
import message from "../Body/message";
import obj from "../Body/obj-list";
import report_message from "../Body/report_message";
import add_anomaly from "../Body/add_anomaly";
import report_list from "../Body/report_list";
import work_massage from "../Body/work_masage";
export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "manage",
    },
    {
      //监控中心
      path: "/heart",
      component: heart,
      children: [
        {
          path: "/",
          component: report_message,
        },
        {
          path: "report_message",
          component: report_message,
        },
        {
          path: "add_anomaly",
          component: add_anomaly,
        },
      ],
    },
    {
      path: "/manage",
      component: manage,
    },
    {
      path: "/message",
      component: message,
      children: [
        {
          path: "/",
          component: report_list,
        },
        {
          path: "report_list",
          component: report_list,
        },
        {
          path: "work_massage",
          component: work_massage,
        },
      ],
    },
    {
      path: "/obj",
      component: obj,
    },
  ],
});
