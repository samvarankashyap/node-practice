var express = require("express")
  , app     = express()
  , port    = process.env['PORT'] || 3000

function home(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>Node js welocome </title></head><body><h1>welcome to the home page </h1><a href='/menu'>Go to requests</a></body></html>")
}

function menu(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>Menu of Node</title></head><body><h1>This is post call </h1><form action='createreq' method='POST'><button type='submit'>create</button></form></body></html>")
}

function createRequest(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>UpdateRequest</title></head><body><h1>Request cretaed</h1><form action='updaterequest' method='POST'><button type='submit'>Create Again</button></form><p>You have found some <a href='/requestcount/1'>Request_id</a></p></body></html>")
}

function updateRequest(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>updateRequest</title></head><body><h1>request updated </h1></body></html>")
}

function showRequestId(req,res) {
  var id = req.params.id

  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>Request id </title></head><body><h1>Request id <h1><p> id is  #" + id + "</p></body></html>")
}

// Routes
app.get("/",               home)
app.get("/menu",     menu)
app.post("/createreq",    createRequest)
app.post("/updaterequest/", updateRequest)
app.put("/updaterequest/:id", updateRequest)
app.get("/requestcount/:id",showRequestId)

app.listen(port)

console.log('Server running at http://127.0.0.1:' + port + '/')
