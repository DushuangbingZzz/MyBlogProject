import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue';
import Resume from '@/views/Resume.vue'
import BlogPost from '@/views/BlogPost.vue'
import Publish from '@/views/Publish.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/login', 
      component: Login 
    },
    { path: '/publish', 
      component: Publish 
    }, // 添加富文本博客页面的路由
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