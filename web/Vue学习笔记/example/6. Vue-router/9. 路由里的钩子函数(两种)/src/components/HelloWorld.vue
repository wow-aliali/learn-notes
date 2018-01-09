<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('进入首页前');
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('离开首页前');
    next();
  }

  // beforeRouteEnter：在路由进入前的钩子函数。
  // beforeRouteLeave：在路由离开前的钩子函数。
}
</script>

<style scoped>

</style>
