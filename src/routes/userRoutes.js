const express = require('express');
const uploadFile = require('../../middlewares/multerMiddleware');
const validations = require('../../middlewares/validateRegisterMiddleware')
const authMiddleware = require('../../middlewares/authMiddleware')
const guestMiddleware = require('../../middlewares/guestMiddleware')

const router = express.Router();

const usersController = require('../controllers/usersController');

//Usuarios
router.get("/users", usersController.list);

//Register 
router.get('/register', usersController.register);

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('fotoUsuario'), validations, usersController.processRegister);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.loginProcess);

router.get('/profile/', authMiddleware, usersController.profile);
router.get('/logout', usersController.logout);

//Edit Users
router.get('/editUser/:id/', usersController.editUser);
router.put('/editUser/:id', usersController.update);

//Destroy
router.post("/delete/:id", usersController.destroy);

module.exports = router;