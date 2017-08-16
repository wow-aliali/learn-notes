# 新增的元素

html5新增了一些语义化更好的标签元素。​

### :green_heart: 结构元素

1. `article  ` 元素，表示页面中的一块与上下文不相关的独立内容，比如博客中的一篇文章、一条评论。

2. `aside ` 元素，表示article内容之外的内容，辅助信息。

3. `header ` 元素，表示页面中一个内容区块或整个页面的页眉。

4. `hgroup` 元素，用于对页面中一个区块或整个页面的标题进行组合。

5. `footer` 元素，表示页面中一个内容区块或整个页面的页脚。

6. `figure ` 元素，表示媒介内容的分组，以及它们的标题。

   ```html
   <figure>
     <figcaption>黄浦江上的的卢浦大桥</figcaption>
     <img src="shanghai_lupu_bridge.jpg" width="350" height="234" />
   </figure>
   ```

7. `section` 元素，表示页面中一个内容区块，比如章节。

8. `nav元素`，表示页面中的导航链接。

### :green_heart: 其他元素

1. `video ` 元素，用来定义视频。

2. `audio  ` 元素，用来定义音频。

3. `canvas   ` 元素，用来展示图形，该元素本身没有行为，仅提供一块画布。

4. `source` 元素，为媒介元素定义媒介资源。

   ```html
   <video width="320" height="240" controls="controls">
     <source src="movie.ogg" type="video/ogg" />
     <source src="movie.mp4" type="video/mp4" />
   Your browser does not support the video tag.
   </video>
   ```

5. `embed ` 元素，用来插入各种多媒体，格式可以是Midi、Wav、AIFF、AU、MP3等。

   ```html
   <embed src="helloworld.swf" />
   ```

6. `mark `元素，用来展示高亮的文字。  ( 一段文本中几个带有背景色的文字 )

7. `progress` 元素，用来展示任何类型的任务的进度 , 如Windows系统中软件的安装、文件的复制等场景的进度。 ( 只有value和max两个属性值 )

8. `meter ` 元素，表示度量衡，定义预定义范围内的度量 , 适用于温度、重量、金额等量化的表现。

   ( 有6个属性值 )

9. `time ` 元素，用来展示日期或者时间。

10. `command ` 元素，表示命令按钮。

11. `details ` 元素，用来展示用户要求得到并且可以得到的细节信息。

12. `summary` 元素，用来为details元素定义可见的标题。

    ```html
    <details>
      <summary>Copyright 2011.</summary>
      <p>All pages and graphics on this web site are the property of W3School.</p>
    </details>
    ```

    ![](http://ww3.sinaimg.cn/large/006HJ39wgy1fheotwkdjyj30fg028mxc.jpg)

13. `datalist ` 元素，用来展示可选的数据列表，与input元素配合使用，可以制作出输入值的下拉列表。

    ```html
    <input id="myCar" list="cars" />
    <datalist id="cars">
      <option value="BMW">
      <option value="Ford">
      <option value="Volvo">
    </datalist>
    ```

14. `datagrid  ` 元素，也用来展示可选的数据列表，以树形列表的形式来显示。

15. `keygen  ` 元素，表示生成密匙。

16. `output` 元素，表示不同类型的输出。

17. `menu ` 元素，表示菜单列表。

18. `ruby ` 元素，表示ruby注释， rt元素表示字符的解释或发音。 rp元素在ruby注释中使用，以定义不支持ruby元素的浏览器所显示的内容。

19. `wbr ` 元素，表示软换行。与br元素的区别是：br元素表示此处必须换行，而wbr元素的意思是浏览器窗口或父级元素的宽度够宽时。不进行换行，而当宽度不够时，主动在此处进行换行。

20. `bdi ` 元素，定义文本的文本方向，使其脱离其周围文本的方向设置。

21. `dialog` 元素，表示对话框或窗口。

    ​

# 废除的元素

html5中废除了一些纯表现的元素，只有部分浏览器支持的元素还有一些会对可用性产生负面影响的元素。

### :green_heart: 纯表现元素

纯表现的元素就是那些可以用css替代的元素。basefont、big、center、font、s、strike、tt、u这些元素，他们的功能都是纯粹为页面展示服务的，html5提倡把页面展示性功能放在css样式表中统一处理，所以将这些元素废除，用css样式进行替代。

### :green_heart: 对可用性产生负面影响的元素

对于frameset元素、frame元素与noframes元素，由于frame框架对网页可用性存在负面影响，在html5中已不支持frame框架，只支持iframe框架，html5中同时将frameset、frame和noframes这三个元素废除。

### :green_heart: 只有部分浏览器支持的元素

对于applet、bgsound、blink、marquee等元素，由于只有部分浏览器支持，特别是bgsound元素以及marquee元素，只被IE支持，所以在html5中被废除。其中applet元素可由embed元素或object元素替代，bgsound元素可由audio元素替代，marquee可以由javascript编程的方式替代。



# 新增的API

### :green_heart: Canvas API

上文提到的canvas元素可以为页面提供一块画布来展示图形。结合Canvas API，就可以在这块画布上动态生成和展示各种图形、图表、图像以及动画了。Canvas本质上是位图画布，不可缩放，绘制出来的对象不属于页面DOM结构或者任何命名空间。不需要将每个图元当做对象存储，执行性能非常好。

利用Canvas API进行绘图，首先要获取canvas元素的上下文，然后用该上下文中封装的各种绘图功能进行绘图。

```
<canvas id="canvas">替代内容</canvas>
<script>
    var canvas = document.getElementById('canvas');
    var context =canvas.getContext("2d"); // 获取上下文
    //设置纯色
    context.fillStyle = "red";
    context.strokeStyle = "blue";
    // 实践表明在不设置fillStyle下的默认fillStyle为black
    context.fillRect(0, 0, 100, 100);
    // 实践表明在不设置strokeStyle下的默认strokeStyle为black
    context.strokeRect(120, 0, 100, 100);
</script>
```

### :green_heart: SVG

SVG是html5的另一项图形功能，它是一种标准的矢量图形，是一种文件格式，有自己的API。html5引入了内联SVG，使得SVG元素可以直接出现在html标记中。

```
<svg height=100 width=100><circle cx=50 cy=50 r=50 /></svg>
```

还可以引入外部SVG文件 :

```html
<iframe src="xx.svg" width="100" height="100" frameborder="no"></iframe>
```

### :green_heart: 音频和视频

audio和video元素的出现让html5的媒体应用多了新选择，开发人员不必使用插件就能播放音频和视频。对于这两个元素，html5规范提供了通用、完整、可脚本化控制的API。html5规范出来之前，在页面中播放视频的典型方式是使用Flash、QuickTime或者Windows Media插件往html中嵌入音频视频，相对这种方式，使用html5的媒体标签有两大好处。

1. 作为浏览器原生支持的功能，新的audio和video元素无需安装。
2. 媒体元素想Web页面提供了通用、集成和可脚本化控制的API。

```
<video src="video.webm" controls>
    <object data="videoplayer.swf" type="application/x-shockwave-flash">
        <param name="movie" value="video.swf" />
    </object>
    Your browser does not support HTML5 video.
</video>
```

### :green_heart: 浏览器支持性检测

浏览器检测是否支持audio元素或者video元素最简单的方式是用脚本动态创建它，然后检测特定函数是否存在。

```
var hasVideo = !!(document.createElement('video').canPlayType);
```

### :green_heart: Geolocation API

html5的Geolocation API（地理定位API），可以请求用户共享他们的位置。使用方法非常简单，如果用户同意，浏览器就会返回位置信息，该位置信息是通过支持html5地理定位功能的底层设备（如笔记本电脑或手机）提供给浏览器的。位置信息由纬度、经度坐标和一些其他元数据组成。

#### 位置信息从何而来

Geolocation API不指定设备使用哪种底层技术来定位应用程序的用户。相反，它只是用于检索位置信息的API，而且通过该API检索到的数据只具有某种程度的准确性，并不能保证设备返回的位置是精确的。设备可以使用下列数据源：

1. IP地址
2. 三维坐标
   1. GPS
   2. 从RFID、WiFi和蓝牙到WiFi的MAC地址
   3. GSM或CDMA手机的ID
3. 用户自定义数据

#### 使用方法

```
// 一次更新
navigator.geolocation.getCurrentPosition(updateLocation, handleLocationEror);
function updateLocation(position) {
    var latitude = position.coords.latitude;     // 纬度
    var longitude = position.coords.longitude;   // 经度
    var accuracy = position.coords.accuracy;     // 准确度
    var timestamp = position.coords.timestamp;   // 时间戳
}
// 错误处理函数
function handleLocationEror(error) {
    ....
}
// 重复更新
navigator.geolocation.watchPosition(updateLocation, handleLocationEror);
// 不再接受位置更新
navigator.geolocation.clearWatch(watchId);
```

### :green_heart: WebSockets API

WebSockets是html5中最强大的通信功能，它定义了一个全双工通信信道，仅通过Web上的一个Socket即可进行通信。

#### WebSockets握手

为了建立WebSockets通信，客户端和服务器在初始握手时，将HTTP协议升级到WebSocket协议。一旦连接建立成功，就可以在全双工模式下在客户端和服务器之间来回传递WebSocket消息。

#### WebSockets接口

除了对WebSockets协议定义外，该规范还同时定义了用于JavaScript应用程序的WebSocket接口。WebSockets接口的使用很简单。要连接远程主机，只需要新建一个WebSocket实例，提供希望连接的对端URL。

### :green_heart: Forms API

#### 新表单元素

1. tel元素，表示电话号码。
2. email元素，表示电子邮件地址文本框。
3. url元素，表示网页的url。
4. search元素，用于搜索引擎，比如在站点顶部显示的搜索框。
5. range元素，特定值范围内的数值选择器，典型的显示方式是滑动条。
6. number元素，只包含数值的字段。

#### 新的表单特性和函数

##### placeholder

当用户还没输入值的时候，输入型控件可以通过placeholder特性向用户显示描述性说明或者提示信息。

```
<input name="name" placeholder="First and last name">
```

##### autocomplete

浏览器通过autocomplete特性能够知晓是否应该保存输入值以备将来使用。

##### autofocus

通过autofocus特性可以指定某个表单元素获得输入焦点，每个页面上只允许出现一个autofocus特性，如果设置了多个，则相当于未指定此行为。

##### spellcheck

可对带有文本内容的输入控件和textarea空间控制spellcheck属性。设置完后，会询问浏览器是否应该给出拼写检查结果反馈。spellcheck属性需要赋值。

##### list特性和datalist元素

通过组合使用list特性和datalist元素，开发人员能够为某个输入型控件构造一张选值列表。

```
<datalist id="contactList">
    <option value="a@qq.com"></option>
    <option value="b@qq.com"></option>
</datalist>
<input type="email" id="contatcs" list="contactList">
```

##### min和max

通过设置min和max特性，可以将range输入框的数值输入范围限定在最低值和最高值之间。可以只设置一个，也可以两个都设置，也可以都不设置。

##### step

对于输入型控件，设置其step特性能够指定输入值递增或者递减的粒度。

##### required

一旦为某输入型控件设置了required特性，那么此项必填，否则无法提交表单。

### :green_heart: 拖放API

#### draggable属性

如果网页元素的draggable元素为true，这个元素就是可以拖动的。

```
<div draggable="true">Draggable Div</div>
```

#### 拖放事件

拖动过程会触发很多事件，主要有下面这些：

1. dragstart：网页元素开始拖动时触发。
2. drag：被拖动的元素在拖动过程中持续触发。
3. dragenter：被拖动的元素进入目标元素时触发，应在目标元素监听该事件。
4. dragleave：被拖动的元素离开目标元素时触发，应在目标元素监听该事件。
5. dragover：被拖动元素停留在目标元素之中时持续触发，应在目标元素监听该事件。
6. drap：被拖动元素或从文件系统选中的文件，拖放落下时触发。
7. dragend：网页元素拖动结束时触发。

```
draggableElement.addEventListener('dragstart', function(e) {
    console.log('拖动开始！');
});
```

#### dataTransfer对象

拖动过程中，回调函数接受的事件参数，有一个dataTransfer属性，指向一个对象，包含与拖动相关的各种信息。

```
draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', 'Hello World!');
});
```

dataTransfer对象的属性有：

1. dropEffect：拖放的操作类型，决定了浏览器如何显示鼠标形状，可能的值为copy、move、link和none。
2. effectAllowed：指定所允许的操作，可能的值为copy、move、link、copyLink、copyMove、linkMove、all、none和uninitialized（默认值，等同于all，即允许一切操作）。
3. files：包含一个FileList对象，表示拖放所涉及的文件，主要用于处理从文件系统拖入浏览器的文件。
4. types：储存在DataTransfer对象的数据的类型。

dataTransfer对象的方法有：

1. setData(format, data)：在dataTransfer对象上储存数据。第一个参数format用来指定储存的数据类型，比如text、url、text/html等。
2. getData(format)：从dataTransfer对象取出数据。
3. clearData(format)：清除dataTransfer对象所储存的数据。如果指定了format参数，则只清除该格式的数据，否则清除所有数据。
4. setDragImage(imgElement, x, y)：指定拖动过程中显示的图像。默认情况下，许多浏览器显示一个被拖动元素的半透明版本。参数imgElement必须是一个图像元素，而不是指向图像的路径，参数x和y表示图像相对于鼠标的位置。

