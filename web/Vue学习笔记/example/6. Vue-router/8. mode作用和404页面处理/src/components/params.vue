<template>
  <div>
      <h2>{{ msg }}</h2>

      <!-- 在params页面里输出url传递的的新闻ID和新闻标题 -->
      <p>新闻ID: <span v-text="$route.params.newsId"></span></p>
      <p>新闻标题: <span v-text="$route.params.newsTitle"></span></p>
  </div>
</template>

<script>
export default {
    data (){
        return {
            msg: '这是新闻页!'
        }
    }
}
</script>

<style>
span {
    color:hotpink;
}
</style>
