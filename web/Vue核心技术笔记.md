## :books: Vue实例

#### :open_book: 实例属性

```javascript
this.$data
this.$props
this.$el
this.$root
this.$option
this.$children
this.$slots
this.$scopedSlots
this.$refs
this.$isServer  // 判断当前 Vue 实例是否运行于服务器 (SSR)
```

#### :open_book: 实例方法

```javascript
const unWatch = this.$watch('text', (newVal, oldVal) => {
    .....
})
unWatch()  // 注销 (用this.$watch时不会自动注销)

this.$once()
this.$on('test', (a, b) => {
    ......
})
this.$emit('test', 1, 2)

this.$set(this.obj, 'a', '1')  // 对于引用数据类型，如果给不存在的属性或元素赋值（this.obj.a = 1），则会导致该属性不是响应式的。可以使用this.$set赋值
this.$delete(this.obj, 'a')  // 可以响应式地删除引用数据类型的Key
    
this.$nectTick()  // 有时候更新值但是DOM节点没有变化，可以试下
```

&nbsp;

## :books: Computed和Watch使用场景和方法

#### :open_book: computed 拼接多个响应式数据

```javascript
computed: {
    name() {
        return `${this.firstName} ${this.lastName}`
    }
}
```

#### :open_book: watch 监听到数据变化时执行指定操作 (比如给后台发请求)

```javascript
watch: {
    obj: {
        handler(newVal, oldVal) {
            .....
        },
        immediate: true,
        deep: true         // 深度监听数据(对于引用数据类型)，开销大
        				  // 如果只需要watch引用类型中的某个Key，可以使用下面方法
    }
}
watch: {
    'obj.a': {
        handler(newVal, oldVal) {
            .....
        }
    }
}
```

> 注意 : 不要在computed和watch里面修改所监听的数据

&nbsp;

## :books: Vue的原生指令

```html
<!-- v-once 渲染静态内容，可以节省性能开销 -->
<h2 v-once>{{title}}</h2>
```

&nbsp;

## :books: Vue的组件

#### :open_book: 组件的定义 

##### 1. 子组件向父组件传递数据

```javascript
父 :
<child-comp :prop-one="prop1" @handleChildChange="handleChildChange"/>
data() {
    return {
        prop1: 'aliali'
    }
},
methods: {
    handleChildChange(value) {
        this.prop1 += value
    }
}
子 :
<span @click="add"></span>
methods: {
    add() {
        this.$emit('handleChildChange', 1)
    }
}
```

##### 2. props接收

```javascript
props {
    obj: {
        type: Object,
        // require: true,
        default() {
            return {}
        },
        validator(value) {
        	// 自定义验证
        }
    }
}
```

#### :open_book: 组件的混合 / 继承 

```javascript
const extend = {
     created () {
          console.log('extends created')
     }
}
const mixin1 = {
    data() {
      return { a: 1 }
    },
    created () {
					console.log('mixin1 created')
    }
}
const mixin2 = {
     created () {
          console.log('mixin2 created')
     }
}
export default {
     extends: extend,           // extend调用方式，只能一个
	   mixins: [mixin1, mixin2],  // mixin调用方式
     name: 'app',
     created () {
          console.log('created')
     }
}
// 控制台输出
// extends created
// mixin1 created
// mixin2 created
// created
// 结论: 优先调用mixins和extends继承的父类，extends触发的优先级最高
```

可以定义一个公共组件，与其它多个组件混合。在vue-cli项目里，可以建一个mixins.js文件，内容如下 :

```javascript
const errMsgMixin = {
    methods:{
        errMsg(err){
            console.log(err)
        }
    }
}
export {errMsgMixin}

// 1. 在需要的组件内引入，调用
	import {errMsgMixin} from '@/common/mixins.js'
	mixins选项: [errMsgMixin]
// 2. 可以作为全局mixin
	import {errMsgMixin} from '@/common/mixins.js'
	Vue.mixin(errMsgMixin)
	// test.vue调用
	this.errMsg('test')
```

附加：混入最大的用处是把一些常用的data或者methods等抽出来，比如在我的项目中有许多个模态框，而关闭模态框的代码逻辑是一模一样的 

```javascript
var close_modal_mixin = {
  methods: {
    closeModal: function () {
      this.showModal = false;  //关闭模态框
    },
  }
}

var vm = new Vue(
    mixins: [close_modal_mixin],
    .......
})
```

#### :open_book: 父子组件的表单v-model双向绑定 

```javascript
子: 
<input type="text" @input="handleInput" :value="inputText">
props: {
    inputText: String
},
methods: {
    handleInput(e) { 
        this.$emit('input', e.currentTarget.value)
    }
}
父:
<Test v-model="inputText" />
(data) inputText: 'aliai'
```

> 默认情况下，一个组件上的 `v-model` 会把 `value` 用作 prop 且把 `input` 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 `value` prop 来达到不同的目的。使用 `model` 选项可以回避这些情况产生的冲突。 

```javascript
子: 
<input type="text" @change="handleInput" :value="inputText">
model: {
	prop: 'inputText',
	event: 'change'
},
props: {
	inputText: String
},
methods: {
    handleInput(e) { 
        this.$emit('change', e.currentTarget.value)
    }
}
父:
<Test v-model="inputText" />
(data) inputText: 'aliai'
```

#### 📖 is 特性

由于dom的一些html元素对放入它里面的元素有限制，所以导致有些组件没办法放在一些标签中，比如 `<ul>` `<ol>` `<select>` `<a>` `<table>` ，所以需要增加is特性来扩展，从而使组件可以在这些受限制的html元素中使用 

```vue
<table>
  <tr is="blog-post-row"></tr>
</table>
```

#### 📖 keep-alive 组件

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。

主要用于保留组件状态或避免重新渲染。 

```vue
<transition>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</transition>
```

#### :open_book: 高级属性 

##### 1. 插槽 slot

```vue
子: 
<div>
	......
	<slot name="center"></slot>
	<slot name="end"></slot>
</div>
父:
<Test v-model="inputText">
	<div slot="center">
		<p>center</p>
	</div>
	<div slot="end">
		<p>aliali</p>
		<p>我是插槽 end</p>
	</div>
</Test>
```

##### 2. 作用域插槽 slot-scope

```vue
子: 
<div>
	......
	<slot name="aliali" :childValue="childValue"></slot>
</div>
(data) childValue: 'child'

父:
<Test v-model="inputText">
	<div slot="aliali" slot-scope="props">
		<p>aliali</p>
		<p>{{props.childValue}}</p>  <!-- child -->
		<p>{{parentValue}}</p>       <!-- parent -->
	</div>
</Test>
(data) parentValue: 'parant'
```

##### ==3. 爷孙组件的数据传递 provide / inject==

```javascript
爷:
provide() {
    return {
        yeye: this,
        yeyeValue: 'yeye'
    }
}
// 爷组件下的所有组件都可以拿到provide定义的数据
孙: 
inject: ['yeye', 'yeyeValue']
```

provide定义的数据默认是非响应式的，可以自己实现响应式：

```javascript
爷:
data() {
    return {
        yeyeValue: 'yeye'
    }
},
provide() {
    const provideData = {}
    Object.defineProperty(provideData, 'yeyeValue', {
        get: () => this.yeyeValue,
        enumerable: true  // 可遍历
    })
    
    return {
        yeye: this,
        provideData
    }
}

孙: 
inject: ['yeye', 'provideData']
// 通过provideData.yeyeValue调用
```

&nbsp;

## :books: Vue-router

> 项目上线前需要配置 ==mode: 'history'== ，因为默认带哈希的不会被搜索引擎爬取

#### :book: 默认路由跳转

```javascript
{
    path: '/',
    redirect: '/login'
}
```

#### :book: 404路由

```javascript
{
	path: '/404',
	component: Error
}
// 或者
// 将以下路由配置放置在路由表的最末端，当路径无法匹配前面的所有路由时将会跳转至Error组件页面
{ 
  path: '*', 
  component: Error 
}
```

#### :book: 嵌套路由

```javascript
{
    path: '/parent',
    component: Parent,
	  children: [           // 子路由通过<router-view>显示内容
	    {
	        path: 'child1',
	        component: Child1
	    },
	    {
	        path: 'child2',
	        component: Child2
	    }
	]
}
```

#### :book: 路由过渡动画

定义过渡动画的class放在全局SCSS里

```scss
.xxx-enter-active, .xxx-leave-active {
    transition: ......
}
.xxx-enter, .xxx-leave-to {
    .....
}
```

#### :book: 路由配置 (选项)

```javascript
mode: 'history',
base: '/base/',        // path路径前始终有 /base，比如localhost:8080/base/app
linkActiveClass: 'router-link-active',  
// 全局配置 <router-link> 激活时的class类名
linkExactActiveClass: 'router-link-exact-active',
// 全局配置 <router-link> 精确激活的默认的 class
scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition    // 滚动到原先离开时的位置
    } else {
        return { x: 0, y: 0 }   // 滚动到顶部
    }
}
// 当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，使用scrollBehavior可以自定义路由切换时页面如何滚动
```

#### :book: 路由参数传递

方法一（推荐） :

```javascript
{
  path: '/app/:id',
	props: true,      // 将path中的参数id通过props传到Todo组件内
	component: Todo
}

<router-link to='/app/666'></router-link>

// 在对应组件内 通过props:['id']接收
// 这样就不需要 通过this.$route.params.id调用 (此法有违解耦)
```

方法二 : 

```javascript
this.$router.push({
    name: 'groupshopadd',
    params: {
        groupshopType: this.groupshopType
    }
})

// this.$route.params.groupshopType
```

#### :book: 路由钩子

```javascript
/**** 全局的路由钩子 ****/
router.beforeEach((to, from, next) => {   // 路由跳转前的拦截器
    next()
});
router.beforeResolve((to, from, next) => {
    next()
});
router.afterEach((to, from) => {   // 路由跳转后的拦截器
    
});

/**** 指定路由的路由钩子 ****/
{
	path: '/foo',
	component: Foo,
	beforeEnter: (to, from, next) => {
		next()
	}
}

/**** 组件内的路由钩子 ****/
export default {
	data() { ... },
  beforeRouteEnter(to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 这里不能访问 this , 因为此时组件实例还没被创建
      // beforeRouteEnter一般用来通过路由参数从后台获取数据发送到对应组件 (实例在下面第3条)
    	next()
	},
	beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 比如个带有动态参数的路径之间跳转的时候
    	next()
	},
	beforeRouteLeave(to, from, next) {
      // beforeRouteLeave一般用做带表单的组件路由离开/错点时提醒 (实例在下面第4条)
    	next()
	}
}
```

##### ==1. 未匹配路由== :

```javascript
const router = new Router({ .... })
router.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {    //如果未匹配到路由
		from.name ? next({ name:from.name }) : next('/login');   
		//如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
	} else {
		next();  //如果匹配到正确跳转
	}
});
```

##### ==2. 登录拦截 (登录验证)== :

```javascript

```

##### ==3. beforeRouteEnter==

```javascript
{
  path: '/detail/:id',
	props: true,      // 将path中的参数id通过props传到Detail组件内
	component: Detail
}

<router-link to='/detail/666'></router-link>

// Detail组件内
export default {
	data() { ... },
	props: ['id'],
	beforeRouteEnter(to, from, next) {
		next(vm => {     // 在next()里通过参数vm访问该组件实例
            axios(`/api/list?id=${vm.id}`).then(res => {
                vm.data = res.data
            })
        })
	},
	beforeRouteUpdate(to, from, next) {
    	next(vm => {
            axios(`/api/list?id=${vm.id}`).then(res => {
                vm.data = res.data
            })
        })
	}
}
```

##### ==4. beforeRouteLeave路由离开提醒==

为了防止用户失误点错关闭按钮等等，导致没有保存已输入的信息(关键信息)

```javascript
beforeRouteLeave(to, from, next) {
    if(用户已经输入信息){
        // 出现弹窗提醒保存草稿，或者自动后台为其保存
    } else {
        next(true);  // 用户离开
    }
}
```

##### ==5. 路由加载时动画== 

```javascript
// 在状态管理中定义一个路由loading标志
const app = {
  state: {
    routerLoading: false, //路由的loading过渡
  },
  mutations: {
    //修改路由loading状态
    UPDATE_ROUTER_LOADING(state, status) {
      state.routerLoading = status
    }
  }
}

// 在路由拦截器中修改loading状态
router.beforeEach((to, from, next) => {
  store.commit('UPDATE_ROUTER_LOADING', true); // 展示路由加载时动画
});
router.afterEach(to => {
  store.commit('UPDATE_ROUTER_LOADING', false);
});
router.onError(err => {
  console.error(err); // for bug
  store.commit('UPDATE_ROUTER_LOADING', false);
});

// 在router-view定义loading动画
// element-ui提供了v-loading指令可以直接使用
<router-view v-loading="$store.getters.routerLoading"></router-view>
```

#### 📖 路由懒加载

```javascript
{
  path: '/login', 
	component: () => import('@/views/login')
}
// 需要安装 npm i babel-plugin-syntax-dynamic-import -D
// 然后在.babelrc的plugins里加上该插件 "syntax-dynamic-import"
```

&nbsp;

## :books: Vuex

```javascript
/**** store/index.js 定义 ****/
import Vuex from 'vuex'
import Vue from 'vue'
import state from '@/store/state.js'    // 各个选项单独配置
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'
import actions from '@/store/actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
	  mutations,
    getters,
    actions
})

/**** state.js 定义 ****/
export default { g_count: 0 }

/**** mutations.js 定义 ****/
export default {
    UPDATE_COUNT(state, num) {  // mutations方法名全大写
        state.g_count = num
    }
}

/**** getters.js 定义 ****/
export default {
    g_newCount(state) {
        return state.g_count + 10
    }
}

/**** main.js 引入 ****/
import store from '@/store/index.js'
new Vue({
    router,
    store,
    ....
})

/**** xxx.vue 调用 ****/
this.$store.state.g_count             // 调用state，一般在computed里接收
this.$store.commit(方法名, 参数)     // 调用mutation
this.$store.getters.g_newCount        // 调用getters，一般在computed里接收

/**** xxx.vue 简化调用 ****/
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex'
computed: {
    ...mapState({
        count: state => state.g_count
    }),
	  ...mapGetters({
        newCount: state => state.g_newCount
    }),
	  ......
},
methods: {
    ...mapMutations(['UPDATE_COUNT']),
	  ...mapActions(['UPDATE_COUNT_ASYNC']),
	  ......
}
// 使用此方法 ...扩展运算符语法需要安装 npm i babel-preset-stage-1 -D
```

#### :book: mutation和action

> 官方推荐state数据只能在mutataions里修改

mutation 和 action 只能传2个参数，如果想传多个数据，只能将它们封装成对象传递 :

```javascript
UPDATE_COUNT(state, { num, num2 }) {   // 通过解构的方式传
    state.g_count = num + num2
}
// 调用
this.$store.commit('UPDATE_COUNT', {
    num: this.num,
    num2: 10
})
```

1. mutation 是同步操作，而 action 没有这个限制， 可以包含任意异步操作 
2. action 提交的是 mutation，而不是直接变更状态，如果有异步操作那么就用 action 来提交mutation ，如下：

```javascript
UPDATE_COUNT_ASYNC(store, data) {
    setTimeout(() => {
        store.commit('UPDATE_COUNT', {
            num: data.num
        })
    }, data.time)
}
// 调用
this.$store.dispatch('UPDATE_COUNT_ASYNC', {
    num: 5,
    time: 2000
})
```

#### :book: Vuex模块

```javascript
const store = new Vuex.Store({
    state,
	  mutations,
    getters,
    actions,
    modules: {
        products: {
            state: { g_productId: '666' },
            getters: {
                g_formatProductId(state, 调用时传的参数, rootState) {
                    // 参数rootState为全局的state
                    // 可通过rootState.模块名.state拿到别的模块里的state
                    return `${state.g_productId} - ${rootState.g_count}`
                }
            },
            mutations: {
                SET_PRODUCT_ID(state, productId) {   // 参数state为该products模块下的
                    state.g_productId = productId
                }
            }
        },
        cart: {
            state: { ... }
        }
    }
})
    
// 模块state调用
...mapState({
    g_productId: state => state.products.g_productId     // 注意加上模块名
})
// 模块mutations调用和全局的一样
```

#### :book: 热重载

开发环境下，修改vuex相关代码会自动刷新整个页面，而使用热重载就无需刷新页面

[热重载官方文档](https://vuex.vuejs.org/zh-cn/hot-reload.html)

&nbsp;

## :books: 服务端渲染 Nuxt.js

[Nuxt官网](https://zh.nuxtjs.org/)

[Nuxt框架实践](https://www.jianshu.com/p/56d60281c0c9)

```shell
vue init nuxt-community/koa <project-name>
```

Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，很多人想用Vue开发多页应用，并在服务端完成渲染。这时候就出现了Nuxt.js这个框架，它简化了SSR的开发难度。 如果做移动端的项目，就没必要使用这个框架。

##### 什么是SSR？

SSR，即服务器渲染，就是在服务器端将对Vue页面进行渲染生成html文件，然后返回给浏览器。 

##### SSR优点？

- SPA的HTML只有一个无实际内容的HTML和一个app.js，SSR生成的HTML是有内容的，这让搜索引擎能够索引到页面内容。
- 更快内容到达时间：传统的SPA应用是将bundle.js从服务器获取，然后在客户端解析并挂载到dom。而SSR直接将HTML字符串传递给浏览器，大大加快了首屏加载时间。

#### :book: 配置地址端口

```json
// package.json
"config": {
  "nuxt": {
    "host": "127.0.0.1",
    "port": "3030"
  }
}
```

#### :book: nuxt 动态路由

```vue
// 普通路由
// views/about/index.vue

<nuxt-link :to="{name: 'index'}"></nuxt-link>
```

```vue
// 带参数的动态路由
// views/news/index.vue
// views/news/_newsId.vue

<template>
	<nuxt-link :to="{name: 'news-id', { params: 123456 }}"></nuxt-link>
	<nuxt-link :to="{name: 'news-id', { params: 666 }}"></nuxt-link>
</template>
<script>
  export default {
    // 动态路由的参数校验
   	// 如果校验方法返回的值不为 true， Nuxt.js 将自动加载显示 404 错误页面
    validate ({params}) {
      return /^\d+$/.test(params.id)
    }
  }
</script>
```

&nbsp;

## 📚 一些小知识

#### :open_book:  vue本地代理配置 解决跨域问题,仅限于开发环境

```javascript
// 比方说你要访问 http://192.168.1.xxx:8888/backEnd/paper这个接口
// 配置config.js下面proxyTable对象
proxyTable: {
		'/backEnd':{
				target: 'http://192.168.3.200:8888', // 目标接口域名有端口可以把端口也写上
                                              // 或者prot本地起服务端口与服务端统一
         changeOrigin: true,
     }
},
// 发送request请求
axios.get('/backEnd/page')  // 按代理配置 匹配到/backEnd就代理到目标target地址
    .then((res) => {
				....
		})
```

#### :book:  路由变化页面数据不刷新问题

出现这种情况是因为依赖路由的params参数获取写在created生命周期里面，因为相同路由二次甚至多次加载的关系 没有达到监听，退出页面再进入另一个文章页面并不会运行created组件生命周期，导致文章数据还是第一次进入时的数据

解决方法：watch监听路由是否变化

```javascript
watch: {
 // 方法1
  '$route' (to, from) {   //监听路由是否变化
    if (this.$route.params.articleId) {    // 判断条件1  判断传递值的变化
      //获取文章数据
    }
  }
  //方法2
  '$route' (to, from) {
    if (to.path == "/page") {    // 判断条件2  监听路由名 监听你从什么路由跳转过来的
       this.message = this.$route.query.msg
    }
  }
}
```

或者使用 `this.$nextTick` 试下