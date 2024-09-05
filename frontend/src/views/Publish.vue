<template>
    <div class="editor-container">
      <div class="title-container">
        <input v-model="title" type="text" placeholder="请输入文章标题" class="title-input" />
      </div>
      <div ref="editor" class="editor" style="height: 500px;"></div>
      <button @click="saveBlog" class="save-button">点击发布</button>
      <button @click="saveMarkdown" class="save-button">保存为 Markdown</button>
    </div>
  </template>
  
  <script>
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css'; // 引入 Quill 样式
  import TurndownService from 'turndown';
  
  export default {
    data() {
      return {
        quill: null,
        title: '', // 文章标题
      };
    },
    mounted() {
      this.initQuill();
    },
    methods: {
      initQuill() {
        this.quill = new Quill(this.$refs.editor, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ 'header': '1' }, { 'header': '2' }],
              ['bold', 'italic', 'underline'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'align': [] }],
              ['link']
            ]
          }
        });
      },
      convertHtmlToMarkdown(html) {
        const turndownService = new TurndownService();
        return turndownService.turndown(html);
      },
      saveMarkdown() {
        const html = this.quill.root.innerHTML;
        const markdown = this.convertHtmlToMarkdown(html);
        const header = `# ${this.title}\n\n`; // Markdown 格式的标题
        const content = header + markdown;
        const blob = new Blob([content], { type: 'text/markdown' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'blog-post.md';
        link.click();
      },
      saveBlog() {
      const blogId = Date.now(); // 使用时间戳作为唯一ID
      const blog = {
        id: blogId,
        title: this.title,
        content: this.quill.root.innerHTML
      };

      // 保存到本地存储
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs.push(blog);
      localStorage.setItem('blogs', JSON.stringify(blogs));

      // 跳转到博客首页
      this.$router.push('/');
    }
    }
  };
  </script>
  
  <style scoped>
  .editor-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .title-container {
    margin-bottom: 1em;
  }
  
  .title-input {
    width: 100%;
    padding: 10px;
    font-size: 1.2em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .editor {
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .save-button {
    margin-top: 1em;
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .save-button:hover {
    background-color: #0056b3;
  }
  </style>