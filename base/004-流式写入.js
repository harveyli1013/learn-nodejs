const fs = require("fs");
const ws = fs.createWriteStream("./text.txt");

ws.write("鹅鹅鹅\n");
ws.write("曲项向天歌\n");
ws.write("白毛浮绿水\n");
ws.write("红掌拨清波\n");
ws.end();
