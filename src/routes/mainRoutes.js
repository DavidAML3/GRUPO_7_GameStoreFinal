const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

// Get all products
router.get('/', mainController.home);

// User
// router.get('/register', mainController.register);
// router.get('/login', mainController.login);

// Cart
router.get('/cart', mainController.cart);

// Get one product
router.get('/detail/:id', mainController.detail);

// Edit one product
router.get('/edit/:id/', mainController.adminEditProduct);
router.put('/edit/:id', mainController.update);

//Destroy
router.post("/delete/:id", mainController.destroy);

//list products
router.get("/games", mainController.list);

// ADMINISTRADOR
router.get('/adminNewProduct', mainController.adminNewProduct);
router.get('/tlou/adminEditProduct', mainController.adminEditProduct);

module.exports = router;