<template>
  <div>
    <h1 class="font-rickmorty tittle">Resultado</h1>
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="result in characters.results"
        v-bind:key="result.id"
      >
        <div class="col-md-12">
          <img :src="result.image" />
        </div>
        <div class="col-md-12">
          <button class="font-rickmorty btn btn-primary mb-2 mt-2">
            {{ result.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Characters",
  props: {
    characters: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
.tittle
    color: #03adc7;
</style>
