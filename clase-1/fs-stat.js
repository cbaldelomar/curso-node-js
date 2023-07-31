const fs = require("node:fs")

const stats = fs.statSync("./text-file.txt")

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.size // in bytes
)