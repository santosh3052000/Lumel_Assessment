const express = require('express')
const router = express.Router()
const fs = require('fs')

function requestLogger(err,req,res,next){
    console.log(`The Request is : `)
    next()
}

module.exports = requestLogger