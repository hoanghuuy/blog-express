const Anime = require('../models/Anime');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Anime.find()
      .then((anime) =>
        res.render('home', { anime: multipleMongooseToObject(anime) })
      )
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
