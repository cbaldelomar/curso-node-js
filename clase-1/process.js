// Console args
console.log(process.argv)

// Current working directory = process execution path
console.log(process.cwd())

// Enviroment variables
console.log(process.env.NODE_ENV)

// Control process and ouput
// 0 = success
// 1 = fail
process.exit(0)

// Process events
process.on('exit', () => {
  // Do something...
})
