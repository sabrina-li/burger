const express = require('express');
const Burger = require('../models/burger');

const router = express.Router();

router.get('/', function (req, res) {
    Burger.getAll().then(results=>{
        console.log("here",results);
        res.render("index", results);
    })
})

router.get('/api/all', function (req, res) {
//all burgers
})

router.post('/api/add',function(req,res){
//add new burger
})

router.put('/api/devour',function(req,res){
//eat the burger
})


module.exports = router