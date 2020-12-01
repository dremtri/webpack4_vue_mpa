import Vue from "vue";
import '@utils/registerGlobalPlugin'
import Main from './main.vue'

new Vue({
  render: h => h(Main)
}).$mount("#app");