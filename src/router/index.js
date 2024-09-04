import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Resume from '@/views/Resume.vue'
import BlogPost from '@/views/BlogPost.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost,
      props: true
    }
  ]
})