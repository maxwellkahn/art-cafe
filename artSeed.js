require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const artItem = require('./models/artItem');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'van Gogh', sortOrder: 10},
        {name: 'Monet', sortOrder: 20},
        {name: 'Cole', sortOrder: 30},
        // {name: '', sortOrder: 40}
    ]);

    await artItem.deleteMany({});
    const items = await artItem.create([
        {name: 'The Bedroom', artist: 'Vincent van Gogh', category: categories[0], price: 19.99},
        {name: 'Stacks of Wheat', artist: 'Claude Monet', category: categories[1], price: 29.99},
        {name: 'Distant View of Niagra Falls', artist: 'Thomas Cole', category: categories[2], price: 39.99},
        // {name: '', artist: '', category: categories[x], price: 29.99},


    ]);

    console.log(items)

    process.exit();

})();