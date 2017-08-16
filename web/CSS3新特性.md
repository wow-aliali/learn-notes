# 选择器

CSS3中新添加了很多选择器，解决了很多之前需要用javascript才能解决的布局问题。

1. ​element1~element2    :arrow_right:   选择前面有element1元素的每个element2元素。
2. ​[tribute^=value]   :arrow_right:   选择某元素attribute属性是以value开头的。
3. ​[attribute$=value]   :arrow_right:   选择某元素attribute属性是以value结尾的。
4. [attribute*=value]​ ​  ​:arrow_right:​   选择某元素attribute属性包含value字符串的。
5. E:first-of-type​ ​  ​:arrow_right:​   选择属于其父元素的首个E元素的每个E元素。
6. ​E:last-of-type   :arrow_right:   选择属于其父元素的最后E元素的每个E元素。
7. E:only-of-type​ ​  ​:arrow_right:​   选择属于其父元素唯一的E元素的每个E元素。
8. E:only-child​ ​  ​:arrow_right:​   选择属于其父元素的唯一子元素的每个E元素。
9. E:nth-child(n)​ ​  ​:arrow_right:​   选择属于其父元素的第n个子元素的每个E元素。
10. E:nth-last-child(n)​ ​  ​:arrow_right:​   选择属于其父元素的倒数第n个子元素的每个E元素。
11. E:nth-of-type(n)​ ​  ​:arrow_right:​   选择属于其父元素第n个E元素的每个E元素。
12. E:nth-last-of-type(n)​ ​  ​:arrow_right:​   选择属于其父元素倒数第n个E元素的每个E元素。
13. E:last-child​ ​  ​:arrow_right:​   选择属于其父元素最后一个子元素每个E元素。
14. :root​ ​  ​:arrow_right:​   选择文档的根元素。
15. E:empty​ ​  ​:arrow_right:​   选择没有子元素的每个E元素（包括文本节点)。
16. E:target​ ​  ​:arrow_right:​   选择当前活动的E元素。
17. E:enabled​ ​  ​:arrow_right:​   选择每个启用的E元素。
18. E:disabled​ ​  ​:arrow_right:​   选择每个禁用的E元素。
19. E:checked​ ​  ​:arrow_right:​   选择每个被选中的E元素。
20. E:not(selector)​ ​  ​:arrow_right:​   选择非selector元素的每个元素。
21. ​E::selection   :arrow_right:   选择被用户选取的元素部分。





# Transition,Transform和Animation

这三个特性是CSS3新增的和动画相关的特性。

### Transition

Transition可以在当元素从一种样式变换为另一种样式时为元素添加效果，而不用使用Flash动画或JavaScript。Transition有如下属性：

1. transition-property: 规定应用过渡的CSS属性的名称。
2. transition-duration: 规定完成过渡效果需要多长时间。
3. transition-delay: 规定过渡效果何时开始，默认是0。
4. transition-timing-function: 规定过渡效果的时间曲线，默认是”ease”，还有linear、ease-in、ease-out、ease-in-out和cubic-bezier等过渡类型。
5. transition: 简写属性，用于在一个属性中设置四个过渡属性。

在一个例子中使用所有过渡属性如下：

```css
div {
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: linear;
    transition-delay: 2s;
}
```

使用transition属性简写如下：

```css
div {
    transition: width 1s linear 2s;
}
```

### Transform

Transform用来向元素应用各种2D和3D转换，该属性允许我们对元素进行旋转、缩放、移动(translate)或倾斜(skew)等操作。使用方式如下：

```css
div{
    transform:rotate(7deg);
}
```

#### 变换类型

transform可以有各种变换类型，即属性值：

1. none: 定义不进行转换。
2. matrix(n,n,n,n,n,n): 定义2D转换，使用六个值的矩阵。
3. matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n): 定义3D转换，使用16个值的4x4矩阵。
4. translate(x,y): 定义2D位移转换。
5. translate3d(x,y,z): 定义3D位移转换。
6. translateX(x): 定义位移转换，只是用X轴的值。
7. translateY(y): 定义位移转换，只是用Y轴的值。
8. translateZ(z): 定义3D位移转换，只是用Z轴的值。
9. scale(x,y): 定义2D缩放转换。
10. scale3d(x,y,z): 定义3D缩放转换。
11. scaleX(x): 通过设置X轴的值来定义缩放转换。
12. scaleY(y): 通过设置Y轴的值来定义缩放转换。
13. scaleZ(z): 通过设置Z轴的值来定义3D缩放转换。
14. rotate(angle): 定义2D旋转，在参数中规定角度。
15. rotate3d(x,y,z,angle): 定义3D旋转。
16. rotateX(angle): 定义沿着X轴的3D旋转。
17. rotateY(angle): 定义沿着Y轴的3D旋转。
18. rotateZ(angle): 定义沿着Z轴的3D旋转。
19. skew(x-angle,y-angle): 定义沿着X和Y轴的2D倾斜转换。
20. skewX(angle): 定义沿着X轴的2D倾斜转换。
21. skewY(angle): 定义沿着Y轴的2D倾斜转换。
22. perspective(n): 为3D转换元素定义透视视图。

### Animation

Animation让CSS拥有了可以制作动画的功能。使用CSS3的Animation制作动画我们可以省去复杂的js代码。使用方法大概如下：

```css
@keyframes anim1 { 
   0% { 
        opacity: 0; 
        font-size: 12px; 
   } 
   100% { 
        opacity: 1; 
        font-size: 24px; 
   } 
} 
.anim1Div { 
   animation-name: anim1 ; 
   animation-duration: 1.5s; 
   animation-iteration-count: 4; 
   animation-direction: alternate; 
   animation-timing-function: ease-in-out; 
}
```


# 边框

CSS3新增了三个边框属性，分别是border-radius、box-shadow和border-image。border-radius可以创建圆角边框，box-shadow可以为元素添加阴影，border-image可以使用图片来绘制边框。IE9+支持border-radius和box-shadow属性。Firefox、Chrome以及Safari支持所有新的边框属性。



# 背景

CSS3新增了几个关于背景的属性，分别是background-clip、background-origin、background-size。

### background-clip

background-clip属性用于确定背景画区，有以下几种可能的属性：

- background-clip: border-box; 背景从border开始显示
- background-clip: padding-box; 背景从padding开始显示
- background-clip: content-box; 背景从content区域开始显示
- background-clip: no-clip; 默认属性，等同于border-box

通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围。

### background-origin

background-origin属性用于确定背景的位置，它通常与background-position联合使用，可以从 border、padding、content来计算background-position（就像background-clip）。

- background-origin: border-box; 从border开始计算background-position
- background-origin: padding-box; 从padding开始计算background-position
- background-origin: content-box; 从content开始计算background-position

### background-size

background-size属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：

- background-size: contain; 缩小图片以适合元素（维持像素长宽比）
- background-size: cover; 扩展元素以填补元素（维持像素长宽比）
- background-size: 100px 100px; 缩小图片至指定的大小
- background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包含元素的尺寸



# 文字效果

### word-wrap

CSS3中，word-wrap属性允许您允许文本强制文本进行换行，即这意味着会对单词进行拆分。所有主流浏览器都支持 word-wrap 属性。

```
p {
    word-wrap:break-word;
}
```

### text-overflow

它与word-wrap是协同工作的，word-wrap设置或检索当当前行超过指定容器的边界时是否断开转行，而 text-overflow则设置或检索当当前行超过指定容器的边界时如何显示。对于“text-overflow”属性，有“clip”和“ellipsis”两种可供选择。

### text-shadow

CSS3中，text-shadow可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色。

```
h1{
    text-shadow: 5px 5px 5px #FF0000;
}
```

### text-decoration

CSS3里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：

1. text-fill-color: 设置文字内部填充颜色
2. text-stroke-color: 设置文字边界填充颜色
3. text-stroke-width: 设置文字边界宽度



# 渐变

CSS3新增了渐变效果，包括linear-gradient(线性渐变)和radial-gradient(径向渐变)。



# @font-face特性

在CSS3之前，web设计师必须使用已在用户计算机上安装好的字体。通过CSS3，web设计师可以使用他们喜欢的任意字体。当您您找到或购买到希望使用的字体时，可将该字体文件存放到web服务器上，它会在需要时被自动下载到用户的计算机上。字体是在 CSS3 @font-face 规则中定义的。Firefox、Chrome、Safari以及Opera支持 .ttf(True Type Fonts)和 .otf(OpenType Fonts)类型的字体。IE9+ 支持新的@font-face规则，但是仅支持 .eot类型的字体(Embedded OpenType)。

在新的@font-face规则中，必须首先定义字体的名称（比如myFont），然后指向该字体文件。
如需为HTML元素使用字体，请通过font-family属性来引用字体的名称 (myFont)

```
@font-face {
    font-family: myFirstFont;
    src: url('Sansation_Light.ttf'),
         url('Sansation_Light.eot'); /* IE9+ */
}
div{
    font-family:myFirstFont;
}
```



# 多列布局（columns布局）

通过CSS3，能够创建多个列来对文本进行布局。



# 用户界面

CSS3中，新的用户界面特性包括重设元素尺寸、盒尺寸以及轮廓等。

### resize

resize 属性规定是否可由用户调整元素尺寸。如果希望此属性生效，需要设置元素的 overflow 属性，值可以是 auto、hidden 或 scroll。

```
div{
    resize:both; /* none|both|horizontal|vertical; */
    overflow:auto;
}
```

### box-sizing

box-sizing属性可设置的值有content-box、border-box和inherit。

1. content-box: padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 (Element width = width + border + padding)，此属性表现为标准模式下的盒模型。
2. border-box: padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 (Element width = width)，此属性表现为怪异模式下的盒模型。

### outline-offset

outline-offset属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。