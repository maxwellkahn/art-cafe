const artItem = require('../../models/artItem');


module.exports = {
    index,
};

async function index(req, res) {
    const artItems = await artItem.find({}).sort('name').populate('category').exec();
    res.json(artItems);
}

