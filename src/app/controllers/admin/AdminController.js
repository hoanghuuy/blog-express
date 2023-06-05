class AdminController {
  // [GET] /admin
  index(req, res, next) {
    res.render('admin/admin');
  }
}

module.exports = new AdminController();
