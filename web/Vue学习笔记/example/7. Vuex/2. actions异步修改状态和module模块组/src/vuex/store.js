// 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
// 为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

// const moduleA = {
//     state: { ... },
//     mutations: { ... },
//     actions: { ... },
//     getters: { ... }
// }
// const moduleB = {
//     state: { ... },
//     mutations: { ... },
//     actions: { ... }
// }
// const store = new Vuex.Store({
//     modules: {
//         a: moduleA,
//         b: moduleB
//     }
// })

// $store.state.a // -> moduleA 的状态
// $store.state.b // -> moduleB 的状态

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1
}

const mutations = {
    add (state){
        state.count ++;
    },
    reduce (state){
        state.count -= 3;
    },
    addNum (state, num){
        state.count += num;
    }
}

// Actions 类似于 mutation，不同在于：
// Actions 提交的是 mutation，而不是直接变更状态。
// Actions 可以包含任意异步操作。
const actions = {

    addAction (context){     // 参数context是上下文对象, 相当于整个store.js
        context.commit('add');
        setTimeout(() => { context.commit('reduce') }, 3000);
        console.log('我比reduce先执行了');
    },
    reduceAction: ({ commit }) => commit('reduce')    // 也可使用箭头函数, 参数 {commit} 是直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
    
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})