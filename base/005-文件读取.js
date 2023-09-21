const fs = require("fs");

fs.readFile("./text.txt", {}, (error, data) => {
  if (error) {
    console.log("读取失败");
  } else {
    console.log("data: ", data.toString());
  }
});
