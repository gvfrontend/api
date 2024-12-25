import express from "express";


const app = express()

const PORT = 4545

app.get("/" , (req, res)=>{
    res.json({msg: "Hello students"})
})



app.listen(PORT, ()=>{
    console.log(` The sever is running at http://localhost:${PORT}`)
})