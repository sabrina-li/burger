const express = require('express');
const Burger = require('../models/burger');

const router = express.Router();

router.get('/', function (req, res) {
    Burger.getAll().then(results=>{
        console.log("here",results);
        res.render("index", {burger:results});
    })
})

router.post('/api/burger',function(req,res){
//new burger
    console.log(req.body.burger_name);
    const burger = new Burger(req.body.burger_name,false);
    burger.add().then(id=>{
        res.send({id:id});
    })
})

router.put('/api/burger',function(req,res){
//eat the burger
    console.log(req.body);
    const burger = new Burger("",true,req.body.id);
    burger.devour().then(id=>{
        res.send({id:id});
    })
})


module.exports = router