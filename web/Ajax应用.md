[TOC]

```
AJAX（异步的javascript和XML） 是一种与服务器交换数据的技术，可以在不重新载入整个页面的情况下更新网页的一部分
```



# Ajax 基本概念

#### :green_heart: 完整的HTTP请求过程，通常有下面7个步骤：

1. 建立TCP连接
2. Web浏览器向Web服务器发送请求命令
3. Web浏览器发送请求头信息
4. Web服务器应答
5. Web服务器发送应答头信息
6. Web服务器向浏览器发送数据
7. Web服务器关闭TCP连接



#### :green_heart: HTTP请求一般由四部分组成：

1. HTTP请求的方法
2. 正在请求的URL
3. 请求头，包含一些客户端环境信息，身份验证信息等
4. 请求体，也就是请求正文，包含客户提交的查询字符串信息，表单信息等



#### :green_heart: HTTP响应一般由三部分组成：

1. 一个由数字和文字组成的状态码，用来显示请求是成功还是失败
2. 响应头，包含服务器类型、日期时间、内容类型和长度等
3. 响应体，也就是响应正文



#### :green_heart: HTTP状态码（首位数字定义了状态码的类型）：

- 1XX ： 信息类，表示收到Web浏览器请求，正在进一步的处理中
- 2XX ： 成功，表示用户请求被正确接收，理解和处理
- 3XX ： 重定向，表示请求没有成功，客户必须采取进一步的动作
- 4XX ： 客户端错误，表示客户端提交的请求有错误
- 5XX ： 服务器错误，表示服务器不能完成对请求的处理，如 500 - 内部服务器错误



#### :green_heart: XMLHttpRequest 发送请求：

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "get.php", true);
xhr.send();

xhr.open("POST", "create.php", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 数据被编码为名称/值对，这是标准的编码格式
xhr.send("name=王二狗&sex=男");   // POST请求传参需要写在send()方法内，GET请求直接写在URL地址里
```

#### :green_heart: XMLHttpRequest 获取响应：

- responseText 获得字符串形式的响应数据
- responseXML 获得XML形式的响应数据
- status和statusText 以数字和文本形式返回HTTP状态码
- getAllResponseHeaders() 获取所有的响应报头
- getResponseHeader() 查询响应中的某个字段的值
- readyState 获得HTTP请求的当前状态
  - 0 - 请求未初始化，open还没有调用
  - 1 - 服务器连接已建立，open已经调用
  - 2 - 请求已接收，也就是接收到头信息了
  - 3 - 请求处理中，也就是接收到响应主体了
  - 4 - 请求已完成，且响应已就绪，也就是响应完成

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "get.php", true);
xhr.send();
xhr.onreadystatechange = () => {
  if(xhr.readyState === 4 && xhr.status === 200) {
    // 成功之后 ...  xhr.responseText
  } else {
    console.log("发生错误" + xhr.status);
  }
}
```

#### :green_heart: JSON 解析

`JSON.parse()` 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。

#### :green_heart: 跨域

一个域名地址的组成:

![mark](http://osxo5iyn5.bkt.clouddn.com/img/180121/IBA7L11Fak.jpg)

- 当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域
- 不同域之间相互请求资源，就算作 “跨域”



[前端常见跨域解决方案（全）](https://mp.weixin.qq.com/s/fDlyrRTv6zp-PQ1iRkTpBQ)



# jQuery中的Ajax

#### :green_heart: 使用load()方法异步请求数据

使用`load()`方法通过Ajax请求加载服务器中的数据，并把返回的数据放置到指定的元素中，它的调用格式为：

`load(url,[data],[callback])`

参数url为加载服务器地址，可选项data参数为请求时发送的数据，callback参数为数据请求成功后，执行的回调函数。

例如，点击“加载”按钮时，向服务器请求加载一个指定页面的内容，加载成功后，将数据内容显示在<div>元素中，并将加载按钮变为不可用。如下图所示：

![](http://img.mukewang.com/52dccb920001d2d505970337.jpg)

在浏览器中显示的效果：

![](http://img.mukewang.com/52dccbaf0001c21507380393.jpg)

从图中可以看出，当点击“加载”按钮时，通过调用`load()`方法向服务器请求加载fruit.html文件中的内容，当加载成功后，先显示数据，并将按钮变为不可用。



#### :green_heart: 使用getJSON()方法异步加载JSON格式数据

使用`getJSON()`方法可以通过Ajax异步请求的方式，获取服务器中的数据，并对获取的数据进行解析，显示在页面中，它的调用格式为：

`**jQuery.getJSON(url,[data],[callback])**`**或**`**$.getJSON(url,[data],[callback])**`

其中，url参数为请求加载json格式文件的服务器地址，可选项data参数为请求时发送的数据，callback参数为数据请求成功后，执行的回调函数。

例如，点击页面中的“加载”按钮，调用`getJSON()`方法获取服务器中JSON格式文件中的数据，并遍历数据，将指定的字段名内容显示在页面中。如下图所示：

![](http://img.mukewang.com/52dcced70001f67806010370.jpg)

在浏览器中显示的效果：

![](http://img.mukewang.com/52dccefe0001c87005860341.jpg)

从图中可以看出，当点击“加载”按钮时，通过`getJSON()`方法调用服务器中的sport.json文件，获取返回的data文件数据，并遍历该数据对象，以`data[“name”]`取出数据中指定的内容，显示在页面中。

json数据格式 :

```json
[
{ "name": "跑步"},
{ "name": "爬山"},
{ "name": "游泳"}
]
```



#### :green_heart: 使用getScript()方法异步加载并执行js文件

使用`getScript()`方法异步请求并执行服务器中的JavaScript格式的文件，它的调用格式如下所示：

`jQuery.getScript(url,[callback])`或`$.getScript(url,[callback])`

参数url为服务器请求地址，可选项callback参数为请求成功后执行的回调函数。

例如，点击“加载”按钮，调用`getScript()`加载并执行服务器中指定名称的JavaScript格式的文件，并在页面中显示加载后的数据内容，如下图所示：

![](http://img.mukewang.com/52dcd433000151e606000305.jpg)

在浏览器中显示的效果：

![](http://img.mukewang.com/52dcd44e000145de06380392.jpg)



#### :green_heart: 使用get()方法以GET方式从服务器获取数据

使用`get()`方法时，采用GET方式向服务器请求数据，并通过方法中回调函数的参数返回请求的数据，它的调用格式如下：

`$.get(url,[callback])`

参数url为服务器请求地址，可选项callback参数为请求成功后执行的回调函数。

例如，当点击“加载”按钮时，调用`get()`方法向服务器中的一个.php文件以GET方式请求数据，并将返回的数据内容显示在页面中，如下图所示：

![](http://img.mukewang.com/52dcd5b1000161ce05970338.jpg)

$.get()方法还有最后一个参数规定返回的数据类型是json格式

在浏览器中显示的效果：

![img](http://img.mukewang.com/52dcd5d900010aaf06440326.jpg)



#### :green_heart: 使用post()方法以POST方式从服务器发送数据

与`get()`方法相比，`post()`方法多用于以POST方式向服务器发送数据，服务器接收到数据之后，进行处理，并将处理结果返回页面，调用格式如下：

`$.post(url,[data],[callback])`

参数url为服务器请求地址，可选项data为向服务器请求时发送的数据，可选项callback参数为请求成功后执行的回调函数。

例如，在输入框中录入一个数字，点击“检测”按钮，调用`post()`方法向服务器以POST方式发送请求，检测输入值的奇偶性，并显示在页面中，如下图所示：

![img](http://img.mukewang.com/52dcd7430001e25004690464.jpg)

在浏览器中显示的效果：

![img](http://img.mukewang.com/52dcd77200010b4c05450336.jpg)

从图中可以看出，当点击“检测”按钮时，获取输入框中的值，并将该值使用`$.post()`方法一起发送给服务器，服务器接收该值后并进行处理，最后返回处理结果。



#### :green_heart: 使用serialize()方法序列化表单元素值

> *序列化* (Serialization) 就是将对象的状态信息转换为可以存储或传输的形式 (即二进制) 的过程

使用`serialize()`方法可以将表单中有name属性的元素值进行序列化，生成标准URL编码文本字符串，直接可用于ajax请求，它的调用格式如下：

`**$(selector).serialize()**`

其中selector参数是一个或多个表单中的元素或表单元素本身。

例如，在表单中添加多个元素，点击“序列化”按钮后，调用`serialize()`方法，将表单元素序列化后的标准URL编码文本字符串显示在页面中，如下图所示：

![img](http://img.mukewang.com/52dcd9470001b1e705400481.jpg)

在浏览器中显示的效果：

![img](http://img.mukewang.com/52dcd9660001637f05610308.jpg)

从图中可以看出，当点击“序列化”按钮后，调用表单元素本身的`serialize()`方法，将表单中元素全部序列化，生成标准URL编码，各元素间通过&号相联。



#### :green_heart::green_heart: 使用ajax()方法加载服务器数据

使用`ajax()`方法是最底层、功能最强大的请求服务器数据的方法，它不仅可以获取服务器返回的数据，还能向服务器发送请求并传递数值，它的调用格式如下：

`jQuery.ajax([settings])` **或** `$.ajax([settings])`

其中参数settings为发送ajax请求时的配置对象，在该对象中：

- type为发送数据请求的方式，默认为get
- url表示服务器请求的路径
- data为请求时传递的数据(POST方法使用)
- dataType为服务器返回的数据类型
- success为请求成功时执行的回调函数（传入返回后的数据作参数）
- error为请求失败时执行的回调函数（传入XMLHttpRequest对象作参数）。

例如，点击页面中的“加载”按钮，调用`ajax()`方法向服务器请求加载一个txt文件，并将返回的文件中的内容显示在页面，如下图所示：

![img](http://img.mukewang.com/52dcdb5000014e9804600419.jpg)

在浏览器中显示的效果：

![img](http://img.mukewang.com/52dcdb6b00010eea05990345.jpg)

从图中可以看出，当点击“加载”按钮时，调用`$.ajax()`方法请求服务器中txt文件，当请求成功时调用success回调函数，获取传回的数据，并显示在页面中。



```javascript
// GET请求实例 查询员工
$('#search').click(function() {
  $.ajax({
    type: 'GET',
    url: 'service.php?number=' + $('#keyword').val(),
    dataType: 'json',
    success: function(data) {
      if(data.success) {
        $('#searchResult').html(data.msg);
      } else {
        $('#searchResult').html('出现错误: ' + data.msg);
      }
    },
    error: function(jqXHR) {
      alert('发生错误: ' + jqXHR.status)
  	}
  })
})

// POST请求实例 添加员工
$('#save').click(function() {
  $.ajax({
    type: 'POST',
    url: 'service.php',
    dataType: 'json',
    data: {
      name: $('#staffName').val(),
      number: $('#staffNumber').val(),
      sex: $('#staffSex').val(),
      job: $('#staffJob').val()
    },
    success: function(data) {
      if(data.success) {
        $('#searchResult').html(data.msg);
      } else {
        $('#searchResult').html('出现错误: ' + data.msg);
      }
    }
  });
});
```



#### :green_heart: 使用ajaxSetup()方法设置全局Ajax默认选项

使用`ajaxSetup()`方法可以设置Ajax请求的一些全局性选项值，设置完成后，后面的Ajax请求将不需要再添加这些选项值，它的调用格式为：

`jQuery.ajaxSetup([options])`**或**`$.ajaxSetup([options])`

可选项options参数为一个对象，通过该对象设置Ajax请求时的全局选项值。

例如，先调用`ajaxSetup()`方法设置全局的Ajax选项值，再点击两个按钮，分别使用`ajax()`方法请求不同的服务器数据，并将数据内容显示在页面，如下图所示：

![img](http://img.mukewang.com/52dcdce60001de2604780449.jpg)

在浏览器中显示的效果：

![img](http://img.mukewang.com/52dcdd090001ccfd06390382.jpg)

从图中可以看出，使用`ajaxSetup()`方法设置了Ajax请求时的一些全局性的配置选项后，在两次调用ajax请求服务器txt文件时，只需要设置url地址即可。



#### :green_heart: 使用ajaxStart()和ajaxStop()方法

`ajaxStart()`和`ajaxStop()`方法是绑定Ajax事件。ajaxStart()方法用于在Ajax请求发出前触发函数，ajaxStop()方法用于在Ajax请求完成后触发函数。它们的调用格式为：

`$(selector).ajaxStart(function())`**和**`$(selector).ajaxStop(function())`

其中，两个方法中括号都是绑定的函数，当发送Ajax请求前执行`ajaxStart()`方法绑定的函数，请求成功后，执行ajaxStop ()方法绑定的函数。

例如，在调用`ajax()`方法请求服务器数据前，使用动画显示正在加载中，当请求成功后，该动画自动隐藏，如下图所示：

![img](http://img.mukewang.com/52dcfb3a0001746d06020435.jpg)

在浏览器中显示的效果：

![img](http://img.mukewang.com/52dcfb5500013ffa06500337.jpg)

从图中可以看出，由于使用`ajaxStart()`和`ajaxStop()`方法绑定了动画元素，因此，在开始发送Ajax请求时，元素显示，请求完成时，动画元素自动隐藏。



