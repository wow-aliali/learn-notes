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

    <div>
      <button v-on:click="goHome">回首页</button>
      <button @click="goGo">前进</button>
      <button @click="goBack">后退</button>
    </div>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    goHome (){
      this.$router.push('/');
    },
    goGo (){
      this.$router.go(1);
    },
    goBack (){
      this.$router.go(-1);
    }
  }
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

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
