const express = require("express")
const ejs = require('ejs')

const app = express()
app.use("./public", express.static("public"))


app.set("views","./views")
app.set("view engine","ejs")

app.get("/movies", (req,res)=>
{
    res.render("movies")
}
)
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