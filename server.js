const http = require('http')
const { readFile } = require('fs')
const { URL } = require('url')
const baseDir = __dirname
const hostname = process.env.hostname || 'localhost'
const port = process.env.port || 8080

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  let path = './'
  switch(req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/contact-me':
      path += 'contact-me.html'
      res.statusCode = 200
      break
    default:
      path += '404.html'
      res.statusCode = 404
      break
  }
  readFile(path, (err, data) => {
    if(err) console.error(err)
    res.write(data)
    res.end()
  })
})


server.listen(port, () => {
  console.log(`Server running at http://${port}`)
})

server.on('exit', () => server.exit())
server.on('SIGINT', () => server.exit())

