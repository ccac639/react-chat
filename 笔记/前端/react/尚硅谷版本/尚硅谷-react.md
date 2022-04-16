# 第1章：React入门

## React简介

### 官网

1. 英文官网:[ https://reactjs.org/](https://reactjs.org/)

2. 中文官网: https://react.docschina.org/

### 介绍描述

1. 用于动态构建用户界面的 JavaScript 库(只关注于视图)

2. 由Facebook开源

### React的特点

1. 声明式编码

2. 组件化编码

3. React Native 编写原生应用

4. 高效（优秀的Diffing算法）

### React高效的原因

1. 使用虚拟(virtual)DOM, 不总是直接操作页面真实DOM。

2. DOM Diffing算法, 最小化页面重绘。

## React的基本使用

### 入门

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
    <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
    <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    /*1.创建虚拟dom*/
    const VDom=<h1>hello,react</h1>
    /*2.渲染虚拟dom到页面*/
    ReactDOM.render(VDom,document.querySelector("#app"))
</script>
</body>
</html>
```

- react.js：React核心库。
- react-dom.js：提供操作DOM的react扩展库。
- babel.min.js：解析JSX语法代码转为JS代码的库。

### 创建虚拟DOM的两种方式

1. 纯JS方式(一般不用)

2. JSX方式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
  <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
<!--  <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>-->
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    /**
     * jsx写法
     * */
  let VDom=<h2 id="title">react创建虚拟dom的两种方式</h2>
  ReactDOM.render(VDom,document.querySelector("#app"))
</script>
<script type="text/javascript">
    /**
     * 原生写法
     * */
    const VDom=React.createElement('h1',{id:'title'},'react创建虚拟dom的两种方式');
    ReactDOM.render(VDom,document.querySelector("#app"))
</script>
</body>
</html>
```

### 虚拟DOM与真实DOM

1. React提供了一些API来创建一种 “特别” 的一般js对象
2. 上面创建的就是一个简单的虚拟DOM对象
3. 虚拟DOM对象最终都会被React转换为真实的DOM
4. 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界。

![image-20220227001434866](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220227001434866.png)

## React JSX

* ### jsx语法规则

   *

  #### 1.定义虚拟DOM时,不要写引号

   * #### 2.标签中混入js表达式要用{}

### JSX

1. 全称: JavaScript XML

2. react定义的一种类似于XML的JS扩展语法: JS + XML本质是

   - ```jsx
   React.createELement(component,props,...chidlren)的语法糖
     ```

3. 作用: 用来简化创建虚拟DOM

   - 写法：

      - ```
     let ele = <h1>Hello JSX!<h1>
      ```

   - 注意1：它不是字符串, 也不是HTML/XML标签
   - 注意2：它最终产生的就是一个JS对象

4. 标签名任意: HTML标签或其它标签

5. 标签属性任意: HTML标签属性或其它

6. 基本语法规则

   - 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
   - 遇到以 { 开头的代码，以JS语法解析: 标签中的js表达式必须用{ }包含

7. babel.js的作用

   - 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
   - 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
  <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
  <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
  <style>
    .app{
      background: red;
    }
  </style>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
  const myId='@硅谷'
  const myDate='React'


  let VDom=(
      <div>
          <h1 className="app" id={myId}>
            <p style={{fontSize:'18px'}}>react-jsx语法规则-{myDate+myId}</p>
          </h1>
          <label>
              <input type="text"/>
          </label>
          <Good>123</Good>
      </div>

  )
  ReactDOM.render(VDom,document.querySelector("#app"))
  /**
   * jsx语法规则
   *    1.定义虚拟DOM时,不要写引号
   *    2.标签中混入js表达式要用{}
   *    3.标签中的类名指定不要用class.要用className
   *    4.内联样式要用style={{key:value}}的形式去写
   *    5.只有一个根标签
   *    6.标签必须闭合
   *    7.标签首字母
   *        (1).若小写字母开头,则将标签转化为html中,若html中无该标签对应的同名元素,则报错
   *        (2).若大写字母开头,react就去渲染对应的数组,若组件没有定义,则直接报错
   *
   * */
</script>
</body>
</html>
```

### jsx小练习

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
  <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
  <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
  /**
   * 一定要区分[js语句(代码)]与js表达式
   *  1.表达式:一个表达式会产生一个值,可以放在任何一个需要值的地方
   *    1.1下面这些都是表达式式
   *      (1).let a=0
   *      (2).a+b
   *      (3).demo(1) 函数调用表达式
   *      (4).arr.map() 数组map方法
   *      (5).function abc(){}
   *  2.语句(代码):
   *    2.1下面都是语句(代码)
   *      (1).if(){}
   *      (2).for(){}
   *      (3).switch(){case:xxx}
   * */
  let list=[
    {
      id:1,
      name:"vue"
    },
    {
      id:2,
      name:'react'
    },
    {
      id:3,
      name:'angular'
    }
  ]
  let VDom=(
          <div>
            <h1>react-jsx小练习</h1>
            <ul>
              {
                /**只能写js的表达式*/
                list.map(item=>{
                  return <li key={item.id}>{item.name}</li>
                })
              }
            </ul>
          </div>
  )
  ReactDOM.render(VDom,document.querySelector(`#app`))
</script>
</body>
</html>
```

## 模块与组件、模块化与组件化的理解

### 模块

1. 理解：向外提供特定功能的js程序, 一般就是一个js文件

2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。

3. 作用：复用js, 简化js的编写, 提高js运行效率

### .组件

1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)

2. 为什么要用组件： 一个界面的功能更复杂

3. 作用：复用编码, 简化项目编码, 提高运行效率

### 模块化

当应用的js都以模块来编写的, 这个应用就是一个模块化的应用

### 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用

​

第2章：React面向组件编程

## 基本理解和使用

### 使用React开发者工具调试

### 效果

函数式组件：

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
  <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
  <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
      /**创建函数式组件*/
    function Good() {
          console.log(this)//此处的this是yundefined，因为babel编译后开启了严格模式
      return <div>我是函数定义的组件（适用于简单组件的定义）</div>;
    }

    const VDom=(
           <div>
             <h1>函数式组件</h1>
             <Good/>
           </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"))
      /**
       *    1.执行了ReactDOM.render（<yComponent/>...，之后，发生了什么？
       *    2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟D0M转为真实D0M，随后呈现在页面中。
       * */
  </script>
</body>
</html>
```

类式组件：

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
    <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
    <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    //创建类组件
    class Demo extends React.Component{
        /**
         * render是放在哪里的？ 一类的原型对象上，供实例使用。
         * render中的this是谁？一类的实例对象。
         *  */
        render() {
            console.log(this)
            return (
                <div>
                        <h1>我是class式组件</h1>
                </div>
            );
        }

    }
    //创建函数组件
    function Demo1() {
        return <h2>我是函数组件</h2>
    }
    const VDom=(
        <div>
            <Demo/>
            <Demo1/>
        </div>
    )
        ReactDOM.render(VDom,document.querySelector("#app"))
    /**
     *  执行了ReactDOM.render(<Demo/>.....之后)
     *      1.React解析组件标签，找到了Demo组件
     *      2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
     *      3.将render返回的虚拟dom转化为真实dom，随后呈现在页面中
     * */
</script>
</body>
</html>
```

### 注意

1. 组件名必须首字母大写

2. 虚拟DOM元素只能有一个根元素

3. 虚拟DOM元素必须有结束标签

### 渲染类组件标签的基本流程

1. React内部会创建组件实例对象

2. 调用render()得到虚拟DOM, 并解析为真实DOM

3. 插入到指定的页面元素内部

## 组件三大核心属性1: state

### 效果

*需求**:* *定义一个展示天气信息的组件*

*1.*   *默认展示天气炎热* *或* *凉爽*

*2.*   *点击文字切换天气*

### 理解

1. state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)

2. 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

3. ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
       <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
       <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
   </head>
   <body>
   <div id="app"></div>
   <script type="text/babel">
       class Weather extends React.Component {
           constructor() {
               super();
               this.state = {isHot: true,}
               // 把btn1的this指向指向回Weather
               this.btn1 = this.btn1.bind(this)
           }
   
           render() {
               const {isHot} = this.state
               return (
                   <div>
                       <h1>react-对state的理解</h1>
                       <p><span style={{fontSize: '18px'}}>今天很{isHot ? '热' : '冷'}</span></p>
                       <button onClick={this.btn1}>点击1</button>
                       <button onClick={this.btn1.bind(this)}>点击2</button>
                       <button onClick={() => {
                           this.btn3()
                       }}>点击3
                       </button>
                   </div>
               );
           }
   
           /**
            * bin放在了哪里 ----Weather的原型对象上，供实例使用
            * 由于bin是作为onClick的回调，所以不是通过实例调用，而是直接调用
            * 类中的方法默认开启局部的严格模式，所以bin中的this为undefined
            *
            *  解决方法1
            *      在constructor调用里面给btn1修改指向
            *          this.btn1=this.btn1.bind(this)
            *  解决方法2
            *      在点击调用那里修改指向
            *          <button onClick={this.btn1.bind(this)} >点击</button>
            *  解决方法3
            *      在点击调用那使用箭头函数
            *          <button onClick={()=>{this.btn3()}} >点击3</button>
            * */
           btn1() {
               console.log(this)
               let {isHot}=this.state
               /**
                * 注意：状态(state)不可直接更改，下面这行就是直接更改，react不认可直接更改，要借助一个内置的aoi去更改
                * */
               this.setStare({isHot:!isHot})
           }
   
           btn2() {
               console.log(this)
           }
   
           btn3() {
               console.log(this)
           }
   
       }
   
       let VDom = (
           <div>
               <Weather/>
           </div>
       )
       ReactDOM.render(VDom, document.querySelector("#app"))
   </script>
   </body>
   </html>
   ```

### 强烈注意

1. 组件中render方法中的this为组件实例对象

2. 组件自定义的方法中this为undefined，如何解决？

   a)   强制绑定this: 通过函数对象的bind()

   b)   箭头函数

3. 状态数据，不能直接修改或更新

4. 简写

5. ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <script src="../../../reactJs/react.development16.8.js"></script>
       <script src="../../../reactJs/react-dom.development%2016.8.js"></script>
       <script src="../../../reactJs/babel.min.js"></script>
   </head>
   <body>
   <div id="app"></div>
   <script type="text/babel">
       class Weather extends React.Component {
           /** state写在构造器之外*/
           state={isHot:false}
           render() {
               const {isHot,wind} = this.state
               return (
                   <div>
                       <h1>react-对state的理解</h1>
                       <p><span style={{fontSize: '18px'}}>今天很{isHot ? '热' : '冷'},{wind}</span></p>
                       <button onClick={this.btn1}>点击1</button>
                   </div>
               );
           }
   
           /** */
           btn1=()=> {
               console.log(this)//Weather{props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…},…}
               let isHot=this.state.isHot
               this.setState({isHot:!isHot})
           }
   
       }
   
       let VDom = (
           <div>
               <Weather/>
           </div>
       )
       ReactDOM.render(VDom, document.querySelector("#app"))
   </script>
   </body>
   </html>
   ```

   ### 对setState的应用

   ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <script src="https://cdn.staticfile.org/react/15.2.1/react.js"></script>
       <script src="https://cdn.staticfile.org/react/15.2.1/react-dom.js"></script>
       <script src="https://cdn.staticfile.org/babel-core/5.8.9/browser.min.js"></script>
   </head>
   <body>
   <div id="app"></div>
   <script type="text/babel">
       class Weather extends React.Component {
           /**
            * 构造器调用了几次     -一次
            * */
           constructor() {
               console.log('const')
               super();
               this.state = {isHot: true,wind:''}
               this.btn1 = this.btn1.bind(this)
           }
           /**
            * render调用了几次  ------1+n次，1是初始化的那次，n是状态更新的次数
            * */
           render() {
               // 读取状态
               const {isHot,wind} = this.state
               return (
                   <div>
                       <h1>react-对state的理解</h1>
                       <p><span style={{fontSize: '18px'}}>今天很{isHot ? '热' : '冷'},{wind}</span></p>
                       <button onClick={this.btn1}>点击1</button>
                   </div>
               );
           }
           /**
            * bin1调用了几次    ---------点几次调几次
            * */
           btn1() {
               console.log(this)
               let {isHot}=this.state
               this.setState({isHot:!isHot})
           }
           /**
            * 注意：状态(state)不可直接更改，下面这行就是直接更改，react不认可直接更改，要借助一个内置的aoi去更改
            * this.state.isHot=!isHot  //这是错误写法
            * 注意：状态必须通过setState进行修改，且修改更新是一种合并，不是替换
            * this.setState({isHot:!isHot})
            * */
       }
   
       let VDom = (
           <div>
               <Weather/>
           </div>
       )
       ReactDOM.render(VDom, document.querySelector("#app"))
   </script>
   </body>
   </html>
   ```

## 组件三大核心属性2: props

### 效果

*需求**:* *自定义用来显示一个人员信息的组件*

*1.*   *姓名必须指定，且为字符串类型；*

*2.*   *性别为字符串类型，如果性别没有指定，默认为男*

*3.*   *年龄为字符串类型，且为数字类型，默认值为**18*

### 理解

1. 每个组件对象都会有props(properties的简写)属性

2. 组件标签的所有属性都保存在props中

### 作用

1. 通过标签属性从组件外向组件内传递变化的数据

2. 注意: 组件内部不要修改props数据

### 编码操作

1. 内部读取某个属性值

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>props的基本使用.html</title>
    <script src="../../../../reactJs/react.development16.8.js"></script>
    <script src="../../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../../reactJs/babel.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    class Person extends React.Component{
        render() {
            console.log(this)
            return (
                <div>
                    <ul>
                        <li>姓名：{this.props.name}</li>
                        <li>年龄：{this.props.age}</li>
                        <li>性别：{this.props.sex}</li>
                    </ul>
                </div>
            );
        }
    }
    const VDom=(
        <div>
            <Person name="张三" age='18' sex="男"/>
            <Person name="李四" age='19' sex="男"/>
            <Person name="王五" age='20' sex="男"/>
            <Person name="赵六" age='21' sex="男"/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector('#app'))
</script>
</body>
</html>
```

### props的简写

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>props简写形式</title>
    <script src="../../../../reactJs/react.development16.8.js"></script>
    <script src="../../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.0/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    // 类组件
    class Person extends React.Component {
        constructor() {
            super();
        }
        static propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            sex: PropTypes.string
        }

        static defaultProps = {
            name: '神秘',
            age: 18,
            sex: '***'
        }
        render() {
            const {name, age, sex} = this.props
            return (
                <div>
                    <ul>姓名:{name}</ul>
                    <ul>年龄:{age + 1}</ul>
                    <ul>性别:{sex}</ul>
                </div>
            );
        }
    }

    let list = {name: '张三', age: 18, sex: '男'}
    let VDom = (
        <div>
            <h1>对props进行限制</h1>
            <p>age-传递数字类型错误写法</p>
            <Person {...list}/>
            <p>age-传递数字类型正确写法 </p>
            <Person name="李四" age={18} sex="女"/>
        </div>
    )
    ReactDOM.render(VDom, document.querySelector("#app"))
</script>
</body>
</html>
```

对props中的属性值进行类型限制和必要性限制

第一种方式（React v15.5 开始已弃用）：

​        *Person*.**propTypes** = {      **name**: **React**.**PropTypes**.**string**.isRequired,      **age**: **
React**.**PropTypes**.**number**     }

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>对props进行限制</title>
    <script src="../../../../reactJs/react.development16.8.js"></script>
    <script src="../../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.0/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    // 类组件
    class Person extends React.Component{
        render() {
            const {name,age,sex}=this.props
            return (
                <div>
                    <ul>姓名:{name}</ul>
                    <ul>年龄:{age+1}</ul>
                    <ul>性别:{sex}</ul>
                </div>
            );
        }
    }
    // 当构造函数需要类型断言的时候就要引入PropType    进行类型限制
    Person.propTypes={
        name:PropTypes.string.isRequired,   //限制name必传  且必须为字符串
        age:PropTypes.number,               //限制age必须为数字
        sex:PropTypes.string                //限制age必须类字符串
    }
    // 指定默认标签属性值
    Person.defaultProps={
        name:'神秘',                             //如果没有传入属性,则默认值是'神秘'
        age:18,                                 //如果没有传入属性,则默认值是18
        sex:'***'                               //如果没有传入属性,则默认值是***
    }
    //渲染组件到页面
    let list={name:'张三',age:18,sex:'男'}
    let VDom=(
        <div>
            <h1>对props进行限制</h1>
            <p>age-传递数字类型错误写法</p>
            <Person {...list}/>
            <p>age-传递数字类型正确写法    </p>
            <Person name="李四" age={18} sex="女"/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"))
</script>
</body>
</html>
```

第二种方式（新）：使用prop-types库进限制（需要引入prop-types库）

​        *Person*.**propTypes** = {      **name**: **PropTypes**.**string**.isRequired,      **age**: **PropTypes**.**
number**. }

3. 扩展属性: 将对象的所有属性通过props传递

​        <**Person** {...***person\***}/>

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>批量传递props.html</title>
    <script src="../../../../reactJs/react.development16.8.js"></script>
    <script src="../../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.0/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    // 类组件
    class Person extends React.Component {
        render() {
            const {name, age, sex} = this.props
            return (
                <div>
                    <ul>姓名:{name}</ul>
                    <ul>年龄:{age + 1}</ul>
                    <ul>性别:{sex}</ul>
                </div>
            );
        }
    }

    Person.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.string
    }

    Person.defaultProps = {
        name: '神秘',
        age: 18,
        sex: '***'
    }
    let list = {name: '张三', age: 18, sex: '男'}
    let VDom = (
        <div>
            <h1>对props进行限制</h1>
            <p>age-传递数字类型错误写法</p>
            <Person {...list}/>
            <p>age-传递数字类型正确写法 </p>
            <Person name="李四" age={18} sex="女"/>
        </div>
    )
    ReactDOM.render(VDom, document.querySelector("#app"))
</script>
</body>
</html>
```

4. 默认属性值：

​ Person.**defaultProps** = {      **age**: 18,      **sex**:**'****男****' **    }

5.

​        **constructor**(props){      **super**(props)      **console**.log(props)*//**打印所有属性** * }

组件类的构造函数

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>类似组件的构造器跟props.html</title>
    <script src="../../../../reactJs/react.development16.8.js"></script>
    <script src="../../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.0/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    // 类组件
    class Person extends React.Component {
        //构造器是否接受props，是否传递给super，取决于：是否希望在构造器中通过this访问props
        constructor(props) {
            super(props);
            console.log('props',props)
        }
        static propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            sex: PropTypes.string
        }

        static defaultProps = {
            name: '神秘',
            age: 18,
            sex: '***'
        }
        render() {
            const {name, age, sex} = this.props
            return (
                <div>
                    <ul>姓名:{name}</ul>
                    <ul>年龄:{age + 1}</ul>
                    <ul>性别:{sex}</ul>
                </div>
            );
        }
    }

    let list = {name: '张三', age: 18, sex: '男'}
    let VDom = (
        <div>
            <h1>对props进行限制</h1>
            <p>age-传递数字类型错误写法</p>
            <Person {...list}/>
            <p>age-传递数字类型正确写法 </p>
            <Person name="李四" age={18} sex="女"/>
        </div>
    )
    ReactDOM.render(VDom, document.querySelector("#app"))
</script>
</body>
</html>
```

## .组件三大核心属性3: refs与事件处理

### 效果

*需求**:* *自定义组件**,* *功能说明如下**:*

*1.* *点击按钮**,* *提示第一个输入框中的值*

*2.* *当第**2**个输入框失去焦点时**,* *提示这个输入框中的值*

效果如下：

### 理解

组件内的标签可以定义ref属性来标识自己

### 编码

1. 字符串形式的ref

​        **<input** **ref****=****"input1"****/>**

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../../../reactJs/react.development16.8.js"></script>
    <script src="../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.0/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    class Demo extends React.Component{
        btn1=()=>{
            let {btn1,input1,input2}=this.refs
            console.log(input1.value)
        }
        btn2=()=>{
            let {btn1,input1,input2}=this.refs
            console.log(input2.value)
        }
        render() {
            return (
                <div>
                    <input ref="input1" type="text" placeholder="点击按钮提示数据"/>
                    <button ref="btn1" onClick={this.btn1}>点击我提示右边数据</button>
                    <input onBlur={this.btn2} ref="input2" type="text" placeholder="失去焦点提示数据"/>
                </div>
            );
        }
    }
    let VDom=(
        <div>
            <Demo/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"))
</script>
</body>
</html>
```

2. 回调形式的ref

​        **<input** **ref****=****{****(****c****)****=>****{****this****.****input1** **=** **c****}****}****/>**

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../../../reactJs/react.development16.8.js"></script>
    <script src="../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.1/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    class Demo extends React.Component{
        btn1=()=>{
            let {input1}=this
            console.log(input1.value)
        }

        render() {
            return (
                <div>
                    <input ref={item=>this.input1=item}
                           type="text"
                           placeholder="点击按钮提示数据"/>

                    <button  onClick={this.btn1}>点击我提示右边数据</button>

                    <input ref={item=>this.input2=item}
                        onBlur={this.blur1=()=>{
                            let {input2}=this
                            console.log(input2.value)
                        }}
                           type="text" placeholder="失去焦点提示数据"/>
                </div>
            );
        }
    }
    let VDom=(
        <div>
            <Demo/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"))
</script>
</body>
</html>
```

3. createRef创建ref容器·

​        **myRef** **=** **React****.****createRef****()**     **<input** **ref****=****{this****.****myRef****}****/>**

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../../../reactJs/react.development16.8.js"></script>
    <script src="../../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.1/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    class Demo extends React.Component{
        /**React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点*/
        input1=React.createRef()
        input2=React.createRef()
        render() {
            return (
                <div>
                    <h1>createRef的使用</h1>
                    <input ref={this.input1} type="text"/>
                    <br/>
                    <button onClick={this.btn=(e)=>{
                        const {input1}=this
                        console.log(this)
                        alert(input1.current.value)
                    }}>点击</button>
                    <br/>
                    <input ref={this.input2} onBlur={this.btn2=(e)=>{
                        const {input2}=this
                        console.log(this.input2)
                        alert(input2.current.value)
                    }} type="text"/>

                </div>
            );
        }
    }
    let VDom=(
        <div>
            <Demo/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"))
</script>
</body>
</html>
```

### 事件处理

1. 通过onXxx属性指定事件处理函数(注意大小写)

   1) React使用的是自定义(合成)事件, 而不是使用的原生DOM事件

   2) React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)

2. 通过event.target得到发生事件的DOM元素对象

3. 回调中的ref问题

   1. ```react
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <script src="../../../reactJs/react.development16.8.js"></script>
          <script src="../../../reactJs/react-dom.development%2016.8.js"></script>
          <script src="../../../reactJs/babel.min.js"></script>
          <script src="https://cdn.staticfile.org/prop-types/15.8.1/prop-types.min.js"></script>
      </head>
      <body>
      <div id="app"></div>
      <script type="text/babel">
          class Demo extends React.Component{
              constructor(props) {
                  console.log(props.children)
                  super(props);
              }
              state={isHot:false}
              saveInput=(c)=> {
                  console.log("@",c)
                  this.input1=c
              }
              render() {
                  const {isHot}=this.state
                  return (
                      <div>
                          {<h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>}
                          {/*<input ref={item => this.input1 = item}
                                  type="text"
                          />*/}
                          <input ref={this.saveInput} type="text"/>
                          <br/>
                          <button  onClick={this.btn1=()=>{
                              console.log("渲染")
                              const {input1}=this
                              alert(input1.value)
                          }}>点击我提示右边数据</button>

                          <button onClick={this.btn2=()=>{
                              console.log("渲染")
                              const {isHot}=this.state
                              this.setState({isHot:!isHot})
                          }}>
                              点击更换天气
                          </button>
                      </div>
                  );
              }
          }
          let VDom=(<div>
                  <Demo/>
              </div>)
          ReactDOM.render(VDom,document.querySelector("#app"))
      </script>
      </body>
      </html>
      ```

## 收集表单数据

### 效果

*需求**:* *定义一个包含表单的组件*

*输入用户名密码后**,* *点击登录提示输入信息*

#### 函数柯里化

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>函数柯里化</title>
    <script src="../../reactJs/react.development16.8.js"></script>
    <script src="../../reactJs/react-dom.development16.8.js"></script>
    <script src="../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.1/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    /**
     * 高阶函数
     *      如果一个函数符合2个规范中的任何一个，那函数就是高阶函数
     *          1.若a函数，接受的参数是一个函数，那么a就是高阶函数
     *          2.若a函数，调用的返回值依然是一个函数，那么a就是高jie函数
     * 函数的柯里化
     *      通过函数调用继续返回函数的方式,实现多次接收参数最后统一处理的函数编码形式。
     * */
    class Demo extends React.Component{
        state={
            name:'',
            pass:''
        }
        // 保存表单数据到状态
        saveFrom=(e)=>{
            console.log(e)
            this.setState({name: e.target.value})
        }

        //表单提交的回调
        Submit=(DateType)=>(e)=> {
            console.log([DateType])
            console.log(e.target.type)
            this.setState({[DateType]:e.target.value})
        }
        render() {
            return (
                <div>
                    <h1>表单</h1>
                    <form action="htt" onSubmit={this.Submit}>
                        用户名: <input onChange={this.Submit('name')} type="text" name="user"/><br/>
                        密码: <input onChange={this.Submit('pass')} type="password" name="pass"/><br/>
                        <button>登录</button>
                    </form>
                </div>
            );
        }
    }
    let VDom=(
        <div>
            <Demo/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"));
</script>

</body>
</html>
```

#### 非柯里化

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>不用柯里化</title>
    <script src="../../reactJs/react.development16.8.js"></script>
    <script src="../../reactJs/react-dom.development%2016.8.js"></script>
    <script src="../../reactJs/babel.min.js"></script>
    <script src="https://cdn.staticfile.org/prop-types/15.8.1/prop-types.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
    class Demo extends React.Component {
        state = {
            name: '',
            pass: ''
        }
        Submit = (DateType, value) => {
            this.setState({[DateType]: value})
        }

        render() {
            return (
                <div>
                    <h1>表单</h1>
                    <form action="htt" onSubmit={this.Submit}>
                        用户名: <input onChange={
                        (e) => this.Submit('name', e.target.value)
                    } type="text" name="user"/><br/>
                        密码: <input onChange={
                        (e) => this.Submit('pass', e.target.value)
                    } type="password" name="pass"/><br/>
                        <button>登录</button>
                    </form>
                </div>
            );
        }
    }

    let VDom = (
        <div>
            <Demo/>
        </div>
    )
    ReactDOM.render(VDom, document.querySelector("#app"));
</script>

</body>
</html>
```

### 理解

包含表单的组件分类

1. 受控组件

2. 非受控组件

## 组件的生命周期

### 效果

*需求**:**定义组件实现以下功能：*

*1.* *让指定的文本做显示* */* *隐藏的渐变动画*

*2.* *从完全可见，到彻底消失，耗时**2S*

*3.* *点击“不活了”按钮从界面中卸载组件*

### 理解

1. 组件从创建到死亡它会经历一些特定的阶段。

2. React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。

3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

### 引出生命周期

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>引出生命周期</title>
</head>
<body>
<script src="../../reactJs/react.development16.8.js"></script>
<script src="../../reactJs/react-dom.development16.8.js"></script>
<script src="../../reactJs/babel.min.js"></script>
<script src="https://cdn.staticfile.org/prop-types/15.8.1/prop-types.min.js"></script>
<div id="app"></div>
<script type="text/babel">
    /**
     * 挂载叫 umount
     *      当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。
     * 卸载叫 unmount
     *      当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”。
     * */

    class Demo extends React.Component{
        state={opacity:1}
        //卸载组件
        DelMount= ()=> {
            console.log('卸载组件')
            ReactDOM.unmountComponentAtNode(document.querySelector("#app"))
        }
        // 组件挂载完毕后
        componentDidMount() {
          this.timer = setInterval(()=>{
                let {opacity}=this.state
                opacity-=0.1;
                if ( opacity<=0 ) opacity=1
                this.setState({opacity})
            },200)
        }
        // 组将将要卸载
        componentWillUnmount() {
            console.log('即将卸载')
            //停止定时器
            clearInterval(this.timer)
        }

        // render调用的时机有两个，初始化渲染，状态更新后
        render() {
            console.log('挂载组件')
            return (
                <div>
                    <h1>案例</h1>
                    <h1 style={{opacity:this.state.opacity}}>React学不会怎么办</h1>
                    <button onClick={this.DelMount}>卸载组件</button>
                </div>
            );
        }


    }
    const VDom=(
        <div>
            <Demo/>
        </div>
    )
    ReactDOM.render(VDom,document.querySelector("#app"));
</script>
</body>
</html>
```

### 生命周期流程图(旧)

生命周期的三个阶段（旧）

![](I:\Program Files (x86)\web开发\笔记\20210615230015219.png)

​    **1.** **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()

2. componentWillMount()

3. render()

4. componentDidMount()

​    **2.** **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1. shouldComponentUpdate()

2. componentWillUpdate()

3. render()

4. componentDidUpdate()

​    **3.** **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()

### 生命周期流程图(新)

生命周期的三个阶段（新）

**1.** **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()

**2.**   **getDerivedStateFromProps**

3. render()

4. componentDidMount()

​    **2.** **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

**1.**   **getDerivedStateFromProps**

2. shouldComponentUpdate()

3. render()

**4.**   **getSnapshotBeforeUpdate**

5. componentDidUpdate()

​    **3.** **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()

### 重要的勾子

1. render：初始化渲染或更新渲染调用

2. componentDidMount：开启监听, 发送ajax请求

3. componentWillUnmount：做一些收尾工作, 如: 清理定时器

### 即将废弃的勾子

1. componentWillMount

2. componentWillReceiveProps

3. componentWillUpdate

现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

1. 组件将要挂载时触发的函数：componentWillMount
2. 组件挂载完成时触发的函数：componentDidMount
3. 是否要更新数据时触发的函数：shouldComponentUpdate
4. 将要更新数据时触发的函数：componentWillUpdate
5. 数据更新完成时触发的函数：componentDidUpdate
6. 组件将要销毁时触发的函数：componentWillUnmount
7. 父组件中改变了props传值时触发的函数：componentWillReceiveProps

