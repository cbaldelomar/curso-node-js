const path = require('node:path')

// Path separator
console.log(path.sep)

// Join path parts
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const mypath = "/tmp/secrets/my-secret-file.txt"

const base = path.basename(mypath)
console.log(base)

const filename = path.basename(mypath, '.txt')
console.log(filename)

const ext = path.extname(mypath)
console.log(ext)