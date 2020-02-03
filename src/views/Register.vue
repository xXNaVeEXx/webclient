<template>
  <div class="register">
    <FormValidation />
  </div>
</template>

<script>
// @ is an alias to /src
import FormValidation from "@/components/FormValidation.vue";

export default {
  name: "register",
  components: {
    FormValidation
  }
};
</script>
