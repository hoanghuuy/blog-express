const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Anime = new Schema(
  {
    title: { type: String, default: 'Anime title', maxLength: 255 },
    description: { type: String, maxLength: 600 },
    thumbnail: { type: String, maxLength: 255 },
    background: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 100 },
  },
  { collection: 'anime', timestamps: true }
);

module.exports = mongoose.model('Anime', Anime);
