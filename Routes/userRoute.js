const express= require('express');
const userController = require('../Controllers/userController');
const validateUser = require('../Middleware/validateUser');
const router = express.Router();

// auth routes
router.post("/signup",userController.signup);
router.post("/login",userController.login);


router.get("/profile/:username",userController.getUserProfile)
router.post("/follow/:id",validateUser,userController.followUnfollowUser);
router.post("/update/:id",validateUser,userController.updateUser);





module.exports = router