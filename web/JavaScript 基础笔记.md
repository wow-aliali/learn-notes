[TOC]



### :heartpulse: JavaScript 简介 

JavaScript 是基于ECMAScript标准实现的。

JavaScript 由ECMAScript，DOM，BOM组成。



### :heartpulse: 数字字面量

字面量：表示固定值的一种方法，也叫常量。

字面量：数字、字符串、undefined、Boolean

数字字面量包含整数、浮点数和特殊值（Infinity和NaN）。



### :heartpulse: 变量声明

变量（variables），可以把变量看成一个容器，里面可以存放任何数据，包括字面量、函数、数组等等。



### :heartpulse: 数据类型的检测

简单数据类型：number、string、undefined、Boolean、null

复杂数据类型：object

typeof：操作符，后面的括号可有可无



### :heartpulse: 数据类型的转换

`prompt`：

​	类似于alert也是弹出框，它可以进行文字输入。

​	有两个参数，第一个参数表示提示文本，第二个参数表示默认文本（可以省略）。

​	输入的数据可以用变量接收，输入的数据类型都是string。

字符串转换为数字类型有3种方法：`number（）`、`parseInt（）`、`parseFloat()`

`parseInt()`有两个参数，第一个参数是要转换的字符串，第二个是进制。<u>也可以用来对数字进行取整</u>。



### :heartpulse: 运算符（操作符）

分类：数学运算符，比较运算符，逻辑运算符，赋值运算符，按位运算符，三元运算符

数学运算符：`+`，`-`，`*`，`/`，`%`

​	1.数字字符串和数字进行数学运算时，<u>除加法外</u>其它数学运算符都会进行隐式转换（为数字类型）。

​	2.Boolean和null在与数字进行数学运算时，也进行隐式转换：

​		true转换为数字1，false和null转换为数字0

​	3.undefined和非数字字符串进行数学运算时，<u>除加法外</u>，得到的都是NaN。

比较运算符：`<`，`>`，`<=`，`>=`，`==`，`===`，`!=`，`!==`

​	1.类似数学运算符，在进行比较运算时，会进行隐式转换

​	2.null==0 会返回false

​	3.非数字字符串的比较。不是比较字符长短，而是比较字符的Unicode编码，顺序在靠前的小于靠后

​	的。如果第一个字符相等，则依次往后比较。															                                    

​	字符Unicode编码顺序：数字，大写字母，小写字母。

逻辑运算符：`&&`，`||`，`!`

​	逻辑运算通常指的是布尔值参与运算

​	逻辑运算符的顺序：非 → 与 → 或



### :heartpulse: Math对象

Math对象是js内置的功能强大的数学对象，包含数学中所有的属性和方法。

​	`Math.random（）` 返回一个浮点，伪随机数在范围**[0，1)** 。可以设置两个参数返回一个在指定值之间的随机数。

​	`Math.pow()` 幂的运算。有两个参数，第一个是底数，第二个是幂。

​	`Math.sqrt（）` 返回一个数的平方根。

​	`Math.ceil()` 向上取整。

​	`Math.floor()` 向下取整。

​	`Math.round()` 四舍五入取整。

​	`Math.PI` 返回π的值。



### :heartpulse: 三元运算符

三元运算符和if语句都是条件分支语句。三元运算符都可以转为if语句。

三元表达式适用于变量的赋值是二选一的情况。

switch语句适用于一个值去匹配多种情况。



### :heartpulse: switch语句

switch语句也是条件分支语句，又叫开关语句，允许程序计算一个表达式的值，然后让这个值去匹配一个case选项，匹配成功后直接执行该case中的结构体。

语法：

```javascript
switch(某值) {
  case label_1 : 
    语句1;       // 匹配label_1，执行语句1
  	break;       // 强制跳出switch
  case label_2 : 
    语句2;       // 匹配label_2，执行语句2
  	break;
  ...
  default : 
  	语句x;       // 前面所有的case都不满足时执行的语句，default语句可以不写
  	break;       // 这个break可有可无
}
```

switch语句都可以转为if语句。



### :heartpulse: 循环语句

#### for循环

​	循环变量通常为i，j，k。var定义的循环变量是全局变量，可以放在for循环外。（let替代）

#### do...while循环

​	do...while循环语句是后测试循环语句。先执行结构体，然后在判断表达式：满足条件，再次执行结构体；不满足则结束循环。

```javascript
do {
	  结构体;       // 即使第一次不满足判断条件，也会执行
} while(表达式)
```

#### while循环

​	while循环执行一段代码，直到遇见条件为假时，结束循环。（少用，尽量用for循环）。

​	循环变量必须在外面。

#### break关键字

​	强制结束当前循环，把语句的控制权交给该循环后面的语句。

#### continue关键字

​	当满足某个条件时，有continue只会结束当前语句，不会结束整个循环语句。



### :heartpulse: 函数

函数可以帮我们封装一些代码，代码可以重复调用，函数留了一个接口，就是它的参数。

<u>形式参数（形参）</u>：函数定义的时候，小括号内的参数叫做形参。

<u>实际参数（实参）</u>：函数调用的时候，传递的参数叫做实参。

实参的个数可以不等于形参的个数：

​	1.实参个数多于形参，超过形参的部分直接舍弃

​	2.实参个数少于形参，先给前面的形参参数赋值，后面没有赋值的则为undefined

return关键字：

​	函数不仅可以用输出语句输出，还可以使用return语句接收返回整个函数。

​	在函数内部遇见return关键字，<u>会立即停止return语句之后的语句</u>，直接返回。

```javascript
function sum(a, b) {
  return a + b;
}
// return 只是作为返回值
// 想输出语句必须在调用时使用输出语句
console.log(sum(1, 2));
```

函数声明的提升：我们可以先调用函数，后定义函数。函数的声明也是只提升函数名，不提升函数的定义。（函数名存储的是函数的<u>地址</u>）




### :heartpulse: 变量的作用域
函数内变量的作用域:在函数内部定义的变量仅在当前函数内起作用。

块级作用域：{}包裹的就是块级作用域。

作用域链：指的是变量查找的一个规律。当遇见一个变量时，JS引擎会从其所在的作用域依次向外层查找，查找会在找到第一个匹配的标识符的时候停止。



### :heartpulse: 闭包

```javascript
function outer() {
  var a = 1;
  function inner() {
    console.log(a);
  }
  return inner;   // 没有小括号, 表示只输出inner函数的定义, 不会立即执行
}

var fun = outer();   // 变量fun内部存储的是inner函数的地址
fun();   // 本层没有a的定义, 但是inner的作用域链存在`var a = 1`, 所以输出1
```

以上的inner函数把自己内部的语句，和自己声明时所处的作用域一起封装成了一个密闭环境，我们称为闭包。（内部语句 `console.log(a);` 和外部环境 `a = 1`）

<u>函数本身就是一个闭包</u>。函数定义的时候，就能记住它的内部语句和外部环境，每次执行都会参考定义时的密闭环境。

每次调用一个函数，都会产生新的闭包。新的闭包是指，语句全新，所处的环境也是全新的。



### :heartpulse: 模块化编程

模块化编程就是将一些基础的公共的部分单独封装到一个函数内，可以多次被调用。

模块化编程可以让我们的程序更加优化，各个小模块要尽量功能单一，提高重复使用率。



### :heartpulse: 数组

##### 数组的首尾操作：

​	`push() `在数组末尾添加一个或多个元素，并返回数组操作后的长度

​	`pop() `从数组移除最后一个元素，并返回该元素

​	`shift() `从数组移除第一个元素，并返回该元素

​	`unshift()` 在数组开头添加一个或多个元素，并返回数组操作后的长度

##### 数组的合并和拆分:

​	合并：`concat()` 方法用于连接两个或多个数组，并作为一个新数组返回

​	拆分：`slice()` 从数组提取一个片段，并作为一个新数组返回

> arr.slice(start, end)返回一个新的数组，包含从下标start到end（不包括该元素）的元素。只写start表示截取从start到最后。下标可以用负值，表示倒数第几项。

##### 数组的删除、插入、替换：

​	`splice()` 方法用于插入，删除或者替换数组的元素。

​	`arr.splice(index, howmany, elem1, ..., elemX)` 前2个参数是必要的

​		index：表示删除元素的起始位置的索引值，可为负值

​		howmany：删除的元素个数，为0表示不删除

​		elem：表示要替换的新的元素。如有，表示插入或替换，没有，则表示删除

##### 数组的倒序和排序：

​	`reverse()` 颠倒数组元素的顺序（第一和倒一相互替换）

​	`sort()` 给数组元素排序，默认按字符编码顺序排序（数字-大写字母-小写字母）

##### 将数组转成字符串：

​	`join()` 将数组整体转为一个字符串

​		如没有参数，默认的连接符为逗号，如传递参数，参数会作为连接符



### :heartpulse: 字符串

##### 字符串的方法:

​	`charAt()` 表示索引值对应的字符

​	`indexOf()` 表示指定字符首次出现的位置，返回值是一个数组

​	`concat()` 表示字符串的拼接，参数可以是一个字符串或多个，用逗号隔开

​	`slice(start, end)` 表示截取索引值从start到end之间的字符串，不包括end

​	`substring(start, end)` 表示截取索引值从start到end之间的字符串，不包括end

​		(`substring()` 的参数不能为负值，且会自动判断两个参数的大小)

​	`split()` 表示用指定字符截取整个字符串得到一个新数组，参数为指定字符

​	`substr(start, howmany)` 表示从某个索引值开始截取一段数目的字符串

​	`toUpperCase()` 表示转换为大写字母

​	`toLowerCase()` 表示转换为小写字母

```javascript
// 将每个单词的首字母大写
var str = "everything is good in its season";

var arr = str.split(" ");
for(let i = 0 ; i <= arr.length - 1 ; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
arr.join(" ");
```



### :heartpulse: 正则表达式

正则表达式（regular expression），简称RegExp，是被用来匹配字符串中的字符组合的模式，常用于表单验证。 `/表达式/`

```javascript
var reg = /\d+/   // 表示有一个或多个数字
var reg = /\d+/   // 表示有一个或多个空格
var reg = /abcd/   // 表示有四个字符必须是a,b,c,d 并且顺序须一致
```

##### 正则的方法:

​	`exec()` 表示匹配的字符串在父字符串中的位置，返回一个数组。即使是全局匹配 `g` 也只会返回字符串第一次出现的位置

​	`test()` 检测指定字符串能否匹配正则表达式，能匹配返回true，不能则false

```javascript
var str = "aaabcddddjabcd";
/abc/.exec(str);
/abc/.test(str);   // 返回true
```

##### 字符集：

​	想用一类字符匹配一个字符，需要用到字符集。

​	[]，将一类字符的可能性都写在中括号内。

​	简单类：`/s[abc]n/` 可以是含san，sbn或scn

​	范围类：利用一个范围将可能性都包含在内 `/[a-z]/` `/[0-9]/` `/[A-Z]/`

​	负向类：[]前面加个元字符^进行取反，表示不能匹配括号内的字符 `/^[a-z]/`

​	组合类：允许用中括号匹配不同类型的单个字符 `/[a-z0-9]/`

##### 字符的边界：

​	`^` 开头

​	`$` 结尾

​	`\b` 单词的边界

​	`\B` 非单词的边界

```javascript
var str = "hello world";
str.match(/\b\w+\b/);   // 返回"hello"
str.match(/\B\w+\B/);   // 返回"ell"
```

##### 修饰符：

​	`g` 表示全局匹配，写在正则表达式的最后 `/正则/g`

​	`i` 表示不区分大小写 `/正则/i`

##### 预定义类(特殊字符集的简写)：

​	`.` 表示出了换行`\n`和回车`\r`之外的任意字符

​	`\d` 表示数字字符

​	`\D` 表示非数字字符

​	`\s` 表示空白字符

​	`\S` 表示非空白字符

​	`\w` 表示单词字符(所有的字母，数字和下划线)

​	`\W` 表示非单词字符

##### 量词：

​	`{n}` 硬性量词，表示字符串出现 0 或 n 次

​	`{n,}` 软性量词，表示至少出现 n 次

​	`{n, m}` 软性量词，表示至少出现 n ~ m 次

​	`?` 表示出现 0 或 1 次，相当于`{0, 1}`

​	`+` 表示出现 1 次或多次

​	`*` 表示出现 0 次或多次 (任意次数)

##### 分组：

​	用中括号表示范围选择，大括号表示重复次数，如果想获取重复多个字符，可以用小括号进行分组。

​	`/(bye){2}/` 表示匹配"byebye"



### :heartpulse: arguments

​	arguments是一个类数组对象。

​	后台语言都有一种函数重载现象：函数名相同，但形参不同，属于不同的函数。JS没有重载现象，JS中函数名相同，形参不同时，后面的会覆盖掉前端面的。

​	当函数执行时，传递的实参会存入到arguments这个类数组对象中。

​	arguments可以通过下标获取任意一项实参，还可以通过下标进行实参的赋值。

​	可以根据传递的实参的个数不同，函数执行不同的操作（模拟函数的重载现象）↓

```javascript
function sum(a, b, c) {
  if(arguments.length == 2) {
    return a + b;
  } else {
    return (a > b ? a : b) + c;
  }
};
console.log(sum(1, 2));
```

​	可以使用Array.prototype.slice.call(arguments)将arguments对象转换为数组.



### :heartpulse: IIFE

IIFE是一个缩写，中文名为即时调用函数表达式。表示在函数定义的时候，就立即执行。

```javascript
// 把function关键字定义的函数矮化为表达式
// 在函数前面加数学运算符
+function fun(a, b){
   ....
}();
  
(function(a, b){
   ....
})();   // 实际工作中使用匿名函数的IIFE
        // 在后面小括号里传递实参
```

IIFE能够关住自己的作用域。

```javascript
(function fun(a, b){
  ....
})();
fun(1, 2);  // 抛出错误，fun函数未定义
```

IIFE中匿名函数如果有返回值可以直接作为值参与运算。

```javascript
function sum(a, b, c){
  return (function(a, b){
    return (a > b ? a : b);
  })(a, b) + c;
};
sum(1, 2, 3);   // 5
```



### :heartpulse: 结合数组观察闭包

数组中的数据可以是任意类型，现在让数组中的每一项存入函数。

```javascript
var arr = [];
for(let i = 0 ; i < 10 ; i ++) {
  arr[i] = function() {
    console.log(i);
  };
}
console.log(arr[3]());   // 输出10而不会输出3
					   // 当执行时遍历已经结束，i为10

// 使用IIFE
var arr = [];
for(let i = 0 ; i < 10 ; i ++) {
  (function(a){
    arr[a] = function() {
      console.log(a);
    };
  })(i);
}
console.log(arr[3]());   // 成功输出3
```



### :heartpulse: DOM

##### 点语法和getAttribute(),setAttribute()区别：

​	1.点语法只能用于操作html原生属性而不能操作自定义属性，后者可以。

​	2.点操作属性时，某些属性名需要更改，后者无需。

​	  `class`改为`className`

​	  `for`改为`htmlFor`

​	3.点语法操作属性时得到的是对象，后者得到字符串。

​	总结：只有自定义属性才使用getAttribute(),setAttribute()，其它情况用点操作。

##### 事件：

​	`onclick`  单击

​	`ondblclick`  双击

​	`onmouseover`  鼠标移上

​	`onmouseenter` 鼠标移入

​	`onmouseout`  鼠标移出

​	`onmousedown`  鼠标按下

​	`onmouseup`  鼠标弹起

​	`onfocus`  获取焦点

​	`onblur`  失去焦点

​	`onload`  加载完毕之后

##### 批量添加事件：

```javascript
/* 
<div class="box1">
  <p>1</p>
  <p>2</p> 
  <p>3</p> 
  <p>4</p> 
</div> 
*/
window.onload = function() {
  var ps = document.getElementById("box1").getElementsByTagName("p");
  for(let i = 0 ; i < ps.length ; i ++){
    ps[i].onclick = function() {
      console.log(this.innerHTML);
    };
  }
};
// this只能用于函数的内部，指代触发这个事件的对象，包括这个对象的所有方法和属性
```

