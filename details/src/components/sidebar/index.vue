<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="12">
        <h5 class="title">小窝</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="2" route="/index/helloWord">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="tally">记账</span>
          </el-menu-item>
          <el-menu-item index="3" route="/index/var">
            <i class="el-icon-document"></i>
            <span slot="title">暂时未定</span>
          </el-menu-item>
          <el-menu-item index="4" route="/index/mySetting">
            <i class="el-icon-setting"></i>
            <span slot="title">我的</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    tally() {
      this.$router.push("/index/helloWord");
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  width: 100%;
  & > .tac,
  .el-row {
    width: 100%;
    height: 100%;
    background: #75878a;
  }
  & > .el-col,
  .el-col-12 {
    width: 100%;
    height: 100% !important;
  }
}
.title {
  padding-left: 50px;
  color: white;
  background: red;
}
</style>
