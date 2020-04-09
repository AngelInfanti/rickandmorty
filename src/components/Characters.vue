<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="result in characters.results" v-bind:key="result.id"
        ><img :src="result.image"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <!-- <div>
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="result in characters.results"
        v-bind:key="result.id"
      >
        <div class="character col-md-12">
          <img :src="result.image" />
        </div>
        <div class="col-md-12">
          <button class="font-rickmorty btn btn-primary mb-2 mt-2">
            {{ result.name }}
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Characters",
  props: {
    characters: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: function() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 3000,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.example-3d {
    width : 100%
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;
      font-size: calc($font-size-huge * 2);
      background-color: #2C8DFB;
      background-position: center;
      background-size: cover;
      color: $white;
    }

    .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: $white;
      }
    }
  }


.character
  cursor: pointer
.character:hover
  transform: scale(1.2);
</style>
