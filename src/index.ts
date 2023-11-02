import express from "express"
import morgan from "morgan"
import db from "./modules/db";

const app = express()

app.use(morgan("dev"));

app.get('/',async (req,res)=>{
    const post = await db.post.findMany({ where: {publishedAt: {not:null}}})
  
    return res.json(post);
})

const port = Number(process.env.PORT || 3000)
app.listen(port,"0.0.0.0",()=>{
    console.log("listening on port "+port)
})
