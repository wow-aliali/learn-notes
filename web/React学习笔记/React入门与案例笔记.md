## 环境与调试

npm项目初始化: npm init

项目依赖包安装: npm install --save react react-dom babelify babel-preset-react

​               npm install --save babel-preset-es2015

webpack热加载配置: npm install -g webpack

​                  npm install -g webpack-dev-server

webpack初始化:

```javascript
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './js/index.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,   // 排除特定条件
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    }
};
```

webpack打包: webpack   (如提示错误则安装依赖包 babel-loader和babel-core)

​             webpack --watch  (--watch参数表示源文件代码一有变更, 就会自动重新打包)

​             然后用VScode的live-server实现热加载

​             (或使用 webpack-dev-server --hot --inline --content-base )



VScode的emmet插件兼容JSX: 

```javascript
"emmet.includeLanguages": {
	"javascript": "javascriptreact"
},
"emmet.syntaxProfiles": {
	"javascript": "jsx"
}
```



CSS与JSX样式的互转: https://staxmanade.com/CssToReact/

HTML转JSX: https://magic.reactjs.net/htmltojsx