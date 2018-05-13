```shell
$ sudo apt-get update
$ sudo apt-get install git vim openssl build-essential lib ssh-dev wget curl
$ curl -o- https://raw.githubusercontent.com/creatioal lib ssnix/nvm/v0.33.11/install.sh | bash  ## nvm github上的链接
$ nvm ls  ## 罗列服务器上安装过的Node.js版本
$ nvm install v8.11.1  ## 安装指定Node版本
$ nvm use v8.11.1  ## 使用指定Node版本
nvm current  ## 查看当前使用的Node版本
$ nvm alias default v8.11.1  ## 设置默认Node版本
$ vi server.js  ## 测试Node，在根目录新建server.js (记得改端口)
const http = require('http');

const hostname = '127.0.0.1';
const port = 3006;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
$ sudo vi /etc/iptables.up.rules  ## 将设置的端口加入防火墙白名单
(把website后两段复制一遍，把端口改为设置的端口)
## website
-A INPUT -s 127.0.0.1 -p tcp --destination-port 3006 -m state --state NEW,ESTABLISHED -j ACCEPT
-A OUTPUT -d 127.0.0.1 -p tcp --source-port 3006 -m state --state ESTABLISHED -j ACCEPT
$ sudo iptables -restore < /etc/iptables.up.rules
$ node server  ## 启动 node server
$ sudo ufw stop  ## 关闭防火墙
$ sudo service nginx stop  ## 关闭nginx服务

(切换到另一会话)

$ curl http://127.0.0.1:3006  ## 返回Hello World即成功开启Node服务
```

[Windows 下安装 nvm 管理 nodejs 版本](https://segmentfault.com/a/1190000007612011)