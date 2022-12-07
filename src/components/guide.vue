<template>
  <div>
    <div class="footer_guide">
      <router-link
        to="/manage?title=Andon管理&id=001 "
        class="guide_item"
        active-class="on"
        replace
      >
        <span class="item_icon">
          <img src="../assets/andon_btn.png" alt="" />
        </span>
        <span>Andon管理</span>
      </router-link>
      <router-link
        to="/message?title=工位信息&id=002"
        class="guide_item"
        active-class="on"
        replace
      >
        <span class="item_icon">
          <img src="../assets/xinxi_btn.png" alt="" />
        </span>
        <span>工位信息</span>
      </router-link>
      <router-link
        to="/obj? title=工位列表&id=003"
        class="guide_item"
        active-class="on"
        replace
      >
        <span class="item_icon">
          <img src="../assets/gongwei_btn.png" alt="" />
        </span>
        <span>工位列表</span>
      </router-link>
      <router-link
        to="/heart? title=监控中心&id=004"
        class="guide_item"
        active-class="on"
        replace
      >
        <span class="item_icon">
          <img src="../assets/jiankong_btn.png" alt="" />
        </span>
        <span>监控中心</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "guide-",
  methods: {
    go_img(x) {
      console.log("几号");
      console.log(x);
    },
  },
};
</script>

<style scoped>
.footer_guide {
  position: fixed;
  text-decoration: none;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 1px;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
}
.guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  text-decoration: none;
  color: #999999;
}
.on {
  color: rgb(34, 32, 168);
  /* content: url(../assets/andon_press_btn.png); */
}
span {
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.iconfont {
  font-size: 22px;
}
.item_icon {
  margin-top: -5px;
}
.item_icon img {
  width: 20px;
  height: 20px;
}
</style>
