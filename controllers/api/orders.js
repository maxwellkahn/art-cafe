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
    const cart = await Order.getCart(req.user._id);
    await cart.addArtToCart(req.params.id);
    res.json(cart);
}

async function setCartQty(req, res) {

}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true,
    await cart.save();
    console.log('the paid card ', cart)
    res.json(cart);
}