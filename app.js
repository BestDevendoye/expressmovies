const express = require("express")
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
app.use("./public", express.static("public"))

app.use(bodyParser.urlencoded({ extended: false }))
app.set("views","./views")
app.set("view engine","ejs")

app.post("/movies", (req,res)=>
{
    const title = "film francer des annees 80"
    const frenchfilm = [{
        film:"abou",annee:2017
    }, { film:"samba" , annee:2018},{film:"abacar",annee:2019}]
    res.render("movies" , {
        movies:frenchfilm,
        movietitle:title})
        
        console.log(req.body)
        res.sendStatus(201)
    })
/*app.get("/movies-details", (req,res)=>
{
    res.render("movies-details")
}
)*/



app.get("/movies/:id", (req,res)=>
{
    const id = req.params.id 
    const title = "terminator"
    res.render("movies-details" ,{
        moveid : id,
        movietitle :title
    })
}
)
app.get("/movies/add" ,(req,res) =>
{
    res.send("voici un formulaire")
})


app.get("/", (req,res)=>
{
    res.render("index")
}
)

app.listen(9090, ()=>
{
    console.log("i am connect")
}
)