<template>
  <v-app>
    <AppToolBar />
    <v-content>
      <TestUsers v-bind:users="users" />
      <FormValidation />
    </v-content>
  </v-app>
</template>

<script>
import TestUsers from "./components/TestUsers";
import FormValidation from "./components/FormValidation";
import AppToolBar from "./components/AppToolbar";

export default {
  name: "App",

  components: {
    TestUsers,
    FormValidation,
    AppToolBar
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
