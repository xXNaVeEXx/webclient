<template>
  <div class="home">
    <h1>Test</h1>
    <TestUsers />
    <Foursquare />
  </div>
</template>

<script>
// @ is an alias to /src
import TestUsers from "@/components/TestUsers.vue";
import Foursquare from "@/components/Foursquare.vue";

export default {
  name: "home",
  components: {
    TestUsers,
    Foursquare
  }
};
</script>
