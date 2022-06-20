<template>
  <div class="back">
    <video class="videobox" autoplay muted>
      <source src="../../assets/video/login.mp4" type="video/mp4" />
    </video>
    <div class="navback" id="target">
      <navvar></navvar>
      <mainback></mainback>
      <maincon></maincon>
      <mainconmiddle></mainconmiddle>
      <mainconbottom></mainconbottom>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import Navvar from "../nav/navvar.vue";
import Maincon from "../main/maincon.vue";
import Mainback from "../main/mainback.vue";
import Mainconmiddle from "../main/mainconmiddle.vue";
import Mainconbottom from "../main/mainconbottom.vue";
export default {
  components: { Navvar, Maincon, Mainback, Mainconmiddle, Mainconbottom },

  setup() {
    const state = reactive({
      count: 0,
      scroll: 0,
    });

    function aa() {
      console.log("aa");
    }
    function bb() {
      console.log("bb");
    }

    // onMounted(() => {
    //   document
    //     .getElementById("target")
    //     .addEventListener("scroll", function () {});
    // });

    return { state, aa, bb };
  },
};
</script>

<style scoped>
@import url("../css/grid.css");
.navback {
  width: 100%;
  height: 110vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 15px;
}
.videobox {
  width: 100%;
}
.back {
  position: relative;
  top: -15px;
}
</style>