const fs = require('node:fs')

console.log('Leyendo el primer archivo...');
fs.readFile('./text-file.txt', 'utf-8', (err, text) => {
  console.log('Primer texto:', text);
})

console.log("--> Hacer cosas mientras lee el primer archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./text-file-2.txt", "utf-8", (err, text) => {
  console.log("Segundo texto:", text)
});