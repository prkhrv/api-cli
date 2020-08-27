const express = require('express');
const router = express.Router();   


var UserController = require('../controller/userController');



router.post('/upload',UserController.add_a_user);
router.get('/get',UserController.view_a_user);



module.exports = router;
