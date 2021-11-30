const express = require('express')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const PORT = 5000
const url = "https://rugpullindex.com"

const app = express()

axios(url)
  .then(response => {

    const html = response.data //index.html
    const new_html = html.replace("/93218339c23.css", `/local.css`)
    //the above line will change the href file location in the html file
    //to the local css file in the design system repo
    
    //Save the new html file to cache folder in design system repo
    fs.writeFile('cache/index.html', new_html, function(err) { 
      if(err) { return console.log(err); }
    })
    
  })

app.use(express.static(__dirname)) 

app.get('/', function(req, res) {
  //Serve the written index.html file on localhost:5000/
  res.sendFile(path.join(__dirname, 'cache/index.html')) 
  
})

app.listen(PORT, () => console.log('rugpullindex runs on localhost:5000/'))

