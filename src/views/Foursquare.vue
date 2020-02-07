<template>
  <div class="forsquare">
    <div class="foursquareInput, text-center">
      <v-form @submit="onSubmit" v-model="valid">
        <v-container fill-height fluid>
          <v-row align="center" justify="center" align-content="center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="category"
                :rules="fieldRules"
                label="Category"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" align-content="center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="radius"
                :rules="fieldRules"
                label="Radius"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col cols="6" md="4">
              <v-btn type="submit" small color="primary">Suchen</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div v-bind:key="locationinfo.id" v-for="locationinfo in getData">
      <div v-bind:key="group.id" v-for="group in locationinfo.groups">
        <div v-bind:key="item.referralId" v-for="item in group.items">
          <v-row justify="center" align="center" align-content="center">
            <v-col cols="12" md="4">
              <v-card class="mx-auto" max-width="400">
                <div
                  v-bind:key="category.id"
                  v-for="category in item.venue.categories"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>{{ item.venue.name }}</v-card-title>
                  </v-img>
                </div>

                <v-card-subtitle class="pb-0"
                  >{{ item.venue.location.address }},
                  {{ item.venue.location.postalCode }}
                  {{ item.venue.location.city }}</v-card-subtitle
                >

                <v-card-text class="text--primary">
                  <div>distance: {{ item.venue.location.distance }} Meter</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text>
                    Share
                  </v-btn>

                  <v-btn color="orange" text>
                    Explore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Foursquare",
  methods: {
    ...mapActions([
      "fetchData",
      "getLocalInformation",
      "fetchIP",
      "fetchLocation"
    ]),
    onSubmit(e) {
      e.preventDefault();
      if (!this.valid) {
        alert("Please fill the required fields");
        return;
      }
      const payload = {
        latitude: this.getLocation.data.geo.latitude,
        longitude: this.getLocation.data.geo.longitude,
        category: this.category,
        radius: this.radius
      };
      this.getLocalInformation(payload);
    }
  },
  computed: {
    ...mapGetters({
      getData: "getData",
      getIP: "getIP",
      getLocation: "getLocation"
    })
  },

  created() {
    this.fetchData();
    this.fetchIP().then(() => {
      this.fetchLocation(this.getIP.response.ip);
    });
  },
  data: () => ({
    valid: false,
    latitude: "",
    longitude: "",
    fieldRules: [v => !!v || "required"]
  })
};
</script>

<style scoped></style>
