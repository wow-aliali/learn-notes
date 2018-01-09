<template>
  <div>
      <h2>{{ msg }}</h2>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'aliali',
    data (){
        return {
            msg: '这是阿狸阿里的主页!'
        }
    }
}
</script>

<style>
h2 {
    color:saddlebrown;
}
</style>


