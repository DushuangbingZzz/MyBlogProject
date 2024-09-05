<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>
      <!-- <img :src="article.author.avatar" alt="作者头像" class="avatar"> -->
      <!-- <span>{{ article.author.name ? article.author.name : '' }}</span> -->
    </p>
    <p v-html="article.content"></p> <!-- 使用 v-html 渲染 HTML 内容 -->
  </div>
</template>

<script>
import blogData from '@/assets/data/blogContext.json'; // 导入博客数据
import imagePath from '@/assets/img/log.jpg';
export default {
  name: 'BlogPost',
  data() {
    return {
      article: {} // 存储当前博客文章的数据
    };
  },
  mounted() {
    this.loadArticle();
  },
  methods: {
    loadArticle() {
      const articleId = this.$route.params.id;

      // 尝试从本地存储获取数据
      let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

      if (blogs.length === 0) {
        // 如果本地存储中没有数据，则从 blogData 中加载数据
        blogs = blogData.posts;
        // 更新本地存储
        localStorage.setItem('blogs', JSON.stringify(blogs));
      }
      
      // 从加载的数据中查找对应的文章
      const article = blogs.find(item => item.id == articleId);
      console.log(blogs,blogs.find(item => item.id == articleId), "blogs");

      // 将数据设置到组件的 data 中
      this.article = article || {};
      console.log(this.article,999)
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 50px; /* 设置头像的宽度 */
  height: 50px; /* 设置头像的高度 */
  border-radius: 50%; /* 使头像圆形 */
  margin-right: 10px; /* 头像和名字之间的间距 */
}

</style>