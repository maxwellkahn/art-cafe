const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/', ordersCtrl.getOrders)
router.get('/cart', ordersCtrl.cart)
router.post('/cart/items/:id', ordersCtrl.addToCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/qty', ordersCtrl.setCartQty);

module.exports = router;