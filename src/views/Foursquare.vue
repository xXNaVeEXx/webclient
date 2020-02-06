<template>
  <div class="forsquare">
    <div v-bind:key="locationinfo.id" v-for="locationinfo in getData">
      {{ locationinfo.headerFullLocation }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Foursquare",
  methods: mapActions(["fetchData"]),
  computed: mapGetters(["getData"]),
  created() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
