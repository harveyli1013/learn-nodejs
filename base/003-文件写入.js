const fs = require("fs");

fs.writeFile("./text.txt", "三人行，则必有我师焉，", { flag: "a" }, (err) => {
  if (err) {
    console.log("写入失败");
  } else {
    console.log("写入成功");
    fs.appendFile("./text.txt", "\r\n择其善者而从之，其不善者而改之", (err) => {
      if (err) {
        console.log("扩展失败");
      } else {
        console.log("扩展成功");
      }
    });
  }
});

console.log("异步执行");

// fs.writeFileSync("./text2.txt", "test");
