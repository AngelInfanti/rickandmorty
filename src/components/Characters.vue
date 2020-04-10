<template>
  <div>
    <div class="example-3d" v-if="characters.length > 0">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="result in characters" v-bind:key="result.id">
          <a class="column col-xs-6" id="caption"
            ><span class="text"
              ><h1 class="font-rickmorty character-name">
                {{ result.name }}
              </h1></span
            ><img :src="result.image"
          /></a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div v-else class="font-rickmorty  not-found">
      <h2>No features found to: {{ search }}</h2>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Characters",
  props: {
    characters: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },

  data: function() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 3000
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.example-3d {
    width : 100%
    height: 400px;
    padding-top: 50px;
    padding-bottom: 0px;
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
      font-size: 12px;
      background-color: #FFFFFF;
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

  .not-found
    font-size: 80px;
    -webkit-text-fill-color: #16ACC9; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    text-shadow: 3px 3px 3px #C9D149;


  .character
    cursor: pointer
  .character:hover
    transform: scale(1.2);



  /*With Simple Caption*/
  .column#caption
    position: relative;

  .character-name
    -webkit-text-fill-color: #16ACC9; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    text-shadow: 3px 3px 3px #C9D149;

  .column#caption .text
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      opacity: 0;
      transition: all 0.8s ease;

  .column#caption .text h1
      margin: 0;
      color: black;

  .column#caption:hover .text
    opacity: 1;


  .column#caption:hover img
    -webkit-filter: opacity(.2);
    filter: opacity(0.7);
</style>
