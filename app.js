const express = require('express')
const app = express()
const path = require('path')
const PORT = 3030

app.use(express.static('public'))

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))

app.get('/example',(req,res) => res.sendFile(path.join(__dirname,'views','example.html')))

app.listen(PORT, () => console.log('Servidor Corriendo en http://localhost:' + PORT))