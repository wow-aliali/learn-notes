<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ $store.state.count }} __ {{ count1 }} __ {{ count2 }} __ {{ count }}</h2>
        <p>
            <button @click="$store.commit('add')">加加加</button>
            <button @click="reduce">减减减</button>   <!-- 简化调用 -->
            <button @click="$store.commit('addNum', 10)">加某值</button>
        </p>
    </div>
    <!-- 通过 $store.state 来获取状态对象，通过 $store.commit() 方法触发状态变更 -->
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    data (){
        return {
            msg: '你好, Vuex状态管理 !'
        }
    },
    store,

    // 状态对象赋值给内部对象，也就是把stroe.js中的值，赋值给我们模板里data中的值 (三种方法)

    // 1. 通过computed的计算属性直接赋值
    // computed: {
    //     count1 (){
    //         return this.$store.state.count;
    //     }
    // }

    // 2. 通过mapState的对象来赋值
    // computed: mapState({
    //     count2: state => state.count
    // })

    // 3. 通过mapState的数组来赋值 (简单常用) (当映射的计算属性的名称与 state 的子节点名称相同时)
    computed: {
       ...mapState(['count']),    // ...扩展运算符
       ...mapGetters(['count'])
    },
    methods: mapMutations(['reduce'])

}
</script>

<style>
h2 {
    font-size: 50px;
    color:brown;
}
</style>
