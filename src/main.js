import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import Vue from 'vue';

Vue.use(VueRouter);
Vue.use(router);

createApp(App).mount('#app')
