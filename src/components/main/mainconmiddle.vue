<template>
  <div class="back flex_center">
    <div class="width64">
      <div
        class="flex_between"
        style="align-item: center; margin-top: 50px; margin-bottom: 20px"
      >
        <h1 style="color: white">무비차트</h1>
        <h3 style="color: gray">더보기+</h3>
      </div>

      <div class="con">
        <div class="no1div" style="position: relative" v-if="state.url">
          <img :src="state.url[0]" class="no1divimg" />
          <div class="btnwrap">
            <button class="btn">상세정보</button>
            <button class="btn" style="background: #037b94; border: none">
              예매
            </button>
          </div>
          <div class="number"><h1 style="margin-top: 20px">NO.1</h1></div>
        </div>

        <div class="otherdiv" v-if="state.movies[0]">
          <h1 class="movietitle">{{ state.movies[0].mtitle }}</h1>
          <h4>감독 : {{ state.movies[0].mdirector }}</h4>
          <h4>배우 : {{ state.movies[0].mactor }}</h4>
          <h4>평점 : {{ state.movies[0].mgpa }}</h4>
          <h4>상영시간 : {{ state.movies[0].mtime }}분</h4>

          <div class="flex_between" v-if="state.url">
            <div style="position: relative" v-for="(a, i) in 4" :key="i">
              <img :src="state.url[i + 1]" class="otherdivimg" />
              <div class="othertitlediv">
                <h4>{{ state.movies[i + 1].mtitle }}</h4>
              </div>

              <div class="othernumber">
                <h4 style="margin-top: 10px">NO.{{ a + 1 }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import MovieScroll from "../home/MovieScroll.vue";
import axios from "axios";

export default {
  components: { MovieScroll },
  setup() {
    const state = reactive({
      count: 0,
      page: 1,
      movies: [],
    });

    const handleImageUrl = async () => {
      state.url = [];
      for (let i = 0; i < state.movies.length; i++) {
        const url = `/TEAMMOVIE/api/movie/get_main_poster?mcode=${state.movies[i].mcode}`;
        const headers = { "Content-type": "application/json" };
        const response = await axios.get(url, { headers });
        if (response.data.status === 200) {
          if (response.data.poster.pimageUrl != null) {
            state.url.push(response.data.poster.pimageUrl);
          } else {
            state.url.push(
              "/TEAMMOVIE/movie/poster?pcode=" + response.data.poster.pcode
            );
          }
        }
      }
    };

    // 영화데이터 가져오기
    const handleData = async () => {
      state.movies = [];
      const url = `/TEAMMOVIE/api/movie/select?size=10&page=${state.page}&title=&mscode=1&genre=0&sort=1`;
      const headers = { "Content-type": "application/json" };
      const response = await axios.get(url, headers);
      console.log(response.data.status);
      if (response.data.status === 200) {
        state.movies = response.data.movies;
        console.log(state.movies);
      }
      handleImageUrl();
    };
    onMounted(() => {
      handleData();
    });

    return {
      state,
      handleImageUrl,
      handleData,
    };
  },
};
</script>

<style scoped>
@import url("../css/grid.css");
.othertitlediv {
  color: white;
  overflow: hidden;
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.othernumber {
  color: white;
  position: absolute;
  top: -10px;
  background: #da3f31;
  width: 50px;
  height: 60px;
  text-align: center;
  left: -20px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.otherdivimg {
  border-radius: 10px;
  display: block;
  width: 150px;
}

.movietitle {
  border-bottom: 1px solid grey;
  margin: 0;
  padding-bottom: 30px;
  color: white;
}

.otherdiv {
  width: 100%;
  padding-left: 40px;
  color: white;
}

.number {
  color: white;
  position: absolute;
  top: -10px;
  background: #32627f;
  width: 100px;
  height: 110px;
  text-align: center;
  left: -20px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.btnwrap {
  display: flex;
  justify-content: space-between;
}

.btn {
  background: transparent;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  width: 115px;
  height: 50px;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
}

.no1divimg {
  border-radius: 10px;
  display: block;
  width: 250px;
}

.back {
  background: #252451;
  height: 800px;
  width: 100%;
}

.width64 {
  width: 64%;
  height: 100%;
}
.con {
  display: flex;
}
</style>