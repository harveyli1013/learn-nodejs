/*
 * @Author: harvey —— fxli@yuansuan.cn
 * @Date: 2023-09-20 21:57:11
 * @LastEditors: harvey fxli@yuansuan.cn
 * @LastEditTime: 2023-09-20 22:14:21
 * @Description:
 * Copyright (c) 2023 by harvey —— email: fxli@yuansuan.cn, All Rights Reserved.
 */
// alloc
let buffer = Buffer.alloc(10);
console.log("buffer: ", buffer); //  <Buffer 00 00 00 00 00 00 00 00 00 00>

// allocUnsafe
// 以这种方式创建的 Buffer 实例的底层内存没有被初始化。 新创建的 Buffer 的内容未知，可能包含敏感数据。 使用 Buffer.alloc() 来用零初始化 Buffer 实例。
// 速度较快
let buffer_2 = Buffer.allocUnsafe(10);
console.log("buffer_2: ", buffer_2); //  <Buffer 00 00 00 00 00 00 00 00 00 00>

// from
let buffer_3 = Buffer.from("hello");
console.log("buffer_3: ", buffer_3); //  <Buffer 68 65 6c 6c 6f>
