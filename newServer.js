const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 8080
const hostname = process.env.hostname


app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname});
});

app.get('/contact-me', (req, res) => {
  res.sendFile('./contact-me.html', { root: __dirname});
});

app.get('*', (req, res) => {
  res.sendFile('./404.html', { root: __dirname});
});

app.listen(port, hostname, () => console.log(`listening on port ${port}! Hostname ${hostname}`));