[TOC]



## Sass 控制指令

#### :radio_button: @if

@if指令是一个SassScript，它可以根据条件来处理样式块，如果条件为true返回一个样式块，反之false返回另一个样式块。在Sass中除了 @if 之外，还可以配合 @else if 和 @else 一起使用。
假设要控制一个元素隐藏或显示，我们就可以定义一个混合指令，通过 @if... @else... 来判断传进参数的值来控制display的值。如下：

```scss
@mixin blockOrHidden($boolean: true) {
	@if $boolean {
		@debug "$boolean is #{ $boolean }";
		display: block;
	}
	@else {
		@debug "$boolean is #{ $boolean }";
		display: none;
	}
}
.block {
	@include blockOrHidden;
}
.hidden {
	@include blockOrHidden(false);
}

// 编译结果
.block {
	display: block;
}
.hidden {
	display: none;
}
```
#### :radio_button: @for循环

在制作网格系统的时候，大家应该对.col1~.col12这样的印象较深，在CSS中你需要一个一个去书写，但在Sass中，可以使用@for循环来完成。在Sass的@for循环中有两种方式：

```scss
@for $item from <start> through <end>
@for $item from <start> to <end>
```
$item 表示变量，start 表示起始值，end 表示结束值

这两种方式的区别是关键字 through 表示包括 end 这个元素，而 to 则不包括 end 。

```scss
@for $item from 1 through 3 {
	.item-#{ $item } {
		width: 2em * $item;
	}
}

// 编译结果
.item-1{
	width: 2em;
}
.item-2{
	width: 4em;
}
.item-3{
	width: 6em;
}
```

@for应用在网格系统生成各个格子class的代码 (高级) :
```scss
$grid-prefix: span !default;
$grid-width: 60px !default;
$grid-gutter: 20px !default;
%grid {
	float: left;
	margin-left: $grid-gutter / 2;
	margin-right: $grid-gutter / 2;
}
@for $item from 1 through 12 {
	.#{ $grid-prefix }#{ $item } {
		width: $grid-width * $item + $grid-gutter * ($item - 1);
		@extend %grid;
	}
}

// 编译结果
.span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12 {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}
.span1 {
  width: 60px;
}
.span2 {
  width: 140px;
}
.span3 {
  width: 220px;
}
.span4 {
  width: 300px;
}
...........
```

#### :radio_button: @each 循环

@each循环就是去遍历一个值列表，然后从列表中取出对应的值。

语法： `@each $var in <list>`

```scss
$list: aliali deng jing zao adam ai;
@mixin author-images {
  @each $author in $list {
    .photo-#{ $author } {
      background: url("/images/avatars/#{ $author }.png") no-repeat;
    }
  }
}
.author-bio {
  @include author-images;
}
```

### 

> ### 以下 很多都是建立类似Bootstrap这种库时才用得上的高级方法



## Sass 函数功能

Sass内置了一系列的函数功能:

- 字符串函数
- 数字函数
- 列表函数
- 颜色函数
- Intropection函数
- 三元函数

除了内置的函数功能外，我们还可以根据自己的需求定义函数功能，常常称之为自定义函数。

#### :radio_button: 字符串函数 - unquote()

unquote()函数主要是用来删除指定字符串中的引号，如果这个字符串没有带有引号，将返回原始的字符串。

注：只能删除字符串最前和最后的引号（单引号或双引号），而无法删除中间的引号。

```scss
.test {
  content: unquote('Hello aliali!');
}

// 编译结果
.test {
  content: Hello aliali!;
}
```

#### :radio_button: 字符串函数 - quote()

quote()函数与unquote()函数功能相反，主要用来给字符串添加引号。如果字符串自身带有引号，会统一换成双引号""。

注：使用 quote() 函数只能给字符串增加双引号，而且字符串中间有单引号、空格或者特殊符号，比如： !、?、> 等，需要用单引号或双引号括起，否则编译的时候将会报错。

#### :radio_button: 字符串函数 - to-upper-case()和to-lower-case()

to-upper-case() 函数将字符串小写字母转换成大写字母

to-lower-case() 函数将字符串大写字母转换成小写字母

#### :radio_button: 数字函数 - percentage()

percentage()函数主要是将一个不带单位的数字转换成百分比形式：

```scss
>> percentage(.2)
20%
>> percentage(2px / 10px)
20%
>> percentage(2em / 10em)
20%
```

#### :radio_button: 数字函数 - round() 四舍五入 

#### :radio_button: 数字函数 - ceil() 向上取整 

#### :radio_button: 数字函数 - floor() 向下取整 

#### :radio_button: 数字函数 - abs() 取绝对值 

#### :radio_button: 数字函数 - min()和max() 

min()函数主要是在多个数之中取最小值，这个函数可以设置任意多个参数

max()函数主要是在多个数之中取最大值，这个函数可以设置任意多个参数

注：在min()和max()中同时出现两种不同类型的单位，将会报错。

#### :radio_button: 数字函数 - random() 取随机数 

#### :radio_button: 列表函数 - length() 

length()函数返回值列表的长度

length()函数中的值列表参数之间使用空格隔开，不能使用逗号，否则函数将会出错

#### :radio_button: 列表函数 - nth()

nth()函数用来指定值列表中某个位置的值。（从1开始）

语法：`nth(值列表, 位置)`

#### :radio_button: 列表函数 - join()

join()函数将两个值列表连结合并成一个值列表

只能连结两个，要想连结多个值列表，需要使用多个join()函数

语法: `join(值列表1, 值列表2, [$separator])`

 $separator，这个参数主要是用来给连接列表使用的分隔符号，默认值是auto

  - 如果$separator取值 comma 将会以逗号分隔
  - 如果$separator取值 space 将会以空格分隔

#### :radio_button: 列表函数 - append()

append()函数用来将某个值插入到值列表的末尾中

语法: `append(值列表, 要插入的值, [$separator])`

#### :radio_button: 列表函数 - index()

index()函数类似于索引，返回某个值在值列表中所处的位置（从1开始），如果不存在返回false

语法: `index(值列表, 某个值)`

#### :radio_button: Intropection函数

Intropection函数包括几个判断型函数:

- `type-of($value)` 返回一个值的类型
- `unit($number)` 返回一个值的单位
- `unitless($number)` 判断一个值是否带有单位
- `comparable(number1, number2)` 判断两个值是否可以做加、减和合并

#### :radio_button: Miscellaneous函数 (三元条件函数)

在这里把 Miscellaneous 函数称为三元条件函数，主要因为他和 JavaScript 中的三元判断非常的相似。他有两个值，当条件成立返回一种值，当条件不成立时返回另一种值：

语法: `if(条件, $if-true, $if-false)`

#### :radio_button: Map

...............................................

#### :radio_button: 颜色函数

...............................................

