const fs = require("fs");

const missing = [];
const AudioArr = [];

fs.readFileSync("./data.js", "utf8", (e, f) => {
  if (e) {
    console.error(e);
  }

  const filePaths = f.match(/(?<=\(')(.*)(?='\))/gm);
  for (const path in filePaths) {
    fs.open(path, (err, data) => {
      if (err && !data) {
        missing.push(path);
      } else {
        AudioArr.push(path);
      }
    });
  }
});

const toDelete = fs
  .readdirSync("./Audio")
  .filter((file) => AudioArr.find((el) => el === "./Audio/" + file));

console.log("Missing:");
console.log(missing);
console.log("+------+");
console.log("To Delete:");
console.log(toDelete);
