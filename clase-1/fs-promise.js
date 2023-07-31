const fs = require('node:fs/promises')
// Trasform native modules when not have default promise support.
//const { promisify } = require('util')

console.log('Leyendo el primer archivo...')
fs.readFile('./text-file.txt', 'utf-8')
  .then(text => {
    console.log("Primer texto:", text)
  })

console.log("--> Hacer cosas mientras lee el primer archivo...")

console.log("Leyendo el segundo archivo...")
fs.readFile("./text-file-2.txt", "utf-8")
  .then(text => {
    console.log("Segundo texto:", text)
  });