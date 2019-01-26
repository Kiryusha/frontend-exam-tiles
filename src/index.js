import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(Vuex);

const app = new Vue({
    store,
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
