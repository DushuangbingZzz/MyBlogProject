<template>
  <div class="home">
    <!-- 欢迎部分 -->
    <section class="hero">
      <h1>欢迎来到我的个人博客</h1>
      <p>在这里，我会分享我的学习笔记、编程经验以及其他有趣的内容。感谢您的访问！</p>
    </section>

    <!-- 最新文章 -->
    <section class="latest-posts">
      <h2>最新文章</h2>
      <ul>
        <li v-for="post in data" :key="post.id">
          <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
          <p v-html="post.content "></p>
        </li>
      </ul>
    </section>

    <!-- 关于我 -->
    <section class="about-me">
      <h2>关于我</h2>
      <p>我是一个热爱编程和技术的开发者，喜欢分享我的学习心得和经验。欢迎通过下方的联系方式与我交流。</p>
      
    </section>
  </div>
</template>

<script>
import blogData from '@/assets/data/blogContext.json'; // 导入博客文档
export default {
  name: 'Home',
  data() {
    return {
      // 模拟最新文章数据
      data: blogData.posts
    };
  }
}
</script>

<style scoped>
.latest-posts {
  max-width: 800px;
  margin: 0 auto;
}

.latest-posts ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
}

.latest-posts li {
  margin-bottom: 1rem;
}

.latest-posts p {
  padding: 0;
  margin: 0;
  margin-bottom: 3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* 显示两行 */
}
.home {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  color: #333;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.latest-posts {
  margin-top: 2rem;
}

.latest-posts h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.latest-posts ul {
  list-style-type: none;
  padding: 0;
}

.latest-posts li {
  margin-bottom: 1rem;
}

.latest-posts a {
  font-size: 1.2rem;
  color: #007BFF;
  text-decoration: none;
}

.latest-posts a:hover {
  text-decoration: underline;
}

.about-me {
  margin-top: 2rem;
}

.about-me h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.about-me p {
  font-size: 1.2rem;
  color: #666;
}
</style>