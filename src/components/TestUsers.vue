<template>
  <div class="user">
    <div v-bind:key="user.id" v-for="user in users">
      <User v-bind:user="user" />
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "TestUsers",
  components: {
    User
  },
  props: ["users"]
};
</script>

<style scoped></style>
