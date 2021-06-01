import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import AuthHandler from './components/AuthHandler.vue';
import UploadForm from './components/UploadForm.vue';
import ImageList from './components/ImageList.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // browser router
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/upload', component: UploadForm },
    { path: '/', component: ImageList },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
