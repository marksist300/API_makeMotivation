const express = require("express")
const app = express();
const PORT = 8000;

//set up the front page to be output
app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/site/index.html`)
})

//set up the CSS file to be collected and sent for styling
app.get("/assets/style/style.css", (req,res)=>{
    res.sendFile(`${__dirname}/assets/style/style.css`)
})


//set up the JS file to be sent to the site and to allow DOM manipulation
app.get("/assets/js/index.js", (req,res)=>{
    res.sendFile(`${__dirname}/assets/js/index.js`)
})

app.listen(PORT);