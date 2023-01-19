import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
// import router from './router'

Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)

// import Ninjas from './Ninja.vue'
// Vue.component('ninjas', Ninjas)

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

// vue-router
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

export const bus = new Vue();

// Custom directives
// Vue.directive('rainbow', {
//   bind(el, binding, vnode){ // bind() : a lifecycle hook when the directive is bind to an element
//       el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// });

// Vue.directive('theme', {
//   
// });

// Vue.filter('to-uppercase', function(value: string){
//   return value.toUpperCase();
// });

// Vue.filter('snippet', function(value: string) {
//   return value.slice(0, 100) + ' ...';
// });

const app = new Vue({
  pinia: createPinia(),
  render: (h) => h(App),
  // App.vue : route component -> render to index.html
  router: router
})

app.$mount('#app') // same as el : '#app'
