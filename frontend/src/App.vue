<template>
  <div class="container">
    <div id="app">
      <Header />
      <main>
        <router-view />
      </main>
      <Footer />
  </div>
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  
}
.container {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
html,body {
  margin: 0;
  padding: 0;
}
.container::-webkit-scrollbar {
  display: none; /* 隐藏滚动条（Chrome, Safari 和 Opera） */
}

.container {
  -ms-overflow-style: none; /* 隐藏滚动条（IE 和 Edge） */
  scrollbar-width: none; /* 隐藏滚动条（Firefox） */
}
main {
  flex: 1;
  box-sizing: content-box;
  padding: 1rem;
  padding-bottom: 4rem;
}
</style>