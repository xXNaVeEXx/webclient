<template>
  <div class="home">
    <h1>Test</h1>
    <TestUsers />
  </div>
</template>

<script>
// @ is an alias to /src
import TestUsers from "@/components/TestUsers.vue";

export default {
  name: "home",
  components: {
    TestUsers
  }
};
</script>
