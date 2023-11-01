import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"));

app.get('/',(req,res)=>{
    return res.json({
        "message": "hello Tobi3",
    });
})

const port = Number(process.env.PORT || 3000)
app.listen(port,"0.0.0.0",()=>{
    console.log("listening on port "+port)
})
