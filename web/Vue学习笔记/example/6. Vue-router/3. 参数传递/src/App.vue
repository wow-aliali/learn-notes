<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!-- name：就是我们在路由配置文件中起的name值。 -->
    <!-- params：就是我们要传的参数，它也是对象形式，在对象里可以传递多个值。 -->
    <p>
      <router-link to="/">首页</router-link> | 
      <router-link to="/aliali">ali主页</router-link> | 
      <router-link :to="{ name: 'alialiInfo', params: { username: 'aliali', userid: '666'}}">ali信息页</router-link> | 
      <router-link to="/aliali/alialiFriend">ali好友页</router-link>
    </p>

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
