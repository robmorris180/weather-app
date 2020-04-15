<template>
  <div class="card text-center">
    <div class="card-header">Latest weather in: {{ address }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ forecast.current.weather[0].main }}</h5>
      <p class="card-text">
        {{ icons[forecast.current.weather[0].icon] }}
        {{ forecast.current.temp }} °C
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestWeather",
  props: {
    forecast: Object,
    address: String
  },
  data() {
    return {
      icons: {
        "01d": "🌞",
        "02d": "⛅",
        "03d": "🌤",
        "04d": "🌥",
        "05d": "🚿",
        "06d": "🌧",
        "07d": "🌩",
        "08d": "⛄",
        "09d": "🕶"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
