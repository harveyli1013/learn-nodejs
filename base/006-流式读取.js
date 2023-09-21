const fs = require("fs");

const rs = fs.createReadStream("./那年，那群人.txt");

rs.on("data", (chunk) => {
  console.log("chunk: ", chunk.length);
  //   console.log("chunk: ", chunk.toString());
});

rs.on("end", () => {
  console.log("读取完成");
});
