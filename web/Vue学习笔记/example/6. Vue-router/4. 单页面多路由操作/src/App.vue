<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <p>
      <router-link to="/">默认</router-link>
      <router-link to="/aliali">相反</router-link>
    </p>
    <router-view name="left" id="left"></router-view>
    <router-view name="right" id="right"></router-view>
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
#left, #right {
  float: left;
  width: 50%;
  height: 300px;
}
#left{
  background:darkorange;
}
#right {
  background:lightseagreen;
}
</style>
