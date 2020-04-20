import Vue from "vue";
import Vuex from "vuex";
import API from "./lib/API";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    address: "",
    forecast: null
  },
  getters: {
    forecast(state) {
      return state.forecast;
    },
    address(state) {
      return state.address;
    }
  },
  actions: {
    async getForecast(context, payload) {
      const forecast = await API.getForecast(payload.lat, payload.lon);
      context.commit("setForecast", forecast);
    },
    async getAddress(context, payload) {
      const address = await API.getAddress(payload.lat, payload.lon);
      context.commit("setAddress", address);
    }
  },
  mutations: {
    setForecast(state, forecast) {
      state.forecast = forecast;
    },
    setAddress(state, address) {
      state.address = address.name;
    }
  }
});
