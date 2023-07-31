import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text1 = await readFile('./text-file.txt', 'utf-8')
console.log("Primer texto:", text1)

console.log("--> Hacer cosas mientras lee el primer archivo...")

console.log("Leyendo el segundo archivo...")
const text2 = await readFile("./text-file.txt", "utf-8")
console.log("Segundo texto:", text2)