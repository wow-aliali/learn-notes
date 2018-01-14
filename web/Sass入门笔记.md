> CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题，例如可以在 CSS 中使用**变量**、**简单的逻辑程序**、**函数**等等在编程语言中的一些基本特性，可以让你的 CSS **更加简洁**、**适应性更强**、**可读性更佳**，**更易于代码的维护**等诸多好处。



> Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。
> Sass 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。



Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

1. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
2. 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号{}和分号;，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

**Sass 语法**

```scss
$font-stack: Helvetica, sans-serif   //定义变量
$primary-color: #333   //定义变量

body
  font: 100% $font-stack
  color: $primary-color
```

**SCSS 语法**

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

SCSS 和 CSS 写法无差别，这也是 Sass 后来越来越受大众喜欢原因之一。简单点说，把现有的“.css”文件直接修改成“.scss”即可使用。



## Sass编译

Sass 的编译有多种方法：

- 命令编译
- GUI工具编译   (koala)
- 自动化编译    (grunt & gulp)



不同样式风格的输出方法(在编译的时候带上参数 "--style 方式名")：

1. **嵌套输出方式 nested**       // 默认
2. **展开输出方式 expanded  **   // 利于维护（开发版使用）
3. **紧凑输出方式 compact **
4. **压缩输出方式 compressed**   // 文件体积小（上线版）





## Sass基本特性

#### :radio_button: 默认变量

声明的变量值后面加上!default则表示默认值

sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。 (!default < 新属性值 < !important)

```scss
$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight;   // 2
}
```

#### :radio_button: 局部变量和全局变量

```scss
$color: orange !default;   //定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
.block {
  color: $color;   //调用全局变量
}
em {
  $color: red;   //定义局部变量
  a {
    color: $color;   //调用局部变量
  }
}
```

全局变量就是定义在元素外面的变量，局部变量就是定义在元素内部的变量

局部变量只会在其所在的局部范围内覆盖全局变量

什么时候声明变量:

1. 该值至少重复出现了两次；
2. 该值至少可能会被更新一次；
3. 该值所有的表现都与变量有关（非巧合）。

#### :radio_button: Sass嵌套

Sass 的嵌套分为三种：

- 选择器嵌套
- 属性嵌套
- 伪类嵌套

```scss
/* CSS */
nav a {
  color:red;
}
header nav a {
  color:green;
}

/* Sass选择器嵌套 */
nav {
  a {
    color: red;

    header & {   // 相当于 header nav a ，& 嵌套在哪个元素里面，& 就等于这个元素的嵌套结构
      color: green;
    }
  }  
}
```

```scss
/* CSS */
.box {
  font-size: 12px;
  font-weight: bold;
}

/* Sass属性嵌套 */
.box {
  font: {   // 别忘了冒号
    size: 12px;
    weight: bold;
  }
}
```

```scss
/* Sass伪类嵌套 */
.clearfix{   // 清除浮动代码
  &:before, &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
}
```

#### :radio_button: 混合指令

如果你的整个网站中有几处小样式类似，比如颜色，字体等，在 Sass 可以使用变量来统一处理，那么这种选择还是不错的。但当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合指令就会变得非常有意义。

```scss
/* 不带参数混合指令 */
@mixin border-radius {
  -webkit-border-radius: 5px;
  border-radius: 5px;
}   // @mixin 是用来声明混合指令的关键词，border-radius 是混合指令的名称，大括号里面是复用的样式代码

/* 带参数混合指令 */
@mixin border-radius($radius: 5px) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}

/* 复杂的混合指令 (带有逻辑关系) */
@mixin box-shadow($shadow...) {   // 带有多个参数，可以使用“ ... ”来替代
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);   // 使用 @include 指令引用混合样式
  } @else {
    $shadow: 0 0 4px rgba(0, 0, 0, .3);
    @include prefixer(box-shadow, $shadow);
  }
}

// 调用不带参数混合指令
button {
  @include border-radius;
}
```

##### 混合指令的参数:

```scss
/* 传一个不带值的参数 */
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.box {
  @include border-radius(3px);   // 在调用的时候给这个混合指令传一个参数值
}

/* 传一个带值的参数 */
@mixin border-radius($radius: 3px) {   // 传一个默认值，如果调用时传其它值，默认值就会被取代
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
.box {
  @include border-radius(50%);
}

/* 传多个参数 */
@mixin text-center($width, $height, $text-align: center) {
  width: $width;
  height: $height;
  text-align: $text-align;
}
.box {
  @include text-center(500px, 300px);   // 如果没有给参数赋值，则自动使用默认值
}

/* 关键词参数 */
.box {
  @include text-center($height: 300px, $width: 500px);
  // 不够简明，但是阅读起来会更方便，参数可以打乱顺序使用
}

/* 参数变量... */
// 有一个特别的参数...，当混合指令传的参数过多(参数数量未知)之时，可以使用参数变量...来声明
@mixin box-shadow($shadow...) {
  -moz-box-shadow: $shadow;
  -webkit-box-shadow: $shadow;
  box-shadow: $shadow;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
// 结果为:
// .shadowed {
//   -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
//   -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
//   box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
// }
```

#### :radio_button: 继承指令

在Sass中是通过关键词 @extend 来继承已存在的类样式块，从而实现代码的继承

```scss
.btn {
  font-size: 14px;
  border: 1px solid #ccc;
}
.btn-primary {
  background-color: #f36;
  @extend .btn;
}
.btn-second {
  background-color: orange;
  @extend .btn;
}

// 编译结果
.btn, .btn-primary, .btn-second {
  font-size: 14px;
  border: 1px solid #ccc;
}
.btn-primary {
  background-color: #f36;
}
.btn-second {
  background-color: orange;
}
```

```scss
/* 多重继承 */
.serousError {
  @extend .error, .attention;   // 可以分开写
  border-width: 3px;
}

/* 继承延伸 */
// 当一个选择器继承给第二个后，可以继续将第二个选择器继承给第三个
```

#### :radio_button: 占位符 %placeholder

%placeholder 声明的代码，如果不被 @extend 调用的话，不会产生任何代码

```scss
%mt5 {
  margin-top: 5px;
}
%pt5 {
  padding-top: 5px;
}
.btn {
  @extend %mt5;
}
.block {
  @extend %mt5;
  
  span {
    @extend %pt5;
  }
}

// 编译结果
.btn, .block {   // 通过@extend调用的占位符，编译会将调用同一占位符的class合并在一起
  margin-top: 5px;
}
.block span {
  padding-top: 5px;
}
// 
```

#### :radio_button: 混合指令 VS 继承 VS 占位符

- ##### 混合指令

  总结: 不会自动合并相同的样式代码，如果在样式文件中调用同一个混合指令，会产生多个对应的样式代码，造成代码的冗余，但是，它可以传参数。

  个人建议: 如果代码块中涉及到变量，建议使用混合指令来创建相同的代码块。

- ##### 继承

  总结: 使用继承后，编译出来的 CSS 会将使用继承的代码块合并到一起，通过组合选择器的方式展现，但是它不能传变量参数。

  个人建议: 如果代码块中不需要传任何变量参数，而且有一个基类已在文件中存在，那么建议使用继承

- ##### % 占位符

  总结: 编译出来的 CSS 代码和使用继承基本上是相同，只是不会在代码中生成占位符 mt 的选择器。<u>对于占位符和继承的选择，取决于，基类是不是有用。</u>

![](http://img.mukewang.com/55263aa30001913307940364.jpg)

#### :radio_button: 插值 #{}

通过 `#{}` 插值语句可以在选择器或属性名中使用变量

```scss
$name: foo;
$attr: border;
p.#{ $name } {
  #{ $attr }-color: blue;
}
```

不能在 `@include` 后面使用插值，但可以在 `@extend` 后面使用插值

```scss
// 以下报错
@mixin updated-status {
    margin-top: 20px;
    background: #F00;
}
$flag: "status";
.navigation {
    @include updated-#{$flag};
}

// 以下正常
%updated-status {
    margin-top: 20px;
    background: #F00;
}
.selected-status {
    font-weight: bold;
}
$flag: "status";
.navigation {
    @extend %updated-#{$flag};
    @extend .selected-#{$flag};
}
```

#### :radio_button: 注释

`/* 我是注释 */`  该类注释会在编译后显示

`// 我是注释`  该类注释不会在编译后显示

#### :radio_button: 数据类型

- 数字: 如1、2、13、10px
- 字符串: 有引号字符串或无引号字符串，如"foo"、"bar"、baz
- 颜色: 如blue、#04a3f9、rgba(255,0,0,0.5)
- 布尔型: 如true、false
- 空值: 如null
- 值列表: 用空格或者逗号分隔的一系列的值，如 `1.5em 1em 0 2em` 和 `Helvetica, Arial, sans-serif`
- maps: 相当于JS里的object，如 `(key1: value1, key2: value2)`



在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{ }插值语句 (interpolation) 时，有引号字符串将被编译为无引号字符串，这样方便引用选择器名和属性名:

```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi, Firefox users!";
  }
}
@include firefox-message(".header");
```



值列表是通过空格或者逗号分隔的一系列的值。事实上，独立的值也被视为值列表——只包含一个值的值列表。

Sass列表函数（Sass list functions）赋予了值列表更多功能:

- nth函数  可以直接访问值列表中的某一项
- join函数  可以将多个值列表连结在一起
- append函数  可以在值列表中添加值
- @each规则  能够给值列表中的每一个项目添加样式


#### :radio_button: Sass运算

程序中的运算是常见的一件事情，但在 CSS 中能做运算的，到目前为止仅有 calc() 函数可行。但在 Sass 中，运算只是其基本特性之一，在 Sass 中可以做各种数学计算。

所有数据类型均支持相等运算 `==` 或 `!=`，此外，每种数据类型也有其各自支持的运算方式。

1. ##### 加法

  加法运算是Sass运算中的一种，在<u>变量</u>或<u>属性</u>中都可以做加法运算。

  ```scss
  .box {
    width: 20px + 8in;
  }
  ```

  ex em rem等相对当前字体的都不能运算，能换算的都会换算成px像素长度，不能换算的都会报编译错误

2. ##### 减法

   Sass 的减法运算和加法运算类似

3. ##### 乘法

   Sass 的乘法运算和加法运算略有类似，但是，如果进行乘法运算时，两个值的单位相同时，只需要为一个数值提供返单位即可。

   ```scss
   .box {
     width: 10px * 2px;   // 报错 “20px*px isn't a valid CSS value.”
     width: 10px * 2;     // 正常
   }
   ```

4. ##### 除法

   Sass 的乘法运算规则也适用于除法运算，不过除法运算还有一个特殊之处。众所周知 `/` 符号在CSS中已作为一种符号使用。因此在Sass中做除法运算时，直接使用 `/` 符号作为除号时，将不会生效，编译时既得不到需要的效果，也不会报错。要修正这个问题，只需要给运算的外面添加一个小括号**( )**即可。

   `/` 符号被当作除法运算符时有以下几种情况：

   - 如果数值或它的任意部分是存储在一个变量中或是函数的返回值
   - 如果数值被圆括号包裹
   - 如果数值是另一个数学表达式的一部分

   ```scss
   $width: 1000px;
   p {
     font: 10px/8px;         // 纯CSS，不是除法运算，编译结果不变
     width: $width/2;        // 使用了变量，是除法运算
     width: round(1.5)/2;    // 使用了函数，是除法运算
     width: (500px/2);       // 使用了圆括号，是除法运算
     width: 5px + 8px/2px;   // 使用了 + ，是除法运算 
   }
   ```

5. ##### 字符运算

   可以通过加法符号 + 来对字符串进行拼接。

   带引号字符串在在左侧跟不带引号的拼接，则结果是带引号的字符串；

   不带引号的字符串在左侧跟带引号字符串拼接，则结果是不带引号的字符串。

   （结果带不带引号取决于左侧的字符串有没引号）

   ```scss
   p {
     content: "Foo" + Bar;
     font-family: sans- + "serif";
   }

   // 编译结果
   p {
     content: "Foo Bar";
     font-family: sans-serif;
   }
   ```

   ​