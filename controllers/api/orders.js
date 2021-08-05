const Order = require('../../models/orders');

module. exports = {
    cart,
    addToCart,
    setCartQty,
    checkout,
};

async function cart(req, res) {
    console.log('user id ', req.user._id)
    const cart = await Order.getCart(req.user._id);
    console.log('the cart ', cart)
    res.json(cart);
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    console.log('the id ', req.params.id)
    await cart.addArtToCart(req.params.id);
    res.json(cart);
}

async function setCartQty(req, res) {

}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true,
    await cart.save();
    res.json(cart);
}