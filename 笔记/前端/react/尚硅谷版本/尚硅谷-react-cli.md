# 1React应用(基于React脚手架)

## 使用create-react-app创建react应用

### react脚手架

xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目

1. 包含了所有需要的配置（语法检查、jsx编译、devServer…）

2. 下载好了所有相关的依赖

3. 可以直接运行一个简单效果

4. react提供了一个用于创建react项目的脚手架库: create-react-app

5. 项目的整体技术架构为: react + webpack + es6 + eslint

6. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

### 创建项目并启动

#### 第一步，

全局安装：

```
npm i -g create-react-app
```

```
yarn add create-react-app
```

##### 扩展

卸载包

```
npm uninstall -g create-react-app
```

```
yarn remove create-react-app
```

#### 第二步，

切换到想创项目的目录，使用命令：

```
create-react-app hello-react
```

#### 第三步，

进入项目文件夹：

```
cd hello-react
```

#### 第四步，

初始化脚手架

```
npm i
```

```
yarn
```

#### 第五步，

启动项目：

```
npm start
```

```
yarn start
```

### react脚手架项目结构

public ---- 静态资源文件夹

```
  favicon.icon ------ 网站页签图标

​            **index.html --------** **主页面**

​            logo192.png ------- logo图

​            logo512.png ------- logo图

​            manifest.json ----- 应用加壳的配置文件

​            robots.txt -------- 爬虫协议文件
```

src ---- 源码文件夹

```
  App.css -------- App组件的样式

​            **App.js --------- App****组件**

​            App.test.js ---- 用于给App做测试

​            index.css ------ 样式

​            **index.js -------** **入口文件**

​            logo.svg ------- logo图

​            reportWebVitals.js

​                    --- 页面性能分析文件(需要web-vitals库的支持)

​            setupTests.js

​                    ---- 组件单元测试的文件(需要jest-dom库的支持)
```

拆分组件: 拆分界面,抽取组件

2. 实现静态组件: 使用组件实现静态页面效果

3. 实现动态组件

3.1 动态显示初始化数据

3.1.1 数据类型

3.1.2 数据名称

3.1.2 保存在哪个组件?

3.2 交互(从绑定事件监听开始)

## 组件的组合使用-TodoList

*功能**:* *组件化实现此功能*

*1.* *显示所有**todo**列表*

*2.* *输入文本**,* *点击按钮显示到列表的首位**,* *并清除输入的文本*

第4章：React ajax

## 理解

### 前置说明

1. React本身只关注于界面, 并不包含发送ajax请求的代码

2. 前端应用需要通过ajax请求与后台进行交互(json数据)

3. react应用中需要集成第三方ajax库(或自己封装)

### 常用的ajax请求库

1. jQuery: 比较重, 如果需要另外引入不建议使用

2. axios: 轻量级, 建议使用

    1) 封装XmlHttpRequest对象的ajax

    2) promise风格

    3) 可以用在浏览器端和node服务器端

## axios

### 文档

https://github.com/axios/axios

- ### 相关API

-
    1) GET请求

-
    2) POST请求

### 配置代理请求

#### 1.修改package.json

```json
{
  "name": "ajax-axios",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.26.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:5000"//通过node的"http://localhost:5000"请求代理给跨域接口发送请求
}
```

#### 2.通过配置代理文件

在src里面创建setupProxy.js文件

```js
const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports=function (app){
    app.use(
        /**
         * 以后请求里面如果出现了/api1,则替换调api1/
         *
         * target请求地址
         *
         * changeOrigin，默认false
         *  同意跨域
         *
         * pathRewrite,把api1替换为空 去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
         *
         * 
         * */
        createProxyMiddleware("/api1", {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
            target: "http://localhost:5000", //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: {"^/api1": ""} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
        createProxyMiddleware("/api2", {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
            target: "http://localhost:5001", //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: {"^/api2": ""} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
    )
}
```

## react脚手架配置代理总结

### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## github案例

### 发送请求

#### 跨域代理

```
setupProxy.js
```

```js
const {createProxyMiddleware}=require("http-proxy-middleware")
module.exports=function (app) {
    app.use(
        createProxyMiddleware(
            '/api',{
            target:"http://localhost:5000/",
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })
    )
}
```

#### 后端代理代码

##### node.js

```react
const express = require("express")
const axios = require("axios")
const app = express()
/*
  请求地址： http://localhost:3000/search/users?q=aa

  后台路由
    key： /search/users
    value： function () {}
*/
app.get("/search/users", function (req, res) {
  const {q} = req.query
  axios({
    url: 'https://api.github.com/search/users',
    params: {q}
  }).then(response => {
    res.json(response.data)
  })
})

app.get("/search/users2", function (req, res) {
  res.json({
    items: [
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 1,
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 2,
      },
      {
        login: "yyx9908032",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 3,
      },
      {
        login: "ruanyf2",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 4,
      },
      {
        login: "yyx9908033",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 5,
      },
      {
        login: "ruanyf3",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 6,
      },
      {
        login: "yyx9908034",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 7,
      },
      {
        login: "ruanyf4",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 8,
      },
      {
        login: "yyx9908035",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 9,
      },
    ],
  });
});



app.listen(5000, "localhost", (err) => {
  if (!err){
  	console.log("服务器启动成功")
  	console.log("请求github真实数据请访问：http://localhost:5000/search/users")
  	console.log("请求本地模拟数据请访问：http://localhost:5000/search/users2")
  } 
  else console.log(err);
})

```

# react路由

## 对spc应用的理解

1. 单页Web应用（single page web application,SPA)
2. 整个应用只有个完整的页面。
3. 点击页面中的链接不会刷新页面，只会做页面的局部更新。
4. 数据都需要通过 ajax 请求获取，并在前端异步展现。

## 后端路由:

理解： value 是 function, 用来处理客户端提交的请求。

注册路由：

```
 router.get(path, function(req, res))
```

工作过程：当node 接收到一个请求时,根据请求路径找到匹配的路由,调用路由中的函数来处理请求, 返回响应数据

## 前端路由:

浏览器端路由，value 是 component，用于展示页面内容。

注册路由:

```
<Route path="/test" component=(Test}>
```

工作过程：当浏览器的 path 变为/test 时，当前路由组件就会变为 Test 组件。

## react-router

react的一个插件库。

专门用来实现一个SPA应用。

基于 react 的项目基本都会用到此库。

### 安装react-router

```
npm i react-router-dom@5
```

引入

```
import {BrowserRouter, Link, Route} from 'react-router-dom'
```

```
class App extends React.Component {

    render() {
        return (
            <div className='div'>
                <h1>app</h1>
                <BrowserRouter>
                    <div>
                        <div className='home'>
                        	Link点击跳转
                            <Link rel="stylesheet" className='a' to='/home'>Home</Link>
                        </div>
                        <div className='home'>
                            <Link rel="stylesheet" className='a' to='/about'>About</Link>
                        </div>
                    </div>
                    <hr/>
                    <div>
                    	跳转的页面
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }

}

```

高级写法

把mian.jsx里面的app用BrowserRouter包围起来

```react
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
        <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
```

app.jsx

```react
import './App.css'
import React from "react";
import Home from "./components/Home";
import {Link, Route} from 'react-router-dom'

import About from "./components/About";

class App extends React.Component {

    render() {
        return (
            <div className='div'>
                <h1>app</h1>
                    <div>
                        <div className='home'>
                            <Link rel="stylesheet" className='a' to='/home'>Home</Link>
                        </div>
                        <div className='home'>
                            <Link rel="stylesheet" className='a' to='/about'>About</Link>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                    </div>
            </div>
        )
    }

}

export default App

```

1.明确好界面中的导航区、展示区

2.导航区的a标签改为Link标签

```
<Link to="/xxxxx">Demo</Link>
```

3.展示区写Route标签进行路径的匹配

```
<Route path='/xxxx"component={Demo}/>
```

4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 路由组件与一般组件

### 1.写法不同

一般组件:<Demo/>

路由组件:<Route path='/about' component={About}/>

### 2.存储位置不同

通常来讲

![image-20220329190418099](C:%5CUsers%5Cmove%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220329190418099.png)

pages里面的组件是动态组件

components里面组件是一般组件

### 3.接受到的props不同

路由组件接受到的props是

```js
history: {
	action: "PUSH"
    block: ƒ block(prompt)
    createHref: ƒ createHref(location)
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    length: 37
    listen: ƒ listen(listener)
    location: {pathname: '/about', search: '', hash: '', state: undefined, key: 'bcchzb'}
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
    [[Prototype]]: Object
},
	
location: {
    hash: ""
    key: "bcchzb"
    pathname: "/about"
    search: ""
    state: undefined
    [[Prototype]]: Object
}, 
match: {
    isExact: true
    params: {}
    path: "/about"
    url: "/about"
    [[Prototype]]: Object
}, 
staticContext: undefined}
```

一般组件接受到的是

```
{}
```

## NavLink的使用

点击时切换css类

```
<NavLink rel="stylesheet" className='a active' to='/about'>About</NavLink>
```

自定义切换类

```
<NavLink activeClassName='demo' rel="stylesheet" className='a' to='/about'>About</NavLink>
```

二次封装-NavLink

组件名

```
MyNavLink
```

组件jsx

```
import React, {Component} from "react";
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log(this.props)
        return (
            <NavLink activeClassName='demo' className='a' {...this.props} />
        )
    }

}
```

使用

```
<div>
    <div className='home'>
        <MyNavLink to='home' children='home'/>
    </div>
    <div className='home'>
        <MyNavLink to='/about' children='about'/>
    </div>
</div>
```

## Switch的使用

Switch只显示匹配到的第一个路由

```
<Switch>
    <Route path='/about' component={About}/>
    <Route path='/home' component={Home}/>
    <Route path='/home' component={Test}/>
</Switch>
```

执行结果：点击哪个链接就能出来相应的页面

## 解决多级路径刷新页面样式丢失的问题

```
public/index.html中引入样式时不写，/写(常用)

public/.index.html中引入样式时不写./写%PUBLIC_URL%(常用)
```

使用HashRouter

## 路由的严格匹配与模糊匹配

默认使用的是模制匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）

开启严格匹配：

```
<Route exact:={true}path="/about"component:={About/)
```

严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路山

## 路由重定向

```
<Redirect to='指定路由’>
```

## 嵌套路由(多级路由)

嵌套路由

App.jsx

```react
import MyNavLink from "./src/components/MyNavLink";
import About from "./src/pages/About";
import Home from "./src/pages/Home";

<div className='div'>
    <h1>app</h1>
    <p>动态组件</p>
    <div>
        <div className='home'>
            <MyNavLink to='/home' children='home'/>
        </div>
        <div className='home'>
            <MyNavLink to='/about' children='about'/>
        </div>
    </div>
    <hr/>
    <div>
        <Switch>
            一级路由
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
            <Redirect to='/about'/>
        </Switch>
    </div>
</div>
```

home.jsx

```react
import React, {Component} from "react";
import home from './index.module.scss';
import HomePage from './HomePage'
import HomeContent from './HomeContent'
import MyNavLink from '@/components/MyNavLink';
import {Route,Switch,Redirect} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className={home.text}>Home</h1>
                <MyNavLink className={home.text} to='/home/page' children='page'/><br/>
                <MyNavLink className={home.text} to='/home/content' children='content'/>
                <Switch>
                    // 二级路由
                        <Route path='/home/page' component={HomePage}/>
                        <Route path='/home/content' component={HomeContent}/>
                        <Redirect to='/home/page'/>
                </Switch>

            </div>
        )
    }

}
```

## 向路由组件传递参数

### 1-params

params参数

路由链接(携带参数)：

```
<Link to='/demo/test/tom/18'}>详情</Link>
```

注册路由(声明接收)：

```
<Route path="/demo/test/：name/:age" component={Test}/>
```

接收参数：

```
const {name,age} = this.props.match.params
```

父组件

```react
import React, {Component} from "react";
import Detlic from "./Detlic";
import {Route,Link} from 'react-router-dom'
export default class HomeContent extends Component {
    state={
        message:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'}
        ]
    }
    render() {
        let {message}=this.state
        return (
            <div>
                <ul>
                    {message.map(item=>{
                        return <li key={item.id}>
                            <Link to={`/home/content/detlic/${item.id}/${item.title}`}>{item.title}</Link>
                        </li>
                    })}
                </ul>
                <hr/>
                <Route path='/home/content/detlic/:id/:title' component={Detlic}/>
            </div>
        )
    }

}
```

子组件

```react
import React, {Component} from "react";
const data=[
    {id:'01',content:'你好,1'},
    {id:'02',content:'你好,2'},
    {id:'03',content:'你好,3'}
]
export default class Detlic extends Component {
    render() {
        let {id,title}=this.props.match.params
        const find=data.find((item)=>{
            return item.id===id
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{find.content}</li>
                </ul>
            </div>
        )
    }

}
```

### 2-search参数

search参数

路由链接（携带参数）：

```react
<Link to='/demo/test？name=tom&age=18"}>详情</Link>
```

注册路由(无需声明，正常注册即可)：

```react
react<Route path="/demo/test" component={Test}/>
```

接收参数：

```react
const {search} = this.props.location
```

备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

引入query-string

```react
import qs from 'query-string '
```

使用

```react
 let {name,age}=qs.parse(search)
```

```react
 const find=data.find((item)=>{
            return item.age==age
        })
        return (
            <div>
                <ul>
                    <li>ID:{age}</li>
                    <li>title:{age}</li>
                    <li>content:{find.content}</li>
                </ul>
            </div>
        )
```

### 3-state参数

state参数

路由链接(携带参数)：

```react
<Link to={{path:'/demo/test',state:{name：'tom',age:18}}}>详情</Link>
```

注册路由(无需声明，正常注册即可)：

```react
<Route path="/demo/test" component={Test}/>
```

接收参数：

```react
this.props.location.state
```

备注：刷新也可以保留住参数

父组件

```react
import React, {Component} from "react";
import Detlic from "./Detlic";
import {Link, Route} from 'react-router-dom'

export default class HomeContent extends Component {
    state = {
        message: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'}
        ]
    }

    render() {
        let {message} = this.state
        return (
            <div>
                <ul>
                    {message.map(item => {
                        return <li key={item.id}>
                            {/*<Link to={`/home/content/detlic/${item.id}/${item.title}`}>{item.title}</Link>*/}
                            {/*<Link to={`/home/content/detlic/?id=${item.id}&title=${item.title}`}>{item.title}</Link>*/}
                            <Link to={{
                                pathname: '/home/content/detlic',
                                state: {id: item.id, title: item.title}
                            }}>{item.title}</Link>
                        </li>
                    })}
                </ul>
                <hr/>
                <Route path='/home/content/detlic' component={Detlic}/>
            </div>
        )
    }

}
```

子组件

```react
import React, {Component} from "react";

const data = [
    {id: '01', content: '你好,1'},
    {id: '02', content: '你好,2'},
    {id: '03', content: '你好,3'}
]
export default class Detlic extends Component {
    render() {
        // 接受search参数

        let {id, title} = this.props.location.state||{}
        console.log(id,title)
        const find = data.find((item) => {
            return item.id === id
        })||{}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{find.content}</li>
                </ul>
            </div>
        )
    }

}
```

```react
<MyNavLink replace to='/home' children='home'/>
```

## 编程式导航

```react
import React, {Component} from "react";
import Detlic from "./Detlic";
import {Link, Route} from 'react-router-dom'

export default class HomeContent extends Component {
    state = {
        message: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'}
        ]
    }
    pushShow=(id,title)=>{

        return ()=>{
           
        }
    }
    replaceShow=(id,title)=>{
        // 编写代码，实现跳转detail组件
          return ()=>{
    
          }
    }
    render() {
        let {message} = this.state
        return (
            <div>
                <ul>
                    {message.map(item => {
                        return <li key={item.id}>
                        	// 访问的时候记录这次访问路径
                            <button onClick={this.pushShow(item.id,item.title)}>push查看</button>
                            // 访问的时候不记录这次访问路径
                            <button onClick={this.replaceShow(item.id,item.title)}>replace查看</button>
                        </li>
                    })}
                </ul>
                <hr/

            </div>
        )
    }
}
```

### replace跳转+params

```react
pushShow=(id,title)=>{

        return ()=>{
            //push跳转+携带params参数
            this.props.history.push(`/home/content/detlic/${id}/${title}`)
        }
    }
replaceShow=(id,title)=>{
        // 编写代码，实现跳转detail组件
        return ()=>{
              //replace跳转+携带params参数
              // this.props.history.replace(`/home/content/detlic/${id}/${title}`);

         }
    }
```

```react
<Route path='/home/content/detlic/:id/:title' component={Detlic}/>
```

#### 跳转的组件

```js
params编程式传值 */
```

```react
import React, {Component} from "react";
import qs from 'query-string'
const data = [
    {id: '01', content: '你好,1'},
    {id: '02', content: '你好,2'},
    {id: '03', content: '你好,3'}
]
export default class Detlic extends Component {
    render() {
        console.log(this.props)
         /* params编程式传值 */
        let {id,title}=this.props.match.params
        const find = data.find((item) => {
            return item.id === id
        })||{}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{find.content}</li>
                </ul>
            </div>
        )
    }

}
```

### replace跳转+带search

```react
pushShow=(id,title)=>{
    return ()=>{
        replace跳转+携带search参数
        // this.props.history.push(`/home/content/detlic?id=${id}&title=${title}`);
    }
}
// 跳转并清楚记录
replaceShow=(id,title)=>{
    // 编写代码，实现跳转detail组件
      return ()=>{
         
          //replace跳转+携带search参数
          // this.props.history.replace(`/home/content/detlic?id=${id}&title=${title}`);
      }
}
```

```react
<Route path='/home/content/detlic/' component={Detlic}/>
```

#### 跳转的组件

```react
import React, {Component} from "react";
import qs from 'query-string'
const data = [
    {id: '01', content: '你好,1'},
    {id: '02', content: '你好,2'},
    {id: '03', content: '你好,3'}
]
export default class Detlic extends Component {
    render() {
        console.log(this.props)
        /* search编程式传值 */
        let {search}=this.props.location
       let {id,title}=qs.parse(search);

        const find = data.find((item) => {
            return item.id === id
        })||{}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{find.content}</li>
                </ul>
            </div>
        )
    }

}
```

### replace跳转+state

```react
pushShow=(id,title)=>{
        return ()=>{
            //replace跳转+携带state参数
            this.props.history.push(`/home/content/detlic`,{id,title});
        }
    }
    // 跳转并清楚记录
replaceShow=(id,title)=>{
        // 编写代码，实现跳转detail组件
          return ()=>{
              //replace跳转+携带state参数
              this.props.history.replace(`/home/content/detlic`,{id,title});
          }
    }

```

```react
<Route path='/home/content/detlic/' component={Detlic}/>
```

#### 跳转的组件

```react
import React, {Component} from "react";
import qs from 'query-string'
const data = [
    {id: '01', content: '你好,1'},
    {id: '02', content: '你好,2'},
    {id: '03', content: '你好,3'}
]
export default class Detlic extends Component {
    render() {
        console.log(this.props)

        /* state编程式传值 */
        let {id,title}=this.props.location.state||{}

        const find = data.find((item) => {
            return item.id === id
        })||{}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>title:{title}</li>
                    <li>content:{find.content}</li>
                </ul>
            </div>
        )
    }

}
```

### go/goBack/goForward

```
 <button onClick={this.back}>回退</button>
                <button onClick={this.gofer}>前进</button>
```

```react
go

  go=()=>{
      this.props.history.go(1)
  }
```

```
goBack 后退路径

 back=()=>{
        this.props.history.goBack()
 }
```

```
goForward 前进

 gofer=()=>{
     this.props.history.goForward()
 }
```

# redux

## redux原理图

![image-20220403181448963](C:%5CUsers%5Cmove%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220403181448963.png)

### 求和案例react版

#### count.jsx

```react


const {Option} = Select;

class Count extends React.Component {
  state = {
    count: 0,
    selectN: 1
  }
  Num = () => {
    this.setState({selectN: this.selectNum.value * 1})
  }
  addNum = () => {
    const {count, selectN} = this.state;
    this.setState({count: count + selectN})
  }
  reduceNum = () => {
    const {count, selectN} = this.state;
    if ( count > 0 && count === -1 ) this.setState({count: count - selectN})
    else this.setState({count: 0})
  }
  oddNum = () => {
    const {count, selectN} = this.state;
    if ( count % 2 ) {
      this.setState({count: count + selectN})
    }
  }
  asyncNum = () => {
    const {count, selectN} = this.state;
    setTimeout(() => {
      this.setState({count: count + selectN})
    }, 2000)
  }

  render() {
    let opt = [
      {label: 1, value: 1},
      {label: 2, value: 2},
      {label: 3, value: 3},
      {label: 4, value: 4},
    ]
    return (
        <div>
          <h1> 当前的和为：{this.state.count}</h1>
          <select ref={e => this.selectNum = e} onClick={this.Num}>
            {
              opt.map(item => {
                return <option key={item.value} value={item.value}>{item.label}</option>
              })
            }
          </select>
          <button onClick={this.addNum}>点击+</button>
          <button onClick={this.reduceNum}>点击减</button>
          <button onClick={this.oddNum}>奇数的时候加</button>
          <button onClick={this.asyncNum}>异步的时候加</button>

        </div>
    );
  }


}
export default Count;
```

### 求和案例精简redux版

#### 目录结构

```html
src
	redux
		store.js
		redux-count.js
	components
		Count
			index.js
main.jsx
```

##### store.js

- 引入redux中的createStore函数，创建一个store
- createStore调用时要传入一个为其服务的reducer
- 记得暴露store对象

```js
// 引入为createStore 专门用于创建redux中最为核心的store对象
import {createStore} from 'redux'
// 引入为count服务的组件
import countRedux from './redux-count'
// 暴露出去
export default createStore(countRedux)
```

##### redux-count.js

- reducer的本质是一个函数，接收：preState,action，返回加工后的状态
- reducer有两个作用：初始化状态，加工状态
- reducer被第一次调用时，是store自动触发的，
- 传递的preState是undefined

```js
/**
 *  @reduxCount
 *    - 为Count组件服务的reducer reducer本质就是一个函数，
 *    - reduxCount接收两个参数：分别为: 之前的状态(preState)和动作对象(action)
* */
const initState = 0
export default function reduxCount(preState=initState,action) {
    const {type,data} = action;
    switch (type) {
        case 'add':
            // 加法
            return preState + data;
        case 'reduce':
            console.log(data)
            // 减法
            return preState - data;
        default:
            return preState;
    }
}
```

##### count.jsx

- 在index.js中监测store中状态的改变，
- 一旦发生改变重新渲染<App/>
- 备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

```react
import React from "react";
// 引入store 用于获取redux中保存状态
import store from "../../redux/store";

class Count extends React.Component {
    state = {
        count: 0,
    }

     componentDidMount() {
        // 检测store中的状态的变化，只要有变化，就调用render
        store.subscribe(() => {
            this.setState({
                count: store.getState()
            });
        });
    }

    render() {
        let opt = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
        ]
        return (
            <div>
                <h1> 当前的和为：{store.getState()}</h1>
                <select ref={e => this.selectNum = e}>
                    {
                        opt.map(item => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })
                    }
                </select>
                <button onClick={this.addNum}>点击+</button>
                <button onClick={this.reduceNum}>点击减</button>
                <button onClick={this.oddNum}>奇数的时候加</button>
                <button onClick={this.asyncNum}>异步的时候加</button>

            </div>
        );
    }
    addNum = () => {
        const {value} = this.selectNum
        // 通知redux加value
        store.dispatch(
            {
                type: 'add',
                data: value * 1
            }
        )
    }
    reduceNum = () => {
        let {value} = this.selectNum
        if ( store.getState() < 0 ) {
            return store.dispatch(
                {
                    type: 'reduce',
                    data: 0
                }
            )
        }
        store.dispatch(
            {
                type: 'reduce',
                data: value * 1
            }
        )

    }
    oddNum = () => {
        const {value} = this.selectNum
        const count = store.getState()
        if ( count % 2 === 1 ) {
            store.dispatch(
                {
                    type: 'add',
                    data: value * 1
                }
            )
        }
    }
    asyncNum = () => {
        const {value} = this.selectNum
        setTimeout(() => {
            store.dispatch({
                type: 'add',
                data: value * 1
            })
        }, 2000)
    }

}

export default Count;
```

##### main.jsx

```js
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import store from "./redux/store";
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
store.subscribe(()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
})
```

### 求和案例redux完整版

#### 新增两个文件

- constant.js
    - 放置容易写错的type
- redux-count-action.js
    - 专门用于创建action对象

#### 目录结构

```js
src
	redux
		constant.js
		store.js
		redux-count.js
		redux-count-action.js
	components
		Count
			index.js
main.jsx
```

##### constant.js

```js
/**
 * 该模块是定义action对象中的type属性的常量值
 *
 * */
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
```

##### store.js

```js
// 引入为createStore 专门用于创建redux中最为核心的store对象
import {createStore} from 'redux'

// 引入为count服务的组件
import countRedux from './redux-count'

// 暴露出去
export default createStore(countRedux)
```

##### redux-count.js

```js
/**
 *  @reduxCount
 *    - 为Count组件服务的reducer reducer本质就是一个函数，
 *    - reduxCount接收两个参数：分别为: 之前的状态()和动作对象()
 *    preState: {type:Number, count:0}
 *    action: {type:String, payload:1}
* */

 // 引入constant里面的常量
import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function reduxCount(preState=initState,action) {
    const {type,data} = action;
    switch (type) {
        case INCREMENT:
            // 加法
            return preState + data;
        case DECREMENT:
            console.log(data)
            // 减法
            return preState - data;
        default:
            return preState;
    }
}
```

##### redux-count-action.js

```js
/**
 * @createIncrementAction
 * data: Number || 加法传入的数据
 *
 * @createDecrementAction
 * data: Number || 减法传入的数据
 *
 * */
 // 引入constant里面的常量
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction = (data) => ({type: INCREMENT, data:data})
export const createDecrementAction = (data) => ({type: DECREMENT, data:data})
```

Count.jsx

```react
import React from "react";
// 引入store 用于获取redux中保存状态
import store from "../../redux/store";
// 引入actionCreator 专门用于创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/redux-count-action'

class Count extends React.Component {
    state = {
        count: 0,
        selectN: 1
    }

    /*  componentDidMount() {
        // 检测store中的状态的变化，只要有变化，就调用render
        store.subscribe(() => {
            this.setState({
                count: store.getState()
            });
        });
    }*/

    render() {
        let opt = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
        ]
        return (
            <div>
                <h1> 当前的和为：{store.getState()}</h1>
                <select ref={e => this.selectNum = e} onClick={this.Num}>
                    {
                        opt.map(item => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })
                    }
                </select>
                <button onClick={this.addNum}>点击+</button>
                <button onClick={this.reduceNum}>点击减</button>
                <button onClick={this.oddNum}>奇数的时候加</button>
                <button onClick={this.asyncNum}>异步的时候加</button>

            </div>
        );
    }

    addNum = () => {
        const {value} = this.selectNum
        // 通知redux加value
        store.dispatch(createIncrementAction(value*1))
    }
    reduceNum = () => {
        let {value} = this.selectNum
        if ( store.getState() <= 0 ) return store.dispatch(createDecrementAction(0))
        store.dispatch(createDecrementAction(value*1))

    }
    oddNum = () => {
        const {value} = this.selectNum
        const count = store.getState()
        if ( count % 2 === 1 ) {
            store.dispatch(createIncrementAction(value*1))

        }
    }
    asyncNum = () => {
        const {value} = this.selectNum
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        }, 2000)
    }

}

export default Count;
```

##### main.jsx

```react
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import store from "./redux/store";
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
store.subscribe(()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
})
```

### 求和案例redux异步版

```react
src
	redux
		constant.js
		store.js
		redux-count.js
		redux-count-action.js
	components
		Count
			index.js
main.jsx
```

##### constant.js

```react
/**
 * 该模块是定义action对象中的type属性的常量值
 * */
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
```

##### store.js

```react
// 引入为createStore 专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
// 引入为count服务的组件
import countRedux from './redux-count'
// 引入为redux-thunk 用于支持异步操作
import thunk from 'redux-thunk'
// 暴露出去
export default createStore(countRedux,applyMiddleware(thunk))
```

##### redux-count.js

```react
/**
 *  @reduxCount
 *    - 为Count组件服务的reducer reducer本质就是一个函数，
 *    - reduxCount接收两个参数：分别为: 之前的状态()和动作对象()
 *    preState: {type:Number, count:0}
 *    action: {type:String, payload:1}
* */
import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function reduxCount(preState=initState,action) {
    const {type,data} = action;
    switch (type) {
        case INCREMENT:
            // 加法
            return preState + data;
        case DECREMENT:
            console.log(data)
            // 减法
            return preState - data;
        default:
            return preState;
    }
}
```

##### redux-count-action.js

```
/**
 * @createIncrementAction
 * data: Number || 加法传入的数据
 *
 * @createDecrementAction
 * data: Number || 减法传入的数据
 *
 * @createIncrementAsyncAction
 * data: Number || 加法传入的数据  timer: Number || 延时时间
 * */
import {INCREMENT,DECREMENT} from './constant'
import store from "./store";



export const createIncrementAction = (data) => ({type: INCREMENT, data:data})
export const createDecrementAction = (data) => ({type: DECREMENT, data:data})


// 所谓的异步action，就是返回一个函数，这个函数的返回值就是action对象 异步action中一般都会调用同步action 异步action不是必须要用的+
export const createIncrementAsyncAction=(data,timer)=> {
	第一种写法
    return (dispatch)=>{
        setTimeout(()=>{
           dispatch(createIncrementAction(data))
        },timer)
    }
    
    第二种写法
    return ()=>{
        setTimeout(()=>{
           store.dispatch(createIncrementAction(data))
        },timer)
    }
}
```

##### Count.jsx

```
import React from "react";
// 引入store 用于获取redux中保存状态
import store from "../../redux/store";
// 引入actionCreator 专门用于创建action对象
import {createIncrementAction, createDecrementAction,createIncrementAsyncAction} from '../../redux/redux-count-action'

class Count extends React.Component {
    state = {
        count: 0,
        selectN: 1
    }

    /*  componentDidMount() {
        // 检测store中的状态的变化，只要有变化，就调用render
        store.subscribe(() => {
            this.setState({
                count: store.getState()
            });
        });
    }*/

    render() {
        let opt = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
        ]
        return (
            <div>
                <h1> 当前的和为：{store.getState()}</h1>
                <select ref={e => this.selectNum = e} onClick={this.Num}>
                    {
                        opt.map(item => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })
                    }
                </select>
                <button onClick={this.addNum}>点击+</button>
                <button onClick={this.reduceNum}>点击减</button>
                <button onClick={this.oddNum}>奇数的时候加</button>
                <button onClick={this.asyncNum}>异步的时候加</button>

            </div>
        );
    }

    addNum = () => {
        const {value} = this.selectNum
        // 通知redux加value
        store.dispatch(createIncrementAction(value*1))
    }
    reduceNum = () => {
        let {value} = this.selectNum
        if ( store.getState() <= 0 ) return store.dispatch(createDecrementAction(0))
        store.dispatch(createDecrementAction(value*1))

    }
    oddNum = () => {
        const {value} = this.selectNum
        const count = store.getState()
        if ( count % 2 === 1 ) {
            store.dispatch(createIncrementAction(value*1))

        }
    }
    asyncNum = () => {
        const {value} = this.selectNum
            store.dispatch(createIncrementAsyncAction(value*1,500))
    }

}

export default Count;
```

## react-redux模型图

1. 所有的UI组件都应该包裹一个容器组件，他们是父子关系。

2. 容器组件是真正和redux打交道的，里面可以随意的使用redux的api。

3. UI组件中不能使用任何redux的api。

4. 容器组件会传给UI组件：

    - redux中所保存的状态。

    - 用于操作状态的方法。

5. 备注：容器给UI传递：状态、操作状态的方法，均通过props传递。

#### react-redux的使用

明确两个概念：

- ​ UI组件：不能使用任何redux的api，只负责页面的呈现、交互等。
- ​ 容器组件：负责和redux通信，将结果交给UI组件。

如何创建一个容器组件

靠react-redux 的 connect函数

- connect(mapstateToProps,mapDispatchToProps)(UI组件)
    - -mapStateToProps:映射状态，返回值是一个对象
    - -mapDispatchToProps:映射操作状态的方法，返回值是一个对象

备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入

#### 目录结构

```热
src
	components
		Count.JSX
		
	containers
		Count.jsx
		
	redux
		constant.js
		
		redux-count.js
		
		redux-count-action.js
		
		store.js
		
	App.jsx
	
	main.jsx
```

##### components

```
UI组件
```

###### Count.JSX

```react
import React from "react";
// 引入store 用于获取redux中保存状态

class Count extends React.Component {
    state = {
        count: 0,
    }

    render() {
        console.log(this.props)
        let opt = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
        ]
        return (
            <div>
                <h1> 当前的和为：{this.props.count}</h1>
                <select ref={e => this.selectNum = e} onClick={this.Num}>
                    {
                        opt.map(item => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })
                    }
                </select>
                <button onClick={this.addNum}>点击+</button>
                <button onClick={this.reduceNum}>点击减</button>
                <button onClick={this.oddNum}>奇数的时候加</button>
                <button onClick={this.asyncNum}>异步的时候加</button>

            </div>
        );
    }

    addNum = () => {
        const {value} = this.selectNum
        this.props.INCREMENT(value * 1)
    }
    reduceNum = () => {
        let {count} = this.props
        let {value} = this.selectNum
        if ( count <= 0 ) this.props.DECREMENT(0)
        else this.props.DECREMENT(value * 1)
    }
    oddNum = () => {
        let {value} = this.selectNum
        let {count} = this.props
        if ( count % 2 ) this.props.INCREMENT(value*1)

    }
    asyncNum = () => {
        const {value} = this.selectNum
        this.props.AsyncINCREMENT(value*1,500)
    }

}

export default Count;
```

##### containers

```
容器组件
```

###### Count.JSX

```react
// 引入Count的ui组件
import CountUI from '@/components/Count';

// 引入redux的connect方法用于连接Ui组件和store
import {connect} from 'react-redux';

// 引入actionCreator 专门用于创建action对象

import {createIncrementAction,createDecrementAction, createIncrementAsyncAction} from "@/redux/redux-count-action";


/**
 * @mapStateToProps函数
 * 第一个参数
 * 返回的对象中的
     * key ：就作为传递给ui组件props的key
     * value ：就作为传递给ui组件props的value
 * mapStateToProps用于传递状态
 * */

function mapStateToProps(state) {
    return {count: state}
}

/**
 * @mapDispatchToProps函数
 * 第二个参数
 * 返回的对象中的
     * key ：就作为传递给ui组件props的key
         * INCREMENT: 加法
         * DECREMENT: 减法
         * AsyncINCREMENT :异步加法
     * value ：就作为传递给ui组件props的value
 * mapDispatchToProps用于操作状态的方法
 * */

function mapDispatchToProps(dispatch) {
    return {
        INCREMENT: (Num) => dispatch(createIncrementAction(Num)),
        DECREMENT: (Num) => dispatch(createDecrementAction(Num)),
        AsyncINCREMENT: (Num,times) => dispatch(createIncrementAsyncAction(Num,times))
    }
}

// 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

```

##### redux

```
状态管理
```

###### constant.js

```react
/**
 * 该模块是定义action对象中的type属性的常量值
 * */
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
```

###### redux-count.js

```react
/**
 *  @reduxCount
 *    - 为Count组件服务的reducer reducer本质就是一个函数，
 *    - reduxCount接收两个参数：分别为: 之前的状态()和动作对象()
 *    preState: {type:Number, count:0}
 *    action: {type:String, payload:1}
* */
import {INCREMENT,DECREMENT} from './constant'

const initState = 0
export default function reduxCount(preState=initState,action) {
    const {type,data} = action;
    switch (type) {
        case INCREMENT:
            // 加法
            return preState + data;
        case DECREMENT:
            console.log(data)
            // 减法
            return preState - data;
        default:
            return preState;
    }
}
```

###### redux-count-action.js

```react
/**
 * @createIncrementAction
 * data: Number || 加法传入的数据
 *
 * @createDecrementAction
 * data: Number || 减法传入的数据
 *
 * @createIncrementAsyncAction
 * data: Number || 加法传入的数据  timer: Number || 延时时间
 * */
import {INCREMENT,DECREMENT} from './constant'
import store from "./store";



export const createIncrementAction = (data) => ({type: INCREMENT, data:data,text:'data'})
export const createDecrementAction = (data) => ({type: DECREMENT, data:data,text:'data'})


// 所谓的异步action，就是返回一个函数，这个函数的返回值就是action对象 异步action中一般都会调用同步action 异步action不是必须要用的+
export const createIncrementAsyncAction=(data,timer)=> {
    return (dispatch)=>{
        setTimeout(()=>{
           dispatch(createIncrementAction(data))
        },timer)
    }
}
```

###### store.js

```react
// 引入为createStore 专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
// 引入为count服务的组件
import countRedux from './redux-count'
// 引入为redux-thunk 用于支持异步操作
import thunk from 'redux-thunk'
// 暴露出去
export default createStore(countRedux,applyMiddleware(thunk))
```

##### App.jsx

```react
import React, {Component} from 'react'
import Count from '@/containers/Count'
import store from '@/redux/store'
class App extends Component{
    render() {
        return (
            <div className='App'>
                <Count store={store}/>

            </div>
        )
    }
}
export default App
```

##### main.jsx

```react
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import store from "./redux/store";
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
// 检测redux中的改变，若redux的状态发生了变化，那么重新渲染App组件
store.subscribe(() => {
    ReactDOM.render(<App/>, document.getElementById('root'));
})
```

## 优化react-redux

```react
src
	components
		Count.JSX
		
	containers
		Count.jsx
		
	redux
		constant.js
		
		redux-count.js
		
		redux-count-action.js
		
		store.js
		
	App.jsx
	
	main.jsx
```

- 容器组件和UI组件整合一个文件
- 无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
- 使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
- mapDispatchToProps也可以简单的写成一个对象

- 一个组件要和redux“打交道”要经过那几步？

    - (1).定义好UI组件---不暴露

    - (2).引入connect生成一个容器组件，并暴露，写法如下：

        - ```react
      connect(
      state => (
      ({key:value})，//映射状态 {key:xxxxxAction} //映射操作状态的方法
      )(UI组件)
      ```

    - 在UI组件中通过this.props.xxxxxxx读取和操作状态

### 优化一

#### containers

```react
Count.jsx


// 引入Count的ui组件
import CountUI from '@/components/Count';

// 引入redux的connect方法用于连接Ui组件和store
import {connect} from 'react-redux';

// 引入actionCreator 专门用于创建action对象
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "@/redux/redux-count-action";

/**
 *
 *
 * @mapStateToProps函数
 * 第一个参数
 * 返回的对象中的
 * key ：就作为传递给ui组件props的key
 * value ：就作为传递给ui组件props的value
 * mapStateToProps用于传递状态
 *
 *
 *
 * @mapDispatchToProps函数
 * 第二个参数
 * 返回的对象中的
 * key ：就作为传递给ui组件props的key
 * INCREMENT: 加法
 * DECREMENT: 减法
 * AsyncINCREMENT :异步加法
 * value ：就作为传递给ui组件props的value
 * mapDispatchToProps用于操作状态的方法
 * */

// 创建并暴露一个Count的容器组件
export default connect(
    state => ({count: state}),
    // mapDispatchToProps一般写法
    /*dispatch => ({
        INCREMENT: (Num) => dispatch(createIncrementAction(Num)),
        DECREMENT: (Num) => dispatch(createDecrementAction(Num)),
        AsyncINCREMENT: (Num, times) => dispatch(createIncrementAsyncAction(Num, times))
    })*/

    // mapDispatchToProps精简版
    {
        INCREMENT:createIncrementAction,
        DECREMENT:createDecrementAction,
        AsyncINCREMENT:createIncrementAsyncAction
    }
)
(CountUI)

```

### 优化二

#### App.jsx

```react
import React, {Component} from 'react'
import Count from '@/containers/Count'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Count/>
            </div>
        )
    }
}

export default App
```

#### main.jsx

```react
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import store from "./redux/store";
import App from './App';
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
```

### 优化三

把ui组件跟容器组件合为一体

#### Count.jsx

```react
// 引入Count的ui组件

import React from "react";

// 引入redux的connect方法用于连接Ui组件和store
import {connect} from 'react-redux';

// 引入actionCreator 专门用于创建action对象
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "@/redux/redux-count-action";

/**
 *
 *
 * @mapStateToProps函数
 * 第一个参数
 * 返回的对象中的
 * key ：就作为传递给ui组件props的key
 * value ：就作为传递给ui组件props的value
 * mapStateToProps用于传递状态
 *
 *
 *
 * @mapDispatchToProps函数
 * 第二个参数
 * 返回的对象中的
 * key ：就作为传递给ui组件props的key
 * INCREMENT: 加法
 * DECREMENT: 减法
 * AsyncINCREMENT :异步加法
 * value ：就作为传递给ui组件props的value
 * mapDispatchToProps用于操作状态的方法
 * */

// 创建并暴露一个Count的容器组件

class Count extends React.Component {
    state = {
        count: 0,
    }

    /*  componentDidMount() {
        // 检测store中的状态的变化，只要有变化，就调用render
        store.subscribe(() => {
            this.setState({
                count: store.getState()
            });
        });
    }*/

    render() {
        console.log(this.props)
        let opt = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
        ]
        return (
            <div>
                <h1> 当前的和为：{this.props.count}</h1>
                <select ref={e => this.selectNum = e} onClick={this.Num}>
                    {
                        opt.map(item => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })
                    }
                </select>
                <button onClick={this.addNum}>点击加</button>
                <button onClick={this.reduceNum}>点击减</button>
                <button onClick={this.oddNum}>奇数的时候加</button>
                <button onClick={this.asyncNum}>异步的时候加</button>

            </div>
        );
    }
    addNum = () => {
        const {value} = this.selectNum
        console.log('a')
        this.props.INCREMENT(value * 1)
    }
    reduceNum = () => {
        let {count} = this.props
        let {value} = this.selectNum
        if ( count <= 0 ) this.props.DECREMENT(0)
        else this.props.DECREMENT(value * 1)
    }
    oddNum = () => {
        let {value} = this.selectNum
        let {count} = this.props
        if ( count % 2 ) this.props.INCREMENT(value * 1)

    }
    asyncNum = () => {
        const {value} = this.selectNum
        this.props.AsyncINCREMENT(value * 1, 500)
    }

}

// 定义ui组件
export default connect(
    state => ({count: state}),
    // mapDispatchToProps一般写法
    /*dispatch => ({
        INCREMENT: (Num) => dispatch(createIncrementAction(Num)),
        DECREMENT: (Num) => dispatch(createDecrementAction(Num)),
        AsyncINCREMENT: (Num, times) => dispatch(createIncrementAsyncAction(Num, times))
    })*/

    // mapDispatchToProps精简版
    {
        INCREMENT: createIncrementAction,
        DECREMENT: createDecrementAction,
        AsyncINCREMENT: createIncrementAsyncAction
    }
)
(Count)

```

## 组件之间数据共享

定义一个Pserson组件，和Count组件通过redux共享数据。

为Person组件编写：reducer、action，配置constant常量。

重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，

- 合并后的总状态是一个对象！！！

交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”

### 组件目录

```react
containers
	Count					共享数据组件
		index.jsx
	Person					共享数据组件
		index.jsx

redux
	action
		redux-count-action.js
		redux-person-action.js
	reducers
		redux-count.js
		redux-person.js
	store.js

App.jsx

main.jsx
```

#### Count.jsx

```react

import React from "react";

import {connect} from 'react-redux';

import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "@/redux/action/redux-count-action";

import personReducer from "../../redux/reducers/redux-person";

// 创建并暴露一个Count的容器组件

class Count extends React.Component {
    state = {
        count: 0,
    }

    render() {
        console.log(this.props)
        let opt = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
        ]
        return (
            <div>
                <h1>我是count组件</h1>
                <h1> 当前的和为：{this.props.count}</h1>
                <select ref={e => this.selectNum = e} onClick={this.Num}>
                    {
                        opt.map(item => {
                            return <option key={item.value} value={item.value}>{item.label}</option>
                        })
                    }
                </select>
                <button onClick={this.addNum}>点击加 </button>
                <button onClick={this.reduceNum}>点击减</button>
                <button onClick={this.oddNum}>奇数的时候加</button>
                <button onClick={this.asyncNum}>异步的时候加</button>
                <h2>下方组件总人数为 ：{this.props.person}</h2>
            </div>
        );
    }

    addNum = () => {
        const {value} = this.selectNum
        this.props.INCREMENT(value * 1)
    }
    reduceNum = () => {
        let {count} = this.props
        let {value} = this.selectNum
        if ( count <= 0 ) this.props.DECREMENT(0)
        else this.props.DECREMENT(value * 1)
    }
    oddNum = () => {
        let {value} = this.selectNum
        let {count} = this.props
        if ( count % 2 ) this.props.INCREMENT(value * 1)

    }
    asyncNum = () => {
        const {value} = this.selectNum
        this.props.AsyncINCREMENT(value * 1, 500)
    }

}

export default connect(
    state => ({count: state.countRedux,person:state.personReducer.length}),
    {
        INCREMENT: createIncrementAction,
        DECREMENT: createDecrementAction,
        AsyncINCREMENT: createIncrementAsyncAction
    }
)
(Count)

```

#### Person.jsx

```react
import React, {Component} from "react";
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/action/redux-person-action'

 class Person extends Component {
    addPerson=()=>{
        console.log(this.props)
        const name=this.Name.value
        const age=this.Age.value
        const PersonObj={id:nanoid(3),name,age}
        this.props.addPerson(PersonObj)
        this.Name.value=''
        this.Age.value=''
    }
    render() {
        console.log(this.props)
        return (
            <div>
                 <h2>我是person组件</h2>
                <input type="text" ref={e=>this.Name=e}/>
                <input type="text" ref={e=>this.Age=e}/>
                <button onClick={this.addPerson} children='添加'/>
                <ul>
                    {this.props.person.map(item=>{
                        return <li key={item.id}>{item.name}----{item.age}</li>
                    })}
                </ul>


                <h2>上面组件的总数 :{this.props.count}</h2>
            </div>
        )
    }

}
export default connect(
    state=>({person:state.personReducer,count:state.countRedux}),
    {
        addPerson:createAddPersonAction
    }
)(Person)
```

#### redux-count-action.js

```react

const DECREMENT = import.meta.env.VITE_DECREMENT
const INCREMENT = import.meta.env.VITE_INCREMENT

export const createIncrementAction = (data) => ({type: INCREMENT, data: data, text: 'data'})
export const createDecrementAction = (data) => ({type: DECREMENT, data: data, text: 'data'})

export const createIncrementAsyncAction = (data, timer) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, timer)
    }
}
```

#### redux-person-action.js

```react
const ADD_PERSON=import.meta.env.VITE_ADD_PERSON;
export const createAddPersonAction=(person)=>({type:ADD_PERSON,data:person})

```

#### redux-count.js

```react

const DECREMENT = import.meta.env.VITE_DECREMENT
const INCREMENT = import.meta.env.VITE_INCREMENT

const initState = 0
export default function reduxCount(preState = initState, action) {
    console.log('reduxCount')
    const {type, data} = action;
    switch (type) {
        case INCREMENT:
            // 加法
            return preState + data;
        case DECREMENT:
            console.log(data)
            // 减法
            return preState - data;
        default:
            return preState;
    }
}
```

#### redux-person.js

```react
const ADD_PERSON=import.meta.env.VITE_ADD_PERSON;
const person=[{id:'0001',name:'***',age:18}]
export default function personReducer(preState=person,action) {
    console.log('personReducer')
    const {type,data}=action
    switch (type) {
        case ADD_PERSON:
            return  [data,...preState]
        default:
            return preState;
    }
}
```

#### store.js

```react
// 引入为createStore 专门用于创建redux中最为核心的store对象
import {applyMiddleware, createStore,combineReducers} from 'redux'
// 引入为count服务的组件
import countRedux from './reducers/redux-count'

import personReducer from './reducers/redux-person'
const redux=combineReducers({
    countRedux,
    personReducer
})
// 引入为redux-thunk 用于支持异步操作
import thunk from 'redux-thunk'
// 暴露出去
export default createStore(redux, applyMiddleware(thunk))

```

#### App.jsx

```react
import React, {Component} from 'react'
import Count from '@/containers/Count'
import Person from "@/containers/Person";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Count/>
                <hr/>
                <Person/>
            </div>
        )
    }
}

export default App
```

#### main.jsx

```react
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import store from "./redux/store";
import App from './App';
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'));
```

#### .env

```elixir
VITE_INCREMENT = 'increment';
VITE_DECREMENT = 'decrement';
VITE_ADD_PERSON= 'add_person'
```

#### vite.config.js

```js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": '/src',
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})

```

# react 扩展

## 1. setState

### setState更新状态的2种写法

```
	(1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
```

```react
import React, {Component} from "react";

export default class SetState_demo extends Component {
    state={
        count:0
    }
    add=()=>{
        const {count}=this.state
        /**
         * @setState
         * 1=> setState(stateChange, [callback])------对象式的setState
         *      1.stateChange为状态改变对象(该对象可以体现出状态的更改)
         *      2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
         * 2=>  setState(updater, [callback])------函数式的setState
         *      1.updater为返回stateChange对象的函数。
         *      2.updater可以接收到state和props。
         *      3.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
         * */
        // 对象式的setState写法
        /*
        this.setState({count:count+1},()=>{
            console.log('20行输出',this.state.count)
        })
        console.log('22行输出',this.state.count)*/
        // 函数式的setState写法
            this.setState(state=>({count:state.count+1}))
    }
    render() {
        console.log('调用了')
        return (
            <div>
                <h1>当前求和为 :{this.state.count}</h1>
                <button onClick={this.add}>加一</button>
            </div>
        )
    }

}
```

------

## 2. lazyLoad

### 路由组件的lazyLoad

```js
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```

------

## 3. Hooks

#### 1. React Hook/Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

#### 2. 三个常用的Hook

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

#### 3. State Hook

```react
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

###### State Hook

```react
function Hooks_demo() {
    const [count, setCount] = React.useState(0)

    const add = function () {
        setCount(count => count + 1)
    }
  
    return (
        <div>
            <h1>当前求和为 :{count}</h1>
            <button onClick={add}>加一</button>
        </div>
    )
}
```

#### 4. Effect Hook

```react
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

###### Effect Hook

```react
import React from "react";
import * as ReactDOM from "react-dom";

function Hooks_demo() {
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        let times= setInterval(() => setCount(count => count + 1), 1000)
        return ()=>{
            clearInterval(times)
        }
    }, [setCount])
    const unmount = function () {
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    }
    return (
        <div>
            <h1>当前求和为 :{count}</h1>
            <button onClick={add}>加一</button>
        </div>
    )
}

export default Hooks_demo
```

#### 5. Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```

###### Ref Hook

```
import React from "react";
import * as ReactDOM from "react-dom";

function Hooks_demo() {
    const show=function () {
        console.log(myRef.current.value)
    }
    const myRef=React.useRef()
    return (
        <div>
            <input type="text" ref={myRef}/>   
            <button onClick={show}>点击获取输入</button>
        </div>
    )
}

export default Hooks_demo
```

------

## 4. Fragment

### 使用

	<Fragment><Fragment>
	<></>

```
import {Fragment} from 'react'
function Fragment_() {
    return (
        <>
            <input type="text"/>
            <input type="text"/>
        </>
    )
}
export default Fragment_
```

### 作用

> 可以不用必须有一个真实的DOM根标签了



<hr/>

## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```js
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 注意

	在应用开发中一般不用context, 一般都用它的封装react插件

<hr/>

## 6. 组件优化

### Component的2个问题

> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
>
> 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

### 效率高的做法

> 只有当组件的state或props数据发生改变时才重新render()

### 原因

> Component中的shouldComponentUpdate()总是返回true

### 解决

	办法1: 
		重写shouldComponentUpdate()方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	办法2:  
		使用PureComponent
		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		注意: 
			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			不要直接修改state数据, 而是要产生新数据
	项目中一般使用PureComponent来优化

<hr/>

## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 

<hr/>

## 8. 错误边界

#### 理解：

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面

#### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

##### 使用方式：

getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```

## 9. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

#### 几种通信方式：

		1.props：
			(1).children props
			(2).render props
		2.消息订阅-发布：
			pubs-sub、event等等
		3.集中式管理：
			redux、dva等等
		4.conText:
			生产者-消费者模式

#### 比较好的搭配方式：

		父子组件：props
		兄弟组件：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)

