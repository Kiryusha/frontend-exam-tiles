/* eslint-disable no-shadow */
import {
  fetchPosts
} from '@/api/posts';

const state = {
    posts: {
        isFetching: false,
        data: [],
    },
};

const mutations = {
  FETCHING_POSTS(state) {
    state.posts.isFetching = true;
  },

  FETCHED_POSTS(state, data) {
    state.posts.isFetching = false;
    state.posts.data = data;
  },
}

const actions = {
    FETCH_POSTS({ commit }) {
        commit('FETCHING_POSTS');
        return fetchPosts()
            .then(response => commit('FETCHED_POSTS', response.data.tiles))
            .catch(error => Promise.reject(error));
  },
};

const getters = {
    processedPosts(state) {
        if (state.posts.data.length) {
            return state.posts.data.reduce((obj, post) => {
                obj[post.id] = post;
                return obj;
            }, {});
        }
        return {};
    },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
