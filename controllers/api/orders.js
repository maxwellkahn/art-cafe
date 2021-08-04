const Order = require('../../models/orders');

module. exports = {
    cart,
    addToCart,
    setCartQty,
    checkout,
};

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

async function addToCart(req, res) {

}

async function setCartQty(req, res) {

}

async function checkout(req, res) {
    
}