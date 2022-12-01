<template>
  <div id="app">
    <!-- <boxVue></boxVue> -->
    <HeaderVue></HeaderVue>
    <MainVue></MainVue>
    <guideVue></guideVue>
  </div>
</template>

<script>
// import boxVue from "./components/box.vue";
import HeaderVue from "./components/Header.vue";
import guideVue from "./components/guide.vue";
import MainVue from "./components/Main.vue";
export default {
  name: "App",
  components: {
    // boxVue,
    guideVue,
    MainVue,
    HeaderVue,
  },
};
</script>

<style>
* {
  margin: 0 0;
  padding: 0 0;
}
</style>
