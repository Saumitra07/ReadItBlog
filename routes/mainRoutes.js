const express = require('express');
const router=express.Router();
const controller=require('../controllers/mainController')

router.get('/',controller.goToHome);

router.get('/about',controller.about)

router.get('/contact',controller.contact);




module.exports =router;