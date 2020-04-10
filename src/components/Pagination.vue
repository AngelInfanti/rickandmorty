<template>
  <div class="container">
    <div class="col-md-12">
      <div class="overflow-auto">
        <div class="mt-3">
          <b-pagination
            align="center"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-number
            last-number
            pills
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      rows: 25,
      perPage: 1,
      currentPage: 1
    };
  },
  methods: {
    handlePage(page) {
      this.$emit("click", page);
    }
  },
  watch: {
    currentPage: {
      handler: function(val) {
        this.$emit("click", val);
      }
    }
  }
};
</script>

<style></style>
