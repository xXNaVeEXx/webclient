<template>
  <div class="user">
    <h3>{{ user.name }}</h3>
    <h3>{{ user.email }}</h3>
    <h3>{{ user.adresse }}</h3>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user"]
};
</script>

<style scoped></style>
