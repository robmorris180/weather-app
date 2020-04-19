<template>
  <form @submit.prevent="updateLocation">
    <div class="input-group mb3">
      <input
        v-model="location"
        type="text"
        class="form-control"
        placeholder="Enter location"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="submit">
          Go
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchWeather",
  data() {
    return {
      location: ""
    };
  },
  methods: {
    updateLocation() {
      this.$emit("update:location", this.location);
    }
  }
};
</script>

<style lang="scss" scoped></style>
