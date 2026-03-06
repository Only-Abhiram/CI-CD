const express = require('express')

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{

    res.json({
        message:"You got this right"
    });

})

app.listen(80, ()=>{
    console.log("Running on port 80")
})