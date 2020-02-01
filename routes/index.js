const express = require('express');
const router = express.Router();

//This is the main router from host

//Welcome Page
router.get('/',(req,res)=>{
    console.log('Home');
    res.render('home',{ layout: false })
});

module.exports = router