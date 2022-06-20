<template>
  <div class="backcon">
    <div class="con">
      <div class="item"></div>
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
    </div>
    <div class="con" style="height: 20%">
      <div class="item"></div>
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
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

<style scoped>
@import url("../css/grid.css");

.backcon {
  width: 100%;
  height: 100vh;
  background: transparent;
}

.con {
  display: flex;
  height: 100%;
}
.item {
  width: 18%;
  border: 1px solid gray;
  height: 100%;
  border-left: none;
}
.item1 {
  width: 32%;
  border: 1px solid gray;
  height: 100%;
  border-left: none;
}
.item2 {
  width: 32%;
  border: 1px solid gray;
  height: 100%;
  border-left: none;
}
.item3 {
  width: 18%;
  border: 1px solid gray;
  height: 100%;
  border-left: none;
}
</style>