<template>
  <div>
    <h1>我是工位列表</h1>
  </div>
</template>

<script>
export default {
  name: "obj-list",
  mounted() {
    this.$bus.$emit("hello", this.$route.query.title);
  },
};
</script>

<style></style>
