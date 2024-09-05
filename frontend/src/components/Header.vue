<template>
  <header>
    <h1>我的个人博客</h1>
    <nav>
      <router-link to="/" exact-active-class="active-link" class="nav-link">首页</router-link>
      <router-link to="/resume" exact-active-class="active-link" class="nav-link">简历</router-link>
      <!-- <router-link to="/publish" exact-active-class="active-link" class="nav-link">发表博客</router-link>  -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

nav {
  margin-top: 0.5rem;
}

.nav-link {
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  transition: color 0.3s, background-color 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ff9800; /* 动效条的颜色 */
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: #ff9800;
}

.nav-link:active {
  color: #fff;
}

.nav-link:active::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.active-link {
  color: #ff9800;
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ff9800;
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>