<template>
  <div class="backcon">
    <div class="con">
      <div class="item"></div>
      <div class="item1">
        <div class="item1_item"></div>
        <div class="item1_div">
          <h1>플레이그라운드</h1>
          <img src="../../assets/arrow.png" />
        </div>
      </div>
      <div class="item2"><div class="item2_item"></div></div>
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
.item1_item {
  width: 100%;
  height: 100%;
  margin-left: auto;
  border: none;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  border-left: 1px solid grey;
  position: absolute;
  right: 56%;
}
.item2_item {
  width: 100%;
  height: 100%;
  margin-right: auto;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  border-right: 1px solid grey;
  left: 56%;
  position: absolute;
}

.backcon {
  width: 100%;
  height: 90vh;
}

.con {
  display: flex;
  height: 80%;
}
.item {
  width: 18%;
  border: 1px solid grey;
  height: 100%;
  border-left: none;
}
.item1 {
  width: 32%;
  border: 1px solid grey;
  height: 100%;
  border-left: none;
  position: relative;
}
.item2 {
  width: 32%;
  border: 1px solid grey;
  height: 100%;
  border-left: none;
  position: relative;
}
.item3 {
  width: 18%;
  border: 1px solid grey;
  height: 100%;
  border-left: none;
}
.item1 h1 {
  color: white;
  font-size: 60px;
  margin-bottom: 20px;
}
.item1 button {
  color: gray;
  font-size: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid gray;
  border-radius: 40px;
  width: 170px;
  height: 55px;
}
.item1_div {
  position: absolute;
  bottom: 3%;
}
.item1_div img {
  width: 20%;
  margin-left: 62%;
}
</style>