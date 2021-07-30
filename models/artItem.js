const mongoose = require('mongoose');

require('./category');
const artItemSchema = require('./artItemSchema');

module.exports = mongoose.model('ArtItem', artItemSchema);