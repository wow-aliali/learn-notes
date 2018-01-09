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

    <!-- 想让路由有过渡动画，需要在<router-view>标签的外部添加<transition>标签，标签还需要一个name属性 -->
    <!-- 默认的mode模式为'in-out' -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 过渡模式mode：
    in-out:新元素先进入过渡，完成之后当前元素过渡离开。
    out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。 -->

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

/* 组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：
fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。 */
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
