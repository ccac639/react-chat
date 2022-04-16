# MongoDB可视化工具Compass的使用

https://blog.csdn.net/LTuantuan/article/details/80281079

# mongodb笔记

## 第一步安装

```
https://www.mongodb.com/try/download/community
```

## 第二步配置环境变量

找到系统变量

点击系统/用户变量里面的path，添加mongodb的路径()

```
C:\Program Files\MongoDB\Server\5.0\bin
```

![image-20220314220442724](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220314220442724.png)

## 第三步启动mongodb

![image-20220315130944373](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315130944373.png)

# 数据库操作

## 查看数据库

进入mongodb的安装目录里面 I:\mongodb\bin

### 输入

```sql
mongo	--开启数据库
```

### 查看数据库

```
show databases
```

![image-20220315131825673](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315131825673.png)

## 选择数据库

```
use 数据库名
```

在mongodb中选择不存在的数据库不会报错，他会使用数据库的时候自动创建该数据库

## 删除数据库

通过use语法选中数据库。通过db.dropDatabase()

```
db.dropDatabase()
```

![image-20220315132955416](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315132955416.png)

## 查看集合

```
show collections
```

## 创建集合

```
db.createCollection("集合名")
```

![image-20220315132339512](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315132339512.png)

## **删除集合**

```
db.集合名.drop()
```

![image-20220315132531663](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315132531663.png)

![image-20220315132735689](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315132735689.png)

# **Mongodb文档增删改查**

## 增

语法

- db.集合名insert(json数据);

## 说明:

- 集合存在，则直接插入数据，集合不存在-

```
> use test1
输出:switched to db test1
> db.demo2.insert({"name":"张三","年龄":18,"性别":"男"})
输出:WriteResult({ "nInserted" : 1 })
```

![image-20220315134648616](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315134648616.png)

- 留心1：数据库和集合不存在都隐式创建
- 留心2：对象的键统一不加引号方便看，但是查看集合数据时系统会自动加
- 留心3：mongodb会给每条数据增加一个全球唯一的_id键

![image-20220315134900354](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315134900354.png)

#### 自定义id

可以，只需要给插入的json数据增加_id键即可覆盖(但实战强烈不推荐日

```
> db.demo2.insert({"_id":"12345789","name":"李四","年龄":19,"性别":"女"})
输出:WriteResult({ "nInserted" : 1 })
```

![image-20220315135205625](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315135205625.png)

### 一次性插入多条数据

在传递的数据里面用数组包围即可

```
> db.demo2.insert([{"name":"1"},{"name":"2"}])
输出:BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})

```

![image-20220315135500715](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315135500715.png)

### 快速插入10条数据

mongodb底层使用JS引擎实现的，所以支持部分js语法 可以写for循环

```
> for(let i=0;i<10;i++){ 
db.demo3.insert({uname:`人${i}`,"age":i})
}
输出:WriteResult({ "nInserted" : 1 })

```

## 查

### 基础语法

- db.集合名.find(条件，查询的列)

```
条件
	查询所有数据:			{}或者不写
	查询age=6的数据		 {age:6}
	既要age=6又要性别=男	{age:6,sex:'男'}
查询的列 (可选参数)
	不写 					 -查询全部列 (字段)
	{age:1}				   -只显示age列(字段)
	{age:0}				   -除了age列其他都显示(字段都显示)
	
```

```json
查询所有数据

> db.demo4.find()

{ "_id" : ObjectId("62303beade25838d03a3d271"), "uname" : "人0", "age" : "0岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d272"), "uname" : "人1", "age" : "1岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d273"), "uname" : "人2", "age" : "2岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d274"), "uname" : "人3", "age" : "3岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d275"), "uname" : "人4", "age" : "4岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d276"), "uname" : "人5", "age" : "5岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d277"), "uname" : "人6", "age" : "6岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d278"), "uname" : "人7", "age" : "7岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d279"), "uname" : "人8", "age" : "8岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d27a"), "uname" : "人9", "age" : "9岁" }

```

```json
只显示age

> db.demo4.find({},{age:1})

{ "_id" : ObjectId("62303beade25838d03a3d271"), "age" : "0岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d272"), "age" : "1岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d273"), "age" : "2岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d274"), "age" : "3岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d275"), "age" : "4岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d276"), "age" : "5岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d277"), "age" : "6岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d278"), "age" : "7岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d279"), "age" : "8岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d27a"), "age" : "9岁" }
```

```json
显示除了age以外的数据

> db.demo4.find({},{age:0})

{ "_id" : ObjectId("62303beade25838d03a3d271"), "uname" : "人0" }
{ "_id" : ObjectId("62303bebde25838d03a3d272"), "uname" : "人1" }
{ "_id" : ObjectId("62303bebde25838d03a3d273"), "uname" : "人2" }
{ "_id" : ObjectId("62303bebde25838d03a3d274"), "uname" : "人3" }
{ "_id" : ObjectId("62303bebde25838d03a3d275"), "uname" : "人4" }
{ "_id" : ObjectId("62303bebde25838d03a3d276"), "uname" : "人5" }
{ "_id" : ObjectId("62303bebde25838d03a3d277"), "uname" : "人6" }
{ "_id" : ObjectId("62303bebde25838d03a3d278"), "uname" : "人7" }
{ "_id" : ObjectId("62303bebde25838d03a3d279"), "uname" : "人8" }
{ "_id" : ObjectId("62303bebde25838d03a3d27a"), "uname" : "人9" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27b"), "uname" : "人0", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27c"), "uname" : "人1", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27d"), "uname" : "人2", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27e"), "uname" : "人3", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27f"), "uname" : "人4", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d280"), "uname" : "人5", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d281"), "uname" : "人6", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d282"), "uname" : "人7", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d283"), "uname" : "人8", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d284"), "uname" : "人9", "sex" : "男", "class" : "20计应" }


不显示id跟age

> db.demo4.find({},{age:0,_id:0})

{ "uname" : "人0" }
{ "uname" : "人1" }
{ "uname" : "人2" }
{ "uname" : "人3" }
{ "uname" : "人4" }
{ "uname" : "人5" }
{ "uname" : "人6" }
{ "uname" : "人7" }
{ "uname" : "人8" }
{ "uname" : "人9" }
{ "uname" : "人0", "sex" : "男", "class" : "20计应" }
{ "uname" : "人1", "sex" : "男", "class" : "20计应" }
{ "uname" : "人2", "sex" : "男", "class" : "20计应" }
{ "uname" : "人3", "sex" : "男", "class" : "20计应" }
{ "uname" : "人4", "sex" : "男", "class" : "20计应" }
{ "uname" : "人5", "sex" : "男", "class" : "20计应" }
{ "uname" : "人6", "sex" : "男", "class" : "20计应" }
{ "uname" : "人7", "sex" : "男", "class" : "20计应" }
{ "uname" : "人8", "sex" : "男", "class" : "20计应" }
{ "uname" : "人9", "sex" : "男", "class" : "20计应" }

```

### 升级语法

| 运算符 | 作用     |
| ------ | -------- |
| $gt    | 大于     |
| $gte   | 大于等于 |
| $\|t   | 小于     |
| $Ite   | 小于等于 |
| $ne    | 不等于   |
| $in    | in       |
| $nin   | not in   |

```
显示num大于5的数据

> db.集合名.find({字段:{大于（$gt）: 数字}})

> db.demo4.find({num:{$gt:5}})			

{ "_id" : ObjectId("62304775de25838d03a3d28b"), "uname" : "人6", "age" : "6岁", "sex" : "男", "class" : "20计应", "num" : 6 }
{ "_id" : ObjectId("62304775de25838d03a3d28c"), "uname" : "人7", "age" : "7岁", "sex" : "男", "class" : "20计应", "num" : 7 }
{ "_id" : ObjectId("62304775de25838d03a3d28d"), "uname" : "人8", "age" : "8岁", "sex" : "男", "class" : "20计应", "num" : 8 }
{ "_id" : ObjectId("62304775de25838d03a3d28e"), "uname" : "人9", "age" : "9岁", "sex" : "男", "class" : "20计应", "num" : 9 }
{ "_id" : ObjectId("6230479fde25838d03a3d295"), "uname" : "人6", "age" : "6岁", "sex" : "男", "class" : "20计应", "num" : 6 }
{ "_id" : ObjectId("6230479fde25838d03a3d296"), "uname" : "人7", "age" : "7岁", "sex" : "男", "class" : "20计应", "num" : 7 }
{ "_id" : ObjectId("6230479fde25838d03a3d297"), "uname" : "人8", "age" : "8岁", "sex" : "男", "class" : "20计应", "num" : 8 }
{ "_id" : ObjectId("6230479fde25838d03a3d298"), "uname" : "人9", "age" : "9岁", "sex" : "男", "class" : "20计应", "num" : 9 }
```

```
查询num是5，8，9的数据

> db.集合名.find({字段:{范围($in):[5,8,9]}})

> db.demo4.find({num:{$in:[5,8,9]}})

{ "_id" : ObjectId("62304775de25838d03a3d28a"), "uname" : "人5", "age" : "5岁", "sex" : "男", "class" : "20计应", "num" : 5 }
{ "_id" : ObjectId("62304775de25838d03a3d28d"), "uname" : "人8", "age" : "8岁", "sex" : "男", "class" : "20计应", "num" : 8 }
{ "_id" : ObjectId("62304775de25838d03a3d28e"), "uname" : "人9", "age" : "9岁", "sex" : "男", "class" : "20计应", "num" : 9 }
{ "_id" : ObjectId("6230479fde25838d03a3d294"), "uname" : "人5", "age" : "5岁", "sex" : "男", "class" : "20计应", "num" : 5 }
{ "_id" : ObjectId("6230479fde25838d03a3d297"), "uname" : "人8", "age" : "8岁", "sex" : "男", "class" : "20计应", "num" : 8 }
{ "_id" : ObjectId("6230479fde25838d03a3d298"), "uname" : "人9", "age" : "9岁", "sex" : "男", "class" : "20计应", "num" : 9 }

```

```
查询num不是5，8，9的数据

> db.集合名.find({字段:{不包含($nin):[5,8,9]}})

> db.demo4.find({num:{$nin:[5,8,9]}})
{ "_id" : ObjectId("62303beade25838d03a3d271"), "uname" : "人0", "age" : "0岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d272"), "uname" : "人1", "age" : "1岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d273"), "uname" : "人2", "age" : "2岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d274"), "uname" : "人3", "age" : "3岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d275"), "uname" : "人4", "age" : "4岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d276"), "uname" : "人5", "age" : "5岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d277"), "uname" : "人6", "age" : "6岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d278"), "uname" : "人7", "age" : "7岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d279"), "uname" : "人8", "age" : "8岁" }
{ "_id" : ObjectId("62303bebde25838d03a3d27a"), "uname" : "人9", "age" : "9岁" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27b"), "uname" : "人0", "age" : "0岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27c"), "uname" : "人1", "age" : "1岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27d"), "uname" : "人2", "age" : "2岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27e"), "uname" : "人3", "age" : "3岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d27f"), "uname" : "人4", "age" : "4岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d280"), "uname" : "人5", "age" : "5岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d281"), "uname" : "人6", "age" : "6岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d282"), "uname" : "人7", "age" : "7岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d283"), "uname" : "人8", "age" : "8岁", "sex" : "男", "class" : "20计应" }
{ "_id" : ObjectId("62303ce8de25838d03a3d284"), "uname" : "人9", "age" : "9岁", "sex" : "男", "class" : "20计应" }
Type "it" for more(默认显示20条数据)

```

## 改

### 基础语法

db.集合名.upadate(条件,新数据[是否新增，是否修改多条])

- 是否新增：指条件匹配不到数据则插入（true是插入，false否不插入默认）
  - 
- 是否修改多条：指将匹配成功的数据都修改（true是，false否默认）

```
> db.demo.update({"name":"张三1"},{"name":"张三10086"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.demo.find()
```

```

更新前的数据

{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a6"), "name" : "张三2", "age" : "2岁", "成绩" : 76 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "name" : "张三4", "age" : "4岁", "成绩" : 5 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 14 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 74 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }

```

```


更新后的数据
{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三10086" }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a6"), "name" : "张三2", "age" : "2岁", "成绩" : 76 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "name" : "张三4", "age" : "4岁", "成绩" : 5 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 14 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 74 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }

```

默认不是修改，而是替代，所以

```
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
```

的数据直接被替换成了

```
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三10086" }
```

### 升级语法

| 修改器  | 作用     |
| ------- | -------- |
| $inc    | 递增     |
| $rename | 重命名列 |
| $set    | 修改列值 |
| $unset  | 删除列   |

```
db.集合名.update(条件,{修改器:{键:值}})
```

解决办法

#### 用$set 修改

```
> db.demo.update({name:"张三4"},{$set:{name:"张三10086"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

```
更新前的数据

{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "name" : "张三4", "age" : "4岁", "成绩" : 5 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 14 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 74 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }
```

```sql
更新后的数据

{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "age" : "4岁", "name" : "张三10086", "成绩" : 45 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 14 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 74 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }
```

#### 递增修改

```
> db.demo.update({"name":"张三5"},{$inc:{"成绩":2}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.demo.update({name:"张三6"},{$inc:{"成绩":2}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

```
更新前的数据

{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "age" : "4岁", "name" : "张三10086", "成绩" : 45 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 14 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 74 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }
```

```
更新后的数据
{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "age" : "4岁", "name" : "张三10086", "成绩" : 45 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 16 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 76 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }

```

#### 递减修改

```
> db.demo.update({name:"张三6"},{$inc:{"成绩":-2}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.demo.update({"name":"张三5"},{$inc:{"成绩":-2}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

```
更新前的数据
{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "age" : "4岁", "name" : "张三10086", "成绩" : 45 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 16 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 76 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }
```

```
更新后的数据
{ "_id" : ObjectId("62306bc6de25838d03a3d2a4"), "name" : "张三0", "age" : "0岁", "成绩" : 91 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a5"), "name" : "张三1", "age" : "1岁", "成绩" : 78 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a7"), "name" : "张三3", "age" : "3岁", "成绩" : 71 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a8"), "age" : "4岁", "name" : "张三10086", "成绩" : 45 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2a9"), "name" : "张三5", "age" : "5岁", "成绩" : 14 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2aa"), "name" : "张三6", "age" : "6岁", "成绩" : 74 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ab"), "name" : "张三7", "age" : "7岁", "成绩" : 8 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ac"), "name" : "张三8", "age" : "8岁", "成绩" : 56 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ad"), "name" : "张三9", "age" : "9岁", "成绩" : 82 }
{ "_id" : ObjectId("62306bc6de25838d03a3d2ae"), "name" : "张三10", "age" : "10岁", "成绩" : 74 }
```

### 综合使用

插入数据：

```
db.demo5.insert({name:"神龙",age:987,sex:"男",other:"神国"})
```

完成需求

```
name:改成神龙教主		{修改器:$set}
age:增加111		    {修改器:$inc}
sex:改字段			   {修改器:$rename}
other:删除		    {修改器:$unset}
```

代码

```
{ "_id" : ObjectId("6230a286de25838d03a3d2af"), "name" : "神龙王子", "age" : 1098, "who" : "男" }

```

```
更新前
```

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315233059408.png)

```
更新后
```

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220315233516592.png)

### 是否新增

```
db.集合名.update(条件,{修改器:{键:值}},是否新增)
```

原数据

```
{ "_id" : ObjectId("623026c5de25838d03a3d25a"), "name" : "张三", "年龄" : 18, "性别" : "男" }
{ "_id" : "12345789", "name" : "李四", "年龄" : 19, "性别" : "女" }
{ "_id" : ObjectId("62302a04de25838d03a3d25b"), "name" : "1", "age" : 19 }
{ "_id" : ObjectId("62302a04de25838d03a3d25c"), "name" : "2" }
```

```
没有添加第三个参数
> db.demo2.update({name:"15"},{$set:{age:19}})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
```

```
添加了第三个参数并且为true
> db.demo2.update({name:"15"},{$set:{age:19}},true)
WriteResult({
        "nMatched" : 0,	不匹配
        "nUpserted" : 1,有没有更新新数据
        "nModified" : 0,修改
        "_id" : ObjectId("6230b441500640185b5fccfa")
})
```

更新后的数据

```
{ "_id" : ObjectId("623026c5de25838d03a3d25a"), "name" : "张三", "年龄" : 18, "性别" : "男" }
{ "_id" : "12345789", "name" : "李四", "年龄" : 19, "性别" : "女" }
{ "_id" : ObjectId("62302a04de25838d03a3d25b"), "name" : "1", "age" : 19 }
{ "_id" : ObjectId("62302a04de25838d03a3d25c"), "name" : "2" }
{ "_id" : ObjectId("6230b441500640185b5fccfa"), "name" : "15", "age" : 19 }
```

### 是否修改多条数据

原数据

```
{ "_id" : ObjectId("623026c5de25838d03a3d25a"), "name" : "张三", "年龄" : 18, "性别" : "男" }
{ "_id" : "12345789", "name" : "李四", "年龄" : 19, "性别" : "女" }
{ "_id" : ObjectId("62302a04de25838d03a3d25b"), "name" : "1", "age" : 19 }
{ "_id" : ObjectId("62302a04de25838d03a3d25c"), "name" : "2" }
{ "_id" : ObjectId("6230b441500640185b5fccfa"), "name" : "15", "age" : 19 }
```

```
> db.demo2.update({},{$set:{age:16}},false,false)	只改了一条
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

```
> db.demo2.update({},{$set:{age:16}},false,true)
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 4 })
```

更新后的数据

```
{ "_id" : ObjectId("623026c5de25838d03a3d25a"), "name" : "张三", "年龄" : 18, "性别" : "男", "age" : 16 }
{ "_id" : "12345789", "name" : "李四", "年龄" : 19, "性别" : "女", "age" : 16 }
{ "_id" : ObjectId("62302a04de25838d03a3d25b"), "name" : "1", "age" : 16 }
{ "_id" : ObjectId("62302a04de25838d03a3d25c"), "name" : "2", "age" : 16 }
{ "_id" : ObjectId("6230b441500640185b5fccfa"), "name" : "15", "age" : 16 }
```

## 删

### 基础语法

```
db.集合名.remove(条件,是否删除)
```

注意：是否删除一条数据 true是，false是否，默认值是false

删除一条数据

```
> db.demo6.remove({},true)
WriteResult({ "nRemoved" : 1 })
```

删除全部数据

```
> db.demo6.remove({})
WriteResult({ "nRemoved" : 10 })
```

## 综合练习

需求：根据千锋教学系统，设置存放学生信息的集合，并插入20条测试数据

```
1.先中文
集合名称：学生
集合字段：编号，学号，姓名，电话性别，年龄，学历，备注
```

```
2.再英文
use school
for(let i=0;i<=10;i++){
	db.school.insert({"name":`张三${i}`,"age":`${i}岁`,"成绩":ran})
}
```

生成数据

```
> db.stu.find().pretty()
{                                 }) }
        "_id" : ObjectId("62315f2dbe968157ae5065a9"),
        "id" : 0,
        "no" : "QF0",
        "name" : "赵澄邈",
        "age" : "11岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 11
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065aa"),
        "id" : 1,
        "no" : "QF1",
        "name" : "孙海超",
        "age" : "14岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 84
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065ab"),
        "id" : 2,
        "no" : "QF2",
        "name" : "孙海超",
        "age" : "2岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 36
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065ac"),
        "id" : 3,
        "no" : "QF3",
        "name" : "王瀚钰",
        "age" : "18岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 37
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065ad"),
        "id" : 4,
        "no" : "QF4",
        "name" : "陈涵亮",
        "age" : "2岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 77
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065ae"),
        "id" : 5,
        "no" : "QF5",
        "name" : "冯瀚文",
        "age" : "14岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 66
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065af"),
        "id" : 6,
        "no" : "QF6",
        "name" : "赵澄邈",
        "age" : "8岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 91
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065b0"),
        "id" : 7,
        "no" : "QF7",
        "name" : "郑海昌",
        "age" : "14岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 37
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065b1"),
        "id" : 8,
        "no" : "QF8",
        "name" : "周海荣",
        "age" : "7岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 26
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065b2"),
        "id" : 9,
        "no" : "QF9",
        "name" : "钱德泽",
        "age" : "12岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 88
}
{
        "_id" : ObjectId("62315f2dbe968157ae5065b3"),
        "id" : 10,
        "no" : "QF10",
        "name" : "王瀚钰",
        "age" : "15岁",
        "school" : "研究生",
        "remark" : "土豪",
        "result" : 79
}
```

### 对result进行排序

#### 降序

```
> db.stu.find().sort({result:-1})
```

```

{ "_id" : ObjectId("62315f2dbe968157ae5065af"), "id" : 6, "no" : "QF6", "name" : "赵澄邈", "age" : "8岁", "school" : "研究生", "remark" : "土豪", "result" : 91 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b2"), "id" : 9, "no" : "QF9", "name" : "钱德泽", "age" : "12岁", "school" : "研究生", "remark" : "土豪", "result" : 88 }
{ "_id" : ObjectId("62315f2dbe968157ae5065aa"), "id" : 1, "no" : "QF1", "name" : "孙海超", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 84 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b3"), "id" : 10, "no" : "QF10", "name" : "王瀚钰", "age" : "15岁", "school" : "研究生", "remark" : "土豪", "result" : 79 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ad"), "id" : 4, "no" : "QF4", "name" : "陈涵亮", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 77 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ae"), "id" : 5, "no" : "QF5", "name" : "冯瀚文", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 66 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ac"), "id" : 3, "no" : "QF3", "name" : "王瀚钰", "age" : "18岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b0"), "id" : 7, "no" : "QF7", "name" : "郑海昌", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ab"), "id" : 2, "no" : "QF2", "name" : "孙海超", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 36 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b1"), "id" : 8, "no" : "QF8", "name" : "周海荣", "age" : "7岁", "school" : "研究生", "remark" : "土豪", "result" : 26 }
{ "_id" : ObjectId("62315f2dbe968157ae5065a9"), "id" : 0, "no" : "QF0", "name" : "赵澄邈", "age" : "11岁", "school" : "研究生", "remark" : "土豪", "result" : 11 }
```

#### 升序

```
> db.stu.find().sort({result:1})
```

```
{ "_id" : ObjectId("62315f2dbe968157ae5065a9"), "id" : 0, "no" : "QF0", "name" : "赵澄邈", "age" : "11岁", "school" : "研究生", "remark" : "土豪", "result" : 11 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b1"), "id" : 8, "no" : "QF8", "name" : "周海荣", "age" : "7岁", "school" : "研究生", "remark" : "土豪", "result" : 26 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ab"), "id" : 2, "no" : "QF2", "name" : "孙海超", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 36 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ac"), "id" : 3, "no" : "QF3", "name" : "王瀚钰", "age" : "18岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b0"), "id" : 7, "no" : "QF7", "name" : "郑海昌", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ae"), "id" : 5, "no" : "QF5", "name" : "冯瀚文", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 66 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ad"), "id" : 4, "no" : "QF4", "name" : "陈涵亮", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 77 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b3"), "id" : 10, "no" : "QF10", "name" : "王瀚钰", "age" : "15岁", "school" : "研究生", "remark" : "土豪", "result" : 79 }
{ "_id" : ObjectId("62315f2dbe968157ae5065aa"), "id" : 1, "no" : "QF1", "name" : "孙海超", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 84 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b2"), "id" : 9, "no" : "QF9", "name" : "钱德泽", "age" : "12岁", "school" : "研究生", "remark" : "土豪", "result" : 88 }
{ "_id" : ObjectId("62315f2dbe968157ae5065af"), "id" : 6, "no" : "QF6", "name" : "赵澄邈", "age" : "8岁", "school" : "研究生", "remark" : "土豪", "result" : 91 }
```

### Limit与Skip方法

语法

```
db.集合名.find().sort().skip(数字).limit(数字)
	skip 跳过指定数量(可选)，
	limit限制查询的数量
```

db.集合名.find().sort().skip(数字)

```
从头条数据开始

> db.stu.find().sort({result:1}).skip(0)
{ "_id" : ObjectId("62315f2dbe968157ae5065a9"), "id" : 0, "no" : "QF0", "name" : "赵澄邈", "age" : "11岁", "school" : "研究生", "remark" : "土豪", "result" : 11 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b1"), "id" : 8, "no" : "QF8", "name" : "周海荣", "age" : "7岁", "school" : "研究生", "remark" : "土豪", "result" : 26 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ab"), "id" : 2, "no" : "QF2", "name" : "孙海超", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 36 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ac"), "id" : 3, "no" : "QF3", "name" : "王瀚钰", "age" : "18岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b0"), "id" : 7, "no" : "QF7", "name" : "郑海昌", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ae"), "id" : 5, "no" : "QF5", "name" : "冯瀚文", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 66 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ad"), "id" : 4, "no" : "QF4", "name" : "陈涵亮", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 77 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b3"), "id" : 10, "no" : "QF10", "name" : "王瀚钰", "age" : "15岁", "school" : "研究生", "remark" : "土豪", "result" : 79 }
{ "_id" : ObjectId("62315f2dbe968157ae5065aa"), "id" : 1, "no" : "QF1", "name" : "孙海超", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 84 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b2"), "id" : 9, "no" : "QF9", "name" : "钱德泽", "age" : "12岁", "school" : "研究生", "remark" : "土豪", "result" : 88 }
{ "_id" : ObjectId("62315f2dbe968157ae5065af"), "id" : 6, "no" : "QF6", "name" : "赵澄邈", "age" : "8岁", "school" : "研究生", "remark" : "土豪", "result" : 91 }

从第一条数据开始

> db.stu.find().sort({result:1}).skip(1)
{ "_id" : ObjectId("62315f2dbe968157ae5065b1"), "id" : 8, "no" : "QF8", "name" : "周海荣", "age" : "7岁", "school" : "研究生", "remark" : "土豪", "result" : 26 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ab"), "id" : 2, "no" : "QF2", "name" : "孙海超", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 36 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ac"), "id" : 3, "no" : "QF3", "name" : "王瀚钰", "age" : "18岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b0"), "id" : 7, "no" : "QF7", "name" : "郑海昌", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ae"), "id" : 5, "no" : "QF5", "name" : "冯瀚文", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 66 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ad"), "id" : 4, "no" : "QF4", "name" : "陈涵亮", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 77 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b3"), "id" : 10, "no" : "QF10", "name" : "王瀚钰", "age" : "15岁", "school" : "研究生", "remark" : "土豪", "result" : 79 }
{ "_id" : ObjectId("62315f2dbe968157ae5065aa"), "id" : 1, "no" : "QF1", "name" : "孙海超", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 84 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b2"), "id" : 9, "no" : "QF9", "name" : "钱德泽", "age" : "12岁", "school" : "研究生", "remark" : "土豪", "result" : 88 }
{ "_id" : ObjectId("62315f2dbe968157ae5065af"), "id" : 6, "no" : "QF6", "name" : "赵澄邈", "age" : "8岁", "school" : "研究生", "remark" : "土豪", "result" : 91 }

从第五条数据开始

> db.stu.find().sort({result:1}).skip(5)
{ "_id" : ObjectId("62315f2dbe968157ae5065ae"), "id" : 5, "no" : "QF5", "name" : "冯瀚文", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 66 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ad"), "id" : 4, "no" : "QF4", "name" : "陈涵亮", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 77 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b3"), "id" : 10, "no" : "QF10", "name" : "王瀚钰", "age" : "15岁", "school" : "研究生", "remark" : "土豪", "result" : 79 }
{ "_id" : ObjectId("62315f2dbe968157ae5065aa"), "id" : 1, "no" : "QF1", "name" : "孙海超", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 84 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b2"), "id" : 9, "no" : "QF9", "name" : "钱德泽", "age" : "12岁", "school" : "研究生", "remark" : "土豪", "result" : 88 }
{ "_id" : ObjectId("62315f2dbe968157ae5065af"), "id" : 6, "no" : "QF6", "name" : "赵澄邈", "age" : "8岁", "school" : "研究生", "remark" : "土豪", "result" : 91 }
```

db.集合名.find().sort().limit(数字)

```

限制查询5条数据

> db.stu.find().sort({result:1}).skip(0).limit(5)
{ "_id" : ObjectId("62315f2dbe968157ae5065a9"), "id" : 0, "no" : "QF0", "name" : "赵澄邈", "age" : "11岁", "school" : "研究生", "remark" : "土豪", "result" : 11 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b1"), "id" : 8, "no" : "QF8", "name" : "周海荣", "age" : "7岁", "school" : "研究生", "remark" : "土豪", "result" : 26 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ab"), "id" : 2, "no" : "QF2", "name" : "孙海超", "age" : "2岁", "school" : "研究生", "remark" : "土豪", "result" : 36 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b0"), "id" : 7, "no" : "QF7", "name" : "郑海昌", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }
{ "_id" : ObjectId("62315f2dbe968157ae5065ac"), "id" : 3, "no" : "QF3", "name" : "王瀚钰", "age" : "18岁", "school" : "研究生", "remark" : "土豪", "result" : 37 }

限制查询1条数据

> db.stu.find().sort({result:1}).skip(0).limit(1)
{ "_id" : ObjectId("62315f2dbe968157ae5065a9"), "id" : 0, "no" : "QF0", "name" : "赵澄邈", "age" : "11岁", "school" : "研究生", "remark" : "土豪", "result" : 11 }

```

综合

```
降序-从第二条数据开始-只查询两条数据
```

```
> db.stu.find().sort({result:-1}).skip(2).limit(2)
{ "_id" : ObjectId("62315f2dbe968157ae5065aa"), "id" : 1, "no" : "QF1", "name" : "孙海超", "age" : "14岁", "school" : "研究生", "remark" : "土豪", "result" : 84 }
{ "_id" : ObjectId("62315f2dbe968157ae5065b3"), "id" : 10, "no" : "QF10", "name" : "王瀚钰", "age" : "15岁", "school" : "研究生", "remark" : "土豪", "result" : 79 }
```

### 实战分页

需求：数据库 1 - 10数据，每页显示两条（5页）

```
skip计算公式

skip计算公式：(当前页-1)*每页显示条数

1页	1	2		0
2页	3	4		2
3页	5	6		4
4页	7	8		6
5页	9	10		8

```

## 小总结

```
db.集合名.find()
.sort({列:1/-1})排序
.skip(数字) 跳过指定数量
.limit(数字) 限制查询条数
.count() 统计总数量
```

##   

## MongoDB高级用法

### mongodb聚合查询

语法

```
db.集合名aggregate({})
```

| 常用管道 |                                   |
| :------: | :-------------------------------: |
|  $group  | 将集合中的文档分组，用于统计结果  |
|  $skip   | $过滤数据，只要输出符合条件的文档 |
|  $sort   |        聚合数据进一步排序         |
|  $match  |          跳过指定文档数           |
|  $limit  |      限制集合数据返回文档数       |
|          |                                   |

| 常用表达式 |        |                       |
| :--------: | :----: | :-------------------: |
|    $sum    |  总和  | $sum:1同count表示统计 |
|    $avg    |  平均  |                       |
|    $min    | 最小值 |                       |
|    $max    | 最大值 |                       |
|            |        |                       |

#### 统计男生，女生人数

```
db.nannv.aggregate([
	{
		$group:{表达式}
	}
])
```

```
> db.nannv.aggregate([
...     {
...         $group: {_id: "$sex",rs:{$sum:1}}
...     }
... ])


{ "_id" : "女", "rs" : 9 }
{ "_id" : "男", "rs" : 12 }

```

#### 统计本科，研究生，博士的人数

```
> db.nannv.aggregate([
...     {
...         $group: {_id: "$edu",rs:{$sum:1}}
...     }
... ])
{ "_id" : "研究生", "rs" : 6 }
{ "_id" : "本科", "rs" : 9 }
{ "_id" : "博士", "rs" : 6 }
>
```

#### 求学生总人数和平均成绩

```
db.nannv.aggregate([
    {
        $group: {
            _id: null,
            sum:{$sum:1},
            avg:{$avg:"$age"}
        }
    }
])
{ "_id" : null, "sum" : 21, "avg" : 19.904761904761905 }
```

#### 查询男生，女生人数，按人数排序

```
db.nannv.aggregate([
    {
        $group: {
            _id: "$sex",
            sort:{$sum:1},
        }
    },
    {
        $sort:{sort: -1}
    }
])


{ "_id" : "男", "sort" : 12 }                                                                             
{ "_id" : "女", "sort" : 9 }

```

### mongodb索引

![image-20220316211630749](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220316211630749.png)

#### 索引优缺点

优点

- 提高数据查询的效率，降低数据库的IO成本I
- 通过索引对数据进行排序，降低数据排序的成本，降低CPU的消耗

缺点

- 占用磁盘空间
- 大量索引影响SQL语句效率，因为每次插入和修改数据都需要更新索引

#### 创建索引语法

```
db.集合名.createIndex(待索引的列 [,额外选项])
```

参数

- 待创建索引的列：{键:1,...,键:-1}
- 说明：1升序-1降序例如{age:1}表示创建age索引并按照升序的方式存储
- 额外选项：设置索引的名称或者唯一索引等等

#### 删除索引语法

全部删除

```
db.集合名.dropIndex()
```

部分删除

```
db.集合名.dropIndex(索引名)
```

查看索引语法

```
db.集合名.getIndexes()
```

#### 创建10万条数据

```
> for (let i = 0; i <=100000; i++) {
...     db.statistics.insert({
...         uname: name(),
...         age:ran(20,40)
...     })
... }
```

#### 创建普通索引

```
db.statistics.createIndex({name:1})

{
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}
```

#### 查看索引

```
db.statistics.getIndexes()	查看当前索引

[
        {
                "v" : 2,
                "key" : {		给那个列设置了索引
                        "_id" : 1
                },
                "name" : "_id_"	 表示索引名称，默认系统生成，也可以自定义
        },
        {
                "v" : 2,
                "key" : {
                        "name" : 1
                },
                "name" : "name_1"
        }
]
```

#### 删除索引

```
db.statistics.dropIndex("name_1")


{ "nIndexesWas" : 2, "ok" : 1 }


```

```
> db.statistics.getIndexes()
[ { "v" : 2, "key" : { "_id" : 1 }, "name" : "_id_" } ]
```

#### 创建索引并起名

说明:给name创建索引并起名webopenfather

```
> db.statistics.createIndex({name:1},{name:"webopenfather"}) 
{
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}
```

```
> db.statistics.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_"
        },
        {
                "v" : 2,
                "key" : {
                        "name" : 1
                },
                "name" : "webopenfather"
        }
]
```

#### 创建组合/复合索引

说明:一次性给两个字段建立索引

```
> db.statistics.createIndex({name:1,age:1})

{
        "numIndexesBefore" : 2,
        "numIndexesAfter" : 3,
        "createdCollectionAutomatically" : false,
        "ok" : 1
}

```

```
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_"
        },
        {
                "v" : 2,
                "key" : {
                        "name" : 1
                },
                "name" : "webopenfather"
        },
        {
                "v" : 2,
                "key" : {
                        "name" : 1,
                        "age" : 1
                },
                "name" : "name_1_age_1"
        }
]
```

#### 创建唯一索引

给name添加普通索引

```
db.statistics.createIndex({待添加索引的选项},{unique:列名})
```

```
db.statistics.createIndex({},{})
```

# mongodb权限机制

发现我们再DOS窗口直接输入命令就可以登录数据库

这在实战工作中绝对不允许的

- 思考：如何解决
- 回答：使用权限机制，开启验证模

## 语法

### 创建账号

```
db.createUser({
	"user":"账号",
	”pwd“:"密码",
	"roles":{
		role:"角色",
		db:"所属数据库"
	}
})
```

### 角色

```
#角色种类
超级用户角色：root
数据库用户角色：read、readwrite；
数据库管理角色：dbAdmin、userAdmin;
集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
备份恢复角色：backup、restore;
所有数据库角色：readAnyDatabase、readwriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
```

### 角色说明

```
#角色说明
root：只在admin数据库中可用。超级账号，超级权限
read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除、查看统计或访问system.profile
```

### 开启验证模式

开启验证模式概念:：名词，指用户需要输入账号密码才能登陆使用

#### 操作步骤

```
1．添加超级管理员
2．退出卸载服务
3．重新安装需要输入账号密码的服务（注在原安装命令基础上加上--auth即可
4．启动服务 -> 登陆测试
```

##### 第一步：添加超级管理员

```json
mongo

use admin

添加超级管理员

db.createUser({user:'admin',pwd:"admin",roles:[{role:"root",db:"admin"}]})


Successfully added user: {
        "user" : "admin",
        "roles" : [
                {
                        "role" : "root",
                        "db" : "admin"
                }
        ]
}



输入
> show collections

输出
system.users
system.version

输入
> db.system.users
admin.system.users

输入
> db.system.users.find()

输出
{ "_id" : "admin.admin", "userId" : UUID("a79d542a-43e9-437f-828c-5d87663138f5"), "user" : "admin", "db" : "admin", "credentials" : { "SCRAM-SHA-1" : { "iterationCount" : 10000, "salt"
 : "tr2QI2jWZO5bsJ3JGSMTRw==", "storedKey" : "K09x2/8QBzeqSrsZjWghV0PFPiU=", "serverKey" : "op88OHCePozTiMi4YsmdIaP7IIY=" }, "SCRAM-SHA-256" : { "iterationCount" : 15000, "salt" : "ywr
XA1ffxKNEZkIrfe4AtvoCLm2Rh47f9ba3mw==", "storedKey" : "lok9Xo0UH/mmg5SZfeTSOXx6jh7Q4QmRa/P4gM+LZeY=", "serverKey" : "NsZfyNeDuHzp1oNL5bIyDCsKedsb+It/2dleo1rGlmI=" } }, "roles" : [ { "r
ole" : "root", "db" : "admin" } ] }
                                                                                                                                                
                                                                                                                                           输入     
> db.system.users.find().pretty()
 
输出
{
        "_id" : "admin.admin",
        "userId" : UUID("a79d542a-43e9-437f-828c-5d87663138f5"),
        "user" : "admin",
        "db" : "admin",
        "credentials" : {
                "SCRAM-SHA-1" : {
                        "iterationCount" : 10000,
                        "salt" : "tr2QI2jWZO5bsJ3JGSMTRw==",
                        "storedKey" : "K09x2/8QBzeqSrsZjWghV0PFPiU=",
                        "serverKey" : "op88OHCePozTiMi4YsmdIaP7IIY="
                },
                "SCRAM-SHA-256" : {
                        "iterationCount" : 15000,
                        "salt" : "ywrXA1ffxKNEZkIrfe4AtvoCLm2Rh47f9ba3mw==",
                        "storedKey" : "lok9Xo0UH/mmg5SZfeTSOXx6jh7Q4QmRa/P4gM+LZeY=",
                        "serverKey" : "NsZfyNeDuHzp1oNL5bIyDCsKedsb+It/2dleo1rGlmI="
                }
        },
        "roles" : [
                {
                        "role" : "root",
                        "db" : "admin"
                }
        ]
}


```

<span style="color:red">注意：需要打开命令行的管理员模式</span>

##### 第二步：退出 卸载服务

```
mongod --remove
```

##### 发送错误则看这篇文章

https://blog.csdn.net/qzcsu/article/details/88754825

##### 第三步:安装需要身份验证的mongodb服务

```
mongodb安装目录
mongodb\bin>

输入
mongod --dbpath  "I:\Program Files (x86)\web开发\node\npm\mongdb父\mongodb\db"  --logpath "I:\Program Files (x86)\web开发\node\npm\mongdb父\mongodb\log\mongodb.log" --install --serviceName "MongoDB" 

输出
{"t":{"$date":"2022-03-17T16:44:20.642Z"},"s":"I",  "c":"CONTROL",  "id":20697,   "ctx":"-","msg":"Renamed existing log file","attr":{"oldLogPath":"I:\\Program Files (x86)\\web开发\\node\\npm\\mongdb父\\mongodb\\log\\mongodb.log","newLogPath":"I:\\Program Files (x86)\\web开发\\node\\npm\\mongdb父\\mongodb\\log\\mongodb.log.2022-03-17T16-44-20"}}


启动服务
net start MongoDB


MongoDB 服务正在启动 ..
MongoDB 服务已经启动成功。

输入
mongo

输出
MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("bd737083-6e1c-492e-9fa9-fc47de9d2386") }
MongoDB server version: 5.0.6
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/


show dbs
没有输出内容，只有登录才有效果

往浏览器地址栏输入
http://127.0.0.1:27017/
页面出现	则成功
It looks like you are trying to access MongoDB over HTTP on the native driver port.


```

##### 第四步:用超级管理员登录

语法1

```
mongo 服务器地址:端口/数据库 -u 用户名 -p 密码

mongo 127.0.0.1:27017/admin -u admin -p admin
```

语法2

```
先登录
mongo

MongoDB shell version v4.2.19
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("99d0a0d5-6a62-4166-af44-e4b4b82c39ff") }
MongoDB server version: 4.2.19

选择数据库

> use admin

switched to db admin

输入db.auth(用户名，密码)

> db.auth('admin','admin')
1


```

#### 练习

创建测试数据和测试用户(注:选择demo仓库创建用户)

```
封装的名字库
function uname() {
    let a = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎",
        "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷",
        "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄", "和",
        "穆", "萧", "尹", "姚", "邵", "湛", "汪", "祁", "毛", "禹", "狄", "米", "贝", "明", "臧", "计", "伏", "成", "戴", "谈", "宋", "茅", "庞", "熊", "纪", "舒",
        "屈", "项", "祝", "董", "梁", "杜", "阮", "蓝", "闵", "席", "季", "麻", "强", "贾", "路", "娄", "危", "江", "童", "颜", "郭", "梅", "盛", "林", "刁", "钟",
        "徐", "邱", "骆", "高", "夏", "蔡", "田", "樊", "胡", "凌", "霍", "虞", "万", "支", "柯", "昝", "管", "卢", "莫", "经", "房", "裘", "缪", "干", "解", "应",
        "宗", "丁", "宣", "贲", "邓", "郁", "单", "杭", "洪", "包", "诸", "左", "石", "崔", "吉", "钮", "龚", "程", "嵇", "邢", "滑", "裴", "陆", "荣", "翁", "荀",
        "羊", "于", "惠", "甄", "曲", "家", "封", "芮", "羿", "储", "靳", "汲", "邴", "糜", "松", "井", "段", "富", "巫", "乌", "焦", "巴", "弓", "牧", "隗", "山",
        "谷", "车", "侯", "宓", "蓬", "全", "郗", "班", "仰", "秋", "仲", "伊", "宫", "宁", "仇", "栾", "暴", "甘", "钭", "厉", "戎", "祖", "武", "符", "刘", "景",
        "詹", "束", "龙", "叶", "幸", "司", "韶", "郜", "黎", "蓟", "溥", "印", "宿", "白", "怀", "蒲", "邰", "从", "鄂", "索", "咸", "籍", "赖", "卓", "蔺", "屠",
        "蒙", "池", "乔", "阴", "郁", "胥", "能", "苍", "双", "闻", "莘", "党", "翟", "谭", "贡", "劳", "逄", "姬", "申", "扶", "堵", "冉", "宰", "郦", "雍", "却",
        "璩", "桑", "桂", "濮", "牛", "寿", "通", "边", "扈", "燕", "冀", "浦", "尚", "农", "温", "别", "庄", "晏", "柴", "瞿", "阎", "充", "慕", "连", "茹", "习",
        "宦", "艾", "鱼", "容", "向", "古", "易", "慎", "戈", "廖", "庾", "终", "暨", "居", "衡", "步", "都", "耿", "满", "弘", "匡", "国", "文", "寇", "广", "禄",
        "阙", "东", "欧", "殳", "沃", "利", "蔚", "越", "夔", "隆", "师", "巩", "厍", "聂", "晁", "勾", "敖", "融", "冷", "訾", "辛", "阚", "那", "简", "饶", "空",]
    let b= ["容","向","古","易","慎","戈","廖","庾","终","暨","居","衡","步","都","耿","满","弘","匡","国","文","寇","广","禄",
        "阙","东","欧","殳","沃","利","蔚","越","夔","隆","师","巩","厍","聂","晁","勾","敖","融","冷","訾","辛","阚","那","简","饶","空",
        "曾","毋","沙","乜","养","鞠","须","丰","巢","关","蒯","相","查","后","荆","红","游","郏","竺","权","逯","盖","益","桓","公","仉",
        "督","岳","帅","缑","亢","况","郈","有","琴","归","海","晋","楚","闫","法","汝","鄢","涂","钦","商","牟","佘","佴","伯","赏","墨",
        "哈","谯","篁","年","爱","阳","佟","言","福","南","火","铁","迟","漆","官","冼","真","展","繁","檀","祭","密","敬","揭","舜","楼",
        "疏","冒","浑","挚","胶","随","高","皋","原","种","练","弥","仓","眭","蹇","覃","阿","门","恽","来","綦","召","仪","风","介","巨",
        "木","京","狐","郇","虎","枚","抗","达","杞","苌","折","麦","庆","过","竹","端","鲜","皇","亓","老","是","秘","畅","邝","还","宾",]
    let c=["蔡","田","樊","胡","凌","霍","虞","万","支","柯","昝","管","卢","莫","经","房","裘","缪","干","解","应",
        "宗","丁","宣","贲","邓","郁","单","杭","洪","包","诸","左","石","崔","吉","钮","龚","程","嵇","邢","滑","裴","陆","荣","翁","荀",
        "羊","于","惠","甄","曲","家","封","芮","羿","储","靳","汲","邴","糜","松","井","段","富","巫","乌","焦","巴","弓","牧","隗","山",
        "谷","车","侯","宓","蓬","全","郗","班","仰","秋","仲","伊","宫","宁","仇","栾","暴","甘","钭","厉","戎","祖","武","符","刘","景",
        "詹","束","龙","叶","幸","司","韶","郜","黎","蓟","溥","印","宿","白","怀","蒲","邰","从","鄂","索","咸","籍","赖","卓","蔺","屠",
        "蒙","池","乔","阴","郁","胥","能","苍","双","闻","莘","党","翟","谭","贡","劳","逄","姬","申","扶","堵","冉","宰","郦","雍","却",
        "璩","桑","桂","濮","牛"]
    let e,f,g;
    e=Math.floor(Math.random()*a.length-1);
    f=Math.floor(Math.random()*b.length-1);
    g=Math.floor(Math.random()*c.length-1);
    let str=`${a[e]}${b[f]}${c[g]}`
    return str
}
封装的随机数
function ran(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
```

##### 添加数据

```
use demo


for (let i = 0; i < 10; i++) {
    db.demo1.insert({"name":uname(),"price":ran(50,100)})
}

```

##### 添加用户并设置权限

```
use demo
```

```
db.createUser({user:'demo',pwd:"88888888",roles:[{role:"read",db:"demo"}]})
```

##### read-可读不可写

###### 查看用户数据

```
> db.demo1.find()


{ "_id" : ObjectId("623586c82c5edd3dc1ca202d"), "name" : "娄铁秋", "price" : 76 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca202e"), "name" : "国老党", "price" : 51 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca202f"), "name" : "卓钦符", "price" : 81 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2030"), "name" : "东真焦", "price" : 86 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2031"), "name" : "彭庾龙", "price" : 96 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2032"), "name" : "武舜曲", "price" : 62 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2033"), "name" : "耿南郗", "price" : 78 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2034"), "name" : "缪召雍", "price" : 62 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2035"), "name" : "边帅弓", "price" : 53 }
{ "_id" : ObjectId("623586c92c5edd3dc1ca2036"), "name" : "计向储", "price" : 64 }
```

###### 修改用户数据

```
> db.demo1.insert({name:'号',price:16})

WriteCommandError({
        "ok" : 0,
        "errmsg" : "not authorized on demo to execute command { insert: \"demo1\", ordered: true, lsid: { id: UUID(\"c5ed6632-7402-43a6-8adf-62583723e07b\") }, $db: \"demo\" }",
        "code" : 13,
        "codeName" : "Unauthorized"
})
```

##### readWrite-可读可写

```
db.createUser({user:'demo2',pwd:"demo2",roles:[{role:"readWrite",db:"demo2"}]})
```

###### 查看用户数据

```
> db.demo2.find()

{ "_id" : ObjectId("6235a1255281c28f5d8232c0"), "name" : "越简秋", "price" : 58 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c1"), "name" : "雍蹇郜", "price" : 71 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c2"), "name" : "葛饶白", "price" : 62 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c3"), "name" : "鄂乜幸", "price" : 87 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c4"), "name" : "却皋翟", "price" : 72 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c5"), "name" : "庾岳蒙", "price" : 73 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c6"), "name" : "师蒯池", "price" : 51 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c7"), "name" : "晏南胡", "price" : 52 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c8"), "name" : "邴居劳", "price" : 98 }
{ "_id" : ObjectId("6235a1265281c28f5d8232c9"), "name" : "魏邝程", "price" : 77 }
```

###### 修改用户数据

```
> db.demo2.insert({"name":"张三","price":61})

WriteResult({ "nInserted" : 1 })
```

# mongodb备份数据库

语法

```
导出数据语法:
mongodump -h -prot -u -p -d -o
导出语法说明
-h 		host 服务器IP地址（一般不写 默认本机
-port	端口(一般默认27017)
-u		user 账号
-p		pwd 密码
-d		database 数据库(注意:数据库不写则全局)
-o		open 备份到指定目录下
```

练习:备份所有数据-

```
mongodump -u admin -p admin -o 
```

# 操作mongoose

```
引入mongoose

yarn add mongoose

npm i mongoose
```

引入mongoose

```
const mongoose=require("mongoose");
```

连接数据库

```
let url=`mongodb://demo2:demo2@localhost:27017/demo2`
let db=mongoose.createConnection(url,{useNewUrlParser:true,useUnifiedTopology:true}, err=>{
    if ( err ) throw err
    console.log('连接成功')
})
```

类型限制

```
const Schema=mongoose.Schema

const blogSchema=new Schema({
    uname:{type:String,default:'教主'},
    pwd:String,
    age:Number,
    sex:String
})

const model=db.model('dem',blogSchema);
```

写

```
const insert= new model({
    uname:'张三',
    pwd:'88888888',
    age:19,
    sex:'男'
})
insert.save().then(res=>{
    console.log('插入成功')
}).catch(err=>{
    console.log('插入失败'+err)
})
```

查

```
const find=model.find({}).then(
    res=>{
        console.log('查询成功',res)
    }).catch(err=>{
    console.log('查询错误',err)
})
```

分页查询

```
const find=model.find({}).skip(2).limit(2).then(
    res=>{
        console.log('查询成功',res)
    }).catch(err=>{
    console.log('查询错误',err)
})
```

# mongodb学生管理系统接口开发

> ```
> 
> 
> ```
>
> 