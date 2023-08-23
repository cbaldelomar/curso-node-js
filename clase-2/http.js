const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/imagen.png') {
    fs.readFile('./clase-2/node.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'imagen/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('404 Not Found')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
