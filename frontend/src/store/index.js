// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [] // 用于存储博客文章
  },
  mutations: {
    addBlog(state, blog) {
      state.blogs.push(blog);
    }
  },
  actions: {
    saveBlog({ commit }, blog) {
      commit('addBlog', blog);
    }
  },
  getters: {
    allBlogs: (state) => state.blogs,
    getBlogById: (state) => (id) => {
      return state.blogs.find(blog => blog.id === id);
    }
  }
});