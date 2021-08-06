import * as usersService from "../../utilities/users-service";
import * as artOrdersAPI from "../../utilities/artOrders-api";
import CompletedOrders from "../../components/CompletedOrders/CompletedOrders";
import { useState, useEffect } from "react";

export default function OrderHistoryPage({paidOrders}) {
//   const [paidOrders, setPaidOrders] = useState([]);

//   useEffect(() => {
//     async function pastOrders() {
//         console.log('hitting past orders')
//       const orders = await artOrdersAPI.getAllOrders();
//       console.log("SOME ORDERS ON HISTORY PAGE ", orders);
//       setPaidOrders(orders);
//     }
//     pastOrders();
//   }, []);

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <CompletedOrders paidOrders={paidOrders} />
    </>
  );
}
