import Vue from "vue";
import App from "./App.vue";
//引入Elemui组件库
import ElementUi from "element-ui";
//引入Elemeui样式库
import "element-ui/lib/theme-chalk/index.css";
//引入VueRouter
import VueRouter from "vue-router";
//引入bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
//
//引入echarts
import * as echarts from "echarts"; //在import的后面，echarts的前面加一个 * as
//vue全局注入echarts
Vue.prototype.$echarts = echarts;

//注册组件
Vue.prototype.$echarts = echarts;
//引入路由器
import router from "./router";
Vue.config.productionTip = false;
Vue.use(ElementUi);
//应用插件
Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router: router,
}).$mount("#app");
