<template>
  <v-form v-model="valid">
    <v-container fill-height fluid>
      <v-row align-content="center" justify="center" align="center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align-content="center" justify="center" align="center">
        <v-col cols="12" md="4">
          <v-text-field
            align="center"
            justify="center"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align-content="center" justify="center" align="center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="adress"
            :rules="adressRules"
            label="Adresse"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    adress: "",
    adressRules: [v => !!v || "Adress is required"]
  })
};
</script>
