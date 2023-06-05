const siteRouter = require('./site');
const animeRouter = require('./anime');
const adminRouter = require('./admin');

function route(app) {
  app.use('/anime', animeRouter);
  app.use('/admin', adminRouter);
  app.use('/', siteRouter);
}

module.exports = route;
