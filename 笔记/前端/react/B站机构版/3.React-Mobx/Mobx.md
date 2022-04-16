# Mobx介绍

1. 简单

   编写无模板的极简代码来精准描述你的意图（原生js）

2. 轻松实现最优渲染

   依赖自动追踪最小渲染优化

3. 架构自由

   可移植，可测试

## Mobx环境配置

Mobx是一个独立的响应式的库，可以独立于任何UI框架而存在，但是通常人们把它和React 来绑定使使用，用Mobx来做响应式数据建模，React作为UI视图框架渲染内容

所以配置方面我们需要三个部分：

1. 一个通过create-react-app 创建好的react项目环境

2. mobx本身

3. 一个链接mobx和react的中间部件

# 第一个store

## 需求

![image-20220411024108290](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220411024108290.png)

## 目录结构

```
src
	component
		Count
			index.jsx
	store
		Mobx-Count.js
	App.jsx
	
	main.jsx
```

### Count/index.jsx

```react
import React from "react";
import {CountStore} from '$/store/Mobx-Count'
// import DevTools from 'mobx-react-devtools'
import {observer} from 'mobx-react-lite'
function index(props) {
    return (
        <>
            {/*<DevTools/>*/}
            {CountStore.count}
            <button onClick={CountStore.addCount}>1</button>
        </>
    )
}

export default observer(index)
```

### Mobx-Count.js

```js
import {makeAutoObservable} from 'mobx'

class MobxCount {
    // 定义数据
    count = 0
    // 把数据弄成响应式
    constructor(props) {
        console.log(this)
        makeAutoObservable(this)
    }
    // 定义action函数(修改数据)
    addCount=()=>{
        this.count++
    }
}
// 实例化导出给react使用
const CountStore=new MobxCount();
export {CountStore}
```

### App.jsx

```react
import Count from './component/Count'

export default function App() {
    return (
        <>
            <Count/>
        </>
    )
}
```

### main.jsx

```
import ReactDom from "react-dom";
import React from "react";
import App from './App'
ReactDom.render(<React.StrictMode><App/></React.StrictMode>,document.querySelector("#root"))
```

# mobx计算属性

修改上面的Mobx-Count.js跟Count/index.jsx

## Mobx-Count.js

```
import {makeAutoObservable} from 'mobx'

class MobxCount {
    // 定义数据
    count = 0
    // 计算属性数据
    list=[1,23,4,5,6,7,10,141,5,1,36,161]
    // 把数据弄成响应式
    constructor(props) {
        console.log(this)
        makeAutoObservable(this)
    }
    // 计算属性
    get filterS(){
        return this.list.filter(item=>item>10)
    }
    // 定义action函数(修改数据)
    addCount=()=>{
        this.count++
    }
    // 添加数据
    addList=()=>{
        this.list.push(12,789,78,0)
    }
}
// 实例化导出给react使用
const CountStore=new MobxCount();
export {CountStore}
```

## Count/index.jsx

```
import React from "react";
import {CountStore} from '$/store/Mobx-Count'
// import DevTools from 'mobx-react-devtools'
import {observer} from 'mobx-react-lite'
function index(props) {
    return (
        <>
            {/*<DevTools/>*/}
            {CountStore.count}
            <hr/>
            {CountStore.filterS.join('-')}
            <button onClick={CountStore.addCount}>1</button>
            <button onClick={CountStore.addList}>增加数据</button>
        </>
    )
}

export default observer(index)
```

