# node模块

## fs文件系统模块

### 读取文件--readFile

```javascript
fs.readFile()
```

读取指定文件的内容

```javascript
fs.readFile(path[,options],callback)
//[options]可选参数项
//path,callback必选参数

//path必选参数,字符串,表示读取文件路径
//[options],可选参数,表示以什么编码来读取文件
//callback,必选参数,通过回调函数来拿到读取结果
```

```javascript
let fs = require("fs");
fs.readFile('./node.txt','utf8',(res,data)=>{
    console.log(res);//null
    console.log('---');
    console.log(data);
    //如果成功
    则输出
    res=null
    ---
    data=1231123123
    //如果失败
    //则输出
    res=errno: -4058,code: 'ENOENT',syscall: 'open',path: 'I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\读取文件\\node.tx'
    ---
    data=undefined
})
```

```
let fs = require("fs");
fs.readFile('./node.txt','utf8',(res,data)=>{
    if (res){
        return console.log("文件读取失败"+res.errno);
    }else{
        console.log("文化读取成功"+data);
    }
})
```

### 写入文件--writeFile

```javascript
fs.writeFile(file,data[,options],callback)
//file必选参数,字符串,表示读取文件路径
//data必选参数,表示写入的内容
//[,options] 可选参数,表示以什么格式写入文件内容,默认utf8
//callback,必选参数,通过回调函数来拿到读取结果
```

```javascript
const fs=require("fs");
fs.writeFile('./node.txt','node',function (res,ree) {
    console.log(res);
    console.log('----');
    console.log(ree);
})
//如果写入成功,则err的值等于null
//如果写入失败,则err的值等于一个错误对象
```

```JavaScript
const fs=require("fs");
fs.writeFile('node写入文件.js','31231',function (res) {
    if (res){
        console.log('文件写入失败'+res);
    }else{
        console.log("文件写入成功"+res)
    }
})
```

### 案例

#### 成绩整理

```
const fs=require("fs");
//调用fs.readFile() 读取文件内容
fs.readFile('./成绩.txt', 'utf8',function (res,err) {
    if (res){//3判断是否读取成功
        return console.log("读取失败",err)
    }
    //1.把成绩的数据,按空格进行分割
    const arr=err.split(' ');//[ '小红=93', '小黄=50', '小黑=62', '小绿=67', '小紫=45', '小小=100' ]
    let arrList=[]
    for (let i = 0; i <arr.length ; i++) {
        //2.replace 替换字符串
        arrList.push(arr[i].replace('=',':'))
    }
    //3. 把新数组中的每一项进行合并,得到一个新的字符串
    let list=arrList.join('\r\n');
    //4.把新成绩写入新成绩.txt里面
    fs.writeFile('./新成绩.txt',list,function (res) {
        if (res){
            return console.log("写入失败")
        }
        console.log('写入成功',res);
    })
})

```

### fs模块路径拼接问题

在使用fs模块操作文件时,如果提供的操作路径是以/或/开头的相对路径时,很容易出现路径动态拼接错误的问题原因:代码在运行的时候,会以执行node命令时所处的目录,动态拼接出被操作文件的完整路径。

1. 第一种

   ```javascript
   const fs=require("fs");
   fs.readFile('./node.txt','utf-8',function (res,err) {
       if (res){
           return console.log("读取失败"+err.message);
       }
       console.log("读取成功"+err);
   })
   //出现路径拼接错误的问题,是因为提供了./或./开头的相对路径
   //如果要解决这个问题,可以直接提供一个完整的文件存放路径就行了
   ```

2. 第二种

   ```javascript
   const fs=require("fs");
   fs.readFile('I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\文件模块\\路径问题\\node.txt','utf-8',function (res,err) {
       if (res){
           return console.log("读取失败"+err.message);
       }
       console.log("读取成功"+err);
   })
   //可移植性差
   ```

3. 第三种:双下划线__dirname

   ```javascript
   console.log(__dirname)
   //__dirname代表文件所处位置
   const fs=require("fs");
   fs.readFile(__dirname+'\\node.txt','utf-8',function (res,err) {
       if (res){
           return console.log("读取失败"+err.message);
       }
       console.log("读取成功"+err);
   })
   ```

## path路径模块

### 路径模块

path模块是 Node. js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性,用来满足用户对路径的处理需求。

```javascript
path.join()方法,将多个路径片段拼接成一个完整的路径字符串
path.basename()方法,从路径字符串中,将文件名解析出来;
如果要在 Javascript代码中,使用path模块来处理路径,则需要使用如下的方式先导入它:
const path=require("path");
const a1=path.join('/a','/b','../','d','f');//../会抵消前面的路径
console.log(a1)//\a\d\f
const a2=path.join(__dirname,'/node路径.js');
console.log(a2);//I:\Program Files (x86)\web开发\node\npm\模块\路径模块\路径\node路径.js
```

```javascript
const path=require("path");
const fs=require("fs");
const a2=path.join(__dirname,'/node.txt');
fs.readFile(a2,'utf8',function (res,err) {
    if (res){
        return console.log("读取失败")
    }
    console.log(err)
})

```

## 综合练习

文件路径

-
    - ```
时钟案例

    - node
        - node.js
    - node.html
    - index.css
    - index.html
    - index.js
  ```

#### node.js

```javascript
const fs=require("fs");
const path=require("path");
const regStyle=/<style>[\s\S]*<\/style>/;
const regScript=/<script>[\s\S]*<\/script>/;
const regDiv=/<body>[\s\S]*<\/body>/;
//1
/*style的检测正则*/
//其中\s表示空白字符串  \S表示非空白字符串   *表示匹配任意次
let url1=path.join(__dirname,'../node.html')
fs.readFile(url1,'utf8',function (res,err) {
    if (res){
        return console.log("读取失败")
    }
    resolveCSS(err)//拆解css方法
    resolveScript(err);
    resolveHtml(err)
})
function resolveCSS(err) {
    //1.用正则提取页面中的<style></style>标签
    const r1=regStyle.exec(err);
    //2.将提取出来的字符串做进一步的处理
    const newCSS=r1[0]
        .replace('<style>','')
        .replace('</style>','');
    // 3.将提取出来的css放入index.css文件种
    let url2=path.join(__dirname,'../index.css');
    fs.writeFile(url2,newCSS,function (res) {
        if (res){
            return console.log("写入失败");
        }
        console.log(res);
    })
}
function resolveScript(err) {
    const r2=regScript.exec(err);
    //2.将提取出来的字符串做进一步的处理
    const newScript=r2[0]
        .replace('<script>','')
        .replace('</script>','');
    // 3.将提取出来的css放入index.css文件种
    let url3=path.join(__dirname,'../index.js');
    fs.writeFile(url3,newScript,function (res) {
        if (res){
            return console.log("写入失败");
        }
        console.log(res);
    })
}
function resolveHtml(err){
    const r2=regDiv.exec(err)
    const newHtml=err
        .replace(regStyle,'<link rel="stylesheet" href="./index.css">')
        .replace(regScript,'<script src="./index.js"></script>')
        r2[0]
            .replace('<body>',' ')
            .replace('</body>','');

    let url3=path.join(__dirname,'../index.html');
    fs.writeFile(url3,newHtml,function (res) {
        if (res)return console.log("写入失败");
        console.log(res);
    })
}
```

#### node.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div{
        width: 300px;
        height: 200px;
        background: #feca99;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    span{
        font-size: 34px;
    }
</style>
<body>
<div>
    <span>12</span>
    <span>:</span>
    <span>12</span>
    <span>:</span>
    <span>12</span>
</div>
</body>
<script>
    let div=document.querySelector("div");

    setInterval(function () {
        let a=new Date();
        let a1=a.getHours();
        let a2=a.getMinutes();
        let a3=a.getSeconds();
        div.innerHTML=` <span>${a1}</span>
    <span>:</span>
    <span>${a2}</span>
    <span>:</span>
    <span>${a3}</span>`
    },1000);
</script>
</html>
```

#### index.css

```css
*{
    margin: 0;
    padding: 0;
}
body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
div{
    width: 300px;
    height: 200px;
    background: #feca99;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
span{
    font-size: 34px;
}
```

#### index.js

```JavaScript

    let div=document.querySelector("div");

    setInterval(function () {
        let a=new Date();
        let a1=a.getHours();
        let a2=a.getMinutes();
        let a3=a.getSeconds();
        div.innerHTML=` <span>${a1}</span>
    <span>:</span>
    <span>${a2}</span>
    <span>:</span>
    <span>${a3}</span>`
    },1000);

```

#### index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<link rel="stylesheet" href="./index.css">
<body>
<div>
    <span>12</span>
    <span>:</span>
    <span>12</span>
    <span>:</span>
    <span>12</span>
</div>
</body>
<script src="./index.js"></script>
</html>
```

## 网络模块

### http模块

服务器和普通电脑的区别在于,服务器上安装了web服务器软件,例如:IS、 Apache等。通过安装这些服务器软件,就能把一台普通的电脑变成一台web服务器

#### ip地址

1. iP地址就是互联网上每台计算机的唯一地址,因此|P地址具有唯一性。如果把“个人电脑”比作“一台电话”,那么"P地址”就相当于“电话号码”,只有在知道对方P地址的前提下,才能与对应的电脑之间进行数据通信。P地址的格式:
   通常用“点分十进制”表示成(ab.cd)的形式,其中,abcd都是0~255之间的十进制整数。例如:用点分十进表示的|P地址(192.168.1.1)**

    1. 互联网中每台Web服务器,都有自己的IP地址,例如:大家可以在Windows的终端中运行pingwww.baidu.con命令,即可查看到百度服务器的|P地址
    2. 在开发期间,自己的电脑既是一台服务器,也是一个客户端,为了方便测试,可以在自己的浏览器中输入127.0.0.1这个P地址,就能把自己的电脑当做一答服务器进行访问了。

2. 尽管ip地址能够唯地标记网络上的计算机,但IP地址是一长串数字,不直观,而且不便于记忆,于是人们又发明了另-套字符型的地址方案,即所谓的域名( Domain name)
   地址。ip地址和域名是—对应的关系,这份对应关系存放在—种叫做域名服务器(DNS, Domain name server)
   的电脑中。使用者只需通过好记的域名访问对应的服务器即可,对应的转换工作由域名服务器实现。因此,域名服务器就是提供IP地址和域名之间的转换服务的服务器。

    1. 单纯使用伊P地址,互联网中的电脑也能够正常工作。但是有了域名的加持,能让互联网的世界变得更加方便。
    2. 在开发测试明间,127.00.1对应的域名是 localhost,它们都代表我们自己的这台电脑,在使用效果上没有任何区别

#### 端口号

计算机中的端口号,就好像是现实生活中的门牌号一样。通过门牌号,外卖小哥可以在整栋大楼众多的房间中,准确把外卖送到你的手中。同样的道理,在一台电脑中,可以运行成百上千个web服务。每个web服务都对应一个唯的端口号。客户端发送过来的网络请求,通过端口号,可以被准确地交给对应的web服务进行处理

1. 每个端口号不能同时被多个web服务占用。
2. 在实际应用中,URL中的80端口可以被省略。

#### 创建web服务器

1. 导入http模块

   ```
   const http=require("http");
   ```


2. 创建web服务器

   ```
   const server=http.createServer()
   ```


3. 为服务器示例绑定request事件,监听客户端请求

   ```
   server.on('request',(req,res)=>{
       console.log("客户端接受请求",req)
   })
   ```

4. 启动服务器

```
server.listen(3000,()=>{
    console.log("服务器启动中,http://127.0.0.1:3000")
})
//server.listen(端口号,回调函数)
```

```
const http=require("http");

const server=http.createServer()
server.on('request',(req,res)=>{
    console.log("客户端接受请求",req)
})
server.listen(3000,()=>{
    console.log("服务器启动中,http://127.0.0.1:3000")
})


```

server.on('request',(req,res)=>{

1. req请求对象

   只要服务器接收到了客户端的请求,就会调用通过 server.on()为服务器绑定的 request事件处理函数。如果想在事件处理函数中,访问与客户端相关的数据或属性,可以使用如下的方式:

   ```javascript
   server.on('request',(req,res)=>{
       /*req 是请求对象,他包含了与客户端相关的数据和属性
       req.url是客户端用户的请求url地址
       req.method是客户端的method请求*/
       const str=`url:${req.url};method:${req.method}`;
       console.log(str)
   })
   ```

2. res相应对象

   ​ 在服务器的 request事件处理函数中,如果想访冋与服努器相关的数据或属性,可以使用如下的方式

   ```javascript
   server.on('request',(req,res)=>{
       /*res是响应对象,它包含了与服务器相关的数据和属性,例如:
       要发送到客户端的字符串*/
       const str=`req.url:${req.url};req.method:${req.method}`
       // res.end()方法的作用
       // 向客户端发送指定的内容,并结束本次请求的处理过程
       res.end(str)
   })
   ```

3. 中文乱码问题

   当调用 res.end()方法,向客户端发送中文内容的时候,会出现乱码问题,此时,需要手动设置内容的编码格式

   ```javascript
   server.on('request',(req,res)=>{
       /*发送的内容含有中文*/
       const str=`你请求的url:${req.url};你请求用的method:${req.method}`
       // 为防止中文乱码的问题,需要设置响应头Content-Type的值为text/html;charset=utf-8
       res.setHeader('Content-Type','text/html;charset=utf-8')
       res.end(str)
   })
   ```

})

#### 案例-返回不同的页面

根据请求地址返回不同的页面

1. 获取url的地址

   ```javascript
   server.on('request',function (req,err) {
       const url=req.url;
   })
   ```

2. 设置默认的响应内容地址是404

   ```javascript
   server.on('request',function (req,err) {
       const url=req.url;
       let content='<h1>404</h1>';
   })
   ```

3. 判断用户请求是否为/或/index.html首页

   ```javascript
   server.on('request',function (req,err) {
       const url=req.url;
       let content='<h1>404</h1>';
       if (url==='/'||url==='/index.html'){
           content='<h1>首页</h1>'
       }
   })
   ```

4. 判断用户请求是否为/about.html关于页面

   ```javascript
   server.on('request',function (req,err) {
       const url=req.url;
       let content='<h1>404</h1>';
       if (url==='/'||url==='/index.html'){
           content='<h1>首页</h1>'
       }else if (url==='/about.html'){
           content='<h1>关于我们</h1>'
       }
   })
   ```

5. 设置Content-Type响应码，防止乱码

   ```javascript
   server.on('request',function (req,err) {
       const url=req.url;
       let content='<h1>404</h1>';
       if (url==='/'||url==='/index.html'){
           content='<h1>首页</h1>'
       }else if (url==='/about.html'){
           content='<h1>关于我们</h1>'
       }
       err.setHeader('Content-Type','text/html;charset=utf-8');
   })
   ```

6. 使用res.end()把响应内容给客户端

   ```javascript
   server.on('request',function (req,err) {
       const url=req.url;
       let content='<h1>404</h1>';
       if (url==='/'||url==='/index.html'){
           content='<h1>首页</h1>'
       }else if (url==='/about.html'){
           content='<h1>关于我们</h1>'
       }
       err.setHeader('Content-Type','text/html;charset=utf-8');
       err.end(content);
   })
   ```

案例代码

```javascript
const fs=require("fs");
const path=require("path");
const http=require("http");
const server=http.createServer();
server.on('request',function (req,err) {
    const url=req.url;
    let content='<h1>404</h1>';
    if (url==='/'||url==='/index.html'){
        content='<h1>首页</h1>'
    }else if (url==='/about.html'){
        content='<h1>关于我们</h1>'
    }
    err.setHeader('Content-Type','text/html;charset=utf-8');
    err.end(content);
})
server.listen('3000',function () {
    console.log("html地址",'http://127.0.0.1:3000')
})
```

#### http实现时钟的web服务器

1. 导入模块

   ```javascript
   const fs=require("fs");//文件模块
   const http=require("http");//http模块
   const path=require("path");//路径模块
   ```

2. 创建基本的web服务器

   ```javascript
   const fs=require("fs");
   const http=require("http");
   const path=require("path");
   const server=http.createServer();
   server.on('request',function (res,err) {
       
   })
   server.listen('3000',function () {
       console.log("服务器启动",'http://127.0.0.1:3000')
   })
   ```

3. 将资源的请求ur地址映射为文件的存放路径

   ```javascript
   const fs=require("fs");
   const http=require("http");
   const path=require("path");
   const server=http.createServer();
   
   server.on('request',function (res,err) {
       let url=res.url;
       let faith=path.join(__dirname,url);
   
   })
   server.listen('3000',function () {
       console.log("服务器启动",'http://127.0.0.1:3000')
   })
   ```

4. 读取文件的内容井响应给客户端

   ```javascript
   const fs=require("fs");
   const http=require("http");
   const path=require("path");
   const server=http.createServer();
   
   server.on('request',function (res,err) {
       let url=res.url;//响应文件的地址
       let faith=path.join(__dirname,url);//当前响应的地址
       fs.readFile(faith,'utf8',function (reserve,data) {
           if (reserve)return err.end('404');
           err.end(data)
       })
   })
   server.listen('3000',function () {
       console.log("服务器启动",'http://127.0.0.1:3000')
   })
   ```

5. 优化路径地址

   ```javascript
   const fs=require("fs");
   const http=require("http");
   const path=require("path");
   const server=http.createServer();
   server.on('request',function (res,err) {
       let url=res.url;//响应文件的地址
       let faith='';
       if (url==='/'){
           faith=path.join(__dirname,'./clock/index.html');
       }else {
           faith=path.join(__dirname,'./clock',url);
       }
       fs.readFile(faith,'utf8',function (reserve,data) {
           if (reserve)return err.end('404');
           err.end(data)
       })
   })
   server.listen('3000',function () {
       console.log("服务器启动",'http://127.0.0.1:3000')
   })
   ```

## 解析字符串模块 querystring

```
//导入处理querystring的node.js模块
const qs=require("querystring");
// 调用qs.parse()方法,把查询字符串解析成对象
const body=qs.parse(str);
```

## 模块化开发

### 什么是模块化

1. 模块化是指解决一个复杂问题时,自顶向下逐层把系统划分成若干模块的过程。对于整个系统来说,模块是可组合、分解和更换的单元。
2. 编程领域中的模块化,就是遵守固定的规则,把一个大文件拆成独立并互相依赖的多个小模块。
    - 把代码进行模块化拆分的好处
        - 提高了代码的复用性
        - 提高了代码的可维护性
        - 可以实现按需加载

### 模块化规范

- **模块化规范**就是对代码进行模块化的拆分与组合时,需要遵守的那些规则。
    - 例如:
        - 使用什么样的语法格式来引用模块
        - 在模块中使用什么样的语法格式向外暴露成员
- **模块化规范**的好处:大家都遵守同样的模块化规范写代码,降低了沟通的成本,极大方便了各个模块之间的相互调用,利人利己

### node.js中模块的分类

#### 内置模块

- 内置模块是由Node.js官方提供的,例如fs,pathhttp等

    - **path模块**:用于处理文件路径。

      ```javascript
      path.normalize(路径解析，得到规范路径)；
      path.join(路径合并)；
      path.resolve（获取绝对路径）；
      path.relative(获取相对路径)。
      ......
      ```

    - **until模块**:弥补js功能不足，新增API。

      ```javascript
      util.format(格式化输出字符串);
      util.isArray(检查是否为数组);
      util.RegExp(是不是正则);
      util.isDate(是不是日期型);
      util.inherits(child,parent)实现继承；
      ```

    - **fs模块：**文件操作系统的API

      ```
      fs.readFile(filename,[options],callback); 读取文件。
      fs.writeFile(filename,data,[options],callback);写文件。
      fs.appendFile(filename,data,[options],callback);以追加的方式写文件。
      fs.open(filename,flags,[mode],callback); 打开文件。
      filename:文件名，必须。
      data：写入的数据或者buffer流。
      flags:操作标识，打开方式，r w。
      [options]：指定权限，读、写、执行。是否可续写。
      callback：读取文件后的回调函数。function（err，data）;
      fs.mkdir(path,[mode],callback);创建目录。
      fs.readdir(path,callback);读取目录。
      fs.exists(path,callback);查看文件与目录是否存在。
      fs.utimes(path,atime,mtime,callback);修改文件的访问时间和修改时间。
      fs.rename(oldfilename,newfilename,callback);重命名文件名或者目录。
      fs.rmdir(path,callback);删除空目录。
      path：被创建目录的完整路径以及目录名。
      [mode]:目录权限，默认0777（可读可写可执行）。
      atime:新的访问时间。
      ctime：新的修改时间。
      oldfilename、newfilename  旧名字和新名字。
      callback：创建完目录后的回调函数。
      ```

    - **events模块**:events 模块只提供了一个对象: events.EventEmitter。

    - **http模块**:http

      ```
      http.createServer(function(){});创建服务器。
      http.get('路径',callback);发送get请求。
      http.request(options,callback);发送请求。
      options：options是一个类似关联数组的对象，表示请求的参数，callback作为回调函数，需要传递一个参数。
      options常用的参数有host、port（默认为80）、method（默认为GET）、path（请求的相对于根的路径，默认是“/”。
      ```

        - get：

          ```javascript
          var http=require("http");
           var options={
              hostname:"cn.bing.com",
              port:80
          }
           
          var req=http.request(options,function(res){
              res.setEncoding("utf-8");
              res.on("data",function(chunk){
                  console.log(chunk.toString())
              });
              console.log(res.statusCode);
          });
          req.on("error",function(err){
              console.log(err.message);
          });
          req.end();
          ```

        - post:

          ```javascript
          var http=require("http");
          var querystring=require("querystring");
           
          var postData=querystring.stringify({
              "content":"我真的只是测试一下",
              "mid":8837
          });
           
          var options={
              hostname:"www.imooc.com",
              port:80,
              path:"/course/document",
              method:"POST",
              headers:{
                  "Accept":"application/json, text/javascript, */*; q=0.01",
                  "Accept-Encoding":"gzip, deflate",
                  "Accept-Language":"zh-CN,zh;q=0.8",
                  "Connection":"keep-alive",
                  "Content-Length":postData.length,
                  "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                  "Cookie":"imooc_uuid=6cc9e8d5-424a-4861-9f7d-9cbcfbe4c6ae; imooc_isnew_ct=1460873157; loginstate=1;
                   apsid=IzZDJiMGU0OTMyNTE0ZGFhZDAzZDNhZTAyZDg2ZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjkyOTk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                   AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNmNmFhMmVhMTYwNzRmMjczNjdmZWUyNDg1ZTZkMGM1BwhXVwcIV1c%3DMD;
                    PHPSESSID=thh4bfrl1t7qre9tr56m32tbv0; 
                    Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1467635471,1467653719,1467654690,1467654957;
                     Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1467655022; imooc_isnew=2;
                      cvde=577a9e57ce250-34",
                  "Host":"www.imooc.com",
                  "Origin":"http://www.imooc.com",
                  "Referer":"http://www.imooc.com/video/8837",
                  "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) 
                  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2763.0 Safari/537.36",
                  "X-Requested-With":"XMLHttpRequest",
              }
          }
           
          var req=http.request(options,function(res){
              res.on("data",function(chunk){
                  console.log(chunk);
              });
              res.on("end",function(){
                  console.log("评论完毕！");
              });
              console.log(res.statusCode);
          });
           
          req.on("error",function(err){
              console.log(err.message);
          })
          req.write(postData);
          req.end();
          ```

    - **jade模块**:是一款高性能、简洁易懂的模板引擎。可通过jade来编写html文件。

      jade类似一个用于快速编写html的语言，其编写后的文件后缀为.jade。

    - **Express框架**

      Express是一个nodejs的web开源框架，用于快速的搭建web项目。其主要集成了web的http服务器的创建、静态文本管理、服务器URL地址请求处理、get和post请求处理分发、session处理等功能。

#### 自定义模块

1. 用户创建的每个j文件,都是自定义模块

#### 第三方模块

由第三方开发出来的模块,并非官方提供的内置模块,也不是用户创建的自定义模块,使用前需要先下载〕

## 加载模块

使用强大的 require()方法,可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。例如:

```javascript
const fs=require("fs");//加载内置模块

const custom=require("./index");//加载用户自定义模块

const monent=require("monent");//第三方模块
```

注意:使用 require0方法加载其它模块时,会执行被加载模块中的代码

## 模块作用域

1. 什么是模块作用域

    1. 和函数作用域类似,在自定义模块中定乂的变量、方法等成员,只能在当前模块内被访问,这种模块级别的访问限制,叫做模块作用域。

2. 模块作用域的好处

    1. 防止全局污染

3. 向外共享模块作用域的成员：**module**

   ```javascript
   console.log(module);
   //打印结果
   Module {
     id: '.',
     path: 'I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\node中的模块化\\向外共享模块作用域的成员',
     exports: {},
     filename: 'I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\node中的模块化\\向外共享模块作用域的成员\\Module.js',
     loaded: false,
     children: [],
     paths: [
       'I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\node中的模块化\\向外共享模块作用域的成员\\node_modules',
       'I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\node中的模块化\\node_modules',
       'I:\\Program Files (x86)\\web开发\\node\\npm\\模块\\node_modules',
       'I:\\Program Files (x86)\\web开发\\node\\npm\\node_modules',
       'I:\\Program Files (x86)\\web开发\\node\\node_modules',
       'I:\\Program Files (x86)\\web开发\\node_modules',
       'I:\\Program Files (x86)\\node_modules',
       'I:\\node_modules'
     ]
   }
   
   ```

#### module.exports

在自定义模块中,可以使用 module. exports对象,将模块内的成员共享出去,供外界使用

外界用 require0方法导入自定义模块时,得到的就是 module exports所指向的对象

```javascript
//在一个自定义模块中,默认情况下, module.exports={}
module.exports={
    a:1,
    b:2
}
module.exports.hello=function () {
    console.log("hello")
}
```

```javascript
//在外界使用 require导入一个自定义模块的时候,得到的成员
//就是那个模块中,通过 module. exports 指向的那个对象
let a=require("./自定义模块.js");
console.log(a);
```

使用 require0方法导入模块时,导入的结果,永远以 moduleexports指向的对象为准

##### exports对象

由于 module exports单词写起来比较复杂,为了简化向外共亨成员的代码,Node提供了 exports对象。默认情况下, exports和 module exports指向同个对象。最终共亨的结果,还是以 module
exports指向的对象为准

```javascript
console.log(exports);//{}
console.log(module.exports);//{}
console.log(exports===module.exports)//true
```

##### exports和 module exports的使用误区

时刻谨记, require0模块时,得到的永远是 module. exports指向的对象

<img src="C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220113173545757.png" alt="image-20220113173545757"  />



![image-20220113174141410](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220113174141410.png)

![image-20220113174452027](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220113174452027.png)

![image-20220113174849221](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220113174849221.png)

![image-20220113175000947](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220113175000947.png)

## node中的模块规范

Node js遵循了 ommonυS模块化规范,( ammons规定了模块的特性和各模块之间如何相互依赖。

- ​ Commons规定
    1. 每个模块内部, module变量代表当前模块
    2. module变量是个对象,它的 exports属性(即 module exports)是对外的接口
    3. 加载某个模块,其实是加载该模块的 module. exports属性。 require0方法用于加载模块。

## 模块的加载机制

### 优先从缓存中加载

模块在第一次加载后会被缓存。这也意味着多次调用reqμuir()不会导致模块的代码被执行多次。注意:不论是内置模块、用户自定义模块、还是第三方模块,它们都会优先从缓存中加载,从而提高模块的加载效率。

### 内置模块的加载机制

内置模块是由 Node js官方提供的模块,内置模块的加载优先级最高

例如, require(fs)始终返回内置的fs模块,即使在 node modules目录下有名字相同的包也叫做fs。

### 自定义模块的加载机制

使用 require加载自定义模块时,必须指定以J或』/开头的路径标识符。在加载自定义模块时,如果没有指定或-这样的路径标识符,则node会把它当作内置模块或第三方模块进行加载

同时,在使用 require0导入自定义模块时,如果省略了文件的扩展名,则 Node js会按顺序分别尝试加载以下的文件:

1. 按照确切的文件名进行加载
2. 补全.js扩展名进行加载
3. 补全.json扩展名进行加载
4. 补全.node扩展名进行加载
5. 加载失败,终端报错

### 第三方模块的加载机制

如果传递给 requir()的模块标识符不是一个内置模块,也没有以‘/或开头,则 Node.js会从当前模块的父目录开始,尝试从/ node_modules文件夹中加载第三方模块。

如果没有找到对应的第一方模块,则移动到再上一层父目录中,进行加载,直到文件系统的根目录

例如,假设在' C: \Users\ itheima \project(foo. js文件里调用了 require(tools),则 Node js会按以下顺序查找

1. C: \Users\itheima \project\node modules tools
2. C: \Users\itheima \node modules tools
3. C: \Users\node modules tools
4. C: \node modules tools

### 目录作为模块

当把目录作为模块标识符,传递给 require0进行加载的时候,有三种加载方式

1. 在被加载的目录下查找一个叫做 package. json的文件,并寻找main属性,作为 require0加载的入口
2. 如果目录里没有 package json文件,或者main入口不存在或无法解析,则 Node. js将会试图加载目录下的 index js文件。
3. 如果以上两步都失败了,则 Node js会在终端打印错误消息,报告模块的缺失:Eror: Cannot find module'xx