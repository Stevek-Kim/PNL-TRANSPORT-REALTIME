const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/sound/:name', (req,res)=>{
   const { name } = req.params
   if (name === "dog") {
    res.json({"sound": 'bow-wow'})
   } else if ( name === "cat") {
    res.json({"sound": "meow"})
   } else if ( name === "pig") {
    res.json({"sound": "oink"})
   } else if ( name === "pig") {
    res.json({"sound": "oink"})
   } else {
    res.json({"sound" : "unknown"})
   }

})

app.listen(port, ()=> {
    console.log(`app listening on port ${port}`)
})