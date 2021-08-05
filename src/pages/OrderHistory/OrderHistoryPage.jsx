import * as usersService from '../../utilities/users-service';
import * as artOrdersAPI from '../../utilities/artOrders-api'
import CompletedOrder from '../../components/CompletedOrder/CompletedOrder';
// import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function OrderHistoryPage() {
    // const [paidOrder, setPaidOrder] = useState(null);
    
    // useEffect(() => 
    // async function pastOrders() {
    //     const orders = await artOrdersAPI.getCart(isPaid = true);
    //     setPaidOrder(orders);
    // }, []);
    // pastOrders();


    async function handleCheckToken() {
             const expDate = await usersService.checkToken();
             console.log(expDate);
    }
    return (
    <>
    <h1>OrderHistoryPage</h1>
    <CompletedOrder />
    <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
    );
    }
