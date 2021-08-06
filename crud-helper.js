require('dotenv').config();
require('./config/database');

const User = require('./models/user')
const Item = require('./models/artItem')
const Category = require('./modles/category')
const Order = require('./models/order')

let u, i, c, o;