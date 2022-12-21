import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.prototype.window = window;

if (process.env.NODE_ENV === 'production') {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }
    i[r].l = 1 * new Date()
    a = s.createElement(o)
    m = s.getElementsByTagName(o)[0]
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga')
  // eslint-disable-next-line
  ga('create', 'UA-5355512-14', 'auto')
  // eslint-disable-next-line
  ga('send', 'pageview')
}

let router = new VueRouter({
  mode: 'history',
  routes: [],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

