const http = require('http')

let counter = 0

/**
 * Simple Hello World HTTP Server
 */
http.createServer(function (req, res) {
  if (req.url != '/') {
    console.log(`URL ${req.url} invalid.`)
    res.writeHead(404, { 'Content-Type': 'text/plain'})
    res.end('Not found.')
    return
  }
  counter++
  console.log(`Processing request number ${counter}`)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(`Hello World ${counter}\n`)
}).listen(3000);

console.log('Server started.')
