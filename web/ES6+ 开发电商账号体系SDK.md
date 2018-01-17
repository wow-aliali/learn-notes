[TOC]

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


babel插件:

- babel-plugin-transform-runtime在编译时检测是否使用ES6的新API
- babel-preset-env用来取代babel-preset-es2015、es2016、lastest等等这些包 , 既可以完全编译 , 也可以选择部分编译



```javascript
// ↓ 相当于 new 新对象，赋值给obj2，在这里，obj2是一个对象字面量
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
// 获取DOM节点，添加/删除class 单独模块文件 /common/ultils.js
const getId = (id) => {
  const dom = document.getElementById(id);
  dom && dom.setAttribute('id', dom.id + '-' + Math.floor(Math.random() * 100000));
  return dom;
};

const clsReg = new RegExp('(\\s|^)' + cls + '\\s|$)');
const hasClass = (obj, cls) => {
  return obj.className.match(clsReg);
}
const addClass = (obj, cls) => {
  obj.className.trim();   // 去除字符串前后空格
  if(!hasClass(obj, cls)) {
    obj.className += ' ' + cls;
  }
}
cosnt removeClass = (obj, cls) => {
  if(hasClass(obj, cls)) {
    obj.className = obj.className.replace(clsReg, ' ');
  }
}
export { getId as $, addClass, removeClass }
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

#### :radio_button: class 类

```javascript
/* ES5 创建类 */
const Slider = function() {
  this.aaa = 3;
}
Slider.prototype.method = function() {   // 给Slider函数的原型添加方法
  console.log(this.aaa);
  setTimeout(() => {
    this.aaa = 2;
  }, 1000)
}
var slider = new Slider({ aaa: 1 });
slider.method();

/* ES6 创建类 */
class Slider {   // 每个类必须有一个constructor构造函数
  constructor() {
    this.aaa = 3;
    this.aaa = this.aaa.bind(this);
  }
  
  method() {
    console.log(this.aaa);
    setTimeout(() => {
      this.aaa = 2;
    }, 1000)
  }
  
  async cl() {   // 可以为async函数
    await console.log('123');
  }
  
  static method2() {
    console.log('method2');
  }
}

const slider = new Slider();
slider.method();   // 实例方法，属于实例化类后对象的方法，即实例对象调用的方法

Slider.method2();   // 静态方法，属于类的方法，类可以直接调用
```

函数声明会被提升，而类的声明不会被提升。

JavaScript类中有三种类型的方法:

- 构造方法
- 静态方法
- 原型方法

类构造函数方法创建初始化对象。一个类只能有一个构造方法，可以使用constructor关键字创建构造函数。

类的静态方法是用类调用的，而不是用类的实例对象调用的。

```scss
class Car {
  static count {
    console.log("我是静态方法");
  }
}
Car.count();
```

任何使用类的实例对象访问的常规方法都被称为原型方法，这些方法可以继承和使用类的对象。

```scss
class Car {
    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }
    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}
var car1 = new Car("BMW", 10);
car1.getInfo();
```

#### :radio_button: Symbol 类型

ES6 为 JavaScript 引入了一种新的基本类型：Symbol，它由全局 Symbol() 函数创建，每次调用 Symbol()函数，都会返回一个唯一的 Symbol。Symbol 充当唯一的对象键(存在于__proto__)。

[Symbol](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)

**Symbol.iterator **为每一个对象定义了默认的迭代器，该迭代器可以被 `for...of` 循环使用。

#### :radio_button: promise 函数

```javascript
Form.onsubmit = async(e) => {
  e.preventDefault(e);
  
  /* 普通的回调嵌套 */
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
  
  /* promise 函数，将回调嵌套变为链式操作 */
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
  
  /* async&await 依赖于 promise 函数 */
  const asy1 = await prom1();   // 对于await 先后顺序
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

#### :radio_button: Object.assign() 

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象

语法: Object.assign(target, ...sources)

#### :radio_button: Object.key()

`Object.key()` 方法用于列举出指定对象上所有可枚举属性的key (不包括原型链上的)

语法: Object.keys(obj)

#### :radio_button: Object.getOwnPropertyNames()

`Object.getOwnPropertyNames()` 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

#### :radio_button: Object.getOwnPropertySymbols()

`Object.getOwnPropertySymbols()` 方法返回一个给定对象自身的所有 Symbol 属性的数组。

#### :radio_button: Array.from()

`Array.from()` 方法从一个类似数组或可迭代对象中创建一个新的数组实例。