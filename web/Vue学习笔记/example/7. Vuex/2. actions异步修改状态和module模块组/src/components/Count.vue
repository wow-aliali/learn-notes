<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>{{ $store.state.count }} __ {{ count1 }} __ {{ count2 }} __ {{ count }}</h2>
        <p>
            <button @click="$store.commit('add')">加加加</button>
            <button @click="reduce">减减减</button>   <!-- 简化调用 -->
            <button @click="$store.commit('addNum', 10)">加某值</button>
        </p>
        <p>
            <button @click="addAction">异步加加加</button>
            <button @click="reduceAction">异步减减减</button>
        </p>
    </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
    data (){
        return {
            msg: '你好, Vuex状态管理 !'
        }
    },
    store,
    computed: {
       ...mapState(['count']),    // ...扩展运算符
    },
    methods: {
        ...mapMutations(['reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    }

}
</script>

<style>
h2 {
    font-size: 50px;
    color:brown;
}
</style>
