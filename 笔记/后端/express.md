

[TOC]



## Express简介

### 什么是Express

官方给出的概念: Express是基于 Node js平台,快速、开放、极简的Web开发框架

通俗的理解Express的作用和Node.js内置的http模块类似,是专门用来创建Web服务器的

### 进一步理解 Express

1. 思考:不使用 Express 1能否创建Web服务器?
   - 答案:能,使用 Node js提供的原生htt模块即可。
2. 思考:既生瑜何生亮(有了http内置模块,为什么还有用Express)?
   - 答案:http内置模块用起来很复杂,开发效率低Express是基于内置的http模块进步封装出来的,能够极大的提高开发效率
3. 思考http内置模块与Express是什么关系?
   - 答案:类似于浏览器中 Web ap和 jquery的关系。后者是基于前者进步封装出来的

### Express能做什么

对于前端程序员来说,最常见的两种服务器,分别是:

1. Web网站服务器:专门对外提供Web网页资源的服务器。
2. API接口服务器:专门对外提供AP接口的服务器。

使用 Express,我们可以方便、快速的创建Web网站的服务器或AP接口的服务器

## Express的基本使用

### 安装

在项目所处的目录中,运行如下的终端命令,即可将 express安装到项目中使用

```
npm i express@4.17.1
```

### 创建基本的Web服务器

```javascript
// 导入express
let express=require('express');
// 创建web服务器
let app=express();
// 调用app.listen(端口号,启动成功后的回调函数),启动服务器
app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```

### 监听GET请求

通过 app. get()方法,可以监听客户端的GET请求,具体的语法格式如下:

```javascript
// 参数1:客户端请求的url地址
// 参数2:客户对应的处理函数
//     req:请求对象(包含了与请求相关的属性与方法)
//     res:响应对象(包含了与响应相关的属性与方法)
let express=require('express');
let app=express();
app.get('/',function (req,res) {
    res.send({name:'js',age:"18",gen:'node'});
})
app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```



### 监听POST请求

通过 app. post0方法,可以监听客户端的POST请求,具体的语法格式如下

```javascript
let express=require('express');
let app=express();
app.post('/', (req, res) => {
  res.send("请求成功");
});
app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})
```

### 把内容响应给客户端

```
 res.send();
```

### 获取获取URL中携带的查询参数

通过 req. query对象,可以访问到客户端通过查询字符串的形式,发送到服务器的参数:

```javascript

let express=require('express');
let app=express();
app.get('/',function (req,res) {
    // req.query默认是一个空对象
    // 客户端使用 ？name=zs&age=20 这种查询字符串形式,发送服务器的参数
    // 可以通过req.query 对象访问到 例如
    // req.query
    req.query={
        a:1,
    }
    res.send(req.query);
})
app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```

### 获取url的动态参数

通过 reg- params对象,可以访问到URL中,过:匹配到的动态参数:

```javascript

let express=require('express');
let app=express();
app.get('/user/:name/:id',function (req,res) {
    res.send(req.params);
})
app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```

### 静态资源托管

#### 1.express static()

express提供了一个非常好用的函数,叫做 express. static(),通过它我们可以非常方便地创建一个静态资源服务器,例如,通过如下代码就可以将public目录下的图片、CSS文件、 Javascript文件对外开放访问了:

```javascript
let express=require('express');
let app=express();
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```

http://127.0.0.1:3000/index.html

http://127.0.0.1:3000/index.css

http://127.0.0.1:3000/index.js

注意: Express在指定的静态目录中查找文件,并对外提供资源的访问路径。因此,存放静态文件的目录名不会出现在URL中

#### 2.托管多个静态资源目录

如果要托管多个静态资源目录,请多次调用 express static()函数

```javascript
let express=require('express');
let app=express();

app.use(express.static('public'));
app.use(express.static('start'))

app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```

访问静态资源文件时, express static()函数会根据目录的添加顺序查找所需的文件。

#### 3.挂载路径前缀

如果希望在托管的静态资源访问路径之前,挂载路径前缀,则可以使用如下的方式:

```javascript
let express=require('express');
let app=express();

app.use('/public',express.static('public'));
app.use('/start',express.static('start'))

app.listen(3000,()=>{
    console.log("hell|http://127.0.0.1:3000");
})

```

## nodemon

### 1.为什么要使用nodemon

在编写调试 Node js项目的时候,如果修改了项目的代码,则需要频繁的手动 close掉,然后再重新启动,非常繁琐

现在,我们可以使用nodemon(https://www.npmjs.com/package/nodemon)这个工具,它能够监听项目文件的变动,当代码被修改后, nodemon会自动帮我们重启项目,极大方便了开发和调试

### 2.安装 nodemon

```
npm i -g nodemon
```

### 3.使用 nodemon

当基于 Node js编写了一个网站应用的时候,传统的方式,是运行 node app js命令,来启动项目。这样做的坏处是:代码被修改之后,需要手动重启项目。

现在,我们可以将node命令替换为 nodemon命令,使用 nodemon app js来启动项目。这样做的好处是:代码被修改之后,会被 nodemon监听到,从而实现自动重启项目的效果

原来的启动项目

```
node express.staic.js
```

//nodemon启动项目

```
nodemon express.staic.js
```

## 路由

### 1.什么是路由

广义上来讲,路由就是映射关系。

#### 路由的概念

![image-20220115134151580](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115134151580.png)

##### Express中的路由

在 Express中,路由指的是客户端的请求与服务器处理函数之间的映射关系

Express中的路由分3部分组成,分别是请求的类型、请求的URL地址、处理函数,格式如下:

```
app.METHODS(PATH,HANDLER)
```

```javascript
let express=require('express');
let app=express();

app.get('/',function (res,err) {
    err.send('get请求')
})
app.post('/',function (res,err) {
    err.send("post请求")
})
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})

```

##### 路由的匹配过程

每当一个请求到达服务器之后,需要先经过路由的匹配,只有匹配成功之后,才会调用对应的处理函数

在匹配时,会按照路由的顺序进行匹配,如果请求类型和请求的URL同时匹配成功,则 Express会将这次请求,转交给对应的 function函数进行处理。

![image-20220115135416824](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115135416824.png)

### 路由的使用

在 Express i中使用路由最简单的方式,就是把路由挂载到app上,示例代码如下:

```javascript
let express=require('express');
// 创建名为app
let app=express();
//挂载路由
app.get('/',(rse,err)=>{err.send('get请求')})
app.post('/',(rse,err)=>{err.send('post请求')})
// 启动服务器
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})

```

#### 模块化路由

为了方便刈路由进行模块化的管理, Express不建议将路由直接挂载到app上,而是推荐将路由抽离为单独的模块

将路由抽离为单独模块的步骤如下

1. 创建路由模块对应的js文件
2. 调用 express Router()函数创建路由对象
3. 像路由对象挂载具体的路由
4. 使用 module exports向外共享路由对象
5. 使用 app. use0函数注册路由模块

router.js

```javascript
//导入 express
let express=require("express");
//创建路由对象
let router=express.Router();
//挂载获取用户列表的路由
router.get('/user/list',function (res,err) {
    err.send('gei')
})
router.post('/user/list',function (res,err) {
    err.send('post')
})
//向外导出路由对象
module.exports=router;
```

index.js

```javascript
const express=require("express");
//注册路由模块
let app=express();// app.use()//注册全局中间件
let router=require("./router");
app.use(router);
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000/user/list")
})
```

#### 为路由模块添加前缀

类似于托管静态资源时,为静态资源统挂载访问冋前缀-样,路由模块添加前绥的方式也非常简单:

```javascript
const express=require("express");
let app=express();
let router=require("./router");
// app.use()
app.use('/public',router);
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000/user/list")
})
```

http://127.0.0.1:3000/public/user/list/

## 中间件

特指业务流程的中间处理环节。

![image-20220115145045263](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115145045263.png)

### 中间件的概念

1. Express中间件的调用流程当一个请求到达 Express的服务器之后,可以连续调用多个中间件,从而对这次请求进行预处理。

![image-20220115150231097](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115150231097.png)

### Express中间件的格式

Express的中间件,本质上就是—个 function处理函数, Express中间件的格式如下:

![image-20220115150409185](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115150409185.png)

注意:中间件函数的形参列表中,必须包含next参数。而路由处理函数中只包含req和res

### next函数的作用

next函数是实现多个中间件连续调用的关键,它表示把流转关系转交给下一个中间件或路由。

![image-20220115150738857](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115150738857.png)

### 定义中间件函数

可以通过如下的方式,定义一个最简单的中间件函数

```javascript
let mw=function (req,res,next) {
    console.log("这是个简单中间件")
    //把流转关系,转交给下一个中间件路由
    next();
}
```

### 全局生效的中间件

客户端发起的任何请求,到达服务器之后,都会触发的中间件,叫做全局生效的中间件。通过调用 app. use(中间件函数),即可定义一个全局生效的中间件,示例代码如下:

```javascript
const express=require("express");
let app=express();
// 定义一个简单的中间件
let mw=function (req,res,next) {
    console.log("这是个简单中间件")
    //把流转关系,转交给下一个中间件路由
    next();
}
app.use(mw)
app.get('/', (req, res) => {
    console.log("调用了get")
  res.send("get");
})

app.post('/user1',(req,res)=>{
    console.log("调用了post")
    res.send('post');
})

app.listen(3000,function () {
    console.log("http://127.0.0.1:3000")
})
```

简化全局中间件

```javascript
const express=require("express");
let app=express();
// 定义一个简单的中间件

app.use(function (req, res, next) {
    console.log("简化中间件");
    next();
})
app.get('/', (req, res) => {
    console.log("调用了get")
    res.send("get1");
})

app.post('/user1',(req,res)=>{
    console.log("调用了post")
    res.send('post1');
})

app.listen(3000,function () {
    console.log("http://127.0.0.1:3000")
})
```

### 中间件的作用

多个中间件之间,共享同一份req和res。基于这样的特性,我们可以在上游的中间件中,统一为req或res对象添加自定义的属性或方法,供下游的中间件或路由进行使用

![image-20220115153857650](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115153857650.png)

```javascript
const express=require("express");
let app=express();
//定义全局中间件的简化形式
app.use(function (req, res, next) {
    // 获取请求到达服务器的时间
    let item=Date.now();
    console.log(item)
    //为req对象挂自定义属性,从而把时间共享给后面的所有路由
    req.startTime=item;
    next();
})
app.get('/', (req, res) => {
    res.send("get1"+req.startTime);
})

app.post('/user1',(req,res)=>{

    res.send('post1'+req.startTime);
})

app.listen(3000,function () {
    console.log("http://127.0.0.1:3000")
})
```

### 局部生效的中间件

#### 定义单个局部中间件

不使用app.use0定义的中间件,叫做局部生效的中间件,示例代码如下

```
const express=require("express");
const app=express();
let mv= function (req,res,next) {
    console.log("中间件");
    next();
}
app.get('/',mv,(req,res)=>{
    res.send("你好");
})
app.post('/',mv,(req,res)=>{
    res.send("你好");
})
app.listen(3000,()=>{
    console.log("http://127.0.0.1")
});
```

#### 定义多个局部中间件

可以在路由中,通过如下两种等价的方式,使用多个局部中间件:

![image-20220115204308959](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220115204308959.png)

```javascript
const express=require("express");
const app=express();
let mv1= function (req,res,next) {
    console.log("中间件1");
    next();
}
let mv2= function (req,res,next) {
    console.log("中间件2");
    next();
}
//以下两种写法是"完全等价"的,可根据自己的喜好,选择任意一种方式进行使用
app.get('/',mv1,mv2,(req,res)=>{
    res.send("你好");
})
app.post('/',[mv1,mv2],(req,res)=>{
    res.send("你好");
})
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
});

```

### 中间件的注意事项

了解中间件的5个使用注意事项

1. ①一定要在路由之前注册中间件
2. ②客户端发送过来的请求,可以连续调用多个中间件进行处理
3. ③执行完中间件的业务代码之后,不要忘记调用next0函数
4. ④为了防止代码逻辑混乱,调用next0函数后不要再写额外的代码
5. ⑤连续调用多个中间件时,多个中间件之间,共享req和res对象

### 中间件的分类

为了方便大家理解和记忆中间件的使用

, Express官方把常见的中间件用法,分成了5大类,分别是:

#### ①应用级别的中间件

- 应用级别的中间件通过app.use0或app.get0或app.post0,绑定到app实例上的中间件,叫做应用级别的中间件,代码示例如下:

- ```javascript
  app.use(mv1,(req,res,next)=>{
      next()
  })
  app.get('/',mv1,mv2,(req,res)=>{
      res.send("你好");
  })
  ```

  

#### ②路由级别的中间件

- 绑定到 express Route()实例上的中间件,叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过,应用级别中间件是绑定到app实例上,路由级别中间件绑定到 router实例上,代码示例如下:

  ```javascript
  const express=require("express");
  const router=express.Router();
  router.use(function (req, res, next) {
      console.log("time",Date.now());
      next();
  })javas
  app.use('/',router)
  ```

  

#### ③错误级别的中间件

- 错误级别中间件的作用:专门用来捕获整个项目中发生的异常错误,从而防止项目异常崩溃的问题。

  格式:错误级别中间件的 function处理函数中,必须有4个形参,形参顺序从前到后,分别是(err,req,res,next)

  ```
  const express=require("express");
  const app=express();
  const router=express.Router();
  app.get('/', (req, res) => {
      //人为的制造错误
    throw new Error("服务器异常");
    res.send('home page');
  });
  //定义错误级别中间件,捕获整个项目的异常错误,从而防止程序的崩溃
  app.use((err,req,res,next)=>{
      console.log(`发生了错误${err.message}`);
      res.send(`Error${err.message}`)
  })
  app.listen(3000,function () {
      console.log("http://127.0.0.1:3000")
  })
  ```

  注意:错误级别的中间件必须注册在所有路由之后!

#### ④ Express内置的中间件

- 自 Express4.16.0版本开始, Express内置了3个常用的中间件,极大的提高了 Express项目的开发效率和体验:

  - express. static快速托管静态资源的内置中间件,例如:HTML文件、图片、CSS样式等(无兼容性)

  - express.json解析JSON格式的请求体数据(有兼容性,仅在4.16.0+版本中可用)

  - express urlencoded解析 Url-encoded格式的请求体数据(有兼容性,仅在4.16.0+版本中可用)

  - ```
    //解析json格式
    app.use(express.json());
    app.get('/', (req, res) => {
        console.log(req.body)
      res.send('home page');
    });
    
    //解析 Url-encoded
    app.use(express.urlencoded({extended:false}))
    app.post('/', (req, res) => {
        console.log(req.body);
        res.send("ok");
    });
    ```

    

  

#### 第三方的中间件

非 Express言方内置的,而是由第三方开发出来的中间件,叫做第三方中间件。在项目中,大家可以按需下载并配置第三方中间件,从而提高项目的开发效率

例如:在 express(@4.16.0之前的版本中,经常使用 body-parser这个第三方中间件,来解析请求体数据。使用步骤如下

1. 运行

   ```
   npm i body-parser//安装中间件
   ```

   

2. 使用require("body-parser")

   ```
   const parser=require("body-parser");
   ```

   

3. 调用app.use()

   ```
   app.use(parser.urlencoded({extended:false}))
   ```

   

   

   1.  body-parser

   2. ```
      const express=require("express");
      const app=express();
      const parser=require("body-parser");
      //使用app.use()注册中间件
      app.use(parser.urlencoded({extended:false}))
      app.post('/', (req, res) => {
          //如果没有配置任何解析表单数据的中间件,则req.body默认等于undefined
          console.log(req.body)
        res.send("hao1")
      });
      app.listen(3000,()=>{
          console.log("http://127.0.0.1:3000");
      })
      ```

      注意: Express内置的 express urlencode中间件,就是基于 body-parser这个第三方中间件进一步封装出来的

#### 自定义中间件

1.需求描述与实现步骤自己手动模拟一个类似于 express urlencode这样的中间件,来解析POST提交到服务器的表单数据实现步骤:

1. ①定义中间件

   1. 使用 app. use0来定义全局生效的中间件,代码如下

      ```
      const express=require("express");
      const app=express();
      //这是解析表单数据的中间件
      app.use((req, res, next) => {
        //定义中间件的业务逻辑
          
      });
      app.listen('3000',()=>{
          console.log("http://127.0.0.1:3000")
      })
      ```

      

2. ②监听req的data事件

   1. 在中间件中,需要监听req对象的dta事件,来获取客户端发送到服务器的数据。

   2. 如果数据量比较大,无法一次性发送完毕,则客户端会把数据切剷后,分批发送到服务器。所以data事件可能会触发多次每一次触发data事件时,获取到数据只是完整数据的一部分,需要手动对接收到的数据进行拼接。

      ​	

      ```
      const express=require("express");
      const app=express();
   //  str用来储存客户端发送过来的请求体数据
      let str='';
      //这是解析表单数据的中间件
      app.use((req, res, next) => {
      //  定义中间件的业务逻辑
          req.on('data',(chunk)=>{
              // 拼接请数据,隐式转换为字符串
              str+=chunk;
      
          })
      });
      app.listen('3000',()=>{
          console.log("http://127.0.0.1:3000")
      })
      ```
      
      

3. 监听req的end事件

   1. 当请求体数据接收完毕之后,会自动触发req的end事件。因此,我们可以在req的end事件中,拿到并处理完整的请求体数据。示例代码如下

      ```
      const express=require("express");
      const app=express();
      //  str用来储存客户端发送过来的请求体数据
      let str='';
      //这是解析表单数据的中间件
      app.use((req, res, next) => {
      //  定义中间件的业务逻辑
          req.on('data',(chunk)=>{
              // 拼接请数据,隐式转换为字符串
              str+=chunk;
      
          })
          //  监听req对象的end事件
          req.on("end",()=>{
              // 打印完整的请求体数据
              console.log(str);
            
          })
      });
      app.listen('3000',()=>{
          console.log("http://127.0.0.1:3000")
      })
      ```

      

4. 使用querystring模块解析请求体数据

   1. Node. js内置了一个 querystring模块,专门用来处理查询字符串。通过这个模块提供的 parse0函数,可以轻松把查询字符串,解析成对象的格式。示例代码如下

      ```
      const express=require("express");
      const app=express();
      //导入处理querystring的node.js模块
      const qs=require("querystring");
      
      //  str用来储存客户端发送过来的请求体数据
      let str='';
      ;
      //  这是解析表单数据的中间件
      app.use((req, res, next) => {
      //  定义中间件的业务逻辑
          req.on('data',(chunk)=>{
              // 拼接请数据,隐式转换为字符串
              str+=chunk;
      
          })
          //  监听req对象的end事件
          req.on("end",()=>{
              // 打印完整的请求体数据
      	  	const body=qs.parse(str)// 调用qs.parse()方法,把查询字符串解析成对象
              console.log(body)
          })
      });
      app.post('/', (req, res) => {
        res.send("ok");
      });
      app.listen('3000',()=>{
          console.log("http://127.0.0.1:3000")
      })
      ```

      

5. 将解析的数据对象挂载为req.body

   ```
   const express=require("express");
   const app=express();
   //导入处理querystring的node.js模块
   const qs=require("querystring");
   
   //  str用来储存客户端发送过来的请求体数据
   let str='';
   ;
   //  这是解析表单数据的中间件
   app.use((req, res, next) => {
   //  定义中间件的业务逻辑
       req.on('data',(chunk)=>{
           // 拼接请数据,隐式转换为字符串
           str+=chunk;
   
       })
       //  监听req对象的end事件
       req.on("end",()=>{
           // 打印完整的请求体数据
           const body=qs.parse(str)// 调用qs.parse()方法,把查询字符串解析成对象
           console.log(body)
           req.body=body;// 将解析处理的请求体对象挂载为req.body属性
           next()//最后 一定要调用next()函数,执行后续的业务逻辑
           //把字符串格式的请求体数据,解析成对象格式
       })
   });
   app.post('/', (req, res) => {
     res.send("ok");
   });
   app.listen('3000',()=>{
       console.log("http://127.0.0.1:3000")
   })
   ```

   

6. 将自定义的中间件封装为模块

   模块

   ```
   const express=require("express");
   const app=express();
   //导入处理querystring的node.js模块
   const qs=require("querystring");
   
   //  str用来储存客户端发送过来的请求体数据
   let str='';
   let mv= (req, res, next) => {
   //  定义中间件的业务逻辑
       req.on('data',(chunk)=>{
           // 拼接请数据,隐式转换为字符串
           str+=chunk;
   
       })
       //  监听req对象的end事件
       req.on("end",()=>{
           // 打印完整的请求体数据a
           const body=qs.parse(str)// 调用qs.parse()方法,把查询字符串解析成对象
           req.body=body;// 将解析处理的请求体对象挂载为req.body属性
           next()//最后 一定要调用next()函数,执行后续的业务逻辑
           //把字符串格式的请求体数据,解析成对象格式
       })
   }
   module.exports=mv
   ```

   自定义文件

   ```
   const express=require("express");
   const app=express();
   const mv=require("./zdyzjj");
   
   
   //  这是解析表单数据的中间件
   //
   app.use(mv);
   app.post('/', (req, res) => {
       console.log()
       res.send(req.body);
   });
   app.listen('3000',()=>{
       console.log("http://127.0.0.1:3000")
   })
   ```

## 使用express编写接口

项目结构

express服务器

- express接口
- express中间件
- express-api.js

### 1.创建最基本的服务器

express接口.js

```
const express=require("express");
const app=express();
let ip='http://127.0.0.1:3000';
let router=require("./express中间件");
app.use("/api",router);

app.listen(3000,function () {
    console.log(`接口地址:${ip}`);
})
```

express中间件.js

```
const express=require("express");
const router=express.Router();
// 在这挂载路由
module.exports=router;
```

### 编写get请求

express中间件.js

```
const express=require("express");
const router=express.Router();
// 在这挂载路由
router.get("/get",(req,show)=>{
    // 通过req.query获取客户端通过查询字符串,发送到服务器的数据
    const query=req.query;
    //通过res.send()方法,向客户端响应处理的结果
    show.send({
        status:0,//0表示处理成功,1表示处理失败
        msg:'GET 请求成功',//状态描述
        data:query//需要响应给客户的数据
    })
})
module.exports=router;
```

### 编写post请求

```
const express=require("express");
const router=express.Router();
// 在这挂载路由
router.post("/get",(req,show)=>{
    // 通过req.query获取客户端通过查询字符串,发送到服务器的数据
    const body=req.query;
    //通过res.send()方法,向客户端响应处理的结果
    show.send({
        status:0,//0表示处理成功,1表示处理失败
        msg:'POST 请求成功',//状态描述
        data:body //需要响应给客户的数据
    })
})
module.exports=router;
```

注意:如果要获取URL- encoded格式的请求体数据,必须配置中间件app.use( express urlencode extended:fase〗)Q

### 模拟前端获取数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://cdn.staticfile.org/jquery/1.10.0/jquery.js"></script>
</head>
<body>
<button>get</button>
<button>post</button>
<script>
  $(function (){
    $("button").eq(0).on('click',function () {
      fetch('http://127.0.0.1:3000/api/get').then(res=>res.json()).then(res=>{
        console.log(res)})
    })
  })
  $(function (){
    $("button").eq(1).on('click',function () {
      fetch('http://127.0.0.1:3000/api/post',{
        method:"POST",
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(res=>res.json()).then(res=>{
        console.log(res)})
    })
  })
</script>
</body>
</html>
```

## 后端解决跨域问题

### CORS跨资源共享

刚才编写的GET和POST接口,存在一个很严重的问题:不支持跨域请求。

#### 解决接口跨域问题的方案主要有两种

1. CORS(主流的解决方案,推荐使用)
2. JSONP(有缺陷的解决方案:只支持GET请求)

#### 使用cors中间件解决跨域问题

cors是 Express的一个第三方中间件。通过安装和配置cors中间件,可以很方便地解决跨域问题

1. 运行npm i cors 安装中间件
2. 使用 const cors=require("cors") 导入中间件
3. 在路由之前调用app.use(cors())配置中间件

![image-20220118133811940](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118133811940.png)

#### 什么是CORS

CORS(Cross-originResourceSharing,跨域资源共享)由一系列HTTP响应头组成,这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源浏览器的同源安全策略默认会阻止网页“跨域”获取资源。

但如果接口服务器配置了CORS相关的HTP晌应头就可以解除浏览器端的跨域访问限制。

#### CORS的注意事项

1. CORS主要在服务器端进行配置。客户端浏览器无须做任何额外的配置,即可请求开启了CORS的接口。
2. CORS在浏览器中有兼容性。只有支持XmlhttprequestLevela2的浏览器,才能正常访问开启了CORs的服务端接口(例如:E10+、 Chrome4+、 Firefox3.5+

### CoRs响应头部

- Access-control-Aow- Origin

  - 响应头部中可以携带一个 Access- Control-Allow- Origin字段,其语法如下:

    - Access-Control-Allow-Origin: <origin> | *

    - 其中, ongin参数的值指定了允许访问该资源的外域URL。

    - 例如,下面的字段值将只允许来自http://itcast.cn的请求

    - ```javascript
          show.setHeader('Access-control-Allow- Origin','http://itcast.cn')
      ```

    - 如果指定了 Access-control-allow- Origin字段的值为通配符*,表示允许来自任何域的请求,示例代码如下

    - ```javascript
          show.setHeader('Access-control-Allow- Origin','*')
      ```

- CORS响应头部- Access- Control-Allow- Headers

  - 默认情况下,CORS仅支持窖户端向服务器发送如下的9个请求头:

    - Accept、 Accept-language、 Content-language、DPR、 Downlink、 Save-data、 Viewport-width、Wdth、Content-type(值仅限于 text/plain、 multipart// form-data、 application/x-www- form-urlencoded三者之一)

    - 如果客户端向服务器发送了额外的请求头信息,则需要在服务器端,通过 Access- Control- Allow- Headers对额外的请求头进行声明,否则这次请求会失

      - 允许客户端额外向服务器发送Content-Type 请求头和X-Custom-Header 请求头

      - 注意：允许多个请求头之间使用英文进行逗号分割

      - ```javascript
            show.setHeader('Access-Control-Allow-Headers','Content-Type','X-Custom-Header');
        
        ```

        

- coRS响应头部- Access- Contro- Allow-methods

  - 默认情况下,CORS仅支持客户端发起GET、POST、HEAD请求。

  - 如果客户端希望通过PUT、 DELETE等方式请求服务器的资源,则需要在服务器端,通过 Access- Control-Alow- Methods来指明实际请求所允许使用的HTTP方法。

    - 只允许post,get,delete,head请求方法

      - ```javascript
            show.setHeader('Access-Control-Allow-Methods','POST','GET','DELETE','HEAD');
        ```

    - 允许所有的http请求方法

      - ```javascript
            show.setHeader('Access-Control-Allow-Methods','*')
        ```

        

### CORS请求分类

#### 简单请求

同时满足以下两大条件的请求,就属于简单请求

1. ①请求方式:GET、POST、HEAD三者之
2. ②HTP头部信息不超过以下几种字段:无自定义头部字段、 Accept、 Accept-language、 Content-language、DPRDownlink、Save-Data、 Viewport-width、 Width、 Content-Type(只有三个值 application/x-www-form-urlencode, multipart/form-data, text/plain

#### 预检请求

只要符合以下任何一个条件的请求,都需要进行预检请求

1. ①请求方式为GET、POST、HEAD之外的请求 Method类型

2. ②请求头中包含自定义头部字段

3. 向服务器发送了 application/json格式的数据

   

在浏览器与服务器正式通信之前,浏览器会先发送 OPTION请求进行预检,以获知服务器是否允许该实际请求,所以这次的OPoN请求称为“预检请求”。服务器成功响应预检请求后,才会发送真正的请求,并且携带真实数据

#### 简单请求和预选请求的区别

简单请求的特点:客户端与服务器之间只会发生一次请求

预检请求的特点:客户端与服务器之间会发生两次请求, OPTION预检请求成功之后,才会发起真正的请求。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <script src="https://cdn.staticfile.org/jquery/1.10.0/jquery.js"></script>
</head>
<body>
<button>get</button>
<button>post</button>
<button>DELETE</button>
<script>
  $(function (){
    $("button").eq(0).on('click',function () {
      fetch('http://127.0.0.1:3000/api/get').then(res=>res.json()).then(res=>{
        console.log(res)})
    })
  })
  $(function (){
    $("button").eq(1).on('click',function () {
      fetch('http://127.0.0.1:3000/api/post',{
        method:"POST",
        headers:{
          'Content-Type':'application/x-www-form-urlencoded'
        }
      }).then(res=>res.json()).then(res=>{
        console.log(res)})
    })
  })
  $(function (){
      $("button").eq(2).on('click',function () {
          fetch('http://127.0.0.1:3000/api/delete',{
              method:"DELETE",
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              }
          }).then(res=>res.json()).then(res=>{
              console.log(res)})
      })
  })
</script>
</body>
</html>
```

### 回顾 JSONP的概念与特点

​	概念:浏览器端通过< script>标签的src属性,请求服务器上的数据,同时,服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。

1. 特点:①SONP不属于真正的Aax请求,因为它没有使用Xmlhttprequest这个对象。
2. ② JSONP仅支持GET请求,不支持POST、PUT、 DELETE等请求。

### 创建 JSONP接口的注意事项

如果项目中已经配置了CORS跨域资源共享,为了防止冲突,必须在配置CORS中间件之前声明丿SONP的接口。否则JSONP接口会被处理成开启了CORS的接口。示例代码如下

![image-20220118144454502](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118144454502.png)

### 实现 JSONP接口的步骤

1. ①获取客户端发送过来的回调函数的名字

   1. ```
      router.get('/jsonp',(req,res)=>{
          // 获取客户端发过去的回调函数的名字
          let func=req.query.callback;
      })
      ```

      

2. ②得到要通过 JSONP形式发送给客户端的数据

   1. ```
      router.get('/jsonp',(req,res)=>{
          // 获取客户端发过去的回调函数的名字
          let func=req.query.callback;
          // 得到要通过jsonp形式发送给客户端的数据
          let data={name:'zs',age:'18'}
      
      })
      ```

3. ③根据前两步得到的数据,拼接出一个函数调用的字符串

   1. ```
      router.get('/jsonp',(req,res)=>{
          // 获取客户端发过去的回调函数的名字
          let func=req.query.callback;
          // 得到要通过jsonp形式发送给客户端的数据
          let data={name:'zs',age:'18'}
          // 根据前两步得到的数据,拼接出一个回调函数的字符串
          let scriptStr=`${func}(${JSON.stringify(data)})`
      
      })
      ```

4. ④把上一步拼接得到的字符串,响应给客户端的<script>标签进行解析执行

   1. ```
      const express=require("express");
      const router=express.Router();
      router.get('/jsonp',(req,res)=>{
          // 获取客户端发过去的回调函数的名字
          let func=req.query.callback;
          // 得到要通过jsonp形式发送给客户端的数据
          let data={name:'zs',age:'18'}
          // 根据前两步得到的数据,拼接出一个回调函数的字符串
          let scriptStr=`${func}(${JSON.stringify(data)})`
          // 把上一步拼接到的字符串，响应给客户端<script>标签进行解析
          console.log(func)
          res.send(scriptStr)
      
      })
      module.exports=router;
      ```

      

注意: fetch不支持jsonp的请求

# 操作数据库

在项目中操作数据库的步骤

安装操作 MYSQL数据库的第三方模块( mysql)

通过mysq模块连接到 MYSQL数据库

通过mysq模块执行SQL语句

![image-20220119171656134](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220119171656134.png)

## 安装mysq模块

mysql模块是托管于npm上的第三方模块。它提供了在 Node. js项目中连接和操作 MYSQL数据库的能力。想要在项目中使用它,需要先运行如下命令,将mysq安装为项目的依赖包

## 配置 mysql模块

在使用mysql模块操作 MYSQL数据库之前,必须先对 mysql模块进行必要的配置,主要的配置步骤如下:

```javascript
// 导入mysql模块
const mysql=require("mysql");
// 建立与mysql 数据库的连接
const db=mysql.createPool({
    host:'127.0.0.1',	//数据库ip地址
    user:'root',		//数据库用户名
    password:'88888888', //数据库密码
    database:'my_db01'	 //操作的数据库名
})
```

## 测试 mysql模块能否正常工作

调用 db query0函数,指定要执行的SQL语句,通过回调函数拿到执行的结果:

```javascript
// 导入mysql模块
const mysql=require("mysql");
// 建立与mysql 数据库的连接
const db=mysql.createPool({
    host:'127.0.0.1',//数据库ip地址
    user:'root',
    password:'88888888',
    database:'my_db01'
})
// 测试mysql 模块能否正常工作
db.query('select 2',(err,res)=>{
    //mysql 模块工作期间报错了
    if (err)return console.log(err.message)
    //能够成功的执行sql语句
    console.log(res);
})
```

## 使用mysq模块操作 MYSQL数据库

查询stu表中所有的数据:

### 查询数据

```javascript
// 导入mysql模块
const mysql=require("mysql");
// 建立与mysql 数据库的连接
const db=mysql.createPool({
    host:'127.0.0.1',//数据库ip地址
    user:'root',
    password:'88888888',
    database:'my_db01'
})
// 查询stu表中所有的数据
db.query('select * from st1',(err,res)=>{
    //查询失败
    if (err)return console.log(err.message)
    //查询成功
    console.log(res);
})
```

 查询到的数据

```apl
[
  RowDataPacket {
    stu_id: 20010500,
    stu_name: '曾华',
    stu_num: 75,
    stu_kuan: 0,
    stu_age: 18
  },
  RowDataPacket {
    stu_id: 20010501,
    stu_name: '匡明',
    stu_num: 81,
    stu_kuan: 0,
    stu_age: 19
  },
  RowDataPacket {
    stu_id: 20010502,
    stu_name: '王丽',
    stu_num: 66,
    stu_kuan: 0,
    stu_age: 18
  },
  RowDataPacket {
    stu_id: 20010503,
    stu_name: '李军',
    stu_num: 51,
    stu_kuan: 1,
    stu_age: 18
  },
  RowDataPacket {
    stu_id: 20010504,
    stu_name: '王芳',
    stu_num: 59,
    stu_kuan: 1,
    stu_age: 18
  },
  RowDataPacket {
    stu_id: 20010505,
    stu_name: '陆君',
    stu_num: 77,
    stu_kuan: 0,
    stu_age: 19
  },
  RowDataPacket {
    stu_id: 20010506,
    stu_name: '李诚',
    stu_num: 81,
    stu_kuan: 0,
    stu_age: 20
  },
  RowDataPacket {
    stu_id: 20010507,
    stu_name: '张旭',
    stu_num: 95,
    stu_kuan: 0,
    stu_age: 18
  },
  RowDataPacket {
    stu_id: 20010508,
    stu_name: '王萍',
    stu_num: 91,
    stu_kuan: 0,
    stu_age: 19
  },
  RowDataPacket {
    stu_id: 20010509,
    stu_name: '刘冰',
    stu_num: 100,
    stu_kuan: 0,
    stu_age: 17
  },
  RowDataPacket {
    stu_id: 20010510,
    stu_name: '王五',
    stu_num: 67,
    stu_kuan: 0,
    stu_age: 18
  },
  RowDataPacket {
    stu_id: 20010511,
    stu_name: '李六',
    stu_num: 88,
    stu_kuan: 0,
    stu_age: 17
  },
  RowDataPacket {
    stu_id: 20010512,
    stu_name: '张三',
    stu_num: 95,
    stu_kuan: 1,
    stu_age: 19
  }
]

```

### 插入数据

向 stu表中新增数据,其中 stu_name为 Spider-Man, stu_num为21。示例代码如下

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
})
// 要插入的数据
let data={stu_name:'Spider',stu_num:51}
// 要执行的sql语句,？表示占位符
let sql='insert into stu (stu_name,stu_num) value (?,?)'
db.query(sql,[data.stu_name,data.stu_num],(err,res)=>{
    if (err)return console.log(err.message)//插入失败
    console.log(res)
})
```

```js
//打印结果

OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 20010515,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

```

#### affectedRows

判断语句执行的情况

affectedRows 一般用来在DELETE, [INSERT](https://so.csdn.net/so/search?q=INSERT&spm=1001.2101.3001.7020) , REPLACE , UPDATE语句执行完成之后判断数据表中变化的行数 （如果数据表没有变化，则行数为0）。

1. DELETE语句执行成功，返回删除的行数，INSERT INTO TABLE VALUES 或者 INSERT INTO TABLES SET 都是返回插入成功的行数，这些是比较明确的。
2. UPDATE语句执行成功时，则有可能也为0。如果要更新的值与原来的值相同，则affected_rows为0；否则，为更新的行数。
3. INSERT INTO TABLE VALUES 或者 INSERT INTO TABLES SET 都是返回插入成功的行数，插入成功则返回1，否则返回0 。
4. INSERT INTO TABLE VALUES … ON DUPLICATE KEY UPDATE … 语句执行成功后，则会有3种情况，当不存在唯一索引冲突时，执行INSERT操作，affected_rows结果为1；当存在主键冲突时，执行UPDATE操作，如果要更新的值与原来的相同，则affected_rows为0，否则为2。

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
})
// 要插入的数据
let data={stu_name:'王室',stu_num:100}
// 要执行的sql语句,？表示占位符
let sql='insert into stu (stu_name,stu_num) value (?,?)'
db.query(sql,[data.stu_name,data.stu_num],(err,res)=>{
    if (err)return console.log(err.message)//插入失败
    console.log(res.affectedRows)
})


```

执行结果

```js
1
```

#### 插入数据的便捷方式

向表中新增数据时,如果数据对象的每个属性和数据表的字段一一对应,则可以通过如下方式快速插入数据:

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
})
// 插入数据的快捷方式
// 要插入的数据
const data  ={stu_name: '撒谎',stu_num: 94,stu_age: 18}
// 要执行的sql语句,？表示占位符
const sql='insert into stu set ?'
// 直接把数据对象当做占位符的值
db.query(sql,data,(err,res)=>{
    if (err)return console.log(err.message)
    if (res.affectedRows===1){
        console.log("插入数据成功")}
})
```

```js
I:\Program Files (x86)\web开发\node\npm\mysql\node操作mysql>node "mysql 插入数据.js"
插入数据成功
```

### 更新数据

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
})
let data={
    stu_id:20010512,
    stu_name:'行啊擦',
    stu_num: 10,
    stu_age: 20,
};
let sql="update stu set stu_name=?,stu_num=?,stu_age=? where stu_id=?"
db.query(sql,[data.stu_name,data.stu_num,data.stu_age,data.stu_id],(err,res)=>{
    if (err)return console.log(err.message);
    console.log(res.affectedRows)
})
```

##### 更新数据的编写方式

更新表数据时,如果数据对象的每个属性和数据表的字段一一对应,则可以通过如下方式快速更新表数据

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
})
let data={
    stu_name:'大撒大撒',
    stu_num: 45,
    stu_age: 21,
    stu_kuan:2,
};
let id={
    stu_id:20010510
}
//要执行的sql语句
const sql="update stu set ? where stu_id=?";
// 调用db.query() 执行sql语句的同时,使用数组依次为占位符指定具体的值
db.query(sql,[data,id.stu_id],(err,res)=>{
    if (err)return console.log(err.message);
    console.log(res.affectedRows)
})
```

### 删除数据

在删除数据时,推荐根据d这样的唯一标识,来删除对应的数据。示例如下

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
});
let data={
    stu_id: 20010504
}
let sql="delete from stu where stu_id=?";
db.query(sql,data.stu_id,(err,res)=>{
    if (err)return console.log(err.message);
    if (res){
        console.log("删除成功")
    };
})
```

#### 标记删除

使用 DELETE语句,会把真正的把数据从表中删除掉。为了保险起见,推荐使用标记删除的形式,来模拟删除的动作

所谓的标记删除,就是在表中设置类似于 status这样的状态字段,来标记当前这条数据是否被删除

```js
const mysql=require("mysql");
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'88888888',
    database:'my_db01'
});
let data={
    stu_id: 20010502
}
// 标记删除
// 根据 用户的status的值判断用户是不是被删除  ，0为正常,1为被删除用户
let sql="update stu set status=1 where stu_id=?";
db.query(sql,data.stu_id,(err,res)=>{
    if (err)return console.log(err.message);
     if (res){console.log("删除成功")};
})
```

# WEB开发模式

目前主流的Web开发模式有两种,分别是:

## ①基于服务端渲染的传统Web开发模式

服务端渲染的概念:服务器发送给客户端的HTML页面,是在服务器通过字符串的拼接,动态生成的。因此,客户端不需要使用Aax这样的技术额外请求页面的数据。代码示例如下:

服务端渲染的优缺点：

优点:

①前端耗时少。因为服务器端负责动态生成HTML内容,浏览器只需要直接渲染页面即可。尤其是移动端,更省电

②有利于SEO,因为服务器端响应的是完整的HTML页面内容,所以爬虫更容易爬取获得信息,更有利于SEO

缺点:

①占用服务器端资源。即服务器端完成HTML页面内容的拼接,如果请求较多,会对服务器造成一定的访问压力。

②不利于前后端分离,开发效率低。使用服务器端渲染,则无法进行分工合作,尤其对于前端复杂度高的项目,不利于项目高效开发。

## ②基于前后端分离的新型Web开发模式

前后端分离的概念:前后端分离的开发模式,依赖于Aax技术的广泛应用。简而言之,前后端分离的web开发模式,就是后端只负责提供AP接口,前端使用Ajax调用接口的开发模式。

前后端分离的优缺点：

优点

①开发体验好。前端专注于ω页面的开发,后端专注于api的开发,且前端有更多的选择性

②用户体好。Ajax技术的广泛应用,极大的提高了用户的体验,可以轻松实现页面的局部刷新。

③减轻了服务器端的渲染压力。因为页面最终是在每个用户的浏览器中生成的

## 如何选择Web开发模式

- 不谈业务场景而盲目选择使用何种开发模式都是耍流氓
- 比如企业级网站,主要功能是展示而没有复杂的交互,并且需要良好的SEO,则这时我们就需要使用服务器端渲染;而类似后台管理项目,交互性比较强,不需要考虑SEO,那么就可以使用前后端分离的开发模式

另外,具体使用何种开发模式并不是绝对的,为了同时兼顾了首页的渲染速度和前后端分离的开发效率,一些网站采用了首屏服务器端渲染+其他页面前后端分离的开发模式

## 身份认证

什么是身份认证身份认证( Authentication)又称“身份验证”、“鉴权”,是指通过一定的手段,完成对用户身份的确认。

日常生活中的身份认证随处可见,例如:高铁的验票乘车,手机的密码或指纹解锁,支付宝或微信的支付密码等。

在Web开发中,也涉及到用户身份的认证,例如:各大网站的手机验证码登录、邮箱密码登录、二维码登录等。

### 为什么需要身份认证

身份认证的目的,是为了确认当前所声称为某种身份的用户,确实是所声称的用户。

例如,你去找快递员取快递,你要怎么证明这份快递是你的。在互联网项目开发中,如何对用户的身份进行认证,是一个值得深入探讨的问题。例如,如何才能保证网站不会错误的将“马云的存款数额”显示到“马化腾的账户”上

不同开发模式下的身份认证对于服务端渲染和前后端分离这两种开发模式来说,分别有着不同的身份认证方案:

①服务端渲染推荐使用 Session认证机制

②前后端分离推荐使用JWT认证机制

### Session认证机制

#### HTTP协议的无状态性

了解HTTP协议的无状态性是进一步学习Session认证机制的必要前提

HTTP协议的无状态性,指的是客户端的每次HTTP请求都是独立的,连续多个请求之间没有直接的关系,服务器不会主动保留每次HTTP请求的状态

![image-20220120125537755](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120125537755.png)

#### 如何突破HTTP无状态的限制

对于超市来说,为了方便收银员在进行结算时给VP用户打折,超市可以为每个VP用户发放会员卡。

![image-20220120125710481](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120125710481.png)

注意:现实生活中的会员卡身份认证方式,在Web开发中的专业术语叫做 Cookie。

#### 什么是 Cookie

Cookie是存储在用户浏览器中的一段不超过4KB的字符串。它由一个名称(Name)、一个值( Value)和其它几个用于控制 Cookie有效期、安全性、使用范围的可选属性组成。

不同域名下的 Cookie各自独立,每当客户端发起请求时,会自动把当前域名下所有未过期的 Cookie一同发送到服务器。

Cookie的几大特性:

- ①自动发送
- ②域名独立
- ③过期时限

#### Cookie在身份认证中的作用

客户端第一次请求服务器的时候,服务器通过响应头的形式,向客户端发送一个身份认证的 Cookie,客户端会自动将 Cookie保存在浏览器中。

随后,当客户端浏览器每次请求服务器的时候,浏览器会自动将身份认证相关的 Cookie,通过请求头的形式发送给服务器,服务器即可验明客户端的身份。

![image-20220120130800018](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120130800018.png)

#### Cookie不具有安全性

由于 Cookie是存储在浏览器中的,而且浏览器也提供了读写 Cookie的AP,因此 Cookie很容易被伪造,不具有安全性。因此不建议服务器将重要的隐私数据,通过 Cookie的形式发送给浏览器。

![image-20220120131350665](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120131350665.png)

注意:干万不要使用 Cookie存储重要且隐私的数据!比如用户的身份信息、密码等。

#### 提高身份认证的安全性

为了防止客户伪造会员卡,收银员在拿到客户出示的会员卡之后,可以在收银机上进行刷卡认证。只有收银机确认存在的会员卡,才能被正常使用。

![image-20220120131550290](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120131550290.png)

这种“会员卡+刷卡认证”的设计理念,就是 Session认证机制的精髓。

#### Session的工作原理

![image-20220120132029429](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120132029429.png)

### 安装 express- session中间件

在 Express项目中,只需要安装 express- session中间件,即可在项目中使用 Session认证

```js
npm install express-session
```

### 配置 express- session中间件

express- session中间件安装成功后,需要通过app.use0来注册 session中间件,示例代码如下:

```js
const express=require("express");
const app=express();
// 导入session
const session = require("express-session");
app.use(session({
    secret:'token',         // secret 属性的值可以为任意字符串
    resave:false,           // 固定写法
    saveUninitialized:true  // 固定写法
}))
```

### 向 session中存数据

当 express-session中间件配置成功后,即可通过 req. session来访问和使用 session对象,从而存储用户的关键信息:

```js
const express=require("express");
const app=express();
// 导入session
const session = require("express-session");

app.use(session({
    secret:'token',         // secret 属性的值可以为任意字符串
    resave:false,           // 固定写法
    saveUninitialized:true  // 固定写法
}))
// 托管静态页面
app.use(express.static('./pages'))
// 解析post提交过来的数据
app.use(express.urlencoded({extended:false}));
// 登录api接口
app.post('/api/login', (req, res) => {
  if (req.body.username!=="admin"||req.body.password!=='000000'){
      return res.send({status:1,msg:"登录失败"})
  }
    //  将登录成功的用户信息保存到session中
    req.session.user=req.body// 用户的信息
    req.session.islogin=true // 用户的登录状态

    res.send({status:0,msg:"登录成功"})
});
```

### 从 session中取数据

可以直接从 req. session对象上获取之前存储的数据,示例代码如下

```js
const express=require("express");
const app=express();
// 导入session
const session = require("express-session");

app.use(session({
    secret:'token',         // secret 属性的值可以为任意字符串
    resave:false,           // 固定写法
    saveUninitialized:true  // 固定写法
}))
// 托管静态页面
app.use(express.static('./pages'))
// 解析post提交过来的数据
app.use(express.urlencoded({extended:false}));
// 登录api接口
app.post('/api/login', (req, res) => {
  if (req.body.username!=="admin"||req.body.password!=='000000'){
      return res.send({status:1,msg:"登录失败"})
  }
    //  将登录成功的用户信息保存到session中
    req.session.user=req.body// 用户的信息
    req.session.islogin=true // 用户的登录状态

    res.send({status:0,msg:"登录成功"})
});
// 获取用户姓名的接口
app.get('/api/username',(req,res)=>{
    if (!req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }
    res.send({status:0,msg:"success",username:req.session.user.username})
})
```

### 清空 session

调用 req.session. destroyo函数,即可清空服务器保存的 session信息。

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(
    session({
        secret: 'itheima',
        resave: false,
        saveUninitialized: true,
    })
)

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }

    // TODO_02：请将登录成功后的用户信息，保存到 Session 中
    // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
    req.session.user = req.body // 用户的信息
    req.session.islogin = true // 用户的登录状态

    res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
    // TODO_03：请从 Session 中获取用户的名称，响应给客户端
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,
    })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
    // TODO_04：清空 Session 信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功',
    })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function () {
    console.log('Express server running at http://127.0.0.1:3000')
})
```

#### 项目结构

| express-session1.js | pages      |
| :------------------ | ---------- |
|                     | index.html |
|                     | jquery.js  |
|                     | login.html |

express-session1.js

```js
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(
    session({
        secret: 'itheima',
        resave: false,
        saveUninitialized: true,
    })
)

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }

    // TODO_02：请将登录成功后的用户信息，保存到 Session 中
    // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
    req.session.user = req.body // 用户的信息
    req.session.islogin = true // 用户的登录状态

    res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
    // TODO_03：请从 Session 中获取用户的名称，响应给客户端
    if (!req.session.islogin) {
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username,
    })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
    // TODO_04：清空 Session 信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功',
    })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function () {
    console.log('Express server running at http://127.0.0.1:3000')
})

```

index.html

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>后台主页</title>
    <script src="jquery.js"></script>
</head>

<body>
<h1>首页</h1>

<button id="btnLogout">退出登录</button>

<script>
    $(function () {

        // 页面加载完成后，自动发起请求，获取用户姓名
        $.get('/api/username', function (res) {
            // status 为 0 表示获取用户名称成功；否则表示获取用户名称失败！
            if (res.status !== 0) {
                alert('您尚未登录，请登录后再执行此操作！')
                location.href = './login.html'
            } else {
                alert('欢迎您：' + res.username)
            }
        })

        // 点击按钮退出登录
        $('#btnLogout').on('click', function () {
            // 发起 POST 请求，退出登录
            $.post('/api/logout', function (res) {
                if (res.status === 0) {
                    // 如果 status 为 0，则表示退出成功，重新跳转到登录页面
                    location.href = './login.html'
                }
            })
        })
    })
</script>
</body>

</html>	
```

jquery

```

```

login.html

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录页面</title>
    <script src="./jquery.js"></script>
</head>

<body>
<!-- 登录表单 -->
<form id="form1">
    <div>账号：<input type="text" name="username" autocomplete="off" /></div>
    <div>密码：<input type="password" name="password" /></div>
    <button>登录</button>
</form>

<script>
    $(function () {
        // 监听表单的提交事件
        $('#form1').on('submit', function (e) {
            // 阻止默认提交行为
            e.preventDefault()
            // 发起 POST 登录请求
            $.post('/api/login', $(this).serialize(), function (res) {
                // status 为 0 表示登录成功；否则表示登录失败！
                if (res.status === 0) {
                    location.href = './index.html'
                } else {
                    alert('登录失败！')
                }
            })
        })
    })
</script>
</body>

</html>
```

### JWT认证机制

#### 了解 Session认证的局限性

Session认证机制需要配合 Cookie才能实现。由于( ookie默认不支持跨域访问,所以,当涉及到前端跨域请求后端接的时候,需做很多额外的配置,才能实现跨域 Session认证。

注意

当前端请求后端接口不存在跨域问题的时候,推荐使用 Session身份认证机制。

当前端需要跨域请求后端接口的时候,不推荐使用 Session身份认证机制,推荐使用丿W认证机制。

#### 什么是JWT

JWT(英文全称: SON Web Token)是目前最流行的跨域认证解决方案。

#### JWT的工作原理

![image-20220120182241692](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120182241692.png)

总结:用户的信息通过 Token字符串的形式,保存在客户端浏览器中。服务器通过还原 Token字符串的形式来认证用户的身份。

#### JWT的组成部分

JT通常由三部分组成,分别是 Header(头部)、 Payload(有效荷载)、 Signature(签名者之间使用英文的“"分隔,格式如下

```
Header. Payload. Signature
```

![image-20220120182754161](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120182754161.png)

#### WT的三个部分

WT的三个部分各自代表的含义

JWT的三个组成部分,从前到后分别是 Header、 Payload、 Signature。

其中

Payload部分才是真正的用户信息,它是用户信息经过加密之后生成的字符串。

Header和 Signature是安全性相关的部分,只是为了保证 Token的安全性。

#### JWT的使用方法

客户端收到服务器返回的WT之后,通常会将它储存在 localstorage或 session Storage中。

此后,客户端每次与服务器通信,都要带上这个JWT的字符串,从而进行身份认证。推荐的做法是把JWT放在HTTP请求头的 Authorization字段中,格式如下

```js
Authrization: Bearer <token>
```

##### 在 Express中使用JWT

##### 1.安装JWT相关的包

```
npm i jsonwebtoken express-jwt
```

jsonwebtoken用于生成JWT字符串

express-jwt用于将JWT字符串解析还原成JsON对象

##### 2.导入jwt相关的包

使用 require0函数,分别导入MT相关的两个包:

```js
const express=require("express");
const app=express();
//导入用于生产jwt的包
const jwt=require("express-jwt");
//导入用于将客户端发送的jwt字符串 解析还原成json对象的包
const toKen=require("jsonwebtoken");
// 允许跨域
const cors=require("cors");
app.use(cors());
```

##### 定义 secret密钥

为了保证MWT字符串的安全性,防止WT字符串在网络传输过程中被别人破解,我们需要专门定义一个用于加密和解密的 secret密钥

①当生成丿WT字符串的时候,需要使用 secret密钥对用户的信息进行加密,最终得到加密好的JT字符串

②当把M字符串解析还原成JSON对象的时候,需要使用 secret密钥进行解密

```js
const express=require("express");
const app=express();
//导入用于生产jwt的包
const jwt=require("express-jwt");
//导入用于将客户端发送的jwt字符串 解析还原成json对象的包
const toKen=require("jsonwebtoken");
// 允许跨域
const cors=require("cors");
app.use(cors());
// 解析post 表单数据的中间件
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({external: false}));
// 定义secret密钥 建议将密钥命名为secretKey
const secretKey="it_zyx_@_";
```

##### 在登录成功后生成JWT字符串

调用 jsonwebtoken包提供的sign0方法,将用户的信息加密成MT字符串,响应给客户端:

```
const express=require("express");
const app=express();
//导入用于生产jwt的包
const jwt=require("express-jwt");
//导入用于将客户端发送的jwt字符串 解析还原成json对象的包
const toKen=require("jsonwebtoken");
// 允许跨域
const cors=require("cors");
app.use(cors());
// 解析post 表单数据的中间件
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({external: false}));
// 定义secret密钥 建议将密钥命名为secretKey
const secretKey="it_zyx_@_";
app.post('/api/login', (req, res) => {
    const userinfo=req.body;
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }
    // 调用jwt.sign() 生成字符串,三个参数分别是：用户信息,加密密钥,配置对象
    //在登录成功之后,
    // 调用jwt.sign()方法生成JwT字符串。并通过 token属性发送给客户端
    // 参数1:用户的信息对象/
    // 参数2:加密的秘钥/
    // 参数3:配置对象,可以配置当前 token的有效期
    jwt.sign({username:userinfo.username},secretKey,{expiresIn: '30s'})
  res.send({
      status:200,
      message:"登陆成功",
      // token:
  })
});
```

将JWT字符串还原为JSON对象

客户端每次在访问那些有权限接口的时候,都需要主动通过请求头中的 Authorization字段,将 Token字符串发送到服务器进行身份认证

此时,服务器可以通过 express-ⅳwt这个中间件,自动将客户端发送过来的 Token解析还原成JSON对象

```js
const express=require("express");
const app=express();
//导入用于生产jwt的包
const jwt=require("express-jwt");
//导入用于将客户端发送的jwt字符串 解析还原成json对象的包
const toKen=require("jsonwebtoken");
// 允许跨域
const cors=require("cors");
app.use(cors());
// 解析post 表单数据的中间件
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({external: false}));
// 定义secret密钥 建议将密钥命名为secretKey
const secretKey="it_zyx_@_";
// 注册 将jwt字符串解析还原成json对象的中间件
app.use(jwt({secret:secretKey}).unless({path:[/\/api\//]}))
app.post('/api/login', (req, res) => {
    const userinfo=req.body;
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }
    // 调用jwt.sign() 生成字符串,三个参数分别是：用户信息,加密密钥,配置对象
    //在登录成功之后,
    // 调用jwt.sign()方法生成JwT字符串。并通过 token属性发送给客户端
    // 参数1:用户的信息对象/
    // 参数2:加密的秘钥/
    // 参数3:配置对象,可以配置当前 token的有效期
    jwt.sign({username:userinfo.username},secretKey,{expiresIn: '30s'})
  res.send({
      status:200,
      message:"登陆成功",
      // token:
  })
});
```

##### 使用 req- user获取用户信息

当 express-jwt这个中间件配置成功之后,即可在那些有权限的接口中,使用req,user对象,来访问从JT字符串中解析出来的用户信息了,示例代码如下

```js
const express=require("express");
const app=express();
//导入用于生产jwt的包
const jwt=require("express-jwt");
//导入用于将客户端发送的jwt字符串 解析还原成json对象的包
const toKen=require("jsonwebtoken");
// 允许跨域
const cors=require("cors");
app.use(cors())
// 解析post 表单数据的中间件
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
// 定义secret密钥 建议将密钥命名为secretKey
const secretKey="it_zyx_@_";
// 注册 将jwt字符串解析还原成json对象的中间件
// 只要配置成功；express-jwt中国中间件 就跨域把解析出来的用户信息挂载到req.user 属性上
app.use(jwt(
    {
        secret:secretKey,
        algorithms:[
            'HS256'
        ]
    })
    .unless(
        {
            path:[/^\/api\//]
    }))
app.post(
    '/api/login',
    (req, res) => {
    const userinfo=req.body;
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }
    // 调用jwt.sign() 生成字符串,三个参数分别是：用户信息,加密密钥,配置对象
    //在登录成功之后,
    // 调用jwt.sign()方法生成JwT字符串。并通过 token属性发送给客户端
    // 参数1:用户的信息对象/
    // 参数2:加密的秘钥/
    // 参数3:配置对象,可以配置当前 token的有效期
    toKen.sign({username:userinfo.username},secretKey,{expiresIn: '30s'})
  res.send({
      status:200,
      message:"登陆成功",
      // token:
  })
});
app.get('/admin/get',(req,res)=>{
    res.send({
        status:200,
        message:"获取用户信息成功",
        data:req.user // 要发送给客户端的用户信息
    })
})
app.listen(3000,function () {
    console.log("http://127.0.0.1:3000")
})
```

请求信息

请求的时候，必须加个请求头信息

![image-20220120210343684](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120210343684.png)

Authorization是请求头

Bearer ***// 星号是token生成的配置对象

例如

token生成的对象

```json
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQyNjgzNjIxLCJleHAiOjE2NDI2ODcyMjF9.n3dL6RXx6V2Wl9JmdTPXH3vQNPCSMefVkvxuuUNhmSU"
```

请求头

```json
"Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjQyNjgzNjIxLCJleHAiOjE2NDI2ODcyMjF9.n3dL6RXx6V2Wl9JmdTPXH3vQNPCSMefVkvxuuUNhmSU"
```

![image-20220120210955682](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220120210955682.png)

##### 捕获解析JWT失败后产生的错误

当使用 express-jwt解析 Token字符串时,如果客户端发送过来的 Token字符串过期或不合法,会产生一个解析失败的错误,影响项目的正常运行。我们可以通过 Express的错误中闻件,捕获这个错误并进行相关的处理,示例代码如下:

```js
const express=require("express");
const app=express();
//导入用于生产jwt的包
const jwt=require("express-jwt");
//导入用于将客户端发送的jwt字符串 解析还原成json对象的包
const toKen=require("jsonwebtoken");
// 允许跨域
const cors=require("cors");
app.use(cors())
// 解析post 表单数据的中间件
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
// 定义secret密钥 建议将密钥命名为secretKey
const secretKey="it_zyx_@_";
// 注册 将jwt字符串解析还原成json对象的中间件
// 只要配置成功；express-jwt中国中间件 就跨域把解析出来的用户信息挂载到req.user 属性上
app.use(jwt(
    {
        secret:secretKey,
        algorithms:[
            'HS256'
        ]
    })
    .unless(
        {
            path:[/^\/api\//]
    }))

app.post(
    '/api/login',
    (req, res) => {
    const userinfo=req.body;
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }
    // 调用jwt.sign() 生成字符串,三个参数分别是：用户信息,加密密钥,配置对象
    //在登录成功之后,
    // 调用jwt.sign()方法生成JwT字符串。并通过 token属性发送给客户端
    // 参数1:用户的信息对象/
    // 参数2:加密的秘钥/
    // 参数3:配置对象,可以配置当前 token的有效期
    let token=toKen.sign({username:userinfo.username},secretKey,{expiresIn: '30s'})
  res.send({
      status:200,
      message:"登陆成功",
      token:token
  })
});
app.get('/admin/get',(req,res)=>{
    res.send({
        status:200,
        message:"获取用户信息成功",
        data:req.user // 要发送给客户端的用户信息
    })
})
app.use((err,req,res,next)=>{
    if (err.name==='UnauthorizedError'){
        // 这次错误是头token解析错误导致的
        return res.send({
            status:404,
            message:'无效的token'
        })
    }
    // 未知的错误
    res.send({
        status:500,
        message:"未知的错误"
    })
})
app.listen(3000,function () {
    console.log("http://127.0.0.1:3000")
})
```

6.使用 req- user获取用户信息当 express-jwt这个中间件配置成功之后,即可在那些有权限的接口中,使用req,user对象,来访问从JT字符串中解析出来的用户信息了,示例代码如下express