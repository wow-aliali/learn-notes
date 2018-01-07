Webpack打包工具:

 - 用于支持<u>模块化开发</u>
 - 配置 babel-loader 将ES6+转为ES5
 - 压缩、合并等其它前端优化



Babel是ES6实用化的核心:

 - 可以通过 .babelrc 配置文件进行配置
 - 与Webpack或Gulp等打包工具配合
 - 在浏览器引入 Babel-polyfill 转换ES6新引入的API



脚手架工具:

 - 解决babel和webpack配置比较繁琐的问题
 - 性能与日志优化，html/css/图片等的处理
 - Dev Server和环境配置




```javascript
// ↓ 相当于 new 新对象，赋值给obj2
var obj2 = { name: aliali }
```



## 模块化

模块化历程: AMD(Require.js)、CMD(sea.js)、commonJS

ES6模块化:

- 静态化，必须在顶部，不能使用条件语句，自动采用严格模式
- （静态化优势） treeshaking和编译优化，以及webpack3中的作用域提升
- 外部可以拿到实时值，而非缓存值 (是引用不是copy)

commonJS模块化(require&module.export)和ES6模块化（import&export）的区别:

- commonJS是对模块的拷贝，ES6是对模块的引用


- 可以对commonJS模块重新赋值，但是对ES6模块重新赋值会编译报错




```javascript 
// 将对应变量值以login变量标识符形式暴露给其他文件而被读取到
export { login }                 // 可以在输出时起别名 { login as t }
import { login } from './init'   // 也可以在引入时起别名 { login as t }
login();

// 使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名，但是一个文件内只能输出一个变量值
export default login
import anyname from './init'   // 可以为import的模块起任何变量名，且不需要用大括号包含
anyname();

// 可以直接输出函数
export default () => {}
```

```javascript
// 获取DOM节点 单独模块文件 /common/ultils.js
const getId = (id) => {
  const dom = document.getElementById(id);
  dom && dom.setAttribute('id', dom.id + '-' + Math.floor(Math.random * 100000));
  return dom;
};
export { getId as $ }
```




## ES6语法

#### :radio_button: const & let

- 块级作用域
- 使用let和const不再有变量提升，不允许重复声明
- 使用const优先


#### :radio_button: 模板字符串

```javascript
const tpl = `<p>${ content }</p>`
```


#### :radio_button: 箭头函数

- this指向定义时所在对象
- 不可以作为构造函数(不能使用 new)
- 没有arguments对象



```javascript
// 如果想返回一个对象 须加上小括号
var func = () => ( { a:1 } )
```

```javascript
// 函数的参数默认值
// es5:
var func = function(argu) {
  var argu = argu || '1';
}
// es6:
var a = (argu = 1) => {}
```

#### :radio_button: Symbol类型

ES6 为 JavaScript 引入了一种新的基本类型：Symbol，它由全局 Symbol() 函数创建，每次调用 Symbol()函数，都会返回一个唯一的 Symbol。Symbol 充当唯一的对象键(key)。

**Symbol.iterator **为每一个对象定义了默认的迭代器，该迭代器可以被 `for...of` 循环使用。

#### :radio_button: Object.assign() 

Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象

语法: Object.assign(target, ...sources)

#### :radio_button: promise 函数

```javascript
Form.onsubmit = async(e) => {
  e.preventDefault(e);
  
  //普通的回调嵌套
  const fun1 = (callback) => {
    setTimeout(() => callback && callback('fun1'), 1000);
  }
  const fun2 = (callback) => {
    setTimeout(() => callback && callback('fun2'), 3000);
  }
  fun1(v1 => {
    console.log(v1);
    s2(v2 => {
      console.log(v2);
    })
  })
  
  // promise 函数，将回调嵌套变为链式操作
  const prom1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('prom1');
      }, 1000)
    })
  }
  const prom2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('prom2');
      }, 3000)
    })
  }
  prom1().then(v1 => console.log(v1))
  	.then(prom2)
  	.then(v2 => console.log(v2))
  
  // async&await 依赖于 promise 函数
  const asy1 = await prom1();
  console.log(asy1);
  const asy2 = await prom2();
  console.log(asy2);
  
}
```

#### :radio_button: async & await

```javascript
Form.onsubmit = async () => {
  const data = await fetch('/login', {   // await后面只能是promise函数
    method: 'POST',
    header: {
      "Content-Type": "application/x-www-form-urlencode"   // 表单提交常用header头
    },
    credentials: 'include',
    params: {
      account: ...,
      password: ...
    }
  }).then().then().catch();
};

// 用于Fetch的mock测试包 'fetch-mock'
// 单独的mock测试文件 mock.js
import FetchMock from 'fetch-mock'
FetchMock.mock('/login', (url, opts) => {
  const params = opts.params;
  if (params.account === '.....') {
    if (params.password === '....') {
      return { code: 200, message: 'success' }
    } else {
      return { code: 401, message: '密码错误' }
    }
  } else {
    return { code: 400, message: '用户名错误' }
  }
});
```

