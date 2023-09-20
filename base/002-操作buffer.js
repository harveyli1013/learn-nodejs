/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-20 21:57:11
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-20 22:28:29
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */

// buffer与字符串的转换
let buffer = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log("buffer: ", buffer); // <Buffer 69 6c 6f 76 65 79 6f 75>
console.log("buffer: ", buffer.toString()); // iloveyou

// 元素读取和写入
let buffer2 = Buffer.from("hello");
console.log("buffer2: ", buffer2[0]); // 104
console.log("buffer2: ", buffer2[0].toString(2)); // 1101000
buffer2[0] = 95;
console.log("buffer2: ", buffer2.toString()); //  _ello

// 溢出
let buffer_3 = Buffer.from("hello");
buffer_3[0] = 361; // 0001 0110 1001 溢出后，设置高位  剩余0110 1001
console.log("buffer_3: ", buffer_3[0]); //  105
console.log("buffer_3: ", buffer_3[0].toString(2)); // 0110 1001
console.log("buffer_3: ", buffer_3.toString()); //   iello

// 中文
let buffer_4 = Buffer.from("你好");
console.log("buffer_4: ", buffer_4); //  <Buffer e4 bd a0 e5 a5 bd>
console.log("buffer_4: ", buffer_4.toString()); // 你好
