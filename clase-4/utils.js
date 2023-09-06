// Recommended to read json file in ESModules

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)

// Read json file in ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// import fs from 'node:fs'
// import path from 'node:path'
// const genres = JSON.parse(fs.readFileSync(path.join(process.cwd(), '/genres.json'), 'utf-8'))
