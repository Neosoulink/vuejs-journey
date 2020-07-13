import Vue from 'vue';
import VueResource from 'vue-resource';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BootstrapVue } from 'bootstrap-vue';

import App from './App.vue';

Vue.use(VueResource);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.http.options.root = 'https://jsonplaceholder.typicode.com';

Vue.http.interceptors.push( (request, next) => {
  next((res) => {
    if (request.after) {
      request.after.call(this, res);
    }
  })
});

new Vue({
  render: h => h(App),
}).$mount('#app')
