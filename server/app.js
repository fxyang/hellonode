/**
 * Taken from https://blog.risingstack.com/your-first-node-js-http-server/
 */

// const http = require('http')
// const port = 8092

// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.end('Hello Node.js Server!')
// }

// const server = http.createServer(requestHandler)

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })


// Object.size = function (obj) {
//   var size = 0,
//     key;
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) size++;
//   }
//   return size;
// };

// var hello;
// console.log("size of var hello is " + Object.size(hello));
// var world = {};
// console.log("size of var world is " + Object.size(world));
// var nihao = {
//   a: "a"
// };
// console.log("size of var nihao is " + Object.size(nihao));


// function a() {
//   throw "err in a";
// }

// function main() {
//   try {
//     a();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("before new world");
//   }
//   console.log("hello new world");
//   var x = null;
//   if (x === null)
//     console.log("=== null");
//   if (!x)
//     console.log("not null");
//   if (x)
//     console.log("null");
// }

// main();


// function timeout(s, s1, s2) {
//   return new Promise((resolve, reject) => {
//     if (s > 100)
//       setTimeout(resolve, s1, 'done');
//     else
//       setTimeout(reject, s2, 'not done');

//   });
// }

// timeout(100, 100, 100).then((value) => {
//   console.log(value);
// }, (value) => {
//   console.log(value);
// });

// timeout(200, 50, 50).then((value) => {
//   console.log(value);
// }, (value) => {
//   console.log(value);
// });


// var http = require('http');

// http.createServer(function (request, response) {

//   // 发送 HTTP 头部
//   // HTTP 状态值: 200 : OK
//   // 内容类型: text/plain
//   response.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });

//   // 发送响应数据 "Hello World"
//   response.end('Hello Docker\n');
// }).listen(3000);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:3000/');

var express = require('express');
var app = express();
//设置public目录为静态目录
app.use(express.static('public'));
//监听3000端口
app.listen(3000);