const express = require('express')
const router = express.Router()
const fs = require('fs')


function splice(string){
    return splice(string)
}
router.get('/',(req,res)=>{
    fs.readFile('./utilities/sample.csv','utf8',(err,data)=>{
        if(err){console.log(err.message)}
        else{res.json({data})}
    })
})
router.get('/admin',(req,res)=>{
    res.send("This is admin !")
})


module.exports = router