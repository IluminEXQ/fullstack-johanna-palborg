const express = require('express')
const databaseModule = require('./databasemodule.js')
const app = express()
const port = 1337

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(clientDir))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs', {name : "Ilumin"})
})
  
  app.post('/sendMessage', function (req, res) {
    console.log(req.body.name)
    console.log(req.body.message)
    
   databaseModule.saveMessage(req.body.name, req.body.message)
   

    res.redirect('/success')
})

app.listen(port, () => console.log(`Example app listening on port port!`))

