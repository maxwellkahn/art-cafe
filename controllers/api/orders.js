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
    console.log(cart)
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addToCart(req.params.id);
    res.json(cart);
    console.log('the cart updated ', cart)
}

async function setCartQty(req, res) {

}

async function checkout(req, res) {
    
}