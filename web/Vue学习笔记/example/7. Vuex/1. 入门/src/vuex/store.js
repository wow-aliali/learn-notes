// vuex是一个专门为vue.js设计的集中式状态管理架构。状态？可以把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 需要共享的属性 state
const state = {
    count: 1
}

// 操作共享的属性 mutation
// 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
const mutations = {
    add (state){
        state.count ++;
    },
    reduce (state){
        state.count -= 3;
    },
    // 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    addNum (state, num){
        state.count += num;
    }
}

// getters从表面是获得的意思，可以把他看作在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工。你可以把它看作store.js的计算属性
const getters = {
    count: state => state.count -= 1000
    // 对count进行一次计算属性的操作，就是在它输出前，给它减1000
}

// 用export default 封装代码，让外部可以引用
export default new Vuex.Store({
    state,
    mutations,
    getters
})