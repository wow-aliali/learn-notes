<template>
  <div id="app">
    <img src="./assets/logo.png">

    <p>
      <router-link to="/">首页</router-link> | 
      <router-link to="/aliali">ali主页</router-link> | 
      <router-link to="/aliali/alialiInfo">ali信息页</router-link> | 
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
