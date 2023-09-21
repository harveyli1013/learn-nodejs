const fs = require("fs");
const process = require("process");
let t1 = new Date().getTime();

// 一般性写入
// 耗时较短，但是文件较大时一次性占用内存较高

// fs.readFile("./那年，那群人.txt", (error, data) => {
//   console.log(process.memoryUsage()); //  rss: 37253120,
//   if (error) {
//     console.log("读取失败");
//   } else {
//     fs.writeFile("./那年，那群人.copy.txt", data, (error) => {
//       if (error) {
//         console.log("写入失败");
//       } else {
//         let t2 = new Date().getTime();
//         console.log(t2 - t1);
//         console.log("写入成功");
//       }
//     });
//   }
// });

// 流式
// 耗时相对较长，但是占用的内存较少

const rs = fs.createReadStream("./那年，那群人.copy.txt");
const ws = fs.createWriteStream("./那年，那群人.copy2.txt");
// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// rs.on("end", () => {
//   console.log(process.memoryUsage()); // 37785600
//   let t2 = new Date().getTime();
//   console.log(t2 - t1);
// });

// 流式拷贝简单写法
rs.pipe(ws);
