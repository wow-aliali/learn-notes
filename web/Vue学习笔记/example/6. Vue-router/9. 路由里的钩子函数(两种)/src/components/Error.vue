<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '404 找不到页面'
    }
  }
}
</script>

<style scoped>
h1 {
    color:crimson;
}
</style>