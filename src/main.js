import Vue from 'vue'
import App from './App'
import store from './store';
import router from './router';
import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
