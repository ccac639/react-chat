# vue-cli

什么是vue-cli

vue-ci是Vue.js开发的标准工具。它简化了程序员基才webpack创建工程化的Vue项目的过程。

引用自vue-cli官网上的一句话： 程序员可以专注在撰写应用上，而不必花好几天去纠结webpack配置的问题。

# vue-cli的使用

1.在终端下运行如下的命令，创建指定名称的项目：

```
vue create 项目名(英文)
```

![image-20220131132759956](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131132759956.png)

第一项是vue的版本

第二项是webpack的js兼容性

第三是装不装TS的认证

第四是谷歌的

第五是路由

第六是css

第七是代码规范验证

![image-20220131134616707](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131134616707.png)

node_modules node的包管理文件

public 生成文件的可视化存放地点和首页

src 写代码

# src目录构成

![image-20220131140059799](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131140059799.png)

```
assets文件夹	放第三方的资源(图片,视频等)
```

```
components文件夹:	存放一些封装可复用的组件都放在这个components	
```

```
main.js		项目的入口文件，整个项目的运行 要先执行main.js
```

```
app.Vue 	是项目的根组件
```

![image-20220131140507409](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131140507409.png)

## main.js

```
// 导入vue的包
import Vue from 'vue'
// 导入App.vue根组件 将来把App.vue中的模板结构 渲染到html中
import App from './App.vue'

Vue.config.productionTip = false
// 创建vue的示例对象
new Vue({
  render: h => h(App),
}).$mount('.dev')

```

# vue项目的运行流程

在工程化的项目中，vue要做的事情很单纯：通过main,js把App.vue渲染到index.html的指定区域中。

- App.Vue用来编写待渲染的模板结构
- index.html中需要预留一个el区域
- main,js拇App.vue渲染到了index.html所预留的区域中

# Vue组件

## 1.什么是组件化开发组件化开发指的是：

根据封装的思想，把页面上可重用的U川结构封装为组件，从而方便项目的开发和维护。

## 2.Vue中的组件化开发

Vue是一个支持组件化开发的前端框架。

Vue中规定：组件的后缀名是.vue。之前接触到的App.Vue文件本质上就是一个Vue的组件。

## 3.Vue组件的三个组成部分

每个.Vue组件都由3部分构成，分别是：

template->组件的模板结构

script->组件的JavaScript行为

style->件的样式

.vue组件中的data不能像之前一样，不能指向对象。 组件中的data必须是一个函数

```vue
<template>
  <div>
    <h1>{{ date }}</h1>
    <button @click="can">11</button>
  </div>
</template>
<script>
//默认带导出
export default {
  //  data数据源
  data() {
    //.vue组件中的data不能像之前一样，不能指向对象。
    // 组件中的data必须是一个函数
    return {
      date: "123"
    }
  },
  methods:{
    ///在组件中，this就表示当前组件的实例对象
    can(){
      console.log(this)
      this.date="大大"
    }
  },
  //侦听器
  watch:{},
  //计算属性
  computed:{},
  //当前组件中的过滤器
  filters:{}
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>
```

## 用less语法

```
<style scoped lang="less">
h1 {
  color: red;
  p:nth-child(1){
    color: #5c6b77;
  }
}
</style>
```

## 组件之间的父子关系

![image-20220131191321428](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131191321428.png)

组件在被封装好之后，彼此之间是相互独立的，不存在父子关系在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系

### 使用组件的三个步骤

![image-20220131191514311](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131191514311.png)

![image-20220131191803631](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131191803631.png)c

```vue
<template>
  <div>
    <Test></Test>
    <hello></hello>
  </div>
</template>
<script>
import Test from "@/components/Test";
import hello from './components/hello'
//默认带导出
export default {
  data(){
    return{

    }
  },//
  components:{
    Test,hello
  },
}
</script>
<style >

</style>
```

![image-20220131195118815](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131195118815.png)

![image-20220131195127600](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131195127600.png)

## 通过components注册的是私有子组件

例如：

- 在组件A的components节点下，注册了组件F。
- 则组件F只能用在组件A中；不能被用在组件C中。

请大家思考两个问题：

- ①为什么F不能用在组件C中？
- ②怎样才能在组件C中使用F？

## 注册全局组件

在Vue项目的main.js入口文件中，通过Vue.component（）方法，可以注册全局组件。示例代码如下：

```js
// 导入vue的包
import Vue from 'vue'
// 导入App.vue根组件 将来把App.vue中的模板结构 渲染到html中
import App from './App.vue'
// 导入全局注册的组件
import txt from '@/components/txt'
//参数1：字符串格式，表示组件的“注册名称”
//参数2：需要被全局注册的那个组件
Vue.component("txt",txt)
Vue.config.productionTip = false
// 创建vue的示例对象
new Vue({
  el:".dev",
  // 把render函数指定的组件 渲染到html页面中
  render: h => h(App),
})
//Vue实例的$mount（）方法，作用和el属性完全一样！
```

```vue
<template>
  <div>
    <input type="text" :value="Txt">
    <button @click="Txt++">+</button>
    <button @click="aaa">1</button>
  </div>

</template>

<script>
export default {
// pops是"自定义属性”，允许使用者通过自定义属性，为当前组件指定初始值
// 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  props:{
    init:{
      // 类型验证
      type:Number,
      // 默认值
      default:2,
      // 必填项效验
      required:true
    }
  },
  data(){
    return{
      Txt:this.init
    }
  },
  methods:{
    aaa(){
      console.log(this.init)
    }
  }

}
</script>

<style scoped>

</style>
```

![image-20220131214920500](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131214920500.png)

vue规定：组件中封装的自定义属性是只读的，程序员不能直接修改props的值。否则会直接报错：

要想修改props的值，可以把props的值转存到data中，因为data中的数据都是可读可写的！

![image-20220131230425150](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220131230425150.png)

## /deep/

/当使用第三方组件库的时候，如果有修改第三方岸组件默认样式的需求，需要用到/deep/

```vue
<template>
  <div>
    <input type="text" :value="Txt">
    <button @click="Txt++">+</button>
    <el-button round @click="aaa">this</el-button>
  </div>

</template>

<script>
export default {
// pops是"自定义属性”，允许使用者通过自定义属性，为当前组件指定初始值
// 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  props:{
    init:{
      // 类型验证
      type:Number,
      // 默认值
      default:2,
      // 必填项效验
      required:true
    }
  },
  data(){
    return{
      Txt:this.init
    }
  },
  methods:{
    aaa(){
      console.log(this.init)
    }
  }

}
</script>

<style scoped>
  /deep/ .el-button{
    height: 10px;
  }
</style>
```

# 组件的生命周期

生命周期&生命周期函数

生命周期（Life Cycle）是指一个组件从创建->运行->销毁的整个阶段，强调的是一个时间段。

生命周期函数：是由Vue框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。

注意：生命周期强调的是时间段，生命周期函数强调的是硝点。

## 组件生命周期函数的分类

![****](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220201164432379.png)

```vue
<script>
export default {
// pops是"自定义属性”，允许使用者通过自定义属性，为当前组件指定初始值
// 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  props:{
    init:{
      // 类型验证
      type:Number,
      // 默认值
      default:2,
      // 必填项效验
      required:true,

    }
  },
  data(){
    return{
      Txt:this.init,
      list:null
    }
  },
  methods:{
    aaa(){
    },
    initBook(){
      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load',()=> {
        const ser=JSON.parse(xhr.responseText)
        this.list=ser.data
      })
      xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks');
      xhr.send()
    }
  },
  beforeCreate() {// 生命周期第一个函数 :没啥用

  },
  //如果要操作当前组件的D0M，最早，只能在mounted阶段执行
  created() {

  },
  beforeMount() {
   
  },
  beforeUpdate() {

  },
  //当数据变化之后，为了能够操作到最新的DoM结构，必须把代码写到updated生命周期函数中
  updated() {

  },
  //销毁触发
  beforeDestroy() {

  }
}
</script>
```

# 组件之间的数据共享

组件之间的关系

在项目开发中，组件之间的最常见的关系分为如下两种：

- 父子关系
- 兄弟关系

## 父子传递数据

父组件传递数据

```vue
 <Test :msg="name" :user="user"></Test>
<script>
 data(){
      return{
        name:"vue2",
        user:{
          name:"vueCli",
          age:10
        },
      }
    },
</script>
```

## 子组件接受数据

```vue
<div>
    <h1>Test</h1>
    <p class="p1">父组件传过来的msg是:{{msg}}</p>
    <p class="p2">子组件的数据:{{txt}}</p>
    <p class="p3">子组件接受父组件传递过来的数据后赋值的txt:{{txt}}+{{msg}}</p>
    <button @click="msg='aaa'">修改父组件的msg</button>
    <button @click="txt='aaa'">修改子组件的txt</button>
    <br>
    ------------------------------------------------------
    <p class="h1">父组件传过来的msg是:{{user.name}}++{{user.age}}</p>
    <p class="h2">父组件传过来的msg是:{{date.name}}++{{date.age}}</p>
    <button @click="msg.name='张三'">修改父组件的msg</button>
    <button @click="txt.name='李四'">修改子组件的txt</button>
  </div>
<script> 
// 接受父组件传递过来的数据
	props:['msg','user'],
    data(){
    return{
      txt:this.msg,
      date:this.user
    }
  },
</script>
```

## 子组件传递数据

```vue
<template>
  <div>
    <h1>CLASS</h1>
    <slot></slot>
    <p>子元素数据：{{num}}</p>
    <button @click="jia">+1</button>
  </div>
</template>
<script>
export default {
  name: "CLASS",
  data(){
    return{
      num:0
    }
  },
  methods:{
    jia(){
      this.num++;
      //修改数据时，通过$emit（）触发自定义事件
      this.$emit('Number',this.num)// 向父组件传递this.num
    }
  }
}
</script>
```

## 父组件接受子组件数据

```vue
<CLASS @Number="nun">接受子组件传递过来的数据：{{NumBer}}</CLASS>
</template>
<script>
    // CLASS子组件
import CLASS from "./components/CLASS";
  export default {
    data(){
      return{
        // 定义Number接受子组件传递过来的数据
        NumBer:0
      }
    },
    methods:{//获取子组件数据 val是子组件传过来的数据
      nun(val){
        //给NumBer赋值子组件的数据
        this.NumBer=val
      }
    },
    components:{
      CLASS
    }
  }
</script>
```

## 兄弟组件之间的数据共享

在vue2.X中，兄弟组件之间数据共享的方案是EventBus。

![image-20220201194241458](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220201194241458.png)

### EventBus的使用步骤

- 创建eventBus.js模块，并向外共享一个Vue的实例对象
- 在数据发送方,调用bus.$emit('事件名称'，要发送的数据)方法触发自定义事件
- 在数据接收方，调用bus.$on（'事件名称'，事件处理函数）方法注册一个自定义事件

Test组件

```vue
<h2>兄弟组件传递</h2>
<button @click="sendTest">点击</button>
<script>
import bus from './js/eventBus'
export default {
  data(){
    return{
      strTest:'绝对良心'
    }
  },
  methods:{
    sendTest(){
      bus.$emit('TesT',this.strTest)
      // 兄弟组件A（数据发送方）
    }
  }
}
</script>
```

eventBus挂载数据的js

```js
import Vue from "vue";
//向外共享Vue的实例对象
export default new Vue()
```

```vue
<p>兄弟组件接受方</p>
<p>class接受到的数据是：{{StrCLass}}</p>
<script>
import bus from './js/eventBus'
export default {
  name: "CLASS",
  data(){
    return{
      StrCLass:''
    }
  },

  created() {
    bus.$on('TesT',(val)=>{
      this.StrCLass=val
    })
  }
}
</script>
```

注意：数据发送方是$emit,数据接收方是$on

# ref引用

## 什么是ref引用

ref用来辅助开发者在不依赖于jQuery的情况下，获取DOM元素或组件的引用。 每个Vue的组件实例上，都包含一个refs对象，里面存储着对应的DOM元素或组件的引用。默认情况下，组件的$refs指向一个空对象。

```html
<h1  ref="myH1">修改该属性</h1>
<button @click="met">App</button>
```

```json
 methods:{
      met(){
        console.log(this.$refs.myH1)
        this.$refs.myH1.style.color="red"
      }
    }
```

### 使用ref引用组件实例

如果想要使用rf引用页面上的组件实例，则可以按照如下的方式进行操作：

父组件

```html
<div class="Test">
      <Test ref="test"></Test>
      <button @click="te">重置test</button>
</div>
```

```vue
<script>
    export default {
        methods:{
            te(){
                    this.$refs.test.cz()
             }
         }
    }
</script>
```

子组件

```vue
<template>
  <div>
    <h1>Test</h1>
    <span>Test组件------{{count}}</span>
    <br>
    <button @click="count++">+1</button>
    <button @click="cz">重置</button>
  </div>
</template>
```

```vue
<script>
export default {
  name: "Test",
  data(){
    return{
      count:0
    }
  },
  methods:{
    cz(){
      this.count=0
    }
  }
}
</script>
```

了解this.$nextTick的应用场景

### 切换输入框跟按钮的小案例

```vue
<div class="demo">
  <p>初步实现按钮和文本框的按需展示</p>
  <el-input v-model="input" placeholder="请输入内容" v-if="inputVisible" @blur="inputButton" ref="ipRef"></el-input>
  <el-button type="primary" v-else @click="Button">主要按钮</el-button>
</div>
```

第一种方法update判断this$refs.ipRef

```vue
<script>
  export default {
    methods:{
      
      // 文本框
      inputButton(){
        this.inputVisible=false
      },
      // 点击按钮
      Button(){
        this.inputVisible=true;
        //让展示出来的文本框，自动获取焦点
        //第二种
        this.$nextTick(()=>{
         this.$refs.ipRef.focus()
        })
      }
    },
    data(){
      return{
        input: '',
        // 控制输入框和按钮的按需切换
        // 默认值为false，表示默认展示按钮，隐藏输入框
        inputVisible:false
      }
    },

    components:{
      Test
    },
	updated() {
		if (this.$refs.ipRef){
			this.$refs.ipRef.focus()
		}
	}
  }
</script>
```

第二种$nextTick

```vue
<script>
  export default {
    methods:{
      // 文本框
      inputButton(){
        this.inputVisible=false
      },
      // 点击按钮
      Button(){
        this.inputVisible=true;
        //让展示出来的文本框，自动获取焦点
        //第二种
        this.$nextTick(()=>{
         this.$refs.ipRef.focus()
        })
      }
    },
    data(){
      return{
        input: '',
        // 控制输入框和按钮的按需切换
        // 默认值为false，表示默认展示按钮，隐藏输入框
        inputVisible:false
      }
    },
    components:{
      Test
    },
  }
</script>
```

# 过渡动画

Vue 提供了 `transition` 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

### [过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#过渡的类名)

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter`
会替换为 `my-transition-enter`。

`v-enter-active` 和 `v-leave-active` 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明。

## 自己写的css动画

```vue
<template>
  <div>
    <button @click="isArr=!isArr">1</button>
    <transition>
      <h1 class="abc cba" v-show="isArr">鸟</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      isArr: true
    }
  },
  methods: {}
}
</script>

<style scoped>
h1{
  background-color: yellow;
}
.abc {
  animation: atg 1s;
}

.cba {
  animation: atg 1s reverse;
}
@keyframes atg {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>

```

## vue自带的动画

```vue
<transition>
      <h1 v-show="isArr">鸟</h1>
</transition>
	
<script>
export default {
  name: 'Test',
  data () {
    return {
      isArr: true
    }
  },
  methods: {}
}
</script>

<style scoped>
h1{
  background-color: yellow;
}
.v-enter-active {		//这样vue就会执行这个动画
  animation: atg 1s;
}

.v-leave-active {
  animation: atg 1s reverse;
}
@keyframes atg {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

```

## 自定义类名

```vue
<template>
  <div>
    <button @click="isArr=!isArr">1</button>
    <transition name="ani" appear>	css类的声明：ani,			:appear='true',appear默认为true
      <h1 v-show="isArr">鸟</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      isArr: true
    }
  },
  methods: {}
}
</script>

<style scoped>
h1{
  background-color: yellow;
}
.ani-enter-active {				//动画transition的声明
  animation: atg 1s;
}

.ani-leave-active {
  animation: atg 1s reverse;
}
@keyframes atg {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

```

## 动画类的分类

### 进入的起点

```css
.v-enter{}
```

### 进入的终点，离开的起点

```
.v-enter-to,.v-leave 
```

### 离开的终点

```
.v-leave-to
```

### 点击的时候激活

```
.v-enter-active,.v-leave-active
```

#### vue动画

```vue
<template>
  <div>
    <button @click="isArr=!isArr">1</button>
    <transition name="hello" appear>
      <h1 v-show="isArr">鸟</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  data () {
    return {
      isArr: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: #127aff;
}

.hello-enter { /*进入的起点*/
  transform: translateX(-100%);
}
/*//点击的时候激活*/
.hello-enter-active,.hello-leave-active{
  transition: .5s linear;
}
.hello-enter-to,.hello-leave { /*进入的终点*//*离开的起点*/
  transform: translateX(0);
}

.hello-leave-to { /*离开的终点*/
  transform: translateX(100%);
}
</style>
```

# 购物车

## 购物车的目录分级

```
vuecli4	-node_modules
		-public
				-favicon.ico
				-index.html
		-src
				-assets
						-logo.png
				-components
						-Counter
								-Counter.vue
						-Footer
								-Footer.vue
						-Goods
								-Goods.vue
						-Header
								-Header.vue
						-js
								-eventBus.js
				-App.vue
				
				-main.js
		-.browserslistrc
		-.eslintrc.js
		-.gitignore
		-babel.config.js
		-package.json
		-package-lock.json
		-README.md
```

### index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```

### App.vue

```vue
<template v-if="list">
  <div id="app" class="app-container">
      <Header :title="titre" ></Header>
      <div>
        <Goods  v-for="(item) in list"
                :id="item.id"
                :key="item.id"
                :title="item.goods_name"
                :pic="item.goods_img"
                :price="item.goods_price"
                :states="item.goods_state"
                :num="item.goods_count"
                @good="goodS"
         >
        </Goods>
      </div>
    <Footer :poos="fullState" @foot="foote" :priceR="amt" :num="total"></Footer>
  </div>
</template>
<script>
import Header from "./components/Header/Header";
import Goods from "./components/Goods/Goods";
import Footer from './components/Footer/Footer'
import axios from 'axios'
import eventBus from "./components/js/eventBus";
export default {
  // 数据中转
    data(){
      return{
          dataList:null,
        titre:'购物车案例',
        list:[],
      }
    },
  //定义方法
    methods:{
      async initCar() {
        // 调用 axios 的 get 方法，请求列表数据
        const { data: res } = await axios.get('https://www.escook.cn/api/cart')
        // 只要请求回来的数据，在页面渲染期间要用到，则必须转存到 data 中
        if (res.status === 200) {
          this.list = res.list
        }
      },
      // 接受子组件传过来的数据    @good="goodS"
      goodS(val){
        // val 的格式为{id,value}
        // 如果当前的循环正好等于传过来的id，就终止循环
        this.list.some(item=>{
          if (item.id===val.id){
            item.goods_state=val.value
            // 终止后续循环
            return true
          }
        })
      },
      //接受footer的数据
      foote(val){
        this.list.map(item=>item.goods_state=val)
      },
    },
  //初始化钩子函数
    created() {
      // 接受来自counter的数量值
      eventBus.$on('share',(err)=>{
        this.list.some(item=>{
          if (item.id===err.id){
            item.goods_count=err.value
            return true
          }
        })
      })
      this.initCar();
    },
  //计算属性
    computed:{
      //动态计算出全选的状态是true还是false
      fullState(){
        //只要每一项item.goods_state都满足条件, fullState就是true
        return this.list.every(item=>item.goods_state)
      },
      // 计算已勾选物品的总价格
      amt(){
        // 先让filter过滤不是true的组件,再累加组件的价格
        return this.list
            .filter(item=>item.goods_state)
            .reduce((item,value)=> item += value.goods_price * value.goods_count,0)
      },
      // 已勾选商品的总数量
      total(){
        return this.list.filter(item=>item.goods_state).reduce((num,item)=>num+=item.goods_count,0)
      }
    },
  // 注册组件
    components:{
      Header,
      Goods,
      Footer,

    }
  }
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .app-container {
    padding-bottom: 50px;
  }
</style>

```

### main.js

```js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

```

### Counter.vue

```vue
<template>
  <el-input-number class="el-input-number" v-model="num" @change="handleChange"></el-input-number>
</template>

<script>
import eventBus from "../js/eventBus";
export default {
  name: "Counter",
  // 接受传值
  props: {
    // 接受商品的数量
    Sum: {
      type: Number,
      default: 0,
    },
    // 接受商品的id值 将来使用EventBUs方案
    // 把数量传递到app.vue的时候,需要通知app组件 更新那个商品的数量
    id: {
      type: Number,
      required: true
    }
  },
  // 数据中转
  data() {
    return {
      num: this.Sum
    }
  },
  // 定义方法
  methods: {
    //element-ui的组件
    // 其中，id是商品的id；value是商品最新的购买数量
    // 要发送给App的数据格式为{id，value}
    handleChange(e) {
      let app = {id: this.id, value: e}
      // 给App传递app
      eventBus.$emit('share',app)
    }
  }
}
</script>

<style scoped>
.el-input-number {
  width: 130px;
  z-index: 0;
}
</style>
```

### Footer.vue

```vue
<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="poos" @change="func"/>
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>
    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ priceR }}</span>
    </div>
    <slot></slot>
    <!-- 结算按钮 -->
    <el-button type="primary" round>结算：{{num}}</el-button>
  </div>
</template>

<script>
export default {
  // 接受传值
  props: {
    // 全选的状态
    poos: {
      type: Boolean,
      default: true
    },
    priceR: {
      type: Number,
      default: 0
    },
    num:{
      type:Number,
      default:0
    }
  },
  // 发送全选按钮的信息 true或false
  // 定义方法
  methods: {
    func(e) {
      this.$emit('foot', e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>

```

### Goods.vue

```vue
<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox"
               class="custom-control-input"
               :checked="states"
               @change="stateChang"
               :id="'ch'+this.id"
        />
        <label class="custom-control-label" :for="'ch'+this.id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt=""/>
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title"> {{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
        <Counter :Sum="num" :id="id"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter";

export default {
  name: "Goods",
  // 接受传值
  props: {
    //商品的id
    // 为啥在这里要封装一个id属性呢？
    // 原因：将来，子组件中商品的勾选状态变化之后，需要通过子传父的形式通知父组件根据id修改对应商品的勾选状态
    id: {
      required: true,
      type: Number
    },
    // 要渲染的商品标题
    title: {
      default: '',
      type: String
    },
    // 要渲染的商品的图片
    pic: {
      default: '',
      type: String
    },
    // 要渲染的商品的价格
    price: {
      default: 0,
      type: Number
    },
    // 商品的勾选状态
    states: {
      default: false,
      type: Boolean
    },
    // 商品数量
    num: {
      type: Number,
      default: 1,
    }
  },
  // 数据中转
  data() {
    return {
      bool: true
    }
  },
  //定义方法
  methods: {
    // 只要复选框的选中状态发生了变化@change="stateChang"，就会调用这个处理函数
    stateChang(e) {
      this.bool = e.target.checked
      // 触发自定义事件
      this.$emit('good', {id: this.id, value: this.bool})
    }
  },
  // 注册组件
  components: {
    Counter
  }

}
</script>

<style scoped lang="less">
.goods-container {
  .goods-container {
    border-top: 1px solid #efefef;
  }

  padding: 10px;
  display: flex;

  .thumb {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }

    .custom-control {
      display: flex;
      align-items: center;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }

    .goods-info-bottom {
      display: flex;
      justify-content: space-between;

      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}

</style>
```

### Header.vue

```vue
<template>
  <div class="header-container">
    <span>{{titles}}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  // 接受传值
  props:['title'],
  // 数据中转
  data(){
    return{
      titles:this.title
    }
  },
  // 初始化钩子函数
  created() {

  }
}
</script>

<style scoped>
  .header-container{
    font-size: 12px;
    height: 45px;
    width: 100%;
    background-color: #127aff;
    text-align: center;
    line-height: 45px;
  }
</style>
```

### eventBus.js

```js
import Vue from "vue";
export default new Vue()
```

# 跨域代理

解决开发环境 Ajax 跨域问题

使用代理服务器

```
ajax () {
      axios.get('http://127.0.0.1:3000/get/api').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
```

![image-20220213182353259](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220213182353259.png)

## 解决方法

```js
methods: {
  ajax () {
    axios.get('/get/get').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
},
```

```js
module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:3000'
  }
}
```

## 多代理请求

1.优点：可以配置多个代理，且可以灵活的控制情求是否走代理 2.缺点：配置略微繁琐，请求资源时必须加前缀。

```
module.exports = {
  devServer: {
    //单代理
    // proxy: 'http://127.0.0.1:3000'
    //多代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true,//用于支持websocket
        changeOrigin: true,//把请求HOST跟服务器同步
        pathRewrite:{'^/api':''}
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}

```

# 动态组件

动态组件指的是动态切换组件的显示与隐藏。

如何实现动态组件渲染

vue 提供了一个内置的<component>组件，专门用来实现动态组件的渲染。示例代码如下：

```vue
<template>
  <div class="app-container">
    <h1>App组件</h1>
    <div class="box">
<!--      <Left></Left>-->
<!--      <Right></Right>-->
      <component :is="comName"> </component>
    </div>
  </div>
</template>
<script>
import Left from "./components/Left";
import Right from "./components/Right";

export default {
  components: {
    Left,
    Right
  },
  data(){
    return{
      comName:'Left'
    }
  }
}
</script>
<style scoped lang="less">
  .app-container {
    padding: 1px 20px 20px;
    background-color: #efefef;
  }

  .box {
    display: flex;
  }
</style>
```

## 动态切换组件

```vue
<template>
  <div class="app-container">
    <h1>App组件</h1>
    <el-button type="primary" round @click="comName='Left'">Left</el-button>
    <el-button type="success" round @click="comName='Right'">Right</el-button>
    <div class="box">
<!--      <Left></Left>-->
<!--      <Right></Right>-->
<!--      渲染Left组件和Right组件-->
<!--      component标签是vue内置的，作用：组件的占位符-->
<!--      is属性的值，表示要渲染的组件的名字-->
      <component :is="comName"> </component>
    </div>
  </div>
</template>
<script>
import Left from "./components/Left";
import Right from "./components/Right";

export default {
  components: {
    Left,
    Right
  },
  data(){
    return{
      //comName表示要展示的组件的名字

      comName:'Left'
    }
  }
}
</script>
<style scoped lang="less">
  .app-container {
    padding: 1px 20px 20px;
    background-color: #efefef;
  }

  .box {
    display: flex;
  }
</style>
```

## keep-alive

可以让组件在切换的时候不被销毁，而是缓存在app里，

keep-alive 可以把内部的组件进行缓存，而不是销毁组件

1. 当组件被缓存时，会自动触发组件的deactivated 生命周期函数。
2. 当组件被激活时，会自动触发组件的activated 生命周期函数。

```vue
<template>
  <div class="app-container">
    <h1>App组件</h1>
    <el-button type="primary" round @click="comName='Left'">Left</el-button>
    <el-button type="success" round @click="comName='Right'">Right</el-button>
    <div class="box">
      <!--      <Left></Left>-->
      <!--      <Right></Right>-->
      <!--      渲染Left组件和Right组件-->
      <!--      component标签是vue内置的，作用：组件的占位符-->
      <!--      is属性的值，表示要渲染的组件的名字-->
<!--      keep-alive可以-->
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Left from "./components/Left";
import Right from "./components/Right";

export default {
  components: {
    Left,
    Right
  },
  data() {
    return {
      //comName表示要展示的组件的名字

      comName: 'Left'
    }
  }
}
</script>
<style scoped lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
```

```vue
<template>
  <div class="right"><h1>right</h1></div>
</template>

<script>
export default {
  name: "Right",
  created() {
    console.log("创建Right")
  },
  destroyed() {
    console.log("销毁Right")
  },
  //当组件第一次被创建的时候,既会执行created生命周期，也会执行activated生命周期
  //当时，当组件被激活的时候，只会触发activated生命周期，不再触发create。因为组件没有被重新创建
  activated() {
    console.log("Rigth组件被激活了");
  },
  deactivated() {
    console.log("Right组件被缓存了")
  }
}
</script>

<style scoped>
.right {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

</style>
```

```vue
<template>
  <div class="left">
    <h1>left</h1>
    <p>count--{{ count }}</p>
    <el-button @click="count++">+1</el-button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log("创建了Left")
  },
  destroyed() {
    console.log("销毁Left")
  },
  activated() {
    console.log("Left组件被激活了");
  },
  deactivated() {
    console.log("Left组件被缓存了")
  }
}
</script>

<style scoped>
.left {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
```

### keep-alive 的include 属性

include属性用来指定：只有名称匹配的组件会被缓存。多个组件名之间使用英文的逗号分隔：

```
<keep-alive include="Left,Right">
  <component :is="comName"></component>
</keep-alive>
```

# 插槽

什么是插槽

插槽（Slot）是vue为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽。

app.vue

```vue
<template>
  <div class="app-container">
    <h1>App组件</h1>
    <el-button type="primary" round @click="comName='Left'">Left</el-button>
    <el-button type="success" round @click="comName='Right'">Right</el-button>
    <div class="box">
<!--      <默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default的插槽之中-->
<!--      如果要把内容填充到指定名称的插槽中，需要使用v-slot：这个指令&ndash;&gt;-->
<!--      v-slot：后面要跟上插槽的名字&ndash;&gt;-->
<!--      v-slot：指令不能直接用在元素身上，必须用在template标签上&ndash;&gt;-->
<!--      template这个标签，它是一个虚拟的标签，只起到包裹性质的作用，但是，不会被渲染为任何实质性的html元素&ndash;&gt;-->
<!--      v-slot 简写形式是#号-->
      <Left>
        <template v-slot:default>
          <p>这是插入插槽的内容</p>
        </template>
        <template #Name>
          <p>这是插入的简写v-slot</p>
          <el-skeleton :rows="6" animated="true" />
        </template>
      </Left>
    </div>
  </div>
</template>
<script>
import Left from "./components/Left";
export default {
  components:{
    Left
  }
}
</script>
<style scoped lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
```

left.vue

```vue
<template>
  <div class="left">
    <h1>Left</h1>
    <div>
<!--     声明一个插槽区域&ndash;&gt;-->
<!--     vue 官方规定：每一个slot插槽，都要有一个name名称&ndash;&gt;-->
<!--     如果省略了slot的name属性，则有一个默认名称叫做 default&ndash;&gt;-->
      <p>声明一个插槽 <slot></slot></p>
      <p>声明了一个简写插槽# <slot name="Name"></slot> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Left"
}
</script>

<style scoped>
  .left{
    flex:1;
    background-color: #127aff;

  }
</style>
```

## 具名插槽

Right.vue

```vue
<template>
  <div class="Right">
    <h1>Right</h1>
    <!--文章的标题-->
    <div class="header">
      <slot name="header"></slot>
    </div>
<!--    文章的内容-->
    <div class="content">
      <slot name="content"></slot>
    </div>
<!--    文章的作者-->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Right"
}
</script>

<style scoped lang="less">
  .Right{
    flex:1;
    background-color: yellow;
    >div{
      min-height: 150px;
      text-align: center;
    }
    .header{
      background-color: cadetblue;
    }
    .content{
      text-align: center;
      background-color: blueviolet;
    }
    .footer{
      background-color: darkslategrey;
    }
  }
</style>
```

app.vue

```vue
<template>
  <div class="app-container">
    <h1>App组件</h1>
    <el-button type="primary" round @click="comName='Left'">Left</el-button>
    <el-button type="success" round @click="comName='Right'">Right</el-button>
    <div class="box">
<!--      <默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default的插槽之中-->
<!--      如果要把内容填充到指定名称的插槽中，需要使用v-slot：这个指令&ndash;&gt;-->
<!--      v-slot：后面要跟上插槽的名字&ndash;&gt;-->
<!--      v-slot：指令不能直接用在元素身上，必须用在template标签上&ndash;&gt;-->
<!--      template这个标签，它是一个虚拟的标签，只起到包裹性质的作用，但是，不会被渲染为任何实质性的html元素&ndash;&gt;-->
<!--      v-slot 简写形式是#号-->
      <Left>
        <template v-slot:default>
          <p>这是插入插槽的内容</p>
        </template>
        <template #Name>
          <p>这是插入的简写v-slot</p>
        </template>
      </Left>
      <Right>
        <template #header>
          <div>
            <h3 >一首诗</h3>
          </div>

        </template>
        <template #content="scope">
          <div>
            <p>昨夜斗回北，今朝岁起东。</p>
            <p>我年已强仕，无禄尚忧农。</p>
            <p>桑野就耕父，荷锄随牧童。</p>
            <p>田家占气候，共说此年丰。</p>
            <p>{{scope}}</p>
          </div>
        </template>
        <template #footer>
          <div>
            <p>作者：孟浩然</p>
          </div>
        </template>
      </Right>
    </div>
  </div>
</template>
<script>
import Left from "./components/Left";
import Right from "./components/Right";
export default {
  components:{
    Left,
    Right
  }
}
</script>
<style scoped lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
```

```vue
<template>
  <div class="Right">
    <h1>Right</h1>
    <!--文章的标题-->
    <div class="header">
      <slot name="header"></slot>
    </div>
<!--    文章的内容-->
    <div class="content" >
      <slot name="content" :scope="it"></slot>
    </div>
<!--    文章的作者-->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Right",
  data(){
    return{
      it:{
        id:1,
        name:"zs",
        age:18
      }
    }
  }
}
</script>

<style scoped lang="less">
  .Right{
    flex:1;
    background-color: yellow;
    >div{
      min-height: 150px;
      text-align: center;
    }
    .header{
      background-color: cadetblue;
    }
    .content{
      text-align: center;
      background-color: blueviolet;
    }
    .footer{
      background-color: darkslategrey;
    }
  }
</style>
```

```
<template>
  <div class="app-container">
    <h1>App组件</h1>
    <el-button type="primary" round @click="comName='Left'">Left</el-button>
    <el-button type="success" round @click="comName='Right'">Right</el-button>
    <div class="box">
<!--      <默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default的插槽之中-->
<!--      如果要把内容填充到指定名称的插槽中，需要使用v-slot：这个指令&ndash;&gt;-->
<!--      v-slot：后面要跟上插槽的名字&ndash;&gt;-->
<!--      v-slot：指令不能直接用在元素身上，必须用在template标签上&ndash;&gt;-->
<!--      template这个标签，它是一个虚拟的标签，只起到包裹性质的作用，但是，不会被渲染为任何实质性的html元素&ndash;&gt;-->
<!--      v-slot 简写形式是#号-->
      <Left>
        <template v-slot:default>
          <p>这是插入插槽的内容</p>
        </template>
        <template #Name>
          <p>这是插入的简写v-slot</p>
        </template>
      </Left>
      <Right>
        <template #header>
          <div>
            <h3 >一首诗</h3>
          </div>

        </template>
        <template #content="{scope}">
          <div>
            <p>昨夜斗回北，今朝岁起东。</p>
            <p>我年已强仕，无禄尚忧农。</p>
            <p>桑野就耕父，荷锄随牧童。</p>
            <p>田家占气候，共说此年丰。</p>
            <p>{{scope.id}}</p>
          </div>
        </template>
        <template #footer>
          <div>
            <p>作者：孟浩然</p>
          </div>
        </template>
      </Right>
    </div>
  </div>
</template>
<script>
import Left from "./components/Left";
import Right from "./components/Right";
export default {
  components:{
    Left,
    Right
  }
}
</script>
<style scoped lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
```

# 重构购物车

### Counter.vue

```vue
<template>
  <el-input-number class="el-input-number" v-model="num" @change="handleChange"></el-input-number>
</template>

<script>
import eventBus from "../js/eventBus";
export default {
  name: "Counter",
  // 接受传值
  props: {
    // 接受商品的数量
    Num:{
      type:Number,
      default: 1
    },
    // 接受商品的id值 将来使用EventBUs方案
    // 把数量传递到app.vue的时候,需要通知app组件 更新那个商品的数量
    id: {
      type: Number,
      required: true
    }
  },
  // 数据中转
  data() {
    return {
      num: this.Num
    }
  },
  // 定义方法
  methods: {
    //element-ui的组件
    // 其中，id是商品的id；value是商品最新的购买数量
    // 要发送给App的数据格式为{id，value}
    handleChange(e) {
      let app = {id: this.id, value: e}
      // 给App传递app
      eventBus.$emit('share',app)
    }
  }
}
</script>

<style scoped>
.el-input-number {
  width: 130px;
  z-index: 0;
}
</style>
```

### Footer.vue

```vue
<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="poos" @change="func"/>
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>
    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ priceR }}</span>
    </div>
    <slot></slot>
    <!-- 结算按钮 -->
    <el-button type="primary" round>结算：{{num}}</el-button>
  </div>
</template>

<script>
export default {
  // 接受传值
  props: {
    // 全选的状态
    poos: {
      type: Boolean,
      default: true
    },
    priceR: {
      type: Number,
      default: 0
    },
    num:{
      type:Number,
      default:0
    }
  },
  // 发送全选按钮的信息 true或false
  // 定义方法
  methods: {
    func(e) {
      this.$emit('foot', e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
</style>

```

### Goods.vue

```vue
<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox"
               class="custom-control-input"
               :checked="states"
               @change="stateChang"
               :id="'ch'+this.id"
        />
        <label class="custom-control-label" :for="'ch'+this.id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt=""/>
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title"> {{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  // 接受传值
  props: {
    //商品的id
    // 为啥在这里要封装一个id属性呢？
    // 原因：将来，子组件中商品的勾选状态变化之后，需要通过子传父的形式通知父组件根据id修改对应商品的勾选状态
    id: {
      required: true,
      type: Number
    },
    // 要渲染的商品标题
    title: {
      default: '',
      type: String
    },
    // 要渲染的商品的图片
    pic: {
      default: '',
      type: String
    },
    // 要渲染的商品的价格
    price: {
      default: 0,
      type: Number
    },
    // 商品的勾选状态
    states: {
      default: false,
      type: Boolean
    },
    // 商品数量
    num: {
      type: Number,
      default: 1,
    }
  },
  // 数据中转
  data() {
    return {
      bool: true
    }
  },
  //定义方法
  methods: {
    // 只要复选框的选中状态发生了变化@change="stateChang"，就会调用这个处理函数
    stateChang(e) {
      this.bool = e.target.checked
      // 触发自定义事件
      this.$emit('good', {id: this.id, value: this.bool})
    }
  },


}
</script>

<style scoped lang="less">
.goods-container {
  .goods-container {
    border-top: 1px solid #efefef;
  }

  padding: 10px;
  display: flex;

  .thumb {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }

    .custom-control {
      display: flex;
      align-items: center;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }

    .goods-info-bottom {
      display: flex;
      justify-content: space-between;

      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}

</style>
```

### Header.vue

```vue
<template>
  <div class="header-container">
    <span>{{titles}}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  // 接受传值
  props:['title'],
  // 数据中转
  data(){
    return{
      titles:this.title
    }
  },
  // 初始化钩子函数
  created() {

  }
}
</script>

<style scoped>
  .header-container{
    font-size: 12px;
    height: 45px;
    width: 100%;
    background-color: #127aff;
    text-align: center;
    line-height: 45px;
  }
</style>
```

# 自定义指令

vue中的自定义指令分为两类，分别是：

- 私有自定义指令
- 全局自定义指令

## 私有自定义指令

在每个vue组件中，可以在directives节点下声明私有自定义指令。示例代码如下：

bind函数只调用1次：当指令第一次绑定到元素时调用，当DOM更新时bind函数不会被触发。update函 . 数会在每次DOM更新时被调用。示例代码如下：

在使用自定义指令时，需要加上 v- 前缀。示例代码如下：

```vue
directives: {
  color: {
    bind(el, binding) {
      el.addEventListener('click', function () {
        console.log(binding)
        this.style.color = binding.value
      })
    }
  }
}
```

如果 insert 和update 函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式：

```
directives: {
    bin(el,binding){
      el.style.background=binding.value
    }
}
```

# 将axios挂载到全局

## main.js

```js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.config.productionTip = false
// axios.defaults.baseURL = '请求根路径'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 将axios挂载到Vue
Vue.prototype.$http = axios
Vue.use(ElementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')

```

## app.vue

```vue
<template>
  <div id="app">
    <h1>App</h1>
    <hr>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left'
import Right from '@/components/Right'
export default {
  name: 'App',
  components: {
    Left,
    Right
  }
}

</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
    display: flex;
}
</style>

```

## left.vue

```vue
<template>
  <div class="left">
    <h1>
      <p>Left</p>
    </h1>
    <el-button type="primary" @click="getInfo">发起GET请求</el-button>
  </div>

</template>

<script>
export default {
  name: 'Left',
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('http://www.liulongbin.top:3006/api/get')
      console.log(res)
    }
  }
}
</script>

<style scoped>
.left{
  flex: 1;
  background-color: #127aff;
  min-height: 200px;
}
</style>

```

## right.vue

```vue
<template>
  <div class="right">
    <h1>
      <p>Right</p>
    </h1>
    <el-button type="primary" @click="postInfo">发起post请求</el-button>
    <el-button type="primary" @click="btnGet">获取图书列表数据</el-button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Right',
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 20 })
      console.log(res)
    },
    async btnGet () {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
  .right{
    flex: 1;
    background-color: blueviolet;
    min-height: 200px;
  }
</style>

```

# github搜索案例

## main.js

```js
import Vue from 'vue'
import App from './App'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

```

## App.vue

```vue
<template>
  <div class="container">
    <Search/>
    <list/>
  </div>
</template>

<script>
import Search from '@/components/Search'
import List from '@/components/List'
export default {
  name: 'App',
  components: { Search, List }
}
</script>

```

## Search.vue

```vue
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <el-input placeholder="请输入内容" v-model="keyword"  @keyup.enter="search"></el-input>
      <el-button @click="search" @keyup.enter="search"></el-button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    async search () {
      // 请求前，更新list的数据
      const { data: res } = await axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
      this.$bus.$emit('updataList', { isFirst: false, isLoading: false, users: res.items })
    }
  }
}
</script>

```

## List.vue

```vue
<template v-if="info.users">
  <div class="row">
<!--展示用户列表-->
      <div  class="card" v-for="(item) in info.users" :key="item.login" v-show="info.users.length">
        <a :href="item.html_url" >
          <img :src="item.avatar_url" alt="" style="width: 100px">
        </a>
        <p class="card-text">{{item.login}}</p>
      </div>
<!--    展示欢迎词-->
    <h1 v-show="info.isFirst">欢迎</h1>
<!--    展示加载中-->
    <h1 v-show="info. isLoading">加载中</h1>
    <!--    展示错误信息-->
    <h1 v-show="info.err">404</h1>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        users: [],
        err: ''
      }
    }
  },
  mounted () {
    this.$bus.$on('updataList', (req) => {
      this.info = { ...this.info, ...req }
      console.log(this)
    })
  }
}
</script>
<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

```

## 插件库vue-resoure

```

```

# 路由

什么是路由

路由（英文：router）就是对应关系。

## SPA 与前端路由

SPA 指的是一个 web 网站只有唯一的一个 HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成。 此时，不同组件之间的切换需要通过前端路由来实现。 结论：

在 SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成！

## 什么是前端路由

通俗易懂的概念：Hash 地址与组件之间的对应关系。

## 前端路由的工作方式

- 用户点击了页面上的路由链接
- 导致了 URL 地址栏中的 Hash 值发生了变化
- 前端路由监听了到 Hash 地址的变化
- 前端路由把当前 Hash 地址对应的组件渲染都浏览器中
- ![image-20220204002242118](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204002242118.png)

结论：前端路由，指的是 Hash 地址与组件之间的对应关系！

# vue-router 的基本用法

什么是 vue-router

vue-router 是 vue.js 官方给出的路由解决方案。它只能结合 vue 项目进行使用，能够轻松的管理 SPA 项目 中组件的切换。

vue-router 的官方文档地址：https://router.vuejs.org/zh/

安装 vue-router 包

创建路由模块

导入并挂载路由模块

声明路由链接和占位符

在 vue2 的项目中，安装 vue-router 的命令如下：

```
npm i vue-router -S
```

在 src 源代码目录下，新建 router/index.js 路由模块，并初始化如下的代码：

```js
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter()
// 向外共享路由
export default router
```

在 src/main.js 入口文件中，导入并挂载路由模块。示例代码如下：

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})
// 向外共享路由
export default router

```

在 src/App.vue 组件中，使用 vue-router 提供的 和 声明路由链接和占位符：

```vue
<template>
  <div id="app">
    <h1>App</h1>
    <hr>
    <div>
      <a href="#/home">home</a><a href="#/movie">movie</a><a href="#/about">about</a>
    </div>
<!--    只要在项目中安装配置了vue-router 就可以使用router-view组件了-->
<!--    他的作用很简单 就是占位符-->
<router-view></router-view>
  </div>
</template>

<script>
// import About from './components/About'
// import Movie from './components/Movie'
// import Home from './components/Home'

export default {
  name: 'App',
  components: {

  }

}

</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  display: flex;
}

a {
  padding: 0 10px;
}
</style>
```

在 src/router/index.js 路由模块中，通过 routes 数组声明路由的匹配规则。示例代码如下：

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})
// 向外共享路由
export default router
```

## 路由2

```
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    require: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
```

```vue
<template>
  <div id="app">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>Vue Router Demo</h2></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <router-link to="home" class="list-group-item" active-class="active">home</router-link>
            <router-link to="about" class="list-group-item" active-class="active">about</router-link>
          </div>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
```

# vue-router 的常见用法

## 路由重定向

路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。 通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    { path: '/', redirect: Home },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/about', component: About }
  ]
})
// 向外共享路由
export default router
```

## 嵌套路由

通过路由实现组件的嵌套展示，叫做嵌套路由。

![image-20220204134348928](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204134348928.png)

在 src/router/index.js 路由模块中，导入需要的组件，并使用 children 属性声明子路由规则：

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: 'left',
          component: About_left
        },
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router
```

默认子路由

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        {
          path: 'left',
          component: About_left
        },
        // 访问about/right时，展示Right组件
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router

```

```
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        {
          path: 'left',
          component: About_left
        },
        // 访问about/right时，展示Right组件
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router
```

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        {
          path: 'left',
          component: About_left
        },
        // 访问about/right时，展示Right组件
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router
```

```
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        {
          path: 'left',
          component: About_left
        },
        // 访问about/right时，展示Right组件
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router
```

## 动态路由匹配

思考：有如下 3 个路由链接

![image-20220204144531595](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204144531595.png)

定义如下 3 个路由规则，是否可行???

![image-20220204144539704](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204144539704.png)

缺点：路由规则的复用性差

```
<template>
  <div>
    <div>
<!--      <router-view></router-view>-->
      <ul>
        <li v-for="item in list" :key="item.id">{{item.id}}
<!--        <！-跳转路由并携带query参数，to的字符串写法  跳转路由并携带参数-->
<!--           <router-link :to="`/home/home_content/content_area?id=${item.id}&name=${item.name}`">{{item.name}}</router-link>-->
<!--        <！-跳转路由并携带query参数，to的对象写法  -->
          <router-link :to="{
            name:'content_area',
            query:{
              id:item.id,
              name:item.name
            }
          }">{{item.name}}</router-link>

        </li>
        <router-view></router-view>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-content',
  data () {
    return {
      list: [{ id: 1, name: '张三' }, { id: 2, name: '李四' }, { id: 3, name: '王五' }]
    }
  }
}
</script>

<style scoped>

</style>

```

```
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Content from '@/components/Home-page-content/Home-content'
import Page from '@/components/Home-page-content/Home-page'
import Contentarea from '../components/content/home-content-area'
import Pagearea from '../components/page/home-page-area'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'home_content',
          component: Content,
          children: [
            {
              path: 'content_area',
              name: 'content_area',
              component: Contentarea
            },
            {
              path: 'page_area',
              component: Pagearea
            }
          ]
        },
        {
          path: 'home_page',
          component: Page
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router
```

### 动态路由的概念

动态路由指的是：把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。 在 vue-router 中使用英文的冒号（:）来定义路由的参数项。示例代码如下：

![image-20220204152346394](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204152346394.png)

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie/:Mid',
      component: Movie
    },
    {
      // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        {
          path: 'left',
          component: About_left
        },
        // 访问about/right时，展示Right组件
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router
```

$route.params 参数对象

在动态路由渲染出来的组件中，可以使用 this.$route.params 对象访问到动态匹配的参数值

```
<!--    this.$route是路由的参数对象-->
<!--    this.$router是路由的导航对象-->
```

```vue
<template>
  <div>
    <h1>movie</h1>
    <button @click="show">带</button>
    <p>{{$route.params}}</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  methods: {
    show () {
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>

</style>
```

## 使用 props 接收路由参数

为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参。示例代码如下：

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import About_left from '@/components/About/About-left'
import About_right from '@/components/About/About-right'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie/:Mid',
      component: Movie,
      // 可以为路由规则开启传参,从而方便的拿到动态参数的值
      props:true
    },
    {
      // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        {
          path: 'left',
          component: About_left
        },
        // 访问about/right时，展示Right组件
        {
          path: 'right',
          component: About_right
        }
      ]
    }
  ]
})
// 向外共享路由
export default router
```

```vue
<template>
  <div>
    <h1>movie</h1>
    <button @click="show">带</button>
<!--    this.$route是路由的参数对象-->
<!--    this.$router是路由的导航对象-->
    <p>{{Mid}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Movie',
  props:["Mid"],
  methods: {
    show () {
      // console.log(this.$route.params.Mid)
    }
  }
}
</script>

<style scoped>

</style>
```

## 声明式导航 & 编程式导航

在浏览器中，点击链接实现导航的方式，叫做声明式导航。例如：

- ⚫ 普通网页中点击 链接、vue 项目中点击 都属于声明式导航

在浏览器中，调用 API 方法实现导航的方式，叫做编程式导航。例如：

- ⚫ 普通网页中调用 location.href 跳转到新页面的方式，属于编程式导航

### vue-router 中的编程式导航 AP

vue-router 提供了许多编程式导航的 API，其中最常用的导航 API 分别是：

- ```js
  -  ① this.$router.push('hash 地址')
    -  ⚫ 跳转到指定 hash 地址，并增加一条历史记录 
  
  - ② this.$router.replace('hash 地址') 
    - ⚫ 跳转到指定的 hash 地址，并替换掉当前的历史记录
  -  ③ this.$router.go(数值 n)
    -  ⚫ 实现导航历史前进、后退
  
  push 和 replace 的区别：
  ⚫ push 会增加一条历史记录
  ⚫ replace 不会增加历史记录，而是替换掉当前的历史记录
  
  ```

  ```vue
  <template>
    <div>
      <h1>movie</h1>
      <button @click="show">带</button>
  <!--    this.$route是路由的参数对象-->
  <!--    this.$router是路由的导航对象-->
      <p>{{Mid}}</p>
      <el-button @click="showBack">home</el-button>
      <el-button @click="showRep">home</el-button>
      <el-button @click="go">-1</el-button>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Movie',
    props: ['Mid'],
    methods: {
      show () {
        // console.log(this.$route.params.Mid)
        console.log(this.$route)
      },
      showBack () {
        this.$router.push('/home')
      },
      showRep () {
        this.$router.replace('/home')
      },
      go () {
        this.$router.go(-1)
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  ```

### $router.go 的简化用法

在实际开发中，一般只会前进和后退一层页面。因此 vue-router 提供了如下两个便捷方法：

- ① $router.back()
- ⚫ 在历史记录中，后退到上一个页面
- ② $router.forward()
- ⚫ 在历史记录中，前进到下一个

### 缓存路由

```
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
```

## 生命周期

```
路由组件独有的
  activated() {

  },
  deactivated() {

  }
```

## 导航守卫

导航守卫可以控制路由的访问权限。示意图如下

![image-20220204220016148](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204220016148.png)

##   

### 全局前置守卫

每次发生路由的导航跳转时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行 访问权限的控制：

```js
// 导入组件
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import About from '@/components/About'
import AboutLeft from '@/components/About/AboutLeft'
import AboutRight from '@/components/About/AboutRight'
// 导入Vue包跟router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 调用Vue.use()函数,把VueRouter安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
  // routes是一个数组,定义hash地址与组件之间对应关系
  routes: [
    // 路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    // 可以为路由规则开启传参,从而方便的拿到动态参数的值
    { path: '/movie/:Mid', component: Movie, props: true },
    { // about 页面的路由规则（父级路由规则
      path: '/about',
      component: About,
      redirect: '/about/left',
      // 子路由规则
      children: [// 通过children属性，嵌套声明子级路由规则
        // 访问/about/left时，展示Left组件
        { path: 'left', component: AboutLeft },
        // 访问about/right时，展示Right组件
        { path: 'right', component: AboutRight }
      ]
    }
  ]
})
// 为router实例对象，声明全局前置导航守卫
// 每次发生路由导航跳转的时候，都会自动触发f这个“回调函数”
router.beforeEach(function (to, from, next) {

})
export default router

```

### 守卫方法的 3 个形参

全局前置守卫的回调函数中接收 3 个形参，格式为：

```js
router.beforeEach(function (to, from, next) {
	to 是将要访问的路由的信息对象
    from 是将要离开的路由的信息对象
    next 是一个函数 调用next() 表示放行 允许这次路由导航
})
```

### next 函数的 3 种调用方式

参考示意图，分析 next 函数的 3 种调用方式最终导致的结果：

![image-20220204234257226](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220204234257226.png)

当前用户拥有后台主页的访问权限，直接放行：next()

当前用户没有后台主页的访问权限，强制其跳转到登录页面：next('/login')

当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)

## 后置路由守卫

```
router.afterEach((to, from)=>{
  console.log('后置守卫',to,from)
})
```

# vuex

## 理解Vuex

概念： 专门在ue中实现集中式状态（数据）管理的一个vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

## 什么时候使用Vuex

多个组件依赖于同一状态

来自不同组件的行为需要变更同一状态

![image-20220214121525089](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220214121525089.png)

把数据交给state保管

## 搭建Vuex环境

### mian.js

```js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

```

### store/index.js

```js
// vuex的管理组件

// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions--响应组件中的动作
const actions = {}
// 准备mutations--用于操作数据(state)
const mutations = {}
// state--用于存储数据
const state = {}
// 创建Store并导出Store
export default new Vuex.Store({
  actions,
  mutations,
  state
})

```

## vuex求和

### mian.js

```js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

### 组件

```vue
<template>
  <div>
    <h1>当前的和为{{}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="qi">当前求和为奇数再加</button>
    <button @click="deng">等等+1</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data () {
    return {
      n: 1, // 选择的数字
      num: 0// 当前的数字
    }
  },
  methods: {
   
  },
  mounted () {
    console.log('count', this)
  }
}
</script>

<style scoped>
  button{
    margin: 0 5px;
  }
</style>

```

```js
methods: {
    jia () {
      // console.log(this)
      // dispatch('vuex里面接受值的函数', this.n)，把n的值传递到store/index.js上
     this.$store.commit('JIA', this.n)
    },
  },
```

### store/index.js

```js
// vuex的管理组件

// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions--响应组件中的动作
const actions = {
  获取count里面的函数响应
  jia (miniStore, num) {
  console.log(miniStore)
  miniStore.commit('JIA', num)
  console.log(num)
 },
 
}
// 准备mutations--用于操作数据(state)
const mutations = {
  JIA (state, value) {
    this.state.num += value
  },
}
// state--用于存储数据
const state = {
  num: 0
}
// 创建Store并导出Store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

## 优化后

### 组件

```
jia () {
  // console.log(this)
  // dispatch('vuex里面接受值的函数', this.n)
  this.$store.commit('JIA', this.n)
},
```

index

```js
const actions = {
  // 获取count里面的函数响应
  // jia (miniStore, num) {
  //   // console.log(miniStore)
  //   miniStore.commit('JIA', num)
  //   // console.log(num)
  // },
}
// 准备mutations--用于操作数据(state)
const mutations = {
  JIA (state, value) {
    this.state.num += value
  },
}
```

### 完整版

#### store/iindex.js

```

// vuex的管理组件

// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions--响应组件中的动作
const actions = {
  // 获取count里面的函数响应
  // jia (miniStore, num) {
  //   // console.log(miniStore)
  //   miniStore.commit('JIA', num)
  //   // console.log(num)
  // },
  // jian (minStore, num) {
  //   minStore.commit('JIAN', num)
  // },
  pd (minStore, num) {
    if (minStore.state.num % 2) {
      minStore.commit('JIA', num)
    }
  },
  set (minStore, num) {
    setTimeout(function () {
      minStore.commit('JIA', num)
    }, 500)
  }
}
// 准备mutations--用于操作数据(state)
const mutations = {
  JIA (state, value) {
    this.state.num += value
  },
  JIAN (state, value) {
    this.state.num -= value
  }
}
// state--用于存储数据
const state = {
  num: 0
}
// 创建Store并导出Store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

#### count

```vue
<template>
  <div>
    <h1>当前的和为{{$store.state.num}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="qi">当前求和为奇数再加</button>
    <button @click="deng">等等+1</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data () {
    return {
      n: 1, // 选择的数字
      num: 0// 当前的数字
    }
  },
  methods: {
    jia () {
      // console.log(this)
      // dispatch('vuex里面接受值的函数', this.n)
      this.$store.commit('JIA', this.n)
    },
    jian () {
      this.$store.commit('JIAN', this.n)
    },
    qi () {
      this.$store.dispatch('pd', this.n)
    },
    deng () {
      this.$store.dispatch('set', this.n)
    }
  },
  mounted () {
    console.log('count', this)
  }
}
</script>

<style scoped>
  button{
    margin: 0 5px;
  }
</style>

```

## _getters

### index.js

```
const getters = {
  bigNum (state) {
    return state.num * 10
  }
}
```

### 组件

```vue
<template>
  <div>
    <h1>当前的和为{{$store.state.num}}</h1>
    <h3>当前的和为{{$store.getters.bigNum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="qi">当前求和为奇数再加</button>
    <button @click="deng">等等+1</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data () {
    return {
      n: 1, // 选择的数字
      num: 0// 当前的数字
    }
  },
  methods: {
    jia () {
      // console.log(this)
      // dispatch('vuex里面接受值的函数', this.n)
      this.$store.commit('JIA', this.n)
    },
    jian () {
      this.$store.commit('JIAN', this.n)
    },
    qi () {
      this.$store.dispatch('pd', this.n)
    },
    deng () {
      this.$store.dispatch('set', this.n)
    }
  },
  mounted () {
    console.log('count', this.$store)
  }
}
</script>

<style scoped>
  button{
    margin: 0 5px;
  }
</style>

```

