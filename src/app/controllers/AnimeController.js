const Anime = require('../models/Anime');
const { mongooseToObject } = require('../../util/mongoose');

const anime = new Anime();

class AnimeController {
  // [GET] /anime/:slug
  show(req, res, next) {
    Anime.findOne({ slug: req.params.slug })
      .then((anime) =>
        res.render('pages/anime/show', { anime: mongooseToObject(anime) })
      )
      .catch(next);
  }
}

module.exports = new AnimeController();
