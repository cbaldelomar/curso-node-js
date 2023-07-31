const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files

  try {
    files = await fs.readdir(directory)
  } catch {
    console.error(pc.red(`No se pudo leer el directorio ${directory}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(directory, file)
    let stats

    try {
      // Get file info.
      stats = await fs.stat(filePath)
    } catch {
      console.error(pc.red(`No se pudo leer el archivo ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(filesInfo => console.log(filesInfo))
}

ls(folder)
