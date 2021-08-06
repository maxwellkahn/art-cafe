import { useState, useEffect } from "react";
import * as artItemsAPI from "../../utilities/artItems-api";
import * as artOrdersAPI from '../../utilities/artOrders-api';
import ArtList from "../../components/ArtList/ArtList";
import ArtOrderDetails from '../../components/ArtOrderDetails/ArtOrderDetails';
import LogOut from '../../components/LogOut/LogOut';
import { Link, useHistory } from 'react-router-dom';

export default function NewOrderPage({user, setUser}) {
  const [artItems, setArtItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [paidOrders, setPaidOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getArtItems() {
      const artItems = await artItemsAPI.getAll();
      setArtItems(artItems);
    }
    getArtItems();

    async function getCart() {
      const cart = await artOrdersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToCart(itemId) {
    const cart = await artOrdersAPI.addToCart(itemId);
    setCart(cart);
  }

  async function handleChangeQty(itemId, newQty) {
    const cart = await artOrdersAPI.setCartQty(itemId, newQty);
    setCart(cart);
  }

  async function handleCheckout() {
    await artOrdersAPI.checkout();
    history.push('/orders');
  }

  return (
    <>
      <h1>NewOrderPage</h1>
      <ArtList artItems={artItems} handleAddToCart={handleAddToCart}/>
      <Link to='/orders'>Other Orders</Link>
      <ArtOrderDetails cart={cart} handleCheckout={handleCheckout} handleChangeQty={handleChangeQty}/>
      <LogOut user={user} setUser={setUser}/>
    </>
  );
}
