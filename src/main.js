import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.prototype.window = window;

let router = new VueRouter({
  mode: 'history',
  routes: [],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

