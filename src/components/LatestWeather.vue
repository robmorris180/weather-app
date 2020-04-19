<template>
  <div class="card text-center">
    <div class="card-header">Latest weather in: {{ address }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ forecast.current.weather[0].main }}</h5>
      <p class="card-text">Temperature: {{ forecast.current.temp }} °C</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestWeather",
  props: {
    forecast: Object,
    address: String
  }
};
</script>

<style lang="scss" scoped></style>
