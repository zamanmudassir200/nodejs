const fs = require("fs");

fs.writeFileSync("./2.file-system/output.txt", "Hey there sync");
fs.writeFile("./2.file-system/outputAsync.txt", "Hey there Async", (err) => {
  if (err) console.log("ERROR OCCURED", err);
  else console.log("Writing file");
});

const read1 = fs.readFileSync("./2.file-system/output.txt", "utf-8");
console.log(read1);
fs.readFile("./2.file-system/outputAsync.txt", "utf-8", (err, result) => {
  if (err) throw err;
  else console.log(result);
});

fs.appendFileSync(
  "./outputAsync.txt",
  `${new Date().getDate().toLocaleString()}\n`
);

fs.cpSync("./outputAsync.txt", "./2.file-system/copy.txt");

fs.unlinkSync("./2.file-system/copy.txt");
console.log(fs.statSync("./outputAsync.txt"));
