import axios from 'axios';
import store from '@/store/';
import qs from 'qs';

const fetcher = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  // Parse params to ?param=value1&param=value2
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
});

const timestamp = new Date().getTime();

fetcher.interceptors.request.use((request) => {
  store.commit('ADD_LOADING', timestamp);
  return request;
}, (error) => {
  store.commit('DELETE_LOADING', timestamp);
  store.commit('ERROR', error.response);
  return Promise.reject(error);
});

fetcher.interceptors.response.use((response) => {
  store.commit('DELETE_LOADING', timestamp);
  return response;
}, (error) => {
  store.commit('DELETE_LOADING', timestamp);
  store.commit('ERROR', error.response);
  return Promise.reject(error);
});

export default fetcher;
