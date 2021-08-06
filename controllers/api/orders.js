const Order = require('../../models/orders');

module. exports = {
    cart,
    addToCart,
    setCartQty,
    checkout,
    getOrders,
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
    const cart = await Order.getCart(req.user._id);
    await cart.setCartQty(req.body.itemId, req.body.newQty);
    res.json(cart);
}

async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true,
    await cart.save();
    res.json(cart);
}

async function getOrders(req, res) {
    const orders = await Order.find({})
    res.json(orders);



    // const orders = await Order.getDataOrders(req.user._id);
    // console.log('USERS ORDERS IN CONTROLLER ', orders)
    // res.json(orders);

    // const orders = await Order.find(req.user._id);
    // console.log('the orders ', orders)
    // res.json(orders);
}