const express = require("express")
const app = express();
const PORT = 8000;

const heroData = {
    Batman: {
        firstName: "Bruce",
        surname: "Wayne",
        age: 35,
        location: "Gotham city"
    },
    Spiderman: {
        firstName: "Peter",
        surname: "Parker",
        age: 18,
        location: "New York City"
    },

    Superman: {
        firstName: "Clark",
        surname: "Kent",
        age: 35,
        location: "Metropolis"
    },

    Thor: {
        name: "Thor",
        age: "Unknown",
        location: "Valhalla"
    },

    none: {
        name: "Not found"
    }
}

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

// Receive specific API requests and respond with JSON
app.get("/api/:name", (req,res)=>{
    let heroName = req.params.name.toLowerCase();
    heroName = heroName[0].toUpperCase() + heroName.slice(1)
    console.log(heroName);
    if(heroData[heroName]){
        res.json(heroData[heroName]);
    } else{
        res.json(heroData['none'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on Port:${PORT}`);
});