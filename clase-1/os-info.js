const os = require('node:os')

console.log('Información del sistema operativo')
console.log('---------------------------------')

console.log('Name', os.platform())
console.log("Version", os.release());
console.log("Arquitectura", os.arch());
console.log("RAM total", Math.round(os.totalmem() / 1024 / 1024), 'MB');
console.log("RAM libre", Math.round(os.freemem() / 1024 / 1024), 'MB');