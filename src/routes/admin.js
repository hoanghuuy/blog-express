const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/admin/AdminController');
const adAnimeController = require('../app/controllers/admin/AdAnimeController');

// [POST]
router.put('/update/:id', adAnimeController.update);
router.post('/delete/:id', adAnimeController.delete);
router.post('/create', adAnimeController.create);

// [GET]
router.get('/list', adAnimeController.list);
router.get('/create', adAnimeController.create);
router.get('/edit/:slug', adAnimeController.edit);
router.get('/', adminController.index);

module.exports = router;
