# let/var

![image-20220125174509758](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125174509758.png)

## 经典面试题

```js
var arr = [];
for (var i = 0; i < 2; i++) {
    arr[i] = function () {
        console.log(i)
    }
}
arr[0]()
arr[1]()
```

经典面试题图解：此题的关键点在于变量是全局的，函数执行时输出的都是全局作用域下的值。

# const

![image-20220125174820720](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125174820720.png)

ES6对象字面量的增强写法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    const a1 = "1";
    const a2 = "2";
    //es5添加属性写法
    const a = {
        a1: a1,
        a2: a2
    };
    // es6添加属性写法
    const b = {
        a1,
        a2
    }
    console.log(a);
    console.log(b)
</script>
</body>
</html>
```

![image-20220125175642999](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220125175642999.png)

javascript高阶函数的使用

编程方式:命令式编程/函数式编程

编程方式:面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)

# 模块化开发

es6

导出js文件

```js
function sun(n1, n2) {
    return n1 + n2
}

let age = true;
console.log(sun(1, 2));
console.log(age)
```

导出js

```js
let age = "121";
console.log(age)
```

命名冲突

```
<script src="导入.js" ></script>
<script src="导出.js"></script>
```

![image-20220130005250314](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130005250314.png)

加上type="module"就是单独的模块

```
<script src="导入.js" type="module"></script>
<script src="导出.js" type="module"></script>
```

![image-20220130005341172](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130005341172.png)

![image-20220130010239556](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130010239556.png)

![image-20220130010256219](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130010256219.png)

![image-20220130010305650](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220130010305650.png)

# 面向对象

面向对象更贴近我们的实际生活，可以使用面向对象描述现实世界事物。但是事物分为具体的事物和抽象的事物手机抽象的（泛指的）

面向对象的思维特点：

- 1.抽取（抽象）对象共用的属性和行为组织（封装）成一个类（模板
- 2.对类进行实例化，获取类的对象

面向对象编程我们考虑的是有哪些对象，按照面向对象的思维特点，不新的创建对象使用对象指挥对象做事情。

![image-20220206130931433](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206130931433.png)

## 类class

在ES6中新增加了类的概念，可以使用clss关键字声明一个类，之后以这个类来实例化对象。

类抽象了对象的公共部分，它泛指某一大类（class） 对象特指某一个，通过类实例化一个具体的对象

## 类constructor构造函数

constructor0方法是类的构造函数（默认方法），用于传递参数，返回实例对象，通过new命令生成对象实例时，自动调用该方法。如果没有显示定义类内部会自动给我们创建一个constructor（0

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    class Star {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }
    }

    let a = new Star('123', 18);
    let b = new Star('zs', 19)
    console.log(a)
    console.log(b)
</script>
</body>
</html>
```

![image-20220206131841824](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206131841824.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    class Star {
        constructor(name, age) {
            this.name = name;
            this.age = age
            this.init(name, age)
        }

        init(name, age) {
            console.log(`我是${name},年龄${age}`)
        }
    }

    let a = new Star('123', 18);
    let b = new Star('zs', 19)
    console.log(a)
    console.log(b)
</script>
</body>
</html>
```

![image-20220206132055752](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206132055752.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    class Star {
        constructor(name, age) {
            this.name = name;
            this.age = age
            this.init(name, age)
        }

        init(ge) {
            console.log(`我是${this.name},年龄${this.age} 我喜欢唱 ${ge}`)
        }
    }

    let a = new Star('123', 18);
    let b = new Star('zs', 19);
    a.init('冰雨');
    b.init('杀死那个石家庄人')

</script>
</body>
</html>
```

![image-20220206132354891](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206132354891.png)

## 类的继承 extends

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    // 父类
    class Fat {
        constructor() {
        }

        more() {
            console.log('继承')
        }
    }

    // 继承父类
    class Son extends Fat {

    }

    let son = new Son();
    son.more();
</script>
</body>
</html>
```

![image-20220206132926627](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206132926627.png)

### super关键字

supr关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数

意思是不能继承构造函数 所以继承下来的函数里的this指向错误 所以用super传给父类s

```
super指的是父类(Fat)的构造函数 也可以指向自己的方法
```

```
//this指向的是Son
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    // 父类
    class Fat {
        constructor(x, y) {
            this.x = x;
            this.y = y
        }

        more() {
            console.log(this.x + this.y)
        }
    }

    // 继承父类
    class Son extends Fat {
        constructor(x, y) {
            //super指的是父类(Fat)的构造函数
            //this指向的是Son
            super(x, y)
            console.log(this)
        }
    }

    let son = new Son(1, 2);
    son.more();
</script>
</body>
</html>
```

supr关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数。

```js
// super关键字调用父类普通函数
class Fate {
    say() {
        return '我是爸爸'
    }
}

class Son extends Fate {
    say() {
        // 如果调用super()方法,相当于在子类继承了父类的参数
        console.log('我是儿子')
        console.log(`${super.say()}的儿子`)
    }
}

let a = new Son();
a.say()
// 1继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的
// 2继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法（就近原
```

![image-20220206135233200](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206135233200.png)

### 子类继承父类加法的同时，扩展减法

#### 父类

```js
     父类

class Fat {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    fu() {
        console.log(this.x + this.y)
    }
}
```

#### 子类

```js
 class Son extends {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    zi() {
        console.log(this.x - this.y);
    }
}
```

#### 调用子类

```
let son = new Son(5, 3);
son.zi()
```

#### 子继承父类

super必须在子类this之前调用

利用super调用父类的构造函数

```js
 class Fat {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    fu() {
        console.log(this.x + this.y)
    }
}

// 子继承父类的加法,同时扩展减法
class Son extends Fat {
    constructor(x, y) {
        // 利用super调用父类的构造函数
        // super必须在子类this之前调用
        super(x, y);
        this.x = x
        this.y = y
    }

    zi() {
        console.log(this.x - this.y);
    }
}
```

## 三个注意点：

在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象

![image-20220206171444601](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206171444601.png)

类里面的共有的属性和方法一定要加this使用。

严格说应该是对象ldh的uname，ldh调用的sing,sing里的this指向ldh

![image-20220206171546965](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206171546965.png)

类里面的this指向问题，

constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者

## 面向对象tab栏案例

### 功能需求：

- 1.点击tab栏可以切换效果
- 2.点击+号，可以添加tab项和内容项
- 3.点击x号，可以删除当前的tab项和内容项。
- 4.双击tab项文字或者内容项文字可以修改里面的文字内容。e

#### 第一步

```js
class Tab {
    constructor(el) {
        this.el = document.querySelector(el);

    }

    // 1.切换功能
    toggleTab() {
    }

    // 2.添加功能
    addTab() {
    }

    // 3.删除功能
    removeTab() {
    }

    // 4.修改功能
    editTab() {
    }
}

new Tab('#tab')
```

#### 初始化点击事件

```js
let that;

class Tab {
    constructor(el) {
        this.el = document.querySelector(el);
        this.lis = this.el.querySelectorAll('li');
        this.section = this.el.querySelectorAll('section');
        this.init()
        that = this
    }

    init() {
        // init 初始化操作让相关元素绑定事件
        for (let i = 0; i < this.lis; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }

    // 切换功能
    toggleTab() {
    }

    // 2.添加功能
    addTab() {
    }

    // 3.删除功能
    removeTab() {
    }

    // 4.修改功能
    editTab() {
    }
}

new Tab('#tab')
```

#### 面向对象版tab栏切换功能

```js
toggleTab()
{
    // console.log(this.index)
    that.clear()
    this.className = 'liactive';
    that.section[this.index].className = 'conactive';
}
clear()
{
    for (let i = 0; i < this.lis.length; i++) {
        this.lis[i].className = ''
        this.section[i].className = '';
    }
}
```

#### 面向对象版tab栏添加功能

1. 点击+可以实现添加新的选项卡和内容
2. 第一步：创建新的选项卡i和新的内容section
3. 第二步：把创建的两个元素追加到对应的父元素中
4. 以前的做法：动态创建元素createElement，但是元素里面内容较多，需要innerHTML赋值在appendChild追加到父元素里面。
5. 现在高级做法：利用insertAdjacentHTMLO可以直接把字符串格式元素添加到父元素中人

```js
        init()
{
    this.add.onclick = this.addTab
    // init 初始化操作让相关元素绑定事件
    for (let i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i
        this.lis[i].onclick = this.toggleTab
    }
}
```

```js
    // 2.添加功能
addTab()
{
    // 创建i元素和section元素
    let li = `<li><span>新选项卡</span><span >x</span></li>`;
    that.ul.insertAdjacentHTML('beforeend', li)
    // 把这两个元素追加到对应的元素里面
}
```

```js
insertAdjacentHTML()
//insertAdjacentHTML() 方法将指定的文本解析为 Element 元素，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接使用innerHTML操作更快。
element.insertAdjacentHTML(有四个值, text);
element.insertAdjacentHTML('beforebegin', text); // 元素自身的前面
element.insertAdjacentHTML('afterbegin', text);  // 插入元素内部的第一个子节点之前。
element.insertAdjacentHTML('beforeend', text);   // 插入元素内部的最后一个子节点之后
element.insertAdjacentHTML('afterend', text);    // 元素自身的后面。
```

##### 清楚所有的li

```js
addTab()
{
    that.clear()
}
```

##### 获取所有新增的li跟section

```java
          element(){
            this.section = this.el.querySelectorAll('section');
            this.lis = this.el.querySelectorAll('li');
        }
        init() {
            this.element()
            console.log(this)
            //点击功能
            this.add.onclick = this.addTab
        }
```

##### 再次调用init

```js
         addTab()
{
    that.init()
    //清楚所有的li
    that.clear()
    // 创建i元素和section元素
    let random = Math.floor(Math.random() * 10)
    let li = `<li class="liactive"><span>新选项卡${random}</span><span >x</span></li>`;
    let section = `<section class="conactive">新测试${random}</section>`
    that.ul.insertAdjacentHTML('beforeend', li);
    that.tabscon.insertAdjacentHTML('beforeend', section);
    // 把这两个元素追加到对应的父元素里面
}
```

#### 面向对象版tab栏切换删除功能

- 1.点击×可以删除当前的i选项卡和当前的section
- 2.X是没有索引号的，但是它的父亲ⅰ有索引号，这个索引号正是我们想要的索引号
- 3.所以核心思路是：点击x号可以删除这个索引号对应的Ii和section

```js
         // 3.删除功能
removeTab(e)
{
    e.stopPropagation()//阻止冒泡防止出发1i的切换点击事件
    let index = this.parentNode.index//获得索引
    that.lis[index].remove();//remove()方法可以删除指定的元素
    that.section[index].remove();
    //当我们删除了选中状态的这个1i的时候，让它的前一个1i处于选定状态
    if (document.querySelector('.liactive')) return index === 0 ? index : index--;

    //手动调用我们的点击事件不需要鼠标触发
    that.lis[index] && that.lis[index].click()// 如果前面.lis[index]为真，则执行click()，如果为假，则不执行
}
```

#### 面向对象版tab栏切换编辑功能

双击选项卡i或者section里面的文字，可以实现修改功能

双击事件是：ondblclick

3.如果双击文字，会默认选定文字，此时需要双击禁止选中文字

```js
editTab()
{
    let str = this.innerHTML
    window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection().empty()
    this.innerHTML = `<input type="text" class="inp"/>`
    let inp = this.children[0];
    inp.value = str
    inp.select()//文本框里面的文字处于选定状态
    ///当我们离开文本框就把文本框里面的值给span
    inp.onblur = function () {
        this.parentNode.innerHTML = this.value;
    }
    // 按下回车也可以把文本框里面的值传给span
    inp.onkeyup = function (e) {
        if (e.key === 'Enter') {
            ///手动调用表单失去焦点事件不需要鼠标离开操作
            this.blur()
        }
    }
}
```

```、
init() {

    this.element()
    //点击功能
    this.add.onclick = this.addTab
    // init 初始化操作让相关元素绑定事件
    for (let i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i
        this.lis[i].onclick = this.toggleTab
        this.remove[i].onclick=this.removeTab
        this.spans[i].ondblclick=this.editTab
        this.section[i].ondblclick=this.editTab
    }
}
```

```js
element()
{
    this.add = this.el.querySelector('.tabadd');
    this.ul = this.el.querySelector('.fisrstnav ul:first-child');
    this.tabscon = this.el.querySelector(".tabscon")
    this.lis = this.el.querySelectorAll('li');
    this.section = this.el.querySelectorAll('section');
    this.remove = this.el.querySelectorAll('.rem')
    this.spans = this.el.querySelectorAll('.spans')
}
```

```js
window.addEventListener('load', () => {
    let that;

    class Tab {
        constructor(el) {
            this.el = document.querySelector(el);
            this.init()
            that = this
        }

        //获取所有的li跟section
        element() {
            this.add = this.el.querySelector('.tabadd');
            this.ul = this.el.querySelector('.fisrstnav ul:first-child');
            this.tabscon = this.el.querySelector(".tabscon")
            this.lis = this.el.querySelectorAll('li');
            this.section = this.el.querySelectorAll('section');
            this.remove = this.el.querySelectorAll('.rem')
            this.spans = this.el.querySelectorAll('.spans')
        }

        init() {

            this.element()
            //点击功能
            this.add.onclick = this.addTab
            // init 初始化操作让相关元素绑定事件
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i
                this.lis[i].onclick = this.toggleTab
                this.remove[i].onclick = this.removeTab
                this.spans[i].ondblclick = this.editTab
                this.section[i].ondblclick = this.editTab
            }
        }

        // 1.切换功能
        toggleTab() {
            // console.log(this.index)
            that.clear()
            this.className = 'liactive';
            that.section[this.index].className = 'conactive';
        }

        // 清楚所有li和section的类
        clear() {
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].className = ''
                this.section[i].className = '';
            }
        }

        // 2.添加功能
        addTab() {
            //清楚所有的li
            that.clear()
            // 创建i元素和section元素
            let random = Math.floor(Math.random() * 10)
            let li = `<li class="liactive"><span class="spans">新选项卡${random}</span><span class="rem">x</span></li>`;
            let section = `<section class="conactive">新测试${random}</section>`
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabscon.insertAdjacentHTML('beforeend', section);
            // 把这两个元素追加到对应的父元素里面
            that.init()
        }

        // 3.删除功能
        removeTab(e) {
            e.stopPropagation()//阻止冒泡防止出发1i的切换点击事件
            let index = this.parentNode.index//获得索引
            that.lis[index].remove();//remove()方法可以删除指定的元素
            that.section[index].remove();
            //当我们删除了选中状态的这个1i的时候，让它的前一个1i处于选定状态
            if (document.querySelector('.liactive')) return index === 0 ? index : index--;

            //手动调用我们的点击事件不需要鼠标触发
            that.lis[index] && that.lis[index].click()// 如果前面.lis[index]为真，则执行click()，如果为假，则不执行
        }

        // 4.修改功能
        editTab() {
            let str = this.innerHTML
            window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection().empty()
            this.innerHTML = `<input type="text" class="inp"/>`
            let inp = this.children[0];
            inp.value = str
            inp.select()//文本框里面的文字处于选定状态
            ///当我们离开文本框就把文本框里面的值给span
            inp.onblur = function () {
                this.parentNode.innerHTML = this.value;
            }
            // 按下回车也可以把文本框里面的值传给span
            inp.onkeyup = function (e) {
                if (e.key === 'Enter') {
                    ///手动调用表单失去焦点事件不需要鼠标离开操作
                    this.blur()
                }
            }
        }
    }

    new Tab('#tab')
})
```

# 构造函数的和原型

概述

在典型的OOP的语言中（如Jva），都存在类的概念，类就是对象的模板，对象就是类的实例，但在ES6之前， JS中并没用引入类的概念。
ES6，全称ECMAScript6.0,2015.06发版。但是目前浏览器的JavaScript：是ES5版本，大多数高版本的浏览器也支持ES6，不过只实现了ES6的部分特性和功能。
在S6之前，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对像和它们的特征。

创建对象可以通过以下三种方式：

对象字面量

new Objecto

自定义构造函数

## 构造函数

构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与w一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

在S中，使用构造函数时要注意以下两点：

- 1.构造函数用于创建某一类对象，其首字母要大写
- 2.构造函数要和new一起使用才有意义
- 执行构造函数里面的代码，给这个新对象添加属性和方法
- 返回这个新对象（所以构造函数里面不需要return）。

JavaScript的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的this上添加。通过这两种方式添动加的成员，就分别称为静态成员和实例成员。

- 静态成员：在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问

- 实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问

## 构造函数的问题

勾造函数方法很好用，但是存在浪费内存的问题。

![image-20220206233002168](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220206233002168.png)

## 构造函数原型prototype

构造函数通过原型分配的函数是所有对象所共享的。

JavaScript规定，每一个构造函数都有一个prototype属性，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

<p style='color:red '>我们可以把那些不变的方法，直接定义在prototype对象上，这样所有对象的实例就可以共享这些方法</p>

<h2>问答？

1.原型是什么？

一个对象，我们也称为prototype为原型对象。

2.原型的作用是什么？公

## 对象原型_proto_

对象都会有一个属性proto_指向构造函数的prototype原型对象，之所以我们对象可以使用构造函数prototype原型对象的属性和方法，就是因为对象有_proto原型的存在。

- _proto对象原型和原型对象prototype是等价的
- 构造函数prototype属性:显示原型=实例对象的__proto__属性:隐式原型
- poo对象原型的意义就在于为对像的查找机制提供一个方向，或者说条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象prototype

## constructor构造函数

<span style='color:red'>对象原型（proto_）和构造函数（prototype）原型对像</span>里面都有一个属性constructor.属性，constructor我们称为构造函数，因为它指回构造函数本身。

constructor主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function Star(uname, age) {
        this.uname = uname;
        this.age = age;
    }

    // 很多情况下，我们需要手动的利用constructor这个属性指回原来的构造函数
    Star.prototype.sing = function () {
        console.log("我会唱歌")
    }
    Star.prototype.movie = function () {
        console.log('我会演戏')
    }
    let ldh = new Star('刘德华', 41)
    let zxy = new Star('张学友', 40)
</script>
</body>
</html>
```

构造函数里的原型对象指向内存里的一块地方，实例也会继承原型对象指向的内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function Star(uname, age) {
        this.uname = uname;
        this.age = age;
    }

    // 很多情况下，我们需要手动的利用constructor这个属性指回原来的构造函数
    // Star.prototype.sing=function () {
    //   console.log("我会唱歌")
    // }
    // Star.prototype.movie=function () {
    //   console.log('我会演戏')
    // }
    //原型本身是对象，给它赋值就是覆盖之前的对象
    Star.prototype = {
        constructor: Star,
        sing() {
            console.log('我会唱歌')
        },
        movie() {
            console.log("我会演习")
        }
    }
    let ldh = new Star('刘德华', 41)
    let zxy = new Star('张学友', 40)
    console.log(Star.prototype)
    console.log(ldh.__proto__)
</script>
</body>
</html>
```

## 构造函数、实例、原型对象三者之间的关系

![image-20220207132228341](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220207132228341.png)

<h3>Star构造函数构造出来子<span style="color:red">(Star.prototype)</span>原型对象</h3>

<h3>而Star原型对象也能指回父Star构造函数<span style="color:red">(Star.prototype.constructor)</span></h3>

<h3>Star构造函数创建了一个ldh实例对象<span style="color:red">(ldh对象实例)</span></h3>

<h3>而ldh实例对象里面有个原型<span style="color:red">(ldh.__proto__)</span></h3>

<h3>这个<span style='color:red'>(ldh.__proto__)</span>指向的是Star原型对象<span style="color:red">(Star.prototype)</span></h3>

<h3>而(ldh.__proto__)通过Star.prototype里面的Star.prototype.constructor指回Star构造函数</h3>

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220207134252514.png)

## JavaScript的成员查找机制（规则）

```js
function Star(name, age) {
    this.name = name
    this.age = age
}

let ldh = new Star('刘德华', 51);
```

- 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。

    - ```js
  ldh.sex='男'
  console.log(ldh.sex)// 有这个成员的时候 就输出男
    ```

- 如果没有就查找它的原型（也就是proto指向的prototype原型对象）。

    - ```js
  如果没有这个成员 他就会根据__proto__往Star原型对象上找有没有sex这个成员，如果有就拿来使用 Star.prototype.sex='男'
  console.log(ldh.sex)// 有这个成员,输出男
    ```

- 如果还没有就查找原型少对象的原型（Object的原型对象）。

    - ```js
  如果没有这个成员 他就会去Object的原型对象里面找有没有sex这个成员，如果有就拿来用 Object.prototype.sex='男'
  console.log(ldh.sex)// 有这个成员,输出男
    ```

- 依此类推一直找到Object为止（null）。

    - ```
  console.log(ldh.sex)// 如果没找到这个成员,则输出undefined
    ```

## this指向

在构造函数中，里面this指向的是对象实例1dh

原型对象函数里面的this指向的是实例对象Idh

- 只有调用的时候函数的时候this才会指向
- this指向的是函数的调用者

## 扩展内置对象

可以通过原型对象，对原来的内置对像进行扩展自定义的方法。比如给数组增加自定义求偶数和的功能。

```js
<script>
    Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
    sum += this[i]
}
    return sum
}
    console.log(Array.prototype)//[sum: ƒ, constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
    let a = [1, 2, 3, 4, 5, 6, 7].sum();
    console.log(a)//28
    let b=new Array(11,22,33,44,55).sum()
    console.log(b)//165
</script>
```

注意：数组和字符串内置对像不能给原型对象覆盖操作Array.prototype=0，只能是Array.prototype.Xx=function0的方式。

```js
<script>
    Array.prototype={
    constructor:Object,
    sum:function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
    sum += this[i]
}
    return sum
}
}
    console.log(Array.prototype)
    let a = [1, 2, 3, 4, 5, 6, 7].sum();
    console.log(a)//扩展内置对象方法.html?_ijt=721qehsifncp61pgve9k0uei4d:28 Uncaught TypeError: [1,2,3,4,5,6,7].sum is not a
    function
    let b=new Array(11,22,33,44,55).sum()
    console.log(b)
</script>
```

## 继承

ES6之前并没有给我们提供extends继承。我们可以通过构造函数+原型对象模拟实现继承，被称为组合继承。

### call（）

调用这个函数并且修改函数运行时的this指向

```
fun1.call(thisArg,arg1,arg2....)
```

- thisArg：当前调用函数this的指向对象
- arg1，arg2：传递的其他参数

### 借用构造函数继承父类型属性

核心原理：通过ca0把父类型的this指向子类型的this，这样就可以实现子类型继承父类型的属性。

```js
<script>
    // 父构造函数
    function Father(name,age){
    // this 指向父构造函数的对象实例
    this.name = name
    this.age=age
}
    // 子构造函数
    function Son(name,age,score){
    // this 指向子构造函数的对象实例
    // this.name=name this.age=age 继承父构造函数的两个属性
    Father.call(this, name, age);
    this.score=score
}
    let a=new Son('刘德华',18,99);
    console.log(a);
</script>
```

借用父构造函数继承实际意义上并不是真正的继承，只是this的指向发生了改变，父构造函数原型上的属性和方法子类得不到

![image-20220207151645073](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220207151645073.png)

Son.prototype=Father.prototype

这样直接赋值会有问题，如果修改了子原型对象，父原型对象也会跟着一起变化

Son要用到Father里的money方法：

- 1、F实例对象可以取到F的原型对象；

```js
  //Son.prototype=Father.prototype；这样直接赋值会有问题，如果修改了子原型对象，父原型对象也会跟着一起变化
  // Son.prototype=Father.prototype
  //如果利用对象的形式修改了原型对象，别忘了利用constructor指回原来的原型对象
Son.prototype = new Father();
Son.prototype.constructor = Son

//子构造函数的方法
Son.prototype.exe = function () {
    console.log("子构造函数的方法")
}

let a = new Son('刘德华', 18, 99);
```

```html

<script>
    // 父构造函数
    function Father(name, age) {
        // this 指向父构造函数的对象实例
        this.name = name
        this.age = age
    }

    Father.prototype.class = function () {
        console.log("我是父属性")
    }

    // 子构造函数
    function Son(name, age, score) {
        // this 指向子构造函数的对象实例
        // this.name=name this.age=age 继承父构造函数的两个属性
        Father.call(this, name, age);
        this.score = score
    }

    //Son.prototype=Father.prototype；这样直接赋值会有问题，如果修改了子原型对象，父原型对象也会跟着一起变化
    // Son.prototype=Father.prototype
    //如果利用对象的形式修改了原型对象，别忘了利用constructor指回原来的原型对象
    Son.prototype = new Father();
    Son.prototype.constructor = Son

    //子构造函数的方法
    Son.prototype.exe = function () {
        console.log("子构造函数的方法")
    }

    let a = new Son('刘德华', 18, 99);
    console.log(a);
    console.log(Father.prototype)
    console.log(Son.prototype)

</script>
```

## 类calss的本质

### class本质还是function.

类的本质还是一个函数 我们也可以简单的认为类就是构造函数的另外一种写法

ES6之前通过构造函数+原型实现面向对象编程

- （1）构造函数有原型对象prototype
- （2）构造函数原型对象prototype里面有constructor指向构造函数本身
- （3）构造函数可以通过原型对象涛加方法
- （4）构造函数创建的实例对象有proto._原型指向构造函数的原型对象

类的所有方法都定义在类的prototype属性上

类创建的实例，里面也有proto指向类的prototype原型对象

所以ES6的类它的绝大部分功能，ES5都可以做到，新的clss写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

所以ES6的类其实就是语法糖。

语法糖：语法糖就是一种便捷写法。简单理解有两种方法可以实现同样的功能，但是一种写法更加清晰、方便那么这个方法就是语法糖

# es5新增方法

## 数组方法

迭代(遍历)方法：forEach()、map()、filter()、some()、evey()；

```js
const arr1 = ['小', '红', '大', '苏', '强', '苏'];
const arr2 = [1, 5, 13, 416, 1361, 4, 58165, 23, 123, 156]
```

### foreach

```js
arr1.forEach((item, index, arr) => {// forEach不会终止循环
    console.log('每个数组元素======:' + item)
    console.log('每个数组的索引======:' + index)
    console.log('数组本身=======:' + arr)
})
```

### fliter

fliter0方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，主要用于筛选数组

注意它直接返回一个新数组

- currentValue：数组当前项的值

- index：数组当前项的索

- arr：数组对象本身

  ```
    let a= arr2.filter(item=>{
      return item<=100;
    })
    console.log(a)[1, 5, 13, 4, 23]
  ```

## some

- som（）方法用于检测数组中的元素是否满足指定条件。通俗点查找数组中是否有满足条件的元素
- 注意它返回值是布尔值如果查找到这个元素，就返回true，如果查找不到就返回false.
- 如果找到第一个满足条件的元素，则终止循环不在继续查找currentValue：数组当前项的值
- index：数组当前项的索引
- arr：数组对象本身

```js
let a = arr2.some(function (item) {
    return item >= 100;
    或
    return item === 100;
})
console.log(a)// true  return item>=100
console.log(a)//true  return item===100;
```

# 案例

## html页面

```html

<head>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
<div id="app">
    <div>
        <span>按照价格查询-</span>
        <label>
            <input type="text" class="input_search_start">
            -
            <input type="text" class="input_search_end">
            <button class="search">搜索</button>
        </label>
        <label>
            按照商品名称查询
            <input type="text" class="value">
            <button class="search_ss">查询</button>
        </label>

    </div>
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>产品名称</th>
            <th>价格</th>
        <tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>
<script src="./index.js"></script>
</body>
```

## css页面

```css
* {
    margin: 0;
    padding: 0;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#app {
    width: 50vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column
}

#app table {
    border: 1px #000 solid;
    text-align: center;
}

#app table thead tr th {
    border: 1px #666666 solid;
}

input {
    width: 50px;
    height: 25px;
}
```

## js页面

```
let data=[
    {
        id:1,
        name:'小米',
        price:3999
    },
    {
        id:2,
        name:'oppo',
        price: 999
    },
    {
        id:3,
        name:'荣耀',
        price: 1299
    },
    {
        id:4,
        name:'华为',
        price: 4333
    },
    {
        id:5,
        name:'小米',
        price: 3000
    }
]
// 获取元素
const tbody=document.querySelector('tbody');
let search=document.querySelector('.search');
let start=document.querySelector('.input_search_start');
let end=document.querySelector('.input_search_end');
let souSuo=document.querySelector('.search_ss');
let souValue=document.querySelector(".value");
// 封装渲染
function setHtml(myData) {
    //清空原来的数据
    tbody.innerHTML=''
    // 1.把数据渲染到页面中
    myData.forEach(item=>{
        const tr=document.createElement('tr');
        tr.innerHTML=`<td>${item.id}</td><td>${item.name}</td><td>${item.price}</td>`
        tbody.appendChild(tr)
    })
}
// 把数据渲染到页面中
setHtml(data)
// 2.根据价格查询商品
// 当我们点击了按钮，就可以根据我们的商品价格去筛选数组里面的对象
search.addEventListener('click',function () {
    let list=data.filter((item)=>{
        return item.price>=start.value&&item.price<=end.value
    })
    if (end.value==0)return setHtml(data)
    setHtml(list)
})
//如果查询数组中唯一的元素，用som方法更合适，因为它找到这个元素，就不在进行循环，效率更高】
// souSuo.addEventListener('click',function () {
//     let arrList=[]
//     let souSUO= data.some(function (item) {
//         if (item.name===souValue.value){
//             arrList.push(item)
//             return true;
//         }
//     })
//     setHtml(arrList)
// })
souSuo.addEventListener('click',function () {
    let arrList=data.filter((item)=>{
        return item.name===souValue.value
    })
    setHtml(arrList)
})
```

# trim方法去除字符串两侧空格

```js
let str = '  arr  ';
console.log(str);
let str1 = str.trim()
console.log(str1)
```

# 对象方法

## Obiect.defineProperty方法

Object.defineProperty0定义对象中新属性或修改原有的属性。

```js
let obj = {
    id: 1,
    name: '小米',
    price: 4311
}
```

第一个使用方法就是修改或添加属性值

```js
Object.defineProperty(obj, 'num', {
    value: 1000
})
console.log(obj)//{id: 1, name: '小米', price: 9999, num: 1000}
```

第二个使用方法就是可以锁定属性值

```js
let obj = {id: 1, name: '小米', price: 9999, num: 100, sum: 1000}
Object.defineProperty(obj, 'id', {
    // 不允许修改属性值
    writable: false
})
obj.id = 2;
console.log(obj)//{id: 1, name: '小米', price: 9999, num: 100, sum: 1000}
```

第三个方法是目标能不能枚举出来

```js
Object.defineProperty(obj, 'css', {
    // 不允许修改属性值
    value: '目标正则奔跑',
    writable: false,
    // 不允许枚举css
    enumerable: false
})
console.log(obj);//{id: 1, name: '小米', price: 4311, sum: 1000, css: '目标正则奔跑'}
console.log(Object.keys(obj));//3) ['id', 'name', 'price']
```

第四个方法是目标不能被删除

```js
  Object.defineProperty(obj, 'css', {
    // 不允许修改属性值
    value: '目标正则奔跑',
    writable: false,
    // 不允许枚举css
    enumerable: false,
    // 不允许删除css
    configurable: false
})

delete obj.css;
console.log(obj)//id: 1, name: '小米', price: 4311, sum: 1000, css: '目标正则奔跑'}
```

# 函数进阶

## 函数的调用方式

- 普通函数
- 对象的方法
- 构造函数
- 绑定事件函数
- 定时器函数
- 立即执行函数

```js
<script>
    // 普通函数
    function fn() {
    console.log("调用普通函数")
}
    fn()
    // 对象函数
    let obj={
    saiHi:function (){
    console.log("调用对象函数")
}
}
    obj.saiHi()
    // 构造函数
    function Star() {
    console.log("调用构造函数")
}
    new Star();
    // 闭包
    (function (){
    console.log("立即执行函数")
})()
    // 定时器函数
    setInterval(function () {
    console.log("调用定时器函数");
},1000)

</script>
```

## 函数内this的指向

这些this的指向，是当我们调用函数的时候确定的。调用方式的不同决定了ths的指向不同一般指向我们的调用者。

![image-20220207201222981](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220207201222981.png)

```js
    // 普通函数
function fn() {
    console.log(this)
}

fn()
// 对象函数
let obj = {
    saiHi: function () {
        console.log(this)
    }
}
obj.saiHi()

// 构造函数
function Star() {
    console.log(this)
}

let ldh = new Star();
// 闭包
(function () {
    console.log(this)
})()
// 定时器函数
setInterval(function () {
    console.log(this);
}, 1000)
```

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220207201514140.png)

## 改变函数内部this指向

JavaScript为我们专门提供了一些☒函数方法来帮我们更优雅的处理函数内部this的指向问题，常用的有bind()、 call()、apply()三种方法。

### call方法

ccall()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的this指向。

```js
let a = {
    name: 'obj'
}

function abc(a, b) {
    console.log(this)//{name: 'obj'}
    console.log(a + b)//3
}

abc.call(a, 1, 2)
```

### apply方法

āpply()方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的this指向。

thisArg：在fun函数运行时指定的this值

argsArray：传递的值，必须包含在数组里面返回值就是函数的返回值，因为它就是调用函数

![image-20220208121509420](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220208121509420.png)

```js
function def(b) {
    console.log(this)   //{name: 'obj'}
    console.log(b)    // '123
}

def.apply(a, ["123"])
//也是调用函数第二个可以改变函数内部的this指向
//但是他的参数必须是数组（伪数组）
//apply的主要应用
```

获取数组中的最小值/最大值

```js
     let aaa = Math.max.apply(null, arr);
let bbb = Math.max(...arr);
let ccc = Math.min(...arr)
console.log(aaa)
console.log(bbb)
console.log(ccc)
```

### bind方法

bind()方法不会调用函数。但是能改变函数内部this

thisArg：在fun函数运行时指定的this值

arg1，arg2：传递的其他参数

返回由指定的ths值和初始化参数改造的原函数拷贝

```
fun.bind（thisArg,argl,arg2，...）
```

```js
let o = {
    name: 'obj'
}

function fn() {
    console.log(this)
}

let a = fn.bind(o)
a()
//不会调用原来的函数可以改变原来函数内部的this
//返回的是原函数改变this之后产生的新函数
```

面向对象改版

```js
// 通过bind方法优化代码，删除全局变量that,不采用that=this的赋值，使得代码更加优雅
window.addEventListener('load', () => {
    // let that;
    class Tab {
        constructor(el) {
            this.el = document.querySelector(el);
            this.add = this.el.querySelector('.tabadd');
            this.ul = this.el.querySelector('.fisrstnav ul:first-child');
            this.tabscon = this.el.querySelector(".tabscon")
            this.init()
            that = this
        }

        //获取所有的li跟section
        element() {
            this.lis = this.el.querySelectorAll('li');
            this.section = this.el.querySelectorAll('section');
            this.remove = this.el.querySelectorAll('.rem')
            this.spans = this.el.querySelectorAll('.spans')
        }

        init() {

            this.element()
            //点击功能
            this.add.onclick = this.addTab
            // init 初始化操作让相关元素绑定事件
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i
                this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this)
                this.remove[i].onclick = this.removeTab.bind(this.remove[i], this)
                this.spans[i].ondblclick = this.editTab.bind(this.spans[i], this)
                this.section[i].ondblclick = this.editTab.bind(this.section[i], this)
            }
        }

        // 1.切换功能
        toggleTab(that) {
            // console.log(this.index)
            that.clear()
            this.className = 'liactive';
            that.section[this.index].className = 'conactive';
        }

        // 清楚所有li和section的类
        clear() {
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].className = ''
                this.section[i].className = '';
            }
        }

        // 2.添加功能
        addTab(that) {
            //清楚所有的li
            that.clear()
            // 创建i元素和section元素
            let random = Math.floor(Math.random() * 10)
            let li = `<li class="liactive"><span class="spans">新选项卡${random}</span><span class="rem">x</span></li>`;
            let section = `<section class="conactive">新测试${random}</section>`
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabscon.insertAdjacentHTML('beforeend', section);
            // 把这两个元素追加到对应的父元素里面
            that.init()
        }

        // 3.删除功能
        removeTab(that, e) {
            e.stopPropagation()//阻止冒泡防止出发1i的切换点击事件
            let index = this.parentNode.index//获得索引
            that.lis[index].remove();//remove()方法可以删除指定的元素
            that.section[index].remove();
            //当我们删除了选中状态的这个1i的时候，让它的前一个1i处于选定状态
            if (document.querySelector('.liactive')) return index === 0 ? index : index--;

            //手动调用我们的点击事件不需要鼠标触发
            that.lis[index] && that.lis[index].click()// 如果前面.lis[index]为真，则执行click()，如果为假，则不执行
        }

        // 4.修改功能
        editTab(that) {
            let str = this.innerHTML
            window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection().empty()
            this.innerHTML = `<input type="text" class="inp"/>`
            let inp = this.children[0];
            inp.value = str
            inp.select()//文本框里面的文字处于选定状态
            ///当我们离开文本框就把文本框里面的值给span
            inp.onblur = function () {
                this.parentNode.innerHTML = this.value;
            }
            // 按下回车也可以把文本框里面的值传给span
            inp.onkeyup = function (e) {
                if (e.key === 'Enter') {
                    ///手动调用表单失去焦点事件不需要鼠标离开操作
                    this.blur()
                }
            }
        }
    }

    new Tab('#tab')
})
```

### call apply bind总结

相同点： 都可以改变函数内部的his指向。

区别点：

- 1.cal和apply会调用函数并目改变函数内部this指向。
- 2.call和apply传递的参数不一样，cal传递参数aru1，aru2形式apply必须数组形式【arg】
- 3.bind不会调用函数可以改变函数内部this指向

主要应用场景：

- 1.call经常做继承。
- 2.pply经常跟数组有关系。比如借助于数学对象实现数组最大值最小值3.bind不调用函数但是还想改变this指向。比如改变定时器内部的this指向。

# 高阶函数

高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。

```
<script>
    function fn(callback) {
        callback && callback();
    }
    fn(function () {
      alert('h1')
    })
</script>
```

```
<script>
    function fn(callback) {
          return function(){}
    }
    fn();
</script>
```

此时fn就是一个高阶函数函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。最典型的就是作为回调函数。

# 闭包

闭包（closure）指有权访问另一个函数作用域冲变量的函数。--JavaScript高级程序设计

```js
  // function fn() {
  //   let num=20;
  //   function fun() {
  //     console.log(num);
  //   }
  //   return fun
  // }
  //
  // console.log(fn())
  // let f=fn();
  // console.log(f())
  // f()
function fn() {
    let num = 20;
    return function () {
        console.log(num)
    }
}

// fn()()
let a = fn()
a()
```

## 点击li打印当前的索引号

```js
let li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {//用var的i会点击后i都是5，但用let的则不会
    li[i].index = i;
    li[i].onclick = function () {
        console.log(i)//5
        console.log(this.index)//0,1,2,3,4
    }
}
```

## 利用闭包的方式得到当前的li的索引号

```js
let li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
    (function (i) {//这个i是函数里使用的参数
        li[i].onclick = function () {
            console.log(i)
        }
    })(i)//最后这个i是指传入的参数
}
```

## 闭包应用-3秒钟之后，打印所有11元素的内容

```
//不用闭包的跟es6的情况下
for (var i=0;i<li.length;i++){
      setTimeout(function () {
        let a=li[i].innerHTML;
        span.innerHTML+=`<p>${a}</p>`;
      },3000)
    }
```

![image-20220208162035410](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220208162035410.png)

```
//闭包
for (var i=0;i<li.length;i++){
  (function (i) {
    setTimeout(function () {
      let a=li[i].innerHTML;
      span.innerHTML+=`<p>${a}</p>`
    },3000)
  })(i)
}
```

![image-20220208162451966](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220208162451966.png)

## 闭包计算打车的价格

```html

<body>
闭包应用-计算打车价格/打车起步价13（3公里内），
之后每多一公里增加5块钱。用户输入公里数就可以计算打车价格
如果有拥堵情况，总价格多收取16块钱拥堵费

<script>
    let a = (function () {
        var start = 13;
        var num = 0;
        return {
            //正常的总价
            price: function (n) {
                n < 3 ? num = start : num = start + (n - 3) * 5;
                return num
            },
            yd: function (n) {// 拥堵后的价格
                return n ? num + 16 : num;
            }
        }
    })()
    console.log(a.price(5))
    console.log(a.price(3))
    console.log(a.yd(true))
    console.log(a.price(3))

</script>
```

## 思考题

### 第一题

this输出什么

```js
  var name = 'The Window';
var object = {
    name: 'My',
    getNameFunc: function () {
        return function () {
            return this.name
        }
    }
};
console.log(object.getNameFunc());
```

```
拆分
    var f = object.getNameFunc();
    console.log(f)//ƒ (){return this.name}zhe
    // 类似于   var f=function () {return this.name}
    // 类似与   this在function里面 相当于function(){this}(); 这个像是立即执行函数，而立即执行函数的this指向1window
    var a=f()
    console.log(a)//The Window
```

### 第二题

```
    var name = 'The Window';
    var object = {
        name: 'My',
        getNameFunc: function () {
          var that=this;
            return function () {
                return that.name
            }
        }
    };
```

```
    console.log(object.getNameFunc()())
    // var f=object.getNameFunc()==var f=function () {return that.name}
    // f() 就产生了闭包，但因为that已经在外层函数调用了，所以结果为My
```

# 递归

## 什么是递归？

如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。

简单理解：函数内部自己调用自己，这个函数就是递归函数

递归函数的作用和循环效果一样由于递归很容易发生"栈谥出”错误（stack overflow），

所以必须要加退出条件return。

```js
<script>
    //递归函数：函数内部自己调用自己，这个函数就是递归函数
    let i=1;
    function fn() {
    console.log("我要打印" + i + "句话");
    if (i===6){
    return//递归里面必须加退出条件
}
    i++;
    fn()
}
    fn()
</script>
```

## 利用递归求出阶层

```
function di(n) {
    if (n===1)return 1
    return  n*di(n-1);
}
console.log(di(10))
```

```
function fn(n){
            if(n===1){
                return 1
            }
            return n * fn(n-1)
        }
            console.log(fn(5));
        5*fn(5-1)
        5*fn(4*fn(4-1))
        5*fn(4*fn(3*fn(3-1)))
        5*fn(4*fn(3*fn(2*fn(2-1))))
        5*fn(4*fn(3*fn(2*fn(1))))
        5*fn(4*fn(3*fn(2*1)))
        5*fn(4*fn(3*2))
        5*fn(4*6)
        5*24
```

## 利用递归函数求斐波那契数列（兔子序列）

1、1、2、3、5、8、13、21.·

用户输入一个数字就可以求出这个数字对应的兔子序列值

```
function en(n) {
    if (n===1||n===2)return 1
    return en(n-1)+en(n-2);
}
console.log(en(6));
```

## 利用递归遍历数据

```
let data=[{id:1,name:"电视",price:3110, goods:[{id:11, name:'小米',goods:[{id:555, name:'name'}]}]}, {id:2,name:"洗衣机",price:4510,goods:[{id:22,name:'华为',goods:[{id:111, name:'name'}]}]}, {id:3,name:"电脑",price:2360,goods:[{id:33,name:'海尔',goods:[{id:222, name:'name'}]}]}, {id:4,name:"冰箱",price:1500,goods:[{id:44,name:'还好',goods:[{id:333, name:'name'}]}]}, {id:5,name:"微波炉",price:1000,goods:[{id:55,name:'打打',goods:[{id:444, name:'name'}]}]}]
//我们想要做输入id号，就可以返回的数据对象
// 1.利用forEach去遍历里面的每一个对象
function getId(Data,id) {
    let o={}
    Data.forEach((item)=>{
        if (item.id===id){
            o=item
        }else if(item.goods && item.goods.length!=0){
            getId(item.goods,id);
        }
    })
    return o
}
getId(data,11)
getId(data,1)
console.log(getId(data, 111));
```

# 严格模式

JavaScript除了提供正常模式外，还提供了严格模式（strict mode）。ES5的严格模式是采用具有限制性JavaScript变体的一种方式，即在严格的条件下运行JS代码。
严格模式在E10以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。 严格模式对正常的avaScript语义做了一些更改：

- 1.消除了Javascript语法的一些不合理、不严谨之处，减少了一些怪异行为。
- 2.消除代码运行的一些不安全之处，保证代码运行的安全。
- 3.提高编译器效率，增加运行速度。
- 4.禁用了在ECMAScript的未来版本中可能会定义的一些语法，为未来新版本的Javascript做好铺垫。比如一些保留字如：class,enum,export,extends,import,super不能做变量名

## 开启严格模式

严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为为脚本开启严格模式和为函数开启严格模式两种情况。公

```js
'use strict';
///下面的s代码就会按照严格模式执行代码
```

### 1.为脚本开启严格模式

有的script基本是严格模式，有的script脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这独立创建一个作用域而不影响其他scit脚本文件。

```js
(function () {
    'use strict';
    let a = 0;

    function num() {
        console.log(a)
    }

    num()
})()
```

### 2.为函数开启严格模式

```js
 function fn() {
    'use strict';//下面的s代码就会按照严格模式执行代码
}

function fun() {
    // 里面还是普通函数
}
```

## 严格模式中的变化

### 变量规定

- 1.在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var命令声明，然后再使用。

```json
<script>
sun=10;
console.log(sun)//打印10
</script>
<script>
'use strict'
num=10;
console.log(num)//打印 Uncaught ReferenceError: num is not defined
</script>
```

- 2.严禁删除已经声明变量。例如，delete x；语法是错误的。

```
<script>
  let num=10;
  delete num;
  console.log(num)// 10
</script>
```

```
<script>
  'use strict'
  let abc=10;
  delete abc
  console.log(abc)//Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
</script>
```

### 严格模式下this指向问题

- 以前在全局作用域函数中的this指向window对象。

- ```
  <script>
    // 非严格模式下
    function fn() {
      console.log(this)
    }
    fn()//
  </script>
  ```

    - 严格模式下全局作用域中函数中的this是undefined。

    - ```
    <script>
    //严格模式下
      'use strict'
      function abc() {
        console.log(this)//undefined
      }
      abc()
    </script>
    ```

    - 以前构造函数时不加new也可以调用，当普通函数，this指向全局对象

    - ```
      function Scat(){
        this.sex='男'
      }
      Scat();
      console.log(window.sex);//男
    ```

      ```
        'use strict'
        function Sact(){
          this.sex='男'
        }
        Sact();//Uncaught TypeError: Cannot set properties of undefined (setting 'sex')
      ```

        - new实例化的构造函数指向创建的对象实例。

        - ```
        'use strict'
        function Sact(){
          this.sex='男'
        }
       let ldh= new Sact();
        console.log(ldh.sex);//男
      ```

          ```
          
          ```

          setTimeout(function () {

              console.log(this)

          },1000)

          ```
          
          ```

### 函数变化

函数不能有重名的参数。

```
普通模式
function fna(a,a) {
  console.log(a+a)//4
}

fna(1,2)
```

严格模式

```
'use strict'
function fna(a,a) {
  console.log(a+a)//Uncaught SyntaxError: Duplicate parameter name not allowed in this context
}

fna(1,2)
```

# 浅拷贝和深拷贝

## 浅拷贝(Object.assign(拷贝别人,给别人拷贝))

- 1.浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用。
- 2.深拷贝拷贝多层每一级别的数据都会拷贝。
- Object.assign（target，sources）es6新增方法可以浅拷贝

```js
let obj = {
    id: 1,
    name: 'andy',
    abc: {
        id: 2,
        name: "hae"
    }
}
let a = {};
for (var i in obj) {
    // i是属性名 obj[i]是属性值
    console.log(i);//id,name
    console.log(obj[i]),//1,andy
        a[i] = obj[i];
}
console.log(a)//{id: 1, name: 'andy', abc: {…}}
Object.assign(a, obj);//es6语法糖
console.log(a)
```

# es6

## 解构赋值

ES6中允许从数组中提取值，按照对应位置，对变量赋值。对像也可以实现解构。

按照一定模式，从数组中或对象中提取值，将提取出来的值赋值给另外的变量。

```js
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b)
console.log(c)
```

如果解构不成功，变量的值为undefined。

对象结构赋值

```js
  let per = {id: 1, name: 'zs', age: 20};
let {name, id} = per
console.log(name, id)
let {name: NAME, age: AGE} = per;
console.log(NAME, AGE)
```

## 箭头函数

ES6中新增的定义函数的方式。

```
()=>{}
```

箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this。

箭头函数面试题

```
  var obj={
    age:20,
    say:()=>{
      alert(this.age)
    }
  }
  obj.say() //undefined
```

## 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组

```js
const sun = (arr, ...arr2) => {
    console.log(arr)
    console.log(arr2)
}
sun(10, 20);//arr=10,arr2=[20]
sun(10, 20, 30)//arr=10,arr2=[20,30]
```

```js
const sun = (arr, ...arr2) => {
    let a = 0;
    arr2.forEach(item => a += item)
    return a + arr;
}
console.log(sun(10, 20))//30
console.log(sun(10, 20, 30));//60
```

## Array的扩展方法

扩展运算符（展开语法）

```js
let arr = [1, 2, 3, 4, 5];
console.log(...arr)//1 2 3 4 5
```

扩展运算符可以应用于合并数组。

```js
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr1, ...arr2]
console.log(...arr3)//1 2 3 4 5 6 7 8 9 10
```

扩展运算符（展开语法）

利用扩展运算符将伪数组转换为真正的数组

```
const li=document.querySelectorAll("li");
let lis=[...li];
lis.push(li)
console.log(lis)
```

## 构造函数方法：Array..from0

将类数组或可遍历对象转换为真正的数组

# Promise

## 回调地狱

在回调函数中嵌套回调

- 异步：操作之间没啥关系，同时进行多个操作

- 同步：同时只能做一件事

- 异步：代码更复杂

- 同步：代码简单

- Promise一消除异步操作

## Promise到底怎么用

```
new Promise((res,err)=>{})
```

- romise接受一个函数作为参数
- 在参数函数中接受两个参数
    - reject
        - reject()  : 调用函数，使当前的Promise对象的状态改成rejected
    - resolve
        - resolve() : 调用函数，使当前的Promise对象的状态改成fulfilled

### promise实例有两个属性

- state: 状态
- result: 结果

### promise的结果

```
new Promise((resolve,reject)=>{  
 // 通过调用 传递参数，改变 当前promise对象的 结果  
     resolve("成功的结果");  
    reject("失败的结果")  
})
```

### promise.then()方法

```
new Promise((resolve,reject)=>{  
     resolve("成功")  
     reject("失败")  
}).then(
()=>{  
     console.log('成功时调用')  
},
()=>{  
 console.log("失败时调用")  
})
```