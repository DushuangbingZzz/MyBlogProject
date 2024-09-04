<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>
      <!-- <img :src="article.author.avatar" alt="作者头像" class="avatar"> -->
      <span>{{ article.author.name }}</span>
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

      // 从 blogData 中查找对应的文章
      const article = blogData.posts.find(item => item.id === articleId);

      // 如果找到了文章，则将其设置到组件的 data 中
      if (article) {
        this.article = article;
      } else {
        // 如果没有找到文章，设置默认内容
        this.article = {
          id: articleId,
          title: '文章未找到',
          content: '文章未找到',
          author: {
            name: '未知',
            avatar: imagePath // 默认头像
          }
        };
      }
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
p {
  display: flex; /* 使头像和名字在同一行显示 */
  align-items: center; /* 垂直居中对齐 */
}
</style>