<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Emoji Weather App ⛅</a>
    </nav>
    <main>
      <div class="input-group mb-3">
        <input
          v-model="location"
          @keyup.enter="updateLocation"
          type="text"
          class="form-control"
          placeholder="Enter location"
        />
        <div class="input-group-append">
          <button
            @click="updateLocation"
            class="btn btn-outline-secondary"
            type="button"
          >
            Go
          </button>
        </div>
      </div>
      <latest-weather v-if="forecast" :forecast="forecast" :address="address" />
    </main>
  </div>
</template>

<script>
import API from "@/lib/API";
import LatestWeather from "./components/LatestWeather.vue";

export default {
  name: "App",
  components: {
    LatestWeather
  },
  data() {
    return {
      address: "",
      location: "",
      forecast: null
    };
  },
  methods: {
    async loadWeather(lat, lon) {
      const [address, forecast] = await Promise.all([
        API.getAddress(lat, lon),
        API.getForecast(lat, lon)
      ]);
      this.address = address.name;
      this.forecast = forecast;
    },
    updateLocation() {
      API.getCoordinates(this.location).then(result => {
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
