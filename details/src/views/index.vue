<template>
  <div class="indexAll">
    <div class="Sidebar">
      <Sidebar />
    </div>
    <div class="body">
      <div class="header">
        <Header />
      </div>
      <div class="main">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/index";
import Sidebar from "@/components/sidebar/index";
import Main from "@/views/main.vue";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { Header, Main, Sidebar },
};
</script>

<style scoped lang="scss">
.indexAll {
  display: flex;
  & > .Sidebar {
    width: 300px;
  }
  & > .body {
    width: 100%;
  }
}
</style>
