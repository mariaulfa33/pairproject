const express = require('express')
const nodemailer = require ('nodemailer')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))



app.get('/', function(req, res) {
  res.send('HELO')
})

app.listen(3000, function(){
  console.log('PORT 3000 started...')
})