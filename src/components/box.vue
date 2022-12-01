<template>
  <div>
    <HeaderVue></HeaderVue>
    <MainVue></MainVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from "./Header.vue";
import FooterVue from "./Footer.vue";
import MainVue from "./Main.vue";
export default {
  name: "box-",
  components: {
    HeaderVue,
    FooterVue,
    MainVue,
  },
};
</script>

<style></style>
