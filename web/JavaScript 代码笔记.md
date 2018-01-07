### :green_heart: js实现滑动侧边栏

```javascript
    var num=0;
    $('.siderbarBtn').click(function(){
        if(num++ %2 == 0){
            $('.siderbar').animate({left:"0px"},300);
            $('body').css('overflow-y','hidden');   /** 侧边栏显示时禁止页面滑动 **/
            $(this).children().attr('src','img/shut.svg');
        }else{
            $('.siderbar').animate({left:"-50%"},300);
            $('body').css('overflow-y','scroll');
            $(this).children().attr('src','img/Category.svg');
        }
    });
    $('.container,.empty').click(function(){
        $('.siderbar').animate({left:"-50%"},300);
        $('.siderbarBtn').children().attr('src','img/Category.svg');
    });   /** 点击侧边栏以外的区域会关闭侧边栏 **/
```



### :green_heart: js实现点击切换事件

```javascript
$(document).ready(function){	
	var num=0;
    $('.siderbarBtn').click(function(){
        if(num++ %2 == 0){
            $('.siderbar').show();
            $(this).children().attr('src','img/shut.svg');
        }else{
            $('.siderbar').hide();
            $(this).children().attr('src','img/Category.svg');
        }
    });
});
```

基本思路如下： 

1. 定义一个变量，并赋值为0；
2. 在判断条件开始前让该变量自增，然后求模，看是否等于0.
3. 等于0是一个事件，不等于0是另外一个事件。

这种思路可以切换多种事件，只要对不同的值求模，对余数进行判断即可。



### :green_heart: 返回顶部 JS 代码

```javascript
$(document).ready(function(){    
  	$('.returnTop').click(function(){
        var top = $(window).scrollTop();
        $('body,html').animate({scrollTop:0},300);
    });
});

 $(window).scroll(function(){
    var sc = $(window).scrollTop();
    if(sc > 300){
        $(".returnTop").slideDown();
    }else{
        $(".returnTop").slideUp();
    }
 });
```



### :green_heart: event.data 

返回绑定当前事件处理函数时传递的附加数据(也就是逗号前面的值)

```javascript
var maxScrollTop = 1000;

// 向下滚动到据顶部超过1000px时，回到顶部
$(window).scroll( maxScrollTop, function(event){
    var $me = $(this);
    if( $me.scrollTop() > event.data ){
        $me.scrollTop( 0 );
    }
});
```



### :green_heart: function的两个参数

function(n,c) 中n为何是0，c为何是peter ?

```javascript
$(document).ready(function(){
	$("button").click(function(){
		$("input:text").val(function(n,c){
			return c + " Griffin";
		});
	});
});
```

n == 0 代表是用input:text这个选择器选择出来的第0个元素，它选出来的可能会有多个，当然，当前例子肯定只有一个
c  == "Peter" 因为当前是val方法，val就是取内容value，所有你拿到的是这字符串