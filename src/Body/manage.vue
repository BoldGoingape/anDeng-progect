<template>
  <div>
    <div class="div-box">
      <div class="img-box">
        <img src="../assets/anquan.png" alt="安全" />
        <span>安全</span>
      </div>
      <div class="img-box">
        <img src="../assets/zhiliang.png" alt="质量" />
        <span>质量</span>
      </div>
      <div class="img-box">
        <img src="../assets/yanfa.png" alt="研发" />
        <span>研发</span>
      </div>
    </div>
    <div class="div-box">
      <div class="img-box">
        <img src="../assets/kufang.png" alt="库房" />
        <span>库房</span>
      </div>
      <div class="img-box">
        <img src="../assets/shengchan.png" alt="生产" />
        <span>生产</span>
      </div>
      <div class="img-box">
        <img src="../assets/gongyi.png" alt="工艺" />
        <span>工艺</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manage-",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query.title);
  },
};
</script>

<style>
.div-box {
  display: flex;
}
.img-box {
  width: 110px;
  height: 110px;
  margin: 5px;
  border: 1px solid#74b7fe;
  text-align: center;
  font-weight: bolder;
  border-radius: 10px;
  background-color: #edf6ff;
}
.img-box img {
  width: 80%;
  height: 60px;
  margin: 10px;
}
</style>
