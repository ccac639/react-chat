---

---

[TOC]

# 什么是webpack？

![image-20220130010615944](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130010615944.png)

## 前端模块化：

- 在前面学习中，我已经用了大量的篇幅解释了为什么前端需要模块化。
- 而且我也提到了目前使用前端模块化的一些方案：AMD、 CMD、CommonJS、ES6。
- ES6浏览器才支持
- 在ES6之前，我们要想进行模块化开发，就必须借助于其他的工具，让我们可以进行模块化开发。
- 并且在通过模块化开发完成了项目后，还需要处理模块间的各种依赖，并且将其进行整合打包。
- 而webpack其中一个核心就是让我们可能进行模块化开发，并且会帮助我们处理模块间的依赖关系。
- 而且不仅仅是javaScript文件，我们的CSS、图片、json文件等等在webpack中都可以被当做模块来使用（在后续我们会看到）。
- 这就是webpack中模块化的概念。

### 打包如何理解呢？

- 理解了webpack可以帮助我们进行模块化，并且处理模块间的各种复杂关系后，打包的概念就非常好理解了。
- 就是将webpack中的各种资源模块进行打包合并成一个或多个包（Bundle）。
- 并且在打包的过程中，还可以对资源进行处理比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。
- 但是打包的操作似乎grunt/gulp也可以帮助我们完成，它们有什么不同呢？

### 和grunt/，gulp的对比

#### grunt/gulp的核心是Task

- 我们可以配置一系列的task，并且定义task要处理的事务（例如ES6、ts转化，图片压缩，scss转成css）

- 之后让grunt/gulp来依次执行这些task，而且让整个流程自动化。

- 所以grunt/gulp也被称为前端自动化任务管理工具。

  #### 我们来看一个gulp的task!

1. 下面的task就是将src下面的所有js文件转成ES5的语法。
2. 并且最终输出到dist文件夹中。

#### 什么时候用grunt/gulp呢？

- 如果你的工程模块依赖非常简单，甚至是没有用到模块化的概念。

- 只需要进行简单的合并、压缩，就体用grunt/gulp即可。

- 但是如果整个项目使用了模块化管理，而且相互依赖非常强，我们就可以使用更加强大的webpack了。

  ![image-20220130011504576](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130011504576.png)

所以，grunt/gulp和webpack有什么不同呢？

- grunt/gulp更加强调的是前端流程的自动化，模块化不是它的核心。
- webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能。

# webpack安装

安装webpack首先需要安装Node.js,Node,js自带了软件包管理工具npm

## 查看自己的node版本：

```js
node - v
```

## 全局安装webpack

```
npm i webpack -g
```

## 局部安装webpack（后续才需要)

### -save-dev是开发时依赖，项目打包后不需要继续使用的。

![image-20220130012408128](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130012408128.png)

### 为什么全局安装后，还需要局部安装呢？

- 在终端直接执行webpack命令，使用的全局安装的webpack
- 当在package.json中定义了scripts时，其中包含了webpack命令，那么使用的是局部vebpack
-

# webpack起步

## web基本配置

```
在vebpack4.x和5.x的版本中，有如下的默认约定：
默认的打包入口文件为src->index,js
默认的输出文件路径为dist->main.js注意：可以在webpack.config.js中修改打包的默认约定
```

- dist

    - main.js

        - ```js
      /*
        * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
        * This devtool is neither made for production nor for readable output files.
        * It uses "eval()" calls to create a separate source file in the browser devtools.
        * If you are trying to read the output file, select a different
          devtool (https://webpack.js.org/configuration/devtool/)
        * or disable the default devtool with "devtool: false".
        * If you are looking for production-ready output files, see mode: "
          production" (https://webpack.js.org/configuration/mode/).
          */ /******/ (() => { // webpackBootstrap /******/     "use strict"; /******/     
          /******/     
          /******/ })()
          ;
      ```

        -

- src

    - css

        - idnex.css

    - index.js

        - ```js
      import $ from 'jquery'; //导入样式（在webpack中，I切皆模块，都可以通过ES6导入语法 //进行导入和使用如果某个模块中，使用from接收到的成员为undefined，则没必要进行接收
      import './css/index.css' import './css/body.less' import logo from './img/logo.png'; console.log(logo)
      $(function (){ $(".bpx").attr('src',logo)
      $('li:odd').css('background-color','yellow');//处理css $('li:even').css('background-color','green')//处理less })
      // //定义装饰器函数
      ```

          ```
          
          ```

- index.html

    - ```html
    <body>
    <script src="dist/main.js"></script>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li></li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
    </ul>
    </body>
    ```

- package.json

    - ```json
  {
  "name": "webpack1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "dev": "webpack serve",
  "build": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
  "jquery": "^3.6.0",
  "nodemon": "^2.0.15"
  },
  "devDependencies": {
  "@babel/core": "^7.14.6",
  "@babel/plugin-proposal-class-properties": "^7.16.7",
  "@babel/plugin-proposal-decorators": "^7.14.5",
  "babel-loader": "^8.2.2",
  "clean-webpack-plugin": "^4.0.0",
  "css-loader": "^6.5.1",
  "file-loader": "^6.2.0",
  "html-webpack-plugin": "^5.3.2",
  "less": "^4.1.2",
  "less-loader": "^10.0.1",
  "style-loader": "^3.3.1",
  "url-loader": "^4.1.1",
  "webpack": "^5.67.0",
  "webpack-cli": "^4.9.2",
  "webpack-dev-server": "^3.11.2"
  } }
    ```

- package-lock.json

    - ```
  不需要暂时
    ```

- webpack.config.js

    - ```js
  const path=require('path'); const Html=require("html-webpack-plugin"); const { CleanWebpackPlugin } = require('
  clean-webpack-plugin'); const htmlS=new Html({ template:"./src/index.html", filename:"./index.html"
  })
  module.exports = { mode: 'development',//mode 用来指定构建模式。可选值有development和production
  //代表webpack运行的模式，可选值有两个development和production //结论：开发时候一定要用development，因为追求的是打包的速度，而不是体积：
  //反过来，发布上线的时候一定能要用production，因为上线追求的是体积小，而不是打包速度快！ entry:path.join(__dirname,'./src/index.js'),//1打包入口文件的路径
  //指定生成的文件要存放到哪里 output:{ path:path.join(__dirname,'./dist'),//输出文件的存放路径 filename:'js/bundle.js',//输出文件的名称 },
  //插件的数组，将来webpack在运行时，会加载升调用这些插件 plugins:[htmlS,new CleanWebpackPlugin()], devServer:{//配置http信息 //首次打包，成功后，自动打开测览器
  open:true, //在http协议中，如果端口号是8阳，则可以被省略 port:80, // 配置ip host:'127.0.0.1' }, module:{// 所有第三方文件模块的匹配规则 rules:[
  //1文件后缀名的匹配规则 // css的匹配规则 {test:/\.css$/,use:[{loader:'style-loader'}, {loader:'css-loader'}]}, // less的匹配规则 {test:
  /\.less$/,use:[{loader:'style-loader'}, {loader:'css-loader'},{loader:'less-loader' }]}, // 图片的匹配规则 //
  如果需要调用的loader只有一个,则传递一个字符串就行，如果多个loader则必须指定数组 // 在配置ur1-1 loader的时候，多个参数之间，使用&符号进行分隔 //
  url-loader?limit=22229&outputPath=images

                {test:/\.jpg|png|gif$/,use:[{loader: 'url-loader?limit=471&outputPath=image'}]},
                //使用babel-loader处理高级的语法
                //在配置babel-loader的时候，程序员只需要把自己的代码进行转换即可：一定要排除node_modules目录中的JS文件
                //因为第二方包，中的JS兼容性，不需要程序员关心
                {test: /\.js$/,use:'babel-loader',exclude:/node_modules/}
            ]
        }
  }
    ```

## webpack插件的作用

通过安装和配置第三方的插件，可以拓展webpack的能力，从而让webpack用起来更方便。最常用的webpack插件有如下两个：

webpack-dev-server

- 类似于node.js阶段用到的nodemon工具
- 每当修改了源代码，webpack会自动进行项目的打包和构建

html-webpack-plugin

- webpack中的HTML插件（类似于一个模板引擎插件）

- 可以通过此插件自定制index.html页面的内容

### 安装 webpack-dev-server

```
npm i webpack-dev-server@3.11.2 -D
```

![image-20220130162957645](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130162957645.png)

如果不能热更新,那就改index.html中的

![image-20220130164350423](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130164350423.png)

![image-20220130165858849](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130165858849.png)

![image-20220130171241500](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130171241500.png)

## .打包处理css文件

运行

```
npm i style-loader css-loader -D
```

安装处理css文件的loader

![image-20220130174436889](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130174436889.png)

![image-20220130174453172](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130174453172.png)

![image-20220130175824079](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130175824079.png)

## webpack处理高级语法

vebpack只能打包处理一部分高级的JavaScript语法。对于那些webpack无法处理的高级js语法，需要借助于babel--loader进行打包处理。例如webpack无法处理下面的」JavaScript代码：

![image-20220130224254224](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130224254224.png)

![image-20220130225355246](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130225355246.png)

https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

![image-20220130235407814](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130235407814.png)

![image-20220131000601621](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131000601621.png)

![image-20220131001209242](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131001209242.png)

# 打包发布

配置webpack的打包发布

在package,json文件的scripts节点下，新增build命令如下：

![image-20220131003537852](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131003537852.png)

-model是一个参数项，用来指定webpack的运行模式。production代表生产环境，会对打包生成的文件进行代码压缩和性能优化。

# Source Map

什么是Source Map

Source Map就是一个信息文件，里面储存着位置信息。也就是说，Source Map文件中存储着压缩混淆后的O代码，所对应的转换前的位置。 有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。

在webpack.config.js

```js
module.exports = {
    mode: 'development',//mode 用来指定构建模式。可选值有development和production
                        //代表webpack运行的模式，可选值有两个development和production
                        //结论：开发时候一定要用development，因为追求的是打包的速度，而不是体积：
                        //反过来，发布上线的时候一定能要用production，因为上线追求的是体积小，而不是打包速度快！
    entry: path.join(__dirname, './src/index.js'),//1打包入口文件的路径
    devtool: 'eval-source-map',
}
```

![image-20220131005349476](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131005349476.png)

建议大家使用@表示src源代码目录，从外往里查找：不要使用./从里往外查找