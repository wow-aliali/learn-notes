<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/params/666/aliali is a bad man">新闻</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/233/deng jing zao die">goParams</router-link>
      <router-link to="/aliali">aliali</router-link>
      <router-link to="/deng">deng</router-link>

    </p>
    <router-view></router-view>
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
