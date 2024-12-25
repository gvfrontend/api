import express from "express";


const app = express()

const PORT = 4545

app.get("/" , (req, res)=>{
    res.json({msg: "Hello students"})
})

//getting the movies
app.get("/movies",()=>{

}
)
//posting the movies
app.post("/movies",()=>{
    
}
)
//updating the movie
app.put("/movies/:id",()=>{
    
}
)

//deleting the movie
app.delete("/movies/:id", ()=>{

})

app.listen(PORT, ()=>{
    console.log(` The sever is running at http://localhost:${PORT}`)
})