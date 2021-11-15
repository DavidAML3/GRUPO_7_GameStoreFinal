const express = require('express');
const router = express.Router();
const gamesApiController = require('../../controllers/api/gamesApiController');

router.get("/", gamesApiController.list);
router.get('/games/:id/', gamesApiController.detail);
