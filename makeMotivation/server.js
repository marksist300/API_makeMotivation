const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient;
const PORT = 3000;


MongoClient.connect("mongodb+srv://marktlinn:vuhFiv-7kytto-xufbav@cluster0.nk23j.mongodb.net/motivatorMaker?retryWrites=true&w=majority",
 {useUnifiedTopology: true})
    .then(client => {
        console.log('Connection to database established...')
        const db = client.db("motivatorMaker");
        const quoteCollection = db.collection("motivate");
        app.use(bodyParser.urlencoded({extended: true}));
        app.get("/", (req,res)=>{
            db.collection("motivate").find().toArray()
            .then(data=> console.log(data.forEach(quote=> console.log(quote.quoteBox))))
            .catch (err=> {
                res.status(400).send("<h1>400: Page Not Found</h1>")
                console.log(`400 Error: ${err}`)
            })
            res.sendFile(`${__dirname}/index.html`)
        });
        app.post("/motivate", (req,res)=>{
            let quote = req.body;
            quoteCollection.insertOne(quote)
            .then(data=> {
                console.log(`Data: ${data}`)
                res.redirect("/");
            })
            .catch(err=> console.log(`POST Error: ${err}`))
        });
        app.listen(PORT, ()=>{
            console.log(`Listening on port: ${PORT}`);
        });
    })
    .catch(err=> console.log(`Error: ${err}`));






