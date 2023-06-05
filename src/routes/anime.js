const express = require('express');
const router = express.Router();

const animeController = require('../app/controllers/AnimeController');

router.get('/:slug', animeController.show);

module.exports = router;
