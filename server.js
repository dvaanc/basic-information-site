const http = require('http')
const fs = require('fs')
const { URL } = require('url')
const { url } = require('inspector')
const baseDir = __dirname
const hostname = '127.0.0.1'
const port = process.env.port || 8080

// const index = fs.readFile('./index.html');
const validUrls = [`/`, `about`, `contact-me`,]


const server = http.createServer((req, res) => {
  try {
    let html;
    if(req.url === '/') html = './index.html'
    html = `.${req.url}.html`

    // if(req.url === '/') filepath = `${baseDir}index.html`
    fs.readFile(html, (err, data) => {
      res.writeHeader(200, {'Content-Type': 'text/html', 'Content-Length': data.length})
      res.write(data)
      res.end()
    })

  } catch(err) {
    res.writeHead(500)
    res.end()
    console.log(err.stack)
  }
})


server.listen(port, () => {
  console.log(`Server running at http://${port}`) 
})

