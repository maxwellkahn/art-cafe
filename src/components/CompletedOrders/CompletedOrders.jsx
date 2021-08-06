import CompletedOrderDetail from "../CompletedOrderDetail/CompletedOrderDetail";

export default function CompletedOrders({paidOrders}) {
    return (
        <>
        <ul>{paidOrders.map(order => <CompletedOrderDetail key={order._id} paidOrders={order}/>)}</ul>
        </>
    )
}