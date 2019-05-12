const express = require('express');
var bodyParser = require('body-parser')

const Burger = require('../models/burger');

const app = express();
const router = express.Router();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res) {
//home page
})

// define the about route
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