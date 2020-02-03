<template>
  <div class="home">
    <TestUsers v-bind:users="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import TestUsers from "@/components/TestUsers.vue";

export default {
  name: "home",
  components: {
    TestUsers
  },
  data() {
    return {
      users: [
        {
          name: "Gamzat",
          email: "test@gmail.de",
          adresse: "diesestraße 45"
        },
        {
          name: "Gamzat2",
          email: "test@gmail.de",
          adresse: "diesestraße 45"
        },
        {
          name: "Gamzat3",
          email: "test@gmail.de",
          adresse: "diesestraße 45"
        }
      ]
    };
  }
};
</script>
