<template>
  <div class="home">
    <TestUsers v-bind:users="users" />
    <FormValidation />
  </div>
</template>

<script>
// @ is an alias to /src
import TestUsers from "@/components/TestUsers.vue";
import FormValidation from "@/components/FormValidation.vue";

export default {
  name: "home",
  components: {
    TestUsers,
    FormValidation
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
