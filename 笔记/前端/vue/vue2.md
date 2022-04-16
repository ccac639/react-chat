# 认识vue

[TOC]

vue(读音/ju/,类似于view),不要读错。

vue是一个渐进式的框架,什么是渐进式的呢?

渐进式意味着你可以将ue作为你应用的部分嵌入其中,带来更丰富的交互体验。

或者如果你希望将更多的业务逻辑使用vue实现,那么vue的核心库以及其生态系统口比如core+ Vue-router+vuex,也可以满足你各种各样的需求

vue有很多特点和Web开发中常见的高级功能

- 解耦视图和数据
- 可复用的组件
- 前端路由技术
- 状态管理
- 虚拟DOM

## 安装vue

```html

<script src="vue.js"></script>
```

## 使用vue

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="vue">{{dataList}}</div>

<script>
    let vue = new Vue({
        el: "#vue",// 父元素
        data: {//数据
            dataList: '123'
        }
    })
</script>
</body>
</html>
```

## vue中的mvvm

### 什么是MVVM呢?

```中文
MVVM(Model-view-viewmodel)是一种软件架构模式。
MVVM有助于将图形用户界面的开发与业务逻辑或后端逻辑或后端逻辑(数据模型)的开发分离开来，这是通过置标语言或GUI代码实现的。MVVM的视图模型是一个值转换器，这意味着视图模型负责从模型中暴露（转换）数据的对象，以便轻松管理和呈现对象。在这方面，视图模型比视图做得更多，并且处理大多数视图的显式逻辑。视图模型可以实现中介者模式，组织对视图所支持的用例集的后端逻辑访问。
MVVM是马丁-富勒的PM（Presentation Model）设计模式的变体。MVVM以相同的方式抽象出视图的状态和行为，但PM以不依赖于特定用户界面平台的方式抽象出视图（创建了视图模型）。
MVVM和PM都来自于MVC模式。
MVVM由微软构架师Ken Cooper和Ted Peters开发，通过利用WPF（微软.NET图形系统）和Silverlight(WPF的互联网应用派生品)的特性来简化用户界面的事件驱动设计。微软的WPF和Silverlight构架师之一John Gossman于2005年在他的博客上发表了MVVM。
MVVM也被成为model-view-binder，特别是在不涉及.NET平台的实现中。ZK(Java写的一个Web应用框架)和KnockoutJS(一个JavaScript库)使用model-view-binder。
```

通常我们学习一个概念,最好的方式是去看维基百科对,干万别看成了百度百科)

![image-20220124232718737](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220124232718737.png)

#### view层:

1. 视图层
2. 在我们前端开发中,通常就是DOM层
3. 主要的作用是给用户展示各种信息。

#### Mode层:

1. 数据层
2. 数据可能是我们固定的死数据,更多的是来自我们服务器,从网络上请求下来的数据。
3. 在我们计数器的案例中,就是后面抽取出来的obj,当然,里面的数据可能没有这么简单

#### Vuemode层

1. 视图模型层
2. 视图模型层是vew和 Model沟通的桥梁。
3. 一方面它实现了 Data Binding,也就是数据绑定,将Mode的改变实时的反应到vew中
4. 另一方面它实现了 DOM Listener,也就是DOM监听,当DOM发生一些事件(点击、滚动、 touch等)时,可以监听到,并在需要的情况下改变对应的Data。

### 计数器的MVVM

我们的计数器中就有严格的MVVM思想

1. view依然是我们的DoM
2. Mode就是我们我们抽离出来的ob
3. Viewmodel就是我们创建的ue对象实例口

它们之间如何工作呢?

1. 首先 View Mode通过 Data Bindingilobjt中的数据实时的在DOM中显示
2. 其次 Viewmodel通过 DOM Listener来监听DOM事件,并且通过 methods中的操作,来改变obj中的数据

有了vue帮助我们完成 emodel层的任务,在后续的开发,我们就可以专注于数据的处理,以及DOM的编写工作了。

## vue的生命周期（重要）

### 生命周期：事物从诞生到消亡的整个过程

![lifecycle](I:\Program Files (x86)\浏览器下载文件\lifecycle.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="../vue/vue.js"></script>
</head>
<body>
<div id="vue"></div>
</body>
<script>
    const vue = new Vue({

        el: "#vue",
        data: {},
        methods: {},
        beforeCreate: {},
        created() {

        },
        mounted() {

        },
        watch: {},
    })
</script>
</html>
```

## #vue 循环

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="vue">
    <ul>
        <li v-for="item of dataList">{{item}}</li>
    </ul>
    <button @click="click">
        +1
    </button>
</div>

<script>
    let vue = new Vue({
        el: "#vue",
        data: {
            dataList: 1
        },
        methods: {
            click() {
                this.dataList++;
            }
        }
    })
</script>
</body>
</html>
```

## vue案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="vue">
    <ul>
        <li v-for="item of dataList">{{item}}</li>
    </ul>
    <button @click="click_max()">
        +1
    </button>
    <button @click="click_min()">
        -1
    </button>
</div>

<script>
    let vue = new Vue({
        el: "#vue",
        data: {
            dataList: 1
        },
        methods: {
            click_max() {
                this.dataList++;
            },
            click_min() {
                this.dataList--;
            }
        }
    })

</script>
</body>
</html>
```

# vue 插值操作

## 如何将data中的文本数据,

插入到HML中呢?口我们已经学习过了,可以通过 Mustache语法(他就是双大括号)。

Mustache:胡子/须我们可以像下面这样来使用,穿且数据是响应式的

### 我们可以像下面这样来使用,异且数据是响应式的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
<body>
<div id="vue">
    <h1>{{message}}</h1>
    <h2>{{js}}</h2>
    <h3>{{a/b}}</h3>
</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            message: "app",
            js: "vue",
            a: 1,
            b: 2,
        },
        methods() {
        },
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
```

![image-20220125135020483](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125135020483.png)

## v-noce

渲染第一次数据,不会因为后面更改而改变

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <li v-once>{{mess}}</li>
    <li>{{mess}}</li>
</div>
<script src="../vue/vue.js"></script>
<script>

    const app = new Vue({
        el: "#vue",
        data: {
            mess: "你好"
        },
        methods() {
        },
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
```

![image-20220125135712651](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125135712651.png)

## v-hmtl

某些情况下,我们从服务器请求到的数据本身就是一个HTML代码

- 如果我们直接通过{来输出,会将HTML代码也一起输出。
- 但是我们可能希望的是按照HTML格式进行解析,并且显示对应的内容。
- 如果我们希望解析出HTML展示

可以使用vhtm指令

- 该指令后面往往会跟上一个 string类型
- 会将 string的htm解析出来并且进行渲染

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <h2>{{url}}</h2>
    <h2 v-html="url"></h2>
</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            url: "<a href='http://www.baidu.com'>百度</a>"
        },
        methods() {
        },
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
</body>
</html>
```

![image-20220125140437850](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125140437850.png)

## v-text

用起来不灵活

![image-20220125140618522](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125140618522.png)

![image-20220125140635972](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125140635972.png)

## v-pre

把{{里面的值原封不动的渲染出来}}

![image-20220125140821844](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125140821844.png)

## v-bing

前面我们学习的指令主要作用是将值插入到我们模板的内容当中。

但是,除了内容需要动态来决定外,某些属性我们也希望动态来绑定。

比如动态绑定a元素的href属性口比如动态绑定mg元素的src属性■这个时候,我们可以使用v-bind指令

作用:动态绑定属性缩写::

预期:any( with argument)| Object (without argument)

参数: attrorprop( optional)

写法

v-bing:

```html
<h1><img v-bind:src="image[0]" alt=""><a v-bind:href="image[0]">图片1</a></h1>
```

缩写 :src  :herf等

```html
<h2><img :src="image[1]" alt=""><a :href="image[1]">图片2</a></h2>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <h1><img v-bind:src="image[0]" alt=""><a v-bind:href="image[0]">图片1</a></h1>
    <h2><img :src="image[1]" alt=""><a :href="image[1]">图片2</a></h2>
</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            image: [
                "https://tse1-mm.cn.bing.net/th/id/OET.ee6e9eaa786d4ee7be547431519de07f?w=272&h=135&c=7&rs=1&o=5&dpr=1.38&pid=1.9",
                "https://tse1-mm.cn.bing.net/th/id/OET.66b1cc311ada4391918cab733436a681?w=272&h=135&c=7&rs=1&o=5&dpr=1.38&pid=1.9"

            ]
        },
        methods() {
        },
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
</body>
</html>
```

![image-20220125142437557](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125142437557.png)

v-bind动态绑定class(对象写法)

```html
    <h1 v-bind:class="{h1:bool,h2:bllo}">123</h1>
<script>

    let app = new Vue({
        el: "#vue",
        data: {
            bool: true,
            bllo: true,
        },
    })
```

![image-20220125143351987](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125143351987.png)

![image-20220125143532457](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125143532457.png)

![image-20220125143621459](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125143621459.png)

点击切换类名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .h1 {
            font-size: 30px;
        }

        .h2 {
            font-size: 20px;
        }
    </style>
</head>
<body>
<div id="vue">
    <!--    <h1 v-bind:class="{类名1:布尔值,类名1:布尔值}"><a v-bind:href="image[0]">图片1</a></h1>-->
    <h1 v-bind:class="{h1:bool,h2:bllo}">123</h1>

    <button @click="click">12</button>
</div>
<script src="../vue/vue.js"></script>
<script>

    let app = new Vue({
        el: "#vue",
        data: {

            bool: true,
            bllo: false,
        },
        methods: {
            click() {
                this.bool = !this.bool;
                this.bllo = !this.bllo;
            }
        },
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
</body>
</html>
```

![image-20220125144025384](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125144025384.png)

v-bind动态绑定class(数组语法)

![image-20220125144713396](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125144713396.png)

![image-20220125145941538](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125145941538.png)

## 小案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .car {
            color: red;
        }
    </style>
</head>
<body>
<div id="vue">
    <ul>
        <li v-for="(item,value) in mover" @click="click(value)" :class="bool===value?'car':''">{{item}}</li>
    </ul>
</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            mover: ["1", "2", "3", "4"],
            bool: 0
        },
        methods: {
            click(value) {
                this.bool = value
            }
        },
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
</body>
</html>
```

![image-20220125150024170](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125150024170.png)

## v-on

事件监听

完整写法

```vue
v-on:click，v-on:keyup，v-on:keyup.enter
```

简化写法

```vue
@click @keyup @keyup.enter
```

v-on参数

![image-20220125190909476](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125190909476.png)

v-on修饰符

![image-20220125191208181](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125191208181.png)

## v-if/v-else-if/v-else

![image-20220125231523639](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125231523639.png)

v-if登录注册切换小案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <sapn v-if="index">
        <lable>登录：</lable>
        <input type="text" placeholder="登录">
    </sapn>
    <span v-else>
    <lable>注册：</lable>
    <input type="text" placeholder="注册">
  </span>
    <button @click="a">切换</button>
</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            index: true
        },
        methods: {
            a() {
                this.index = !this.index
            }
        },
        computed: {},
    })
</script>
</body>
</html>
```

## v-show

![image-20220125231207594](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125231207594.png)

## v-for

v-for遍历数组跟对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <ul>
        <li v-for="(item,value) in list" :key="value">{{item}}</li>
        <div>-------------------------------------------------------</div>
        <li v-for="(data,value) of classT" :key="data.id">{{data.name}}</li>
    </ul>
</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            list: ["最右", "抖音", "快手", "bilibili"],
            classT: [
                {id: 1, name: "林"},
                {id: 2, name: "头"},
                {id: 3, name: "十五"},
                {id: 4, name: "哈喽"},
            ]
        },
        methods: {},
        computed: {},
    })
</script>
</body>
</html>
```

![image-20220125232859744](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125232859744.png)

v-for中的:key=""

![image-20220125233139341](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125233139341.png)

key的作用主要是为了高效的更新虚拟dom

### 数组中哪些方法是响应式的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <ul>
        <li v-for="(item,value) in list" :key="value">{{item}}</li>
    </ul>
    <button @click="click">1</button>
</div>
<script src="../vue/vue.js"></script>
<script>

    let app = new Vue({
        el: "#vue",
        data: {
            list: ["最右", "抖音", "快手", "bilibili"],
        },
        methods: {
            click() {
                //1 push()方法可以响应式       //在数组最后一个索引添加元素
                // this.list.push("aaa")


                //2 pop()方法可以响应式        //删除数组最后一个元素
                // this.list.pop()


                //3 shift()方法可以响应式      //删除数组首个元素
                // this.list.shift()


                //4 unshift()方法可以响应式    //在数组最前面添加元素或添加多个元素
                // this.list.unshift("aaaa")


                //5 splice()方法可以响应式     //删除元素/插入元素/替换元素
                //splice(1)：从第一个元素开始删除所有元素
                //splice(0)：从第零个元素开始删除所有元素
                //splice(1,2)：从第一个元素开始删除2个元素
                //splice(1,1)：从第一个元素开始删除1个元素
                //splice(1,3,'m','c','d','a')从第一个元素开始替换后面3个元素,没有元素则直接添加
                //splice(1,2,'m','c','d','a')从第一个元素开始替换后面2个元素,没有元素则直接添加
                // this.list.splice(1,3,'m','c','d','a')


                //6 sort()方法可以响应式       //可以排序元素
                // this.list.sort()


                //7 reverse()方法可以响应式    //可以反转元素
                this.list.reverse()


                //8 vue的方法
                // set(要修改的对象,索引值,修改后的值)
                Vue.set(this.list, 0, "ccc")
            }
        },
        beforeCreate() {
        },
        computed: {},
        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
```

```js
//可以响应式的方法


//1 push()方法可以响应式       //在数组最后一个索引添加元素
// this.list.push("aaa")


//2 pop()方法可以响应式        //删除数组最后一个元素
// this.list.pop()


//3 shift()方法可以响应式      //删除数组首个元素
// this.list.shift()


//4 unshift()方法可以响应式    //在数组最前面添加元素或添加多个元素
// this.list.unshift("aaaa")


//5 splice()方法可以响应式     //删除元素/插入元素/替换元素
//splice(1)：从第一个元素开始删除所有元素
//splice(0)：从第零个元素开始删除所有元素
//splice(1,2)：从第一个元素开始删除2个元素
//splice(1,1)：从第一个元素开始删除1个元素
//splice(1,3,'m','c','d','a')从第一个元素开始替换后面3个元素,没有元素则直接添加
//splice(1,2,'m','c','d','a')从第一个元素开始替换后面2个元素,没有元素则直接添加
// this.list.splice(1,3,'m','c','d','a')


//6 sort()方法可以响应式       //可以排序元素
// this.list.sort()


//7 reverse()方法可以响应式    //可以反转元素
this.list.reverse()


//8 vue的方法
// set(要修改的对象,索引值,修改后的值)
Vue.set(this.list, 0, "ccc")
```

## v-model

![image-20220126133710450](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220126133710450.png)

vue实现双向绑定原理

方式1

```html

<div id="vue">
    <!--    <input type="text" v-model="span">-->
    <input type="text" :value="span" @input="inp">
    <span>{{span}}</span>
</div>
<script src="../vue/vue.js"></script>
<script>

    let app = new Vue({
        el: "#vue",
        data: {
            span: ""
        },
        methods: {
            inp(event) {
                console.log(event)
                console.log(event.target)
                console.log(event.target.value)
                this.span = event.target.value
            }
        },
        computed: {},
        beforeCreate() {

        },
        created() {

        },
        mounted() {

        },
    })
    // v-model原理

</script>
```

方式2

```html
<input type="text" :value="span" @input="span=$event.target.value">
```

![image-20220127165018508](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220127165018508.png)

![image-20220125185004660](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125185004660.png)

### v-model结合(radio)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
  <lable for="nan">
    <input type="radio" id="nan" name="get" value="男" v-model="get">男
  </lable>
  <lable for="nv">
    <input type="radio" id="nv" name="get" value="女" v-model="get">女
  </lable>
  <input type="text" value="get">{{get}}
</div>
<script src="../../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
          get:""
        },
        methods: {},
        computed: {},
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
    })
</script>
</body>
</html>
```

### v-model(结合radir)/v-model(结合checkbox)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    单选框
    <label for="nan">
        <input type="checkbox" id="nan" v-model="nan">同意协议
    </label>
    <sapn>你选择的是:{{nan}}}</sapn>
    <button :disabled="!nan">xiayibu</button>

    多选框
    <input type="checkbox" value="蓝球" v-model="nv">蓝球
    <input type="checkbox" value="排球" v-model="nv">排球
    <input type="checkbox" value="足球" v-model="nv">足球
    <input type="checkbox" value="羽毛球" v-model="nv">羽毛球
    <p>你选择的是:{{nv}}</p>
</div>
<script src="../../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            nan: false,
            nv: []
        },
        methods: {},
        computed: {},
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
    })
</script>
</body>
</html>
```

### vue-v-model结合select

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    单选
    <select name="abc" id="" v-model="list">
        <option value="苹果">苹果</option>
        <option value="火龙果">火龙果</option>
        <option value="樱桃">樱桃</option>
        <option value="香蕉">香蕉</option>
        <option value="梨">梨</option>
        <option value="葡萄">葡萄</option>
    </select>
    <p>你选择的是{{list}}</p>
    <br>
    多选
    <select name="a" v-model="arr" multiple>
        <option value="苹果">苹果</option>
        <option value="火龙果">火龙果</option>
        <option value="樱桃">樱桃</option>
        <option value="香蕉">香蕉</option>
        <option value="梨">梨</option>
        <option value="葡萄">葡萄</option>
    </select>
    <p>你选择的是{{arr}}</p>
</div>
<script src="../../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            list: '香蕉',
            arrS: "苹果",
            arr: []
        },
        methods: {},
        computed: {},
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
    })
</script>
</body>
</html>
```

## v-model的修饰符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <p>第一个修饰符</p>
    <p>v-model.lazy 失去焦点或按回车键的时候响应数据</p>
    <input type="text" v-model.lazy="a">
    <span>{{a}}</span>
    <br>
    <p>第二个修饰符</p>
    <p>v-model.number 如果不加.number 那v-model默认输入的值都是字符型</p>
    <input type="number" v-model.number="b">
    <span>{{typeof b}}</span>
    <br>
    <p>第三个修饰符</p>
    <p>v-model.trim 去掉首尾空格</p>
    <input type="text" v-model.trim="c">
    <span>{{c}}</span>
</div>
<script src="../../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            a: '',
            b: 0,
            c: ''
        },
        methods: {},
        computed: {},
        beforeCreate() {
        },
        created() {

        },
        mounted() {

        },
    })
</script>
</body>
</html>
```

# 计算属性：computed

我们知道,在模板中可以直接通过插值语法显示一些data中的数据。

但是在某些情况,我们可能需要对数据进行一些转化后再显示,或者需要将多个数据结合起来进行显示

1. 比如我们有 firstname和 astname两个变量,我们需要显示完整的名称。
2. 但是如果多个地方都需要显示完整的名称,我们就需要写多个{ firstname}{ lastname}

我们可以将上面的代码换成计算属性

OK,我们发现计算属性是写在实例的 computed选项中的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <h1>html相加 {a+b}}</h1>
    <h1>字符串相加 {{a}}{{b}}</h1>
    <h1>methods {{getFullName()}}</h1>
    <h1>computed {{FullName}}</h1>

</div>
<script src="../vue/vue.js"></script>
<script>

    new Vue({
        el: "#vue",
        data: {
            a: 1,
            b: 2,
            c: ''
        },
        methods: {
            getFullName() {
                return this.c = this.a + this.b;
            }
        },
        computed: {
            FullName() {
                return this.c = this.a + this.b;
            }
        },
        beforeCreate() {

        },
        created() {

        },
        mounted() {

        },
        watch() {

        },
    })
</script>
</body>
</html>
</body>
</html>
```

![image-20220125152714123](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125152714123.png)

## 计算属性的setter和getter

每个计算属性都包含一个getter和一个setter

1. 在上面的例子中,我们只是使用 getter来读取
2. 在某些情况下,你也可以提供一个 setter方法(不常用)。
3. 在需要写 setter的时候,代码如下

```html

<div id="vue">
    <h1>{{fullName}}</h1>
</div>
<script>
    new Vue({
        el: "#vue",
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: null
        },
        methods: {},
        beforeCreate() {
        },
        computed: {
            //计算属性一般是没有set写法的
            fullName: {
                get: function () {
                    return this.d += this.a + this.b + this.c;
                },
                // set: function () {
                //    console.log("-------")
                // }
            }
        },
</script>
```

简写形式

fullName其实是个对象

```js
computed: {
    //计算属性一般是没有set写法的
    fullName: {
        get: function () {
            return this.d += this.a + this.b + this.c;
        }
    }
    // fullName(){
    //     return this.d+=this.a+this.b+this.c;
    // },
}
,
```

set一般不常用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <h1>{{fullName}}</h1>
    <h1></h1>
</div>
<script src="../vue/vue.js"></script>
<script>

    let app = new Vue({
        el: "#vue",
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: null,
        },
        methods: {},
        beforeCreate() {
        },
        computed: {
            //计算属性一般是没有set写法的
            fullName: {
                get: function () {
                    return this.d = `${this.c}'+'${this.b}`;
                },
                set: function (n_e_w) {
                    let name = n_e_w.split('');
                    this.c = name[0];
                    this.b = name[1];
                }
            }
            // fullName(){
            //     return this.d+=this.a+this.b+this.c;
            // },
        },

        created() {

        },
        mounted() {

        },
        watch() {
        },
    })
</script>
</body>
</html>
</body>
</html>
```

## 计算属性computed跟methods区别

computed在计算出结果后会进行缓存，多次调用也是用的第一次计算出的结果

而methods在计算后多次调用的时候会进行多次的重复计算

```vue
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div id="vue">
  三种方案
  <h1>直接拼接：{{Name1}}{{Name2}}</h1>
  <h2>methods：{{getName()}}</h2>
  <h2>methods：{{getName()}}</h2>
  <h2>methods：{{getName()}}</h2>
  <h2>methods：{{getName()}}</h2>
  <h3>computed：{{Name}}</h3>
  <h3>computed：{{Name}}</h3>
  <h3>computed：{{Name}}</h3>
  <h3>computed：{{Name}}</h3>
</div>
<script src="../vue/vue.js"></script>
<script>

  new Vue({
    el: "#vue",
    data: {
      Name1: 'vs',
      Name2: 'code'
    },
    methods: {
      getName() {
        console.log("methods")
        return this.Name1 + '' + this.Name2;

      }
    },
    computed: {
      Name() {

        console.log("computed")
        return this.Name1 + '' + this.Name2;

      }
    },
    beforeCreate() {
    },
    created() {

    },
    mounted() {

    },
    watch() {
    },
  })
</script>
</body>
</html>
```

# 购物车案例

## html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="./index.css">
    <script src="../vue/vue.js"></script>

</head>
<body>
<div id="app">
    <div v-if="list.length">
        <table>
            <thead>
            <tr>
                <th></th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,value) of list" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.data}}</td>
                <td>{{item.price | showWic}}</td>
                <td>
                    <button @click="clickJ(value)" :disabled="item.count <= 1">-</button>
                    {{item.count}}
                    <button @click="clickZ(value)">+</button>
                </td>
                <td>
                    <button @click="shank(value)">移除</button>
                </td>
            </tr>
            </tbody>

        </table>
        <span>总价格￥{{sun}}</span>
    </div>
    <div v-else>
        购物车为空
    </div>
</div>
</body>
<script src="index.js"></script>
</html>
```

## js

```js
const app = new Vue({
    el: "#app",
    data: {
        list: [
            {
                id: 1,
                name: '算法导论',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '编程艺术',
                data: '2006-2',
                price: 81.00,
                count: 1
            },
            {
                id: 3,
                name: '深入浅出node.js',
                data: '2006-1',
                price: 84.00,
                count: 1
            },
            {
                id: 4,
                name: '计算机原理',
                data: '2006-4',
                price: 121.00,
                count: 1
            },
            {
                id: 5,
                name: '你不知道的JavaScript',
                data: '2006-9',
                price: 85.10,
                count: 1
            },
        ],
    },
    methods: {
        clickJ(value) {
            this.list[value].count--
        },
        clickZ(value) {
            this.list[value].count++
        },
        shank(value) {
            this.list.splice(value, 1)
        }
    },
    computed: {
        sun() {
            let index = 0
            for (let i = 0; i < this.list.length; i++) {
                index += this.list[i].price * this.list[i].count;
            }
            return index
        }
    },
    filters: {
        showWic(price) {
            return `￥${price.toFixed(2)}`
        }
    }
})
```

# 组件化

## 什么是组件化

### 人面对复杂问题的处理方式：

口任何一个人处理信息的逻辑能力都是有限的口所以，当面对一个非常复杂的问题时，我们不太可能一次性搞定一大堆的内容。 口但是，我们人有一种天生的能力，就是将问题进行拆解。
口如果将一个复杂的问题，拆分成很多个可以处理的小问题，再将其放在整体当中，你会发现大的问题也会迎刃而解。

### 组件化也是类似的思想：

▣如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展。 ▣但如果，我们讲一个页面拆分成一个个小的功能块每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了。

![image-20220128022646282](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220128022646282.png)

### 组件化思想

组件化是Vue.js中的重要思想

组件化思想的应用

- 有了组件化的思想，我们在之后的开发中就要充分的利用它。 尽可能的将页面拆分成一个个小的、可复用的组件。 这样让我们的代码更加方便组织和管理，并且扩展性也更强。

注册组件基本步骤

组件的使用分成三个步骤：

- 创建组件构造器
- 注册组件
- 使用组件。

#### 1. 创建组件

```html
// 1.创建组件构造器
const vue_1 = Vue.extend({
template:
`
<div><h1>你好</h1></div>
<div><h1>你好</h1></div>
<div><h1>你好</h1></div>
<div><h1>你好</h1></div>
`
})
```

##### 注册组件

```js
    Vue.component('SIP', vue_1);// 全局组件
Vue.component('sip-ile', vue_1);

```

##### 使用组件

```html

<div id="vue">
    <h1>内容</h1>
    <s-i-p></s-i-p>
    <s-i-p></s-i-p>
    <sip-ile></sip-ile>
</div>
```

注册局部组件

```js
 new Vue({
    el: "#vue",
    data: {},
    methods: {},
    computed: {},
    // 注册局部组件
    components: {
        cpn: vue_1
    }
})
```

##### 使用局部组件

```html

<div id="vue">
    <h1>内容</h1>
    <cpn></cpn>
</div>
```

###### 注册组件步骤解析

这里的步骤都代表什么含义呢

Vue.extend({})

- Vue.extend({})创建的是一个组件构造器
- 通常在创建组件构造器时，传入template代表我们自定义组件的模板。
- 该模板就是在使用到组件的地方，要显示的HTML代码。
- 事实上，这种写法在vue2的文档中几乎已经看不到了，它会直接使用下面我们会讲到的语法糖，但是在很多资料还是会提到这种方式，而且这种方式是学习后面方式的基础。

Vue.component（）

- 调用Vue.componentO是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称
- 所以需要传递两个参数：
    - 1、注册组件的标签名
    - 2、组件构造器

组件必须挂载在某个vue实例下，否则它不会生效。

- 我们来看下面我使用了三次<my-cpn></my-cpn>
  而第三次其实并没有生效：

![image-20220128124704636](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220128124704636.png)

## 父组件和子组件的区分

###### 创建两个组件

```js
 // 创建第一个组件
const mv1 = Vue.extend({
    template: `
        <div>
            <h1>标题</h1>
            <p>组件1</p>
        <vue_zujian></vue_zujian>
        </div>
      `,

})
//创建第二个组件
const mv2 = Vue.extend({
    template: `
          <div>
          <h1>标题</h1>
          <p>组件2</p>
          <vue_jian></vue_jian>
          </div>
        `,
})
```

###### 注册组件

```js
const app = new Vue({
    el: "#vue",
    data: {},
    methods: {},
    computed: {},
    components: {
        vue_zujian: mv1,
        kai: mv2
    }
})
```

###### 使用组件

```html

<div id="vue">
    <vue_zujian></vue_zujian>
    <kai></kai>
</div>
```

###### 父组件

```js
 const mv1 = Vue.extend({
    template: `
        <div>
            <h1>标题</h1>
            <p>组件1</p>
        <vue_zujian></vue_zujian>
        </div>
      `,
})
```

###### 子组件

```js

//创建子组件
const mv2 = Vue.extend({
    template: `
          <div>
          <h1>标题</h1>
          <p>组件2</p>
          <vue_jian></vue_jian>
          </div>
        `,
})
```

###### 注册子组件

```js
 const mv1 = Vue.extend({
    template: `
        <div>
            <h1>标题</h1>
            <p>组件1</p>
        </div>
      `,
    components: {
        vue_jian: mv2
    }
})
```

###### 使用子件

```js
 const mv1 = Vue.extend({
    template: `
        <div>
            <h1>标题</h1>
            <p>组件1</p>
            <vue_jian></vue_jian> 			//子组件只能在父组件中使用
        </div>
      `,
    components: {
        vue_jian: mv2
    }
})
```

###### 注册父组件

```js
   const app = new Vue({
        el: "#vue",
        data: {},
        methods: {},
        computed: {},
        components: {
            vue_zujian: mv1
        }
    })
    < /script>
```

###### 使用父组件

```html

<div id="vue">
    <vue_zujian></vue_zujian>
</div>
```

###### 全局使用子组件,只需要在new Vue里面注册全局组件就行

```js
 const app = new Vue({
    el: "#vue",
    data: {},
    methods: {},
    computed: {},
    components: {
        vue_zujian: mv1,
        kai: mv2
    }
})
```

我们看到了组件树： 组件和组件之间存在层级关系口而其中一种非常重要的关系就是父子组件的关系 我们来看通过代码如何组成的这种层级关系：

父子组件错误用法：

1. 以子标签的形式在Vue实例中使用口因为当子组件注册到父组件的components时，Vue会编译好父组件的模块
2. 该模板的内容已经决定了父组侍将要渲染的HTML（相当于父组件中已经有了子组件中的内容了）
3. <child-cpn></child-cpn>是只能在父组件中被识别的。
4. 类似这种用法，<child-cpn></child-cpn>是会被浏览器忽略的。

## vue注册组件的语法糖写法

### 1.全局注册的语法糖

1.1创建组件构造器

```
    Vue.component('cpn1',{
        template: `
            <div>
            <h1>标题</h1>
            <p>内容</p>
			</div>
        `
    })
```

2.使用组件

```
<div id="vue">
    <cpn1></cpn1>
</div>
```

子组件语法糖

```js
new Vue({
    el: "#vue",
    data: {},
    methods: {},
    computed: {},
    components: {
        'cpn2': {
            template: `
                <div>
            <h1>标题2</h1>
            <p>内容2</p>
</div>
                `
        }
    }
})
```

在上面注册组件的方式，可能会有些繁琐。

- Vue为了简化这个过程，提供了注册的语法糖。
- 主要是省去了调用Vue.extend（）的步骤，而是可以直接使用一个对象来代替。

## 组件模板抽离的写法

### 第一种

```
利用<script type="text/x-template"></script>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <ide></ide>
</div>
<script type="text/x-template" id="ide">
    <div>
        <h2>我是标题</h2>
        <p>我是内容</p>
    </div>
</script>
<script src="../vue/vue.js"></script>
<script>
    Vue.component("ide", {
        template: "#ide"
    })
    new Vue({
        el: "#vue",
        data: {},
        methods: {},
        computed: {},
    })
</script>
</body>
</html>
```

### 第二种

使用template标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <template id="idea">
        <div>
            <h2>标题</h2>
            <p>内容</p>
        </div>
    </template>
</div>

<script src="../vue/vue.js"></script>
<script>

    Vue.component('idea', {
        template: "#idea"
    })
    new Vue({
        el: "#vue",
        data: {},
        methods: {},
        computed: {},
    })
</script>
</body>
</html>
```

## 父子组件之间的通信

在上一个小节中，我们提到了子组件是不能引用父组件或者u实例的数据的。 但是，在开发中，往往一些数据确实需要从上层传递到下层：

- 比如在一个页面中，我们从服务器请求到了很多的数据。
- 其中一部分数据，并非是我们整个页面的大组件来展示的，而是需要下面的子组件进行展示。
- 这个时候，并不会让子组件再次发送一个网络请求，而是直接让大组件（父组件）将数据传递给小组件（子组件）

如何进行父子组件间的通信呢？Vue官方提到

- 通过propsr向子组件传递数据口
- 通过事件向父组件发送消息

![image-20220129025607871](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220129025607871.png)

### propsr基本用法

在组件中，使用选项props来声明需要从父级接收到的数据。 props的值有两种方式：

1. 方式一：字符串数组，数组中的字符串就是传递时的名称。
2. 方式二：对象，对象可以设置传递时的类型，也可以设置默认值等。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <cpn :cinfo="info"></cpn>
</div>
<template id="cpn">
    <h2>{{cinfo}}</h2>
</template>
<script src='../vue/vue.js'></script>
<script>
    const cpn = {
        template: '#cpn',
        props: {
            cinfo: {
                type: Object,
                default() {
                    return {}
                }

            }
        }
    }
    const app = new Vue({
        el: "#app",
        data: {
            message: '你好',
            info: {
                name: "名字",
                age: 18,
            }
        },
        components: {
            cpn
        }
    })
</script>
</body>
</html>
```

![image-20220129130609701](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220129130609701.png)

#### 子传父

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <app @item="appClick"></app>
</div>

<script src="../vue/vue.js"></script>
<script>

    // 1.子组件
    Vue.component('app', {
        template: `
          <div>
          <button v-for="item in cat"
                  @click="itemC(item)">{{ item.name }}
          </button>
          </div>`
        ,
        data() {
            return {
                cat: [
                    {id: "1", name: "热门推荐"},
                    {id: "2", name: "手机数码"},
                    {id: "3", name: "零食专区"},
                    {id: "4", name: "家用家电"}
                ]
            }
        },
        methods: {
            itemC(item) {
              // 发射事件
              this.$emit('item',item);
            }
        }

    })
    // 2.父组件
    new Vue({
        el: "#vue",
        data() {
            return {}
        },
        methods: {
          appClick(item){
            console.log(item)
          }
        },
        computed: {},

    })
</script>
</body>
</html>
```

![image-20220129135554844](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220129135554844.png)

## 插槽

如何去封装这类的组件呢？ 它们也很多区别，但是也有很多共性。

1. 如果，我们每一个单独去封装一个组件，显然不合适：比如每个页面都返回，这部分内容我们就要重复去封装
2. 但是，如果我们封装成一个，好像也不合理：有些左侧是菜单，有些是返回，有些中间是搜索，有些是文字，等等。

如何封装合适呢？抽取共性，保留不同。

1. 最好的封装方式就是将共性抽取到组件中，将不同暴露为插槽。
2. 一旦我们预留了插槽，就可以让使用者根据自己的需求，决定插槽中插入什么内容。
3. 是搜索框，还是文字，还是菜单。由调用者自己来决定。

### 插槽的基本使用

```html

<div id="app">
    <vue>
        <button>按钮</button>
    </vue>
    <vue><input type="text"></vue>
    <vue></vue>
    <vue></vue>
</div>
<template id="view">
    <div>
        <h2>我是组件</h2>
        <p>我是组件哈哈哈</p>
        <slot></slot>
    </div>
</template>
<script src="../../vue/vue.js"></script>
<script>
    const vue = {
        template: '#view',
        data() {
            return {}
        },
    };
    new Vue({
        el: "#app",
        data: {},
        components: {
            vue,
        }
    })
</script>
```

插槽的默认值

```html

<div id="app">
    <vue>
        <button>按钮</button>
    </vue>
    <vue><input type="text"></vue>
    <vue></vue>
    <vue></vue>
</div>
<template id="view">
    <div>
        <h2>我是组件</h2>
        <p>我是组件哈哈哈</p>
        <slot><h1>无</h1></slot>
    </div>
</template>
<script src="../../vue/vue.js"></script>
<script>
    const vue = {
        template: '#view',
        data() {
            return {}
        },
    };
    new Vue({
        el: "#app",
        data: {},
        components: {
            vue,
        }
    })
</script>
```

### 具名插槽

如果没有给插槽设name值

那么所有的插槽默认内容都会被组件内容替代

```html

<div id="app">
    <vu-E><h1>标题</h1></vu-E>
</div>
<template id="view">
    <div>
        <slot><span>左边</span></slot>
        <slot><span>中间</span></slot>
        <slot><span>右边</span></slot>
    </div>
</template>
<script src="../../vue/vue.js"></script>
<script>
    const vuE = {
        template: '#view',
        data() {
            return {}
        },
    };
    new Vue({
        el: "#app",
        data: {},
        components: {
            vuE,
        }
    })
</script>
```

![image-20220129164514480](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220129164514480.png)

给默认的插槽设name值

```html

<div id="app">
    <vu-E><h1>标题</h1></vu-E>
</div>
<template id="view">
    <div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
        <slot></slot>
    </div>
</template>
<script src="../../vue/vue.js"></script>
<script>
    const vuE = {
        template: '#view',
        data() {
            return {}
        },
    };
    new Vue({
        el: "#app",
        data: {},
        components: {
            vuE,
        }
    })
</script>
```

有name的插槽则不会被替换

![image-20220129164704632](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220129164704632.png)

如果想要替换有name值的插槽,则在替换的标签里面输入

```
 slot='默认插槽的name名'
```

```html

<div id="app">
    <vu-E><h1 slot="left">标题</h1></vu-E>
</div>
<template id="view">
    <div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
    </div>
</template>
<script src="../../vue/vue.js"></script>
<script>
    const vuE = {
        template: '#view',
        data() {
            return {}
        },
    };
    new Vue({
        el: "#app",
        data: {},
        components: {
            vuE,
        }
    })
</script>
```

## 编译作用域

在真正学习插槽之前，我们需要先理解一个概念：编译作用域。

官方对于编译的作用域解析比较简单，我们自己来通过一个例子来理解这个概念

我们来考虑下面的代码是否最终是可以渲染出来的：
<my-cpnv-show="isShow"></my-cpn>中，我们使用了isShow属性。 isShow属性包含在组件中，也包含在Vue实例中。

![image-20220129184335954](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220129184335954.png)

答案：最终可以渲染出来，也就是使用的是Vue实例的属性。 为什么呢？

- 官方给出了一条准则：父组件模板的所有东西都会在父级作用域内编译子组件模板的所有东西都会在子级作用域内编译。
- 而我们在使用<my-cpnv-show="isShow"></my-cpn>的时候，整个组件的使用过程是相当于在父组件中出现的。
- 那么他的作用域就是父组件，使用的属性也是属于父组件的属性。 因此，isShow使用的是Vue实例中的属性，而不是子组件的属性。

### 作用域插槽：准备

作用域插槽是slot一个比较难理解的点，而且官方文档说的又有点不清晰。

这里，我们用一句话对其做一个总结，然后我们在后续的案例中来体会：

- 父组件替换插槽的标签，但是内容由子组件来提供。

我们先提一个需求：

子组件中包括一组数据，比如：pLanguages：【'JavaScript'，'Python'，'Swift'，'Go，'C++】

需要在多个界面进行展示：

- √某些界面是以水平方向一展示的，
- √某些界面是以列表形式展示的，
- √某些界面直接展示一个数组口内容在子组件，希望父组件告诉我们如何展示，怎么办呢？
- √利用slot作用域插槽就可以了

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="vue">
    <!--目的:获取子组件的plagues数据-->
    <app>
        <template slot-scope="slot">
            <!--        <span v-for="item in slot.data">{{item}}()</span>-->
            <span>{{slot.abc.join('-')}}</span>
        </template>
    </app>
</div>
<template id="app">
    <div>
        <slot :abc="plagues">
            <ul>
                <li v-for="item in plagues">{{item}}</li>
            </ul>
        </slot>
    </div>
</template>
<script src="../../vue/vue.js"></script>
<script>
    const app = {
        template: "#app",
        data() {
            return {
                plagues: ['javascript', 'java', 'c', 'c++', 'python', 'go']
            }
        }
    }
    new Vue({
        el: "#vue",
        data: {},
        components: {
            app
        }

    })
</script>
</body>
</html>
```

# 模块化

![image-20220130002535271](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130002535271.png)

![image-20220130003442609](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130003442609.png)

![image-20220130003735584](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130003735584.png)

![image-20220130004356854](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130004356854.png)

# axios补充

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="../vue/vue.js"></script>
  <script src="https://cdn.staticfile.org/axios/0.25.0/axios.js"></script>
</head>
<body>
<script>
  axios({
    method:'GET',
    url:'http://www.liulongbin.top:3006/api/getbooks',
    //URL中的查询参数
    params:{
     
    },
    data:{}
  }).then(res=>console.log(res))
</script>
</body>
</html>
```

## axios

- 请求方式

- ```
    method:'GET', 	GET或POST
    ```

- 请求地址

    - ```
  url:'http://www.liulongbin.top:3006/api/getbooks',
    ```

- 请求地址中的url查询参数

    - ```
  params:{}
    ```

- 请求体参数

    - ```
  data:{}
    ```

## 如果调用某个方法的返回值是Promise实例，则前面可以添加await

await只能用在被async修饰的方法中

```js
async function ajax() {
    let a = await axios({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/getbooks',
        //URL中的查询参数
        params: {},
        data: {}
    })
    console.log(a)
}

ajax()
```