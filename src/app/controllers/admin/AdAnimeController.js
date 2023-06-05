const Anime = require('../../models/Anime');
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require('../../../util/mongoose');

class AdAnimeController {
  // [GET] /admin/list
  list(req, res, next) {
    Anime.find()
      .then((anime) =>
        res.render('admin/anime/list', {
          anime: multipleMongooseToObject(anime),
        })
      )
      .catch(next);
  }

  // [GET] /admin/create
  create(req, res) {
    res.render('admin/anime/create');
  }

  // [GET] /admin/edit/:slug
  edit(req, res, next) {
    Anime.findOne({ slug: req.params.slug })
      .then((anime) =>
        res.render('admin/anime/edit', { anime: mongooseToObject(anime) })
      )
      .catch(next);
  }

  // [POST] /admin/create
  async create(req, res, next) {
    const formData = { ...req.body };
    const anime = new Anime(formData);
    await anime
      .save()
      .then(() => res.render('admin/anime/create'))
      .catch(next);
  }

  // [PUT] /admin/update/:id
  async update(req, res, next) {
    const formData = { ...req.body };
    Anime.updateOne({ _id: req.params.id }, formData)
      .then(() => res.redirect('/admin/list'))
      .catch(next);
  }

  // [DELETE] /admin/delete/:id
  async delete(req, res, next) {}
}

module.exports = new AdAnimeController();
