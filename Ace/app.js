const express = require('express')
const databaseModule = require('./databasemodule.js')
const app = express()
const port = 1337

app.use(express.json())
app.use(express.urlencoded())

const clientDir = __dirname + "\\client\\"

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/ok', (req, res) => {
  res.sendFile(clientDir + 'main_style.css')
})
app.get('/sad', (req, res) => {
  res.sendFile(clientDir + 'Cat.png')
})

app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.message)
    
   databaseModule.saveMessage(req.body.name, req.body.message)

    res.redirect('/success')
})

app.listen(port, () => console.log(`Example app listening on port port!`))






