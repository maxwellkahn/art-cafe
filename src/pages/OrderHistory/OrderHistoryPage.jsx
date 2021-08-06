import CompletedOrders from "../../components/CompletedOrders/CompletedOrders";

export default function OrderHistoryPage({paidOrders}) {

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <CompletedOrders paidOrders={paidOrders} />
    </>
  );
}
