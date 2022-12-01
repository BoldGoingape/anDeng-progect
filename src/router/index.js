//
import VueRouter from "vue-router";
//引入跳转组件
import heart from "../Body/heart";
import manage from "../Body/manage";
import message from "../Body/message";
import obj from "../Body/obj-list";
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
    },
    {
      path: "/manage",
      component: manage,
    },
    {
      path: "/message",
      component: message,
    },
    {
      path: "/obj",
      component: obj,
    },
  ],
});
