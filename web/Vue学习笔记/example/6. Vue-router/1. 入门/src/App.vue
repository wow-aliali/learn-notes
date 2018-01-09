<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!-- 制作路由导航链接需要<router-link>标签 -->
    <!-- to：是我们的导航路径，就是在router/index.js文件里配置的path值 -->
    <p>
      <router-link to="/">首页</router-link> | 
      <router-link to="/aliali">ali页面</router-link>
    </p>

    <!-- router-view 相当于一个容器，它渲染的组件是你使用 vue-router 指定的 （当你访问 "/aliali" 时，router-view 就被对应组件替换了） -->
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
