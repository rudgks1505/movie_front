<template>
  <div class="flex_between nav" :style="state.navobj" @mouseenter="navf()">
    <div class="flex_between_item"><h1>TM</h1></div>
    <div class="flex_between_item1">
      <h4 @mouseenter="state.tab = 1">예매</h4>
      <h4 @mouseenter="state.tab = 2">영화</h4>
      <h4 @mouseenter="state.tab = 3">영화관</h4>
      <h4 @mouseenter="state.tab = 4">게시판</h4>
    </div>
    <div class="flex_between_item">dropbtn</div>
  </div>
  <navvar-1></navvar-1>
</template>

<script>
import { reactive } from "vue";
import navvar1 from "./navvar1.vue";

export default {
  components: { navvar1 },
  setup() {
    const state = reactive({
      count: 0,
      tab: 0,
      navobj: {},
    });

    function navf() {
      state.navobj.background = "white";
      state.navobj.color = "black";
    }

    return {
      state,
      navf,
    };
  },
};
</script>

<style scoped>
@import url("../css/grid.css");

.nav {
  color: white;
  top: 0px;
  width: 100%;
}

.flex_between_item {
  width: 150px;
  text-align: center;
}
.flex_between_item1 {
  display: flex;
}
.flex_between_item1 h4 {
  width: 110px;
  text-align: center;
}
</style>