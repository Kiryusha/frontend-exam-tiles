import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';

Vue.use(Vuex);

const app = new Vue({
    store,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
