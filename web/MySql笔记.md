### 第一章 初涉Mysql

- MySQL登录

  mysql -u用户名 -p密码 -P端口号（默认3306） -h服务器名称（本地127.0.0.1） --prompt提示符



- 修改提示符
  1. 登录时通过参数指定 :arrow_up:
  2. 登录后通`prompt`命令修改（如`prompt deng>`）



- 更改编码方式

  ```mysql
  > set names GBK;
  ```



- 操作数据库

  ```mysql
  > create database 库名 character set gbk;  /** 设定编码方式为gbk **/
  > show create database 库名;   /** 查看建库所使用的指令 **/
  > alter database 库名 character set gbk;   /** 修改编码方式为gbk **/
  > drop database 库名;   /** 删除数据库 **/
  ```




### 第二章 数据类型与操作数据表

- [常用数据类型](http://lib.csdn.net/article/mysql/4289)



- 创建数据表

  ```mysql
  > use 库名;   /** 打开某数据库 **/
  > select database();   /** (打开某数据库后)查看当前数据库 **/
  > create table 表名(
      id smallint auto_increment primary key,
    	username varchar(20) not null unique key,
    	age tinyint unsigned null,
    	salary float(8,2) unsigned
    );   /** unsigned 无符号位 , 即数据不能为负数 **/
  ```



- 唯一约束 unique key
  1. 唯一约束可以保证数据的唯一性 .
  2. 唯一约束的字段可以为空值(null) .
  3. 每张数据表可以存在多个唯一约束 .



- 默认约束

  当插入记录时 , 如果没有明确为字段赋值 , 则自动赋予默认值 .

  如下 :

  ```mysql
  > sex enum('1','2','3') default '3',    /** sex的默认值为3 **/
  ```




### 第三章 约束以及修改数据表

- 外键约束的要求

  1. 父表和子表必须使用相同的存储引擎 , 而且禁止使用临时表 .
  2. 数据表的存储引擎只能为InnoDB . (所以项目开发中很少使用物理外键)
  3. 外键列和参照列必须具有相似的数据类型 . 其中数字的长度或是否有符号位必须相同；而字符的长度则可以不同 .
  4. 外键列和参照列必须创建索引 . 如果外键列不存在索引的话，MySQL将自动创建索引 .

  ```mysql
  > create table 表名(
    	id smallint unsigned primary key auto_increment,
    	username varchar(10) not null,
    	pid smallint unsigned,
    	foreign key(pid) reference 参照表(id)
    );
  /** 建表时先建父表(参照表) , 再建子表 **/
  ```



- 查看索引

  ```mysql
  > show indexes from 表名\G;
  ```



- 修改数据表 - 添加 / 删除列

  ```mysql
  > alter table 表名 add sex enum('1','2','3');
  > alter table 表名 drop sex;
  ```



- 修改数据表 - 添加约束

  ```mysql
  > alter table 表名 add primary key(...) / unique key(...);
  > alter table 表名 add foreign key(...) references 参照表(.);
  > alter table 表名 alter sex set default 3;  /** 默认约束 **/
  ```



- 修改数据表 - 修改列定义

  ```mysql
  > alter table 表名 modify id smallint unsigned not null first;
  ```

- [修改数据表总结](http://blog.csdn.net/qq_33290787/article/details/51861830)



### 第四章 操作数据表中的数据

- 插入记录 insert

  ```mysql
  > insert into 表名 values(default,'Tom','123');
    /** 可以插入表达式和函数 **/
  ```

- 插入多条记录

  ```mysql
  > insert into 表名 values(default,'Tom','123'),(default,'John','456');
  ```

- 查询表达式解析

  ```mysql
  /** 星号(*)表示所有列 , tbl-name.*可以表示命名表的所有列 **/
  > select users.id,user.name from users;
  ```

- group by 语句对查询结果分组

  ```mysql
  > select sex,age from users group by sex having age > 35;
    /** having语句设置分组条件 **/
  ```

- order by 语句对查询结果排序

  ```mysql
  > select * from users order by id desc;
  ```

- limit 语句限制查询数量

  ```mysql
  > select * from users limit 2;   /** 返回前两条查询结果 **/
  > select * from users limit 3,2;
    /** 返回从第四条开始的两条查询结果(记录从0开始编号) **/
  ```



### 第五章 子查询与连接

- 子查询简介

  - 子查询(Subquery)是指出现在其他SQL语句内的SELECT子句 .
  - 子查询只嵌套在查询内部，且必须始终出现在圆括号内 .
  - 子查询可以包含多个关键字或条件，如DISTINCT、GROUP BY、LIMIT、函数等 .

- 使用insert ... select 插入记录

  ```mysql
  > insert goods_cate(name) select goods.name from goods group  by name;
  ```

- 多表更新

  ```mysql
  > update goods inner join goods_cate on goods.name = goods_cate.name set goods.name = id;
  ```

  连接类型 : inner join 内连接

  ​		   left [outer] join 左外连接

  ​		   right [outer] join 右外连接

  连接条件 : 使用on关键字来设定连接条件 , 也可以使用where来代替 .

  ​                   使用where关键字进行结果集记录的过滤 .

- 内连接 : 显示左表和右表符合连接条件的记录

- 无限极分类表设计

  自连接 : 同一个数据表对其自身进行连接 (:arrow_down:想象右边有一个一模一样的表) 

  	  id    name     parent_id
  	  1   家用电器      0
  	  2   电脑,办公     0
  	  3   大家电        1         --大家电的父id是1（家用电器）
  	  4   生活电器      1
  	  5   平板电视      3
  	  6   空调          3
  	  7   电风扇        4
  	  8   饮水机        4
  	  9   电脑整机      2
  	  10  电脑配件      2
  	  11  笔记本        9          --笔记本的父id是9（电脑整机）
  	  12  超极本        9
  	  13  游戏本        9
  	  14  CPU          10
  	  15  主机         10
  ```mysql
  > select s.id,s.name,p.name as parent_name from goods_type as  s left join goods_types as p on s.parent_id = p.id;
    /** 查询结果如下 **/
  ```

  	  id    name     parent_name
  	  1   家用电器     NULL
  	  2   电脑,办公    NULL
  	  3   大家电       家用电器
  	  4   生活电器     家用电器
  	  5   平板电视     大家电
  	  6   空调         大家电
  	  7   电风扇       生活电器
  	  8   饮水机       生活电器
  	  9   电脑整机     电脑,办公
  	  10  电脑配件     电脑,办公
  	  11  笔记本       电脑整机
  	  12  超极本       电脑整机
  	  13  游戏本       电脑整机
  	  14  CPU          电脑配件
  	  15  主机         电脑配件

- 多表删除

  1. 复制编号为12和20的两条记录

     ```mysql
     > select * from tdb_goods where goods_id in(19,20);
     ```

  2. insert ... select 实现复制

     ```mysql
     > insert tdb_goods(goods_name,cate_id,brand_id) select goods_name,cate_id,brand_id from tdb_goods where goods_id in(19,20);
     ```

  3. 查找重复记录

     ```mysql
     > select goods_id,goods_name from tdb_goods group by goods_name having count(goods_name) >=2;
     ```

  4. 删除重复记录

     ```mysql
     > delete t1 from tdb_goods as t1 left join (select goods_id,goods_name from tdb_goods group by goodds_name having count(goods_name) >=2) as t2 on t1.goods_name = t2.goods_name where t1.goods_id > t2.goods_id;
     ```



### 第六章 运算符和函数

```mysql
@ CONCAT()      字符连接
@ CONCAT_WS()   使用指定的分隔符进行字符连接
  FORMAT()      数字格式化
  LOWER()       转换成小写字母
  UPPER()       转换成大写字母
  LEFT()        获取左侧字符
  RIGHT()       获取右侧字符
@ LENGTH()     获取字符串长度 , 空格也算
  LTRIM()      删除前导空格 , 删除第一个字符之前的空格
  RTRIM()      删除后续空格 , 删除最后一个字符之后的空格
  TRIM()       删除前导和后续空格
  SUBSTRING() 字符串截取
@ [NOT]LIKE    模式匹配
@ REPLACE()    字符串替换
@ CEIL()      进一取整(向上取整)
@ FLOOR()     舍一取整(向下取整)
  DIV         整数除法
  MOD         取余数(取模)
  POWER()     幂运算
@ ROUND()     四舍五入
  TRUNCATE()  数字截取

 /** 比较运算符和函数 **/
@ [NOT] BETWEEN...AND...   [不]在范围之内
@ [NOT] IN()                [不]在列出值范围内
@ IS [NOT] NULL             [不]为空

 /** 日期时间函数 **/
@ NOW()           当前日期和时间
@ CURDATE()       当前日期
@ CURTIME()       当前时间
  DATE_ADD()      日期加减变化
  DATEDIFF()      日期差值
@ DATE_FORMAT()   日期格式化

 /** 信息函数 **/
  CONNECTION_ID()    连接ID
  DATABASE()         当前数据库
  LAST_INSERT_ID()  最后插入记录的ID号(ID必须是自动编号)
  USER()             当前用户
  VERSION()          版本信息

 /** 聚合函数 **/
@ AVG()     平均值
@ COUNT()   计数
@ MAX()     最大值
@ MIN()     最小值
@ SUM()     求和

 /** 加密函数 **/
  MD5()        信息摘要算法   --WEB页面使用
  PASSWORD()   密码算法
```





- 两表查询

  ```mysql
  > SELECT * FROM employees,salary WHERE employees.EmployeeID = salary.EmployeeID AND employees.Name = '邓景造';
  ```

- 两表连接

  ```mysql
  > UPDATE employees,salary SET salary.Income = salary.Income + 1000 WHERE employees.EmployeeID = salary.EmployeeID AND employees.Name = '邓景造';
  ```

  ||

  ```mysql
  > UPDATE salary SET Income  = Income + 1000 WHERE EmployeeID = (SELECT EmployeeID FROM employees WHERE Name = '邓景造');
  ```


- 查询收入在2000元到3000元的员工姓名 :

  ```mysql
  > SELECT name FROM employees WHERE EmployeeID IN (SELECT employees.EmployeeID FROM employees,salary WHERE employees.EmployeeID = salary.EmployeeID AND income>=2000 AND income<=3000);
  ```