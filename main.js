import express from "express";
import movieRoutes from './routes/moviesroute.js'

const app = express()

const PORT = 4545

app.get("/" , (req, res)=>{
    res.json({msg: "Hello students"})
})

app.use("/movies", movieRoutes)

app.listen(PORT, ()=>{
    console.log(` The sever is running at http://localhost:${PORT}`)
})