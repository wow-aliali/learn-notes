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
        handler() {
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

#### :open_book: 组件的定义 :

##### 1. 子组件向父组件传递数据

```javascript
父 :
<child-comp :prop-one="prop1" @handleChildChange="add"/>
data() {
    return {
        prop1: 'aliali'
    }
},
methods: {
    handleChildChange() {
        this.prop1 += 1
    }
}
子 :
<span @click="add"></span>
methods: {
    add() {
        this.$emit('handleChildChange')
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



#### :open_book: 组件的混合 / 继承 :

```javascript
const extend = {
     created () {
          console.log('extends created')
     }
}
const mixin1 = {
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
	import {errMsgMixin} from '@/common/mixin.js'
	mixins选项: [errMsgMixin]
// 2. 可以作为全局mixin
	import {errMsgMixin} from '@/common/mixin.js'
	Vue.mixin(errMsgMixin)
	// test.vue调用
	this.errMsg('test')
```



#### :open_book: 父子组件的表单v-model双向绑定 :

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
<input type="text" @input="handleInput" :value="inputText">
model: {
	prop: 'inputText',
	event: 'change'
},
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



#### :open_book: 高级属性 :

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

##### 3. 爷孙组件的数据传递 provide / inject

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

#### :book: 404路由 | 未匹配路由

```javascript
{
	path: '/404',
	component: Error
}

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

#### :book: 路由配置

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

```javascript

```

#### :book: 路由导航守卫

```javascript

```

&nbsp;

## :books: Vuex

==dfsg==