<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Weather App ⛅</a>
    </nav>
    <main>
      <search-weather @update:location="updateLocation" />
      <latest-weather
        v-if="this.$store.getters.forecast"
        :forecast="this.$store.getters.forecast"
        :address="this.$store.getters.address"
      />
    </main>
  </div>
</template>

<script>
import API from "@/lib/API";
import LatestWeather from "./components/LatestWeather.vue";
import SearchWeather from "./components/SearchWeather.vue";

export default {
  name: "App",
  components: {
    LatestWeather,
    SearchWeather
  },
  data() {
    return {
      address: "",
      forecast: null
    };
  },
  methods: {
    loadWeather(lat, lon) {
      let coordinates = {
        lat,
        lon
      };
      this.$store.dispatch("getForecast", coordinates);
      this.$store.dispatch("getAddress", coordinates);
    },
    updateLocation(location) {
      API.getCoordinates(location).then(result => {
        this.loadWeather(result.coord.lat, result.coord.lon);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}
</style>
