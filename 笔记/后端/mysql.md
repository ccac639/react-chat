# mysql

[TOC]

◆能够知道如何配置MySαL数据库环境

◆能够认识并使用常见的SαL语句操作数据库

◆能够在 Express中操作 MYSQL数据库

◆能够了解 Session的实现原理

◆能够了解JT的实现原理

1. ◆数据库的基本概念
2. ◆安装并配置 MYSQL
3. ◆ MYSQL的基本使用
4. ◆在 Express中操作 MYSQL
5. ◆前后端的身份认证

## 什么是数据库

数据库( database)是用来组织、存储和管理数据的仓库当今世界是一个充满着数据的互联网世界,充斥看大量的数据。数据的来源有很多,比如出行记录、消费记录浏览的网页、发送的消息等等。除了文本类型的数据,图像、音乐、声音都是数据。

## 常见的数据库

常见的数据库及分类市面上的数据库有很多种,最常见的数据库有如下几个:·

1. MYSQL数据库(目前使用最广泛、流行度最高的开源免费数据库; Community+ Enterprise)
2. Oracle数据库(收费)
3. SQL Server数据库(收费)
4. Mongodb数据库( community+ Enterprise)

其中, MYSQL、 Oracle、 SQL Server属于传统型数据库(又叫做:关系型数据库或SQL数据库),这三者的设计理念相同,用法比较类似。

而 Mongodb属于新型数据库(又叫做:菲关系型数据库或NosαL数据库),它在一定程度上弥补了传统型数据库的缺陷

## 传统型数据库的数据组织结构

数据的组织结构:指的就是数据以什么样的结构进行存储

### Excel的数据组织结构

​ 每个Excel中,数据的组织结构分别为工作簿、工作表、数据行、列这4大部分组成。

![image-20220118152048665](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118152048665.png)

### 传统型数据库的数据组织结构

在传统型数据库中,数据的组织结构分为数据库( database)、数据表( table)、数据行(row、字段( field)这4大部分组成

![image-20220118152257180](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118152257180.png)

实际开发中库、表、行、字段的关系

1. ①在实际项目开发中,一般情况下,每个项目都对应独立的数据库。
2. ②不同的数据,要存储到数据库的不同表中,例如:用户数据存储到 users表中,图书数据存储到 books表中。
3. ③每个表中具体存储哪些信息,由字段来决定,例如:我们可以为 users表设计id、 username、 password这3个字段

## 安装并配置 MYSQL

对于开发人员来说,只需要安装 MYSQL Server和 MYSQL Workbench这两个软件,就能满足开发的需要了

## 使用 MYSQL Workbench管理数据库

### 了解主界面的组成部分

![image-20220118195236154](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118195236154.png)

![image-20220118205009202](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118205009202.png)

## 使用sql管理数据库

SQL(英文全称: Structured Query Language)是结构化查询语言,专门用来访问和处理数据库的编程语言。能够让我们以编程的形式,操作数据库里面的数据。

三个关键点:

①SQL是一门数据库编程语言

②使用SQL语言编写出来的代码,叫做SQL语句

③SQL语言尽能在关系型数据库中使用(例如MysQ、 Oracle、 SQL Server),非关系型数据库(例如 Mongodb)不支持SQL语言

### sQL能做什么

1. ①从数据库中查询数据
2. ②向数据库中插入新的数据
3. ③更新数据库中的数据
4. ④从数据库删除数据
5. ⑤可以创建新数据库
6. ⑥可在数据库中创建新表
7. ⑦可在数据库中创建存储过程、视图
8. ⑧etc…

### MYSQL登录数据库

```mysql
mysql -u root -p   
Enter password:88888888  # -- 登录后进入终端
```

### 创建数据库

```mysql
create DATABASE 数据库名; -- 尽量不要用中文命名数据库
```

1. 使用普通用户，你可能需要特定的权限来创建或者删除 MySQL 数据库。
2. 所以我们这边使用root用户登录，root用户拥有最高权限，可以使用 mysql **mysqladmin** 命令来创建数据库。
3. 以下命令简单的演示了创建数据库的过程，数据名为 RUNOOB:

```mysql
mysqladmin -u root -p create RUNOOB
Enter password:88888888 -- 密码88888888
```

### 删除数据库

```mysql
drop database <数据库名>;
```

1. 例如删除名为 RUNOOB 的数据库：

```mysql
mysql> drop database RUNOOB;
```

1. 使用 mysqladmin 删除数据库

    1. 你也可以使用 mysql **mysqladmin** 命令在终端来执行删除命令。

       以下实例删除数据库 RUNOOB(该数据库在前一章节已创建)：

       ```mysql
       [root@host]# mysqladmin -u root -p drop RUNOOB
       Enter password:******
       ```

选取数据库

```mysql
use RUNOOB;  -- use 数据库名即可使用数据库
Database changed
```

### MySQL 数据类型

1. MySQL 中定义数据字段的类型对你数据库的优化是非常重要的。
2. MySQL 支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。

### 创建数据表

1. -- Primary Key 主键约束 该表的主键
2. -- AUTO_INCREMENT 适合id之类的,添加表内容的时候会自增 字段值自动加 1。
3. -- FOREIGN KEY 是表的一个特殊字段，经常与主键约束一起使用。对于两个具有关联关系的表而言，相关联字段中主键所在的表就是主表（父表），外键所在的表就是从表（子表）。
4. -- UNIQUE 指定唯一约束
5. -- **CHECK**      <表达式>
6. <字段名> <数据类型> DEFAULT <默认值>;
7. NOT NULL 关键字设置非空约束

```mysql
# mysql -u root -p
Enter password:*******
use stu -- 使用数据库
Database changed

```

#### 数值类型

| 类型         | 大小                                     | 范围（有符号）                                               | 范围（无符号）                                               | 用途            |
| :----------- | :--------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------- |
| TINYINT      | 1 Bytes                                  | (-128，127)                                                  | (0，255)                                                     | 小整数值        |
| SMALLINT     | 2 Bytes                                  | (-32 768，32 767)                                            | (0，65 535)                                                  | 大整数值        |
| MEDIUMINT    | 3 Bytes                                  | (-8 388 608，8 388 607)                                      | (0，16 777 215)                                              | 大整数值        |
| INT或INTEGER | 4 Bytes                                  | (-2 147 483 648，2 147 483 647)                              | (0，4 294 967 295)                                           | 大整数值        |
| BIGINT       | 8 Bytes                                  | (-9,223,372,036,854,775,808，9 223 372 036 854 775 807)      | (0，18 446 744 073 709 551 615)                              | 极大整数值      |
| FLOAT        | 4 Bytes                                  | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) | 0，(1.175 494 351 E-38，3.402 823 466 E+38)                  | 单精度 浮点数值 |
| DOUBLE       | 8 Bytes                                  | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 双精度 浮点数值 |
| DECIMAL      | 对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2 | 依赖于M和D的值                                               | 依赖于M和D的值                                               | 小数值          |

#### 日期和时间类型

表示时间值的日期和时间类型为DATETIME、DATE、TIMESTAMP、TIME和YEAR。

每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值。

TIMESTAMP类型有专有的自动更新特性，将在后面描述。

| 类型      | 大小 ( bytes) | 范围                                                         | 格式                | 用途                     |
| :-------- | :------------ | :----------------------------------------------------------- | :------------------ | :----------------------- |
| DATE      | 3             | 1000-01-01/9999-12-31                                        | YYYY-MM-DD          | 日期值                   |
| TIME      | 3             | '-838:59:59'/'838:59:59'                                     | HH:MM:SS            | 时间值或持续时间         |
| YEAR      | 1             | 1901/2155                                                    | YYYY                | 年份值                   |
| DATETIME  | 8             | 1000-01-01 00:00:00/9999-12-31 23:59:59                      | YYYY-MM-DD HH:MM:SS | 混合日期和时间值         |
| TIMESTAMP | 4             | 1970-01-01 00:00:00/2038结束时间是第 **2147483647** 秒，北京时间 **2038-1-19 11:14:
07**，格林尼治时间 2038年1月19日 凌晨 03:14:07 | YYYYMMDD HHMMSS     | 混合日期和时间值，时间戳 |

#### 字符串类型

字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。该节描述了这些类型如何工作以及如何在查询中使用这些类型。

| 类型       | 大小                  | 用途                            |
| :--------- | :-------------------- | :------------------------------ |
| CHAR       | 0-255 bytes           | 定长字符串                      |
| VARCHAR    | 0-65535 bytes         | 变长字符串                      |
| TINYBLOB   | 0-255 bytes           | 不超过 255 个字符的二进制字符串 |
| TINYTEXT   | 0-255 bytes           | 短文本字符串                    |
| BLOB       | 0-65 535 bytes        | 二进制形式的长文本数据          |
| TEXT       | 0-65 535 bytes        | 长文本数据                      |
| MEDIUMBLOB | 0-16 777 215 bytes    | 二进制形式的中等长度文本数据    |
| MEDIUMTEXT | 0-16 777 215 bytes    | 中等长度文本数据                |
| LONGBLOB   | 0-4 294 967 295 bytes | 二进制形式的极大文本数据        |
| LONGTEXT   | 0-4 294 967 295 bytes | 极大文本数据                    |

**注意**：char(n) 和 varchar(n) 中括号中 n 代表字符的个数，并不代表字节个数，比如 CHAR(30) 就可以存储 30 个字符。

CHAR 和 VARCHAR 类型类似，但它们保存和检索的方式不同。它们的最大长度和是否尾部空格被保留等方面也不同。在存储或检索过程中不进行大小写转换。

BINARY 和 VARBINARY 类似于 CHAR 和 VARCHAR，不同的是它们包含二进制字符串而不要非二进制字符串。也就是说，它们包含字节字符串而不是字符字符串。这说明它们没有字符集，并且排序和比较基于列值字节的数值值。

BLOB 是一个二进制大对象，可以容纳可变数量的数据。有 4 种 BLOB 类型：TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB。它们区别在于可容纳存储范围不同。

有 4 种 TEXT 类型：TINYTEXT、TEXT、MEDIUMTEXT 和 LONGTEXT。对应的这 4 种 BLOB 类型，可存储的最大长度不同，可根据实际情况选择。

### SQL的学习目标重点掌握

如何使用SQL从数据表中

##### 查询数据( select)、

##### 插入数据( insert into)、

##### 更新数据( update)、

##### 删除数据( delete)

额外需要掌握的4种SQL语法where条件、and和or运算符、 order by排序、 count(*)函数

###   

### SQL的 SELECT语句

SELECT语句用于从表中查询数据。执行的结果被存储在一个结果表中(称为结果集)。语法格式如下

```sql
-- 这是注释
-- 从from 指定的[表中],查询出[所有的]数据 *表示所有列
select * from users

-- 从from 指定的[表中],查询出指定名称(字段)的数据
select 列名称 from 表名称
```

![image-20220118211352404](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118211352404.png)

### SQL的insert into 语句

1. 语法

2. INSERT INTO语句用于向数据表中插入新的数据行,语法格式如下:

3. ```mysql
   -- 语法解读:向指定的表中,插入如下几列数据,列的通值过 values 一一指定
   -- 注意:列和值要对应,多个列和多个值之间,使用英文的逗号分隔
   insert into 数据表名 (列1,列2,...) values (值1,值2,....)
   ```

   insert into示例

   向users表中插入一条usersname为shuvasd,password为125sda的用户数据 示例如下

   ![image-20220118215304201](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118215304201.png)

### SQL里的update语句

Update语句用于修改表中的数据。语法格式如下:

```mysql
-- 用update 指定更新哪个表中的数据
-- 用set 指定列对应的数值
-- 用where 指定更新的条件
update 表名称 set 列名称=修改的数值 where 列名称=需要修改的数值
```

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118221959403.png)

例子

把所有密码都设成88888888

![image-20220118223254602](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118223254602.png)

把id:1里面的password的值换成88888888

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118224447367.png)

将users表中id为2的用户密码和用户状态，分别更新为admi123和1.

![](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118224747490.png)

### SQL的delete语句

delete语句用于删除表中的行.语法格式如下

```
-- 从指定的表中 根据where 条件 删除对应的数据行
delete from 表名称 where 列名称=值
```

![image-20220118225222863](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118225222863.png)

删除一定要加where限定条件,不然会清空整张表

### sql的where字句

WHERE子句用于限定选择的标准。在 SELECT、 UPDATE、 DELETE语句中,皆可使用 WHERE子句来限定选择的标准。

```mysql
-- 查询语句中的where语句
select 列名称 from 表名 where 列 运算符 值
-- 查询id大于1的
select * from users where id>1;
+----+----------+----------+--------+
| id | username | password | statis |
+----+----------+----------+--------+
|  2 | 李四     | admn123  |      1 |
|  3 | 张三     | 87654321 |      0 |
+----+----------+----------+--------+
2 rows in set (0.00 sec)

-- 更新语句中的where语句
update 表名称 set 列=新值 where 列 运算符 值

-- 更新id大于5的列里面的password的值为123456789

 update users set password='123456789' where id>5;
Query OK, 3 rows affected (0.00 sec)
Rows matched: 3  Changed: 3  Warnings: 0

-- 更新语句中的where语句
mysql> select * from users;
+----+------------+-----------+--------+
| id | username   | password  | statis |
+----+------------+-----------+--------+
|  1 | 赵         | 88888888  |      0 |
|  2 | 李四       | admn123   |      1 |
|  3 | 张三       | 87654321  |      0 |
|  5 | 里斯       | 12345678  |      0 |
|  6 | haund      | 123456789 |      1 |
|  7 | dahuasnd   | 123456789 |      0 |
|  8 | lin1813166 | 123456789 |      0 |
+----+------------+-----------+--------+
7 rows in set (0.03 sec)

-- 删除语句中的where语句
delete from 表名 where 列 运算符 值

-- 删除id大于5的列

mysql> delete from users where id>5;
Query OK, 3 rows affected (0.01 sec)

mysql> select * from users;
+----+----------+----------+--------+
| id | username | password | statis |
+----+----------+----------+--------+
|  1 | 赵       | 88888888 |      0 |
|  2 | 李四     | admn123  |      1 |
|  3 | 张三     | 87654321 |      0 |
|  5 | 里斯     | 12345678 |      0 |
+----+----------+----------+----
```

下面的运算符可在 WHERE子句中使用,用来限定选择的标准:

| 操作符 | 描述                                                         |         实例         |
| :----- | :----------------------------------------------------------- | :------------------: |
| =      | 等号，检测两个值是否相等，如果相等返回true                   | (A = B) 返回false。  |
| <>, != | 不等于，检测两个值是否相等，如果不相等返回true               | (A != B) 返回 true。 |
| >      | 大于号，检测左边的值是否大于右边的值, 如果左边的值大于右边的值返回true | (A > B) 返回false。  |
| <      | 小于号，检测左边的值是否小于右边的值, 如果左边的值小于右边的值返回true | (A < B) 返回 true。  |
| > =     | 大于等于号，检测左边的值是否大于或等于右边的值, 如果左边的值大于或等于右边的值返回true | (A >= B) 返回false。 |
| <=     | 小于等于号，检测左边的值是否小于或等于右边的值, 如果左边的值小于或等于右边的值返回true |          (A          |

![image-20220118231954576](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220118231954576.png)

### SQL的AND和OR运算符

AND和OR可在 WHERE子语句中把两个或多个条件结合起来

AND表示必须同时满足多个条件,相当于 Javascript中的&&运算符,例如f(a!==10&&a!==20)

OR表示只要满足任意一个条件即可,相当于 Javascript中的‖运算符,例如if(a!==10‖a!==20)

#### AND

![image-20220119133303488](C:\Users\move\AppData\Roaming\Typora\typora-user-images\image-20220119133303488.png)

```mysql
select * from users  where statis=0 and id<5;
+----+----------+----------+--------+
| id | username | password | statis |
+----+----------+----------+--------+
|  1 | 赵       | 88888888 |      0 |
|  3 | 张三     | 87654321 |      0 |
+----+----------+----------+--------+
```

#### OR

使用OR来显示所有 status为1,或者 username为zs的用户

```mysql
select * from users where statis=0 or username="赵";
```

| 1    | 赵      | 88888888  | 1    |
| ---- | ------- | --------- | ---- |
| 3    | 张三    | 87654321  | 0    |
| 5    | hdk     | 12345612  | 0    |
| 7    | 晒黑    | 12sdada   | 0    |
| 8    | DSAADAS | 1132123   | 0    |
| 14   | dadaio  | 123145646 | 0    |
| 15   | dasd    | 1223132   | 0    |
| 17   | dsadada | 131132    | 0    |
|      |         |           |      |

### SQL的 ORDER BY子句

ORDER BY语句用于根据指定的列对结果集进行排序。

DRDER BY语句默认按照升序对记录进行排序。

如果您希望按照降序对记录进行排序,可以使用DESC关键字。

新建学生数据表

```mysql
20010500	曾华	75	0	18
20010501	匡明	81	0	19
20010502	王丽	66	0	18
20010503	李军	51	1	18
20010504	王芳	59	1	18
20010505	陆君	77	0	19
20010506	李诚	81	0	20
20010507	张旭	95	0	18
20010508	王萍	91	0	19
20010509	刘冰	100	0	17
20010510	王五	67	0	18
20010511	李六	88	0	17
20010512	张三	95	1	19
```

#### 升序

```mysql
select * from stu order by stu_num;
-- 升序排序
20010503	李军	51	1	18
20010504	王芳	59	1	18
20010502	王丽	66	0	18
20010510	王五	67	0	18
20010500	曾华	75	0	18
20010505	陆君	77	0	19
20010501	匡明	81	0	19
20010506	李诚	81	0	20
20010511	李六	88	0	17
20010508	王萍	91	0	19
20010507	张旭	95	0	18
20010512	张三	95	1	19
20010509	刘冰	100	0	17

```

#### 降序

```mysql
select * from stu order by stu_num desc;
-- 降序排序
20010509	刘冰	100	0	17
20010507	张旭	95	0	18
20010512	张三	95	1	19
20010508	王萍	91	0	19
20010511	李六	88	0	17
20010501	匡明	81	0	19
20010506	李诚	81	0	20
20010505	陆君	77	0	19
20010500	曾华	75	0	18
20010510	王五	67	0	18
20010502	王丽	66	0	18
20010504	王芳	59	1	18
20010503	李军	51	1	18
```

ORDER BY子句-多重排序

对 users表中的数据,先按照 stu_ age年龄进行降序排序,再按照stu_num的成绩顺序,进行升序排序,示例如下

```mysql
select * from stu order by stu_age desc, stu_num asc;
 
20010506	李诚	81	0	20
20010505	陆君	77	0	19
20010501	匡明	81	0	19
20010508	王萍	91	0	19
20010512	张三	95	1	19
20010503	李军	51	1	18
20010504	王芳	59	1	18
20010502	王丽	66	0	18
20010510	王五	67	0	18
20010500	曾华	75	0	18
20010507	张旭	95	0	18
20010511	李六	88	0	17
20010509	刘冰	100	0	17
```

### SQL的 COUNT(*)函数

COUNT(*)函数用于返回查询结果的总数据条数,语法格式如下

统计有多少条数据

```mysql
select count(*) from stu 

+----------+
| count(*) |
+----------+
|       13 |
+----------+
```

统计成绩大于60的人数

```mysql
select count(*) from stu where stu_num>60;

+----------+
| count(*) |
+----------+
|       11 |
+----------+
```

### 使用As为列设置别名

如果希望给查询出来的列名称设置别名,可以使用AS关键字,示例如下

统计成绩大于60的人别名为优秀

```mysql
select count(*) as '优秀' from stu where stu_num>60;


+------+
| 优秀 |
+------+
|   11 |
+------+


也可以这样
select  stu_num  as '优秀' from stu where stu_num>60 ;

+------+
| 优秀 |
+------+
|   75 |
|   81 |
|   66 |
|   77 |
|   81 |
|   95 |
|   91 |
|  100 |
|   67 |
|   88 |
|   95 |
+------+
```

