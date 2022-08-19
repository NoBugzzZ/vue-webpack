import Vue from "vue";
import { say, getDate } from "./util";
import "./style.scss";

say();
Vue.component("my-component", {
  template: '<img :src="url" />',
  data() {
    return {
      url: require("./assets/home.ico"),
    };
  },
});
Vue.component("my-eriri", {
  template: '<img :src="url" />',
  data() {
    return {
      url: require("./assets/eriri.jpeg"),
    };
  },
});
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
  methods: {
    async fetchDate() {
      const data = await getDate();
      this.message = data;
    },
  },
  created() {
    this.fetchDate();
  },
});
