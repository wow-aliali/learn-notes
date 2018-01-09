<template>
  <div>
      <h3>{{ msg }}</h3>
      <p>你的名字: {{ $route.params.username }}</p>
      <p>你的ID: {{ $route.params.userid }}</p>
  </div>
</template>

<script>
export default {
    name: 'aliali',
    data (){
        return {
            msg: '这是阿狸阿里的个人信息页面!'
        }
    }
}
</script>

<style>
h3 {
    color:aqua;
}
</style>
