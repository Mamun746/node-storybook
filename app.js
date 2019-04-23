const express=require('express')
const mongoose=require('mongoose')

const app=express()
const PORT=process.env.PORT||8080


app.get('/',(req,res)=>{
    res.send('Mamun')
})

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)
)