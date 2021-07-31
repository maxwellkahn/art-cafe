require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const artItem = require('./models/artItem');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: '', sortOrder: 10},
        {name: '', sortOrder: 20},
        {name: '', sortOrder: 30},
        {name: '', sortOrder: 40},
        {name: '', sortOrder: 50},
    ]);

    await artItem.deleteMany({});
    const items = await artItem.create([
        {name: '', artist: '', category: categories[x], price: 29.99},

    ]);

    console.log(items)

    process.exit();

})();