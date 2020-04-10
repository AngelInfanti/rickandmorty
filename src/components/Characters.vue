<template>
  <div class="example-3d">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="form-group">
          <input
            autocomplete="off"
            class="form-control text-center"
            type="text"
            v-model="search"
            placeholder="Search Caracter for name"
            id="search"
          />
        </div>
      </div>
    </div>

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="result in filters" v-bind:key="result.id"
        ><img :src="result.image"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Characters",
  props: {
    characters: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },

  data: function() {
    return {
      search: "",
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
  },
  computed: {
    filters() {
      let filter = new RegExp(this.search, "i");

      let result = this.characters.results.filter(el => el.name.match(filter));

      return result;
    }
  }
};
</script>

<style lang="stylus" scoped>
.example-3d {
    width : 100%
    height: 400px;
    padding-top: 50px;
    padding-bottom: 100px;
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
      font-size: 24px;
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
