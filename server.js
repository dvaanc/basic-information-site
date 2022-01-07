const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = process.env.port || 8080

// const index = fs.readFile('./index.html');

const server = http.createServer((req, res) => {
  const filename=__dirname+req.url
  console.log(port)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text-html')
  res.end(`${filename}`);

})


server.listen(port, () => {
  console.log(`Server running at http://${port}`) 
})

