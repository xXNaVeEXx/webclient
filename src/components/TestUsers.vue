<template>
  <div class="users">
    <div v-bind:key="user.id" v-for="user in getUsers">
      <User v-bind:user="user" />
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
import { mapGetters } from "vuex";
export default {
  name: "TestUsers",
  components: {
    User
  },
  computed: mapGetters(["getUsers"])
};
</script>

<style scoped></style>
