<template>
  <div class="flex_center" style="align-items: unset; position: relative">
    <div class="flex_center_item">
      <h5>일반상영관</h5>
      <h5>커플상영관</h5>
      <h5>프리미엄관</h5>
    </div>
    <div class="flex_center_item">
      <h5>영화검색</h5>
      <h5>영화문의</h5>
    </div>
    <div class="flex_center_item">
      <h5>일반상영관</h5>
      <h5>커플상영관</h5>
      <h5>프리미엄관</h5>
    </div>
    <div class="flex_center_item">
      <h5>공지게시판</h5>
      <h5>문의게시판</h5>
      <h5>자유게시판</h5>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      state,
    };
  },
};
</script>

<style  scoped>
@import url("../css/grid.css");

.flex_center_item {
  background: white;
  width: 110px;
  text-align: center;
  top: 0px;
  z-index: 3;
  color: gray;
}
</style>