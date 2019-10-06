import Vue from 'vue';
import VueQrcodeReader from 'vue-qrcode-reader';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import vueMoment from 'vue-moment';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueQrcodeReader);
Vue.use(vueMoment);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
