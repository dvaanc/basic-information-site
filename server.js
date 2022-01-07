const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 5500

// const errorPage = fs.readFile('./404.html')
// const aboutPage = fs.readFile('./about.html')
// const contactPage = fs.readFile('./contact-me.html')
// const indexPage = fs.readFile('./index.html')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   // res.setHeadear('Content-Type', 'text-html')
//   res.writeHead(200, {'content-type': 'text/html'})
//   res.end(indexPage);
// }).listen(port);
const server = http.createServer((req, res) => {
  res.statusCode = 200
  // res.setHeadear('Content-Type', 'text-html')
  res.writeHead(200, {'content-type': 'text/plain'})
  res.write('Test 123')
  res.end();
}).listen(port)

