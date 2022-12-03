<template>
  <div>
    <h1>{{ HeadTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "heart-",
  data() {
    return {
      HeadTitle: "",
    };
  },
  mounted() {
    this.$bus.$emit("hello", this.$route.query.title);
  },
};
</script>

<style></style>
