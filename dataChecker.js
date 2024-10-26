const fs = require("fs");

const missing = [];
const audio = [];

fs.readFileSync("./data.js", "utf8")
  .match(/(?<=\(')(.*)(?='\))/gm)
  .forEach((path) => {
    if (!fs.existsSync(path)) {
      missing.push(path);
    } else {
      audio.push(path);
    }
  });

const toDelete = fs
  .readdirSync("./Audio")
  .filter((file) => !audio.find((el) => el === `./Audio/${file}`));

console.log("Missing:");
console.log(missing);
console.log("+------+");
console.log("To Delete:");
console.log(toDelete);
