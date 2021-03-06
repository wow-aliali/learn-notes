## 插件

#### @ Settings Sync 设置同步插件

​	[ 使用方法 ](http://www.whidy.net/visual-studio-code-settings-sync-introduction.html)

​	[Settings Sync 错误解决](https://segmentfault.com/a/1190000011206401)​

#### @ Align 代码对齐插件

#### @ Auto Rename Tag 

​	自动重命名成对的HTML / XML标记

#### @ vscode-caniuse

​	HTML5、CSS3、SVG的浏览器兼容性检查

#### @ ESLint

 	提供js、jsx、es6代码风格的实时校验

#### @ EditorConfig for VS Code

​	EditorConfig插件

#### @ GitLens

​	显示文件最近的commit和作者 , 显示当前行commit信息 

#### @ Git History ( Git Log )

​	查看Git日志、历史文件或线性历史记录

​	使用 : 在命令面板查找 'history'

#### @ Git Blame

​	在状态栏显示当前行的Git信息

#### @ Gulp Snippets

#### @ HTML Snippets

​	补全HTML标签，包括HTML5片段

#### @ JavaScript (ES6) code snippets

​	ES6代码片段

#### @ Live Sever

​	为静态和动态页面建立一个本地服务器 , 并且页面为实时预览、无需刷新

​	使用 : 安装后 VScode底栏会添加一个快捷开关 'Go Live'

#### @ npm

​	运行npm命令 ，对package.json验证和警告

#### @ npm Intellisense

​	导入模块时，提示已安装模块名称

#### @ Node modules resolve

​	快速导航到Node模块

#### @ Path Intellisense

​	提供路径自动完成

#### @ Project Manager

​	快速切换项目

#### @ React/Redux/react-router Snippets

#### @ React-Native/React/Redux snippets for es6/es7

#### @ React Native Tools

#### @ stylelint

​	对你的CSS/Sass/Less代码静态检查

#### @ Sublime Text Keymap

​	为VScode提供Sublime Text的快捷键绑定

#### @ Code Runner

​	运行选中代码段（支持大量语言，包括Node）

#### @ CSScomb

​	CSS自动排序及格式化

#### @ Debugger for Chrome

#### @ Version Lens

​	package.json文件显示模块当前版本和最新版本

#### @ vscode-element-helper

​	Element UI框架

#### @ vetur

​	vue工具 : 语法高亮、片段、Emmet、分析/错误检查、格式化、自动完成、调试 （只对.vue文件）

​	安装后配置如下:

```json
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],
    "eslint.options": {
        "plugins": ["html"]
    }
```

 	[配置方法](https://segmentfault.com/a/1190000008749631)

#### @ power mode

#### @ prettier 代码格式化工具

#### @ Node Debug 2

#### @ Node.js Extension Pack

​	Node.js 拓展包

#### @ Live Sass Compiler

​	Sass自动编译、代码补全



##### 在小程序中使用 Scss （↑ Live Sass Compiler插件配置）:

```json
"liveSassCompile.settings.formats": [
    {
        "format": "expanded",
        "extensionName": ".wxss",
        "savePath": null
    }
]
```

#### @ vscode-wechat

​	小程序预览

#### @ vscode wxml

​	小程序 wxml 语法支持及代码片段

#### @ quokka.js

​	即时显示js和ts的运行结果

#### @ Bracket Pair Colorizer and Indent Rainbow

​	彩色括号 和 彩色缩进

#### @ REST Client

​	允许你发送HTTP请求并直接在Visual Studio代码视图响应

#### @ Code Spell Checker

​	代码拼写检查

#### @ bookmark

​	书签 标记

#### @ vue format

​	vue 代码格式化

#### @ console-log-snippet-javascript

​	代码片段   `cons` 可以在日志中添加分隔线，如果控制台中有很多其他日志可以更轻松地找到指定日志

#### @ weex

​	weex语法支持





## 快捷键

`end`   光标移动到行尾

`shift + end`   选择从光标到行尾的内容

`shift + alt + 上下键`   多光标选择 ( 同Sublime的鼠标中键'拖' )

`Ctrl + D`   选择单词，重复可增加选择下一个相同的单词

`ctrl + backspace`   删除左边的单词

`Ctrl + X`   删除当前行

`ctrl + shift + D`   复制整行

`Ctrl + G`  可以跳转到指定行

`Ctrl + Shift + 上下键`

`ctrl + shift + x`  裁剪尾随空格(去掉一行的末尾那些没用的空格)

强烈建议把这个启用，这样保存的时候就会自动删掉那些没用的空格，在很多公司的代码规范里都是不允许存在这些空格的。

`ctrl + 1(2,3)`  拆分编辑器(最多拆分成三块)

`ctrl + B`  显示隐藏侧边栏

`ctrl + shift + G`  显示**Git**



## 文件图标主题

vscode icons



## 配置 setting.json

- #### html文件里对CSS和JS的语法提示

```html
"editor.parameterHints": true,
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  }
```