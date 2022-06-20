<template>
  <div class="backcon" @scroll="scrollm()">
    <div class="con">
      <div class="item">
        <img src="../../assets/hallview/hall1.png" />
      </div>
      <div class="item1">
        <div class="couplecinema">
          <h1 style="margin-bottom: 10px">내 계좌부터 카드, 대출까지</h1>
          <h1 style="margin-top: 0px">한눈에 확인해요</h1>
          <button class="circlebtn">
            <h1 style="margin: 0px; color: #ebebeb">></h1>
          </button>
          <img
            src="../../assets/hallview/hall3(1).png"
            class="couplecinemaimg"
          />
        </div>
      </div>
      <div class="item2">
        <div class="item2div">
          <img
            src="https://t1.daumcdn.net/kakaopay/20211101161056/4a60f0df16.png"
            style="width: 120px"
          />
          <h1 style="margin-bottom: 10px">카카오페이,</h1>
          <h1 style="margin-top: 0px">모두가 안심하고 사용하고 있어요</h1>

          <button class="circlebtn">
            <h1 style="margin: 0px; color: #ebebeb">></h1>
          </button>
        </div>

        <div class="couplecinema" style="bottom: 15%">
          <h1 style="margin-bottom: 10px">집에서 배달, 게임은 물론</h1>
          <h1 style="margin-top: 0px">가까운 마트에서 쇼핑하세요</h1>
          <button class="circlebtn">
            <h1 style="margin: 0px; color: #ebebeb">></h1>
          </button>
          <img
            src="../../assets/hallview/hall2(1).png"
            class="couplecinemaimg"
          />
        </div>
      </div>
      <div class="item3"></div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import MovieScroll from "../home/MovieScroll.vue";

export default {
  components: { MovieScroll },

  setup() {
    const state = reactive({
      count: 0,
      scroll: 0,
    });

    function scrollm() {
      state.scroll += 1;
      console.log(state.scroll);
    }

    return {
      state,
      scrollm,
    };
  },
};
</script>

<style scoped>
@import url("../css/grid.css");
.circlebtn {
  background: white;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  border: 1px solid #ebebeb;
}

.backcon {
  width: 100%;
  height: 200vh;
  background: white;
}

.con {
  display: flex;
  height: 100%;
}
.item img {
  width: 278.5%;
  position: absolute;
  top: 10%;
}
.item2div {
  width: 278.5%;
  position: absolute;
  top: 10%;
  padding-left: 35px;
}

.item {
  width: 18%;
  border: 1px solid #ebebeb;
  height: 100%;
  border-left: none;
  position: relative;
}
.item1 {
  width: 32%;
  border: 1px solid #ebebeb;
  height: 100%;
  border-left: none;
  position: relative;
}
.item2 {
  width: 32%;
  border: 1px solid #ebebeb;
  height: 100%;
  border-left: none;
  position: relative;
}
.item3 {
  width: 18%;
  border: 1px solid #ebebeb;
  height: 100%;
  border-left: none;
}
.couplecinema {
  position: absolute;
  bottom: 10%;
}
.couplecinemaimg {
  width: 100%;
  margin-top: 8%;
}
</style>