/* eslint global-require: "off" */
/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import news from './modules/news';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loadingQueue: [],
        error: {},
    },
    mutations: {
        ADD_LOADING(state, payload) {
            state.loadingQueue = [...state.loadingQueue, payload];
        },
        DELETE_LOADING(state, payload) {
            state.loadingQueue =
                state.loadingQueue.filter(item => item !== payload);
        },
        ERROR(state, payload) {
            state.error = payload;
        },
        CLEAR_ERROR(state) {
            state.error = {};
        },
    },
    modules: {
        news,
    }
});

export default store;
