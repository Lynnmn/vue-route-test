import Vue from 'vue';
import router from '../router/router';
// import store from './store/store';
// import mock from './server/mock';

Vue.config.debug = true;

window.log = console.log;

let data = {
    router
}

const app = new Vue(data).$mount('#app');



