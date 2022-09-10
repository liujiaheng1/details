<template>
  <div>
    <p @click="login">登录页</p>
    <el-button>点击</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/index");
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
p {
  font-size: 12px;
}
</style>
