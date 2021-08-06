import CompletedOrderDetail from "../CompletedOrderDetail/CompletedOrderDetail";

// export default function CompletedOrders({ paidOrders }) {
//   const orders = paidOrders.orders.map((order) => (
//     <CompletedOrderDetail key={order._id} paidOrder={paidOrders} />
//   ));
//   return <ul>{orders}</ul>;
// }

export default function CompletedOrders({paidOrders}) {
    return (
        <>
        <ul>{paidOrders.map(order => <CompletedOrderDetail key={order._id} paidOrders={order}/>)}</ul>
        </>
    )
}