import CompletedOrders from "../../components/CompletedOrders/CompletedOrders";

export default function OrderHistoryPage({paidOrders}) {

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <ul>Completed Orders:</ul>
      <CompletedOrders paidOrders={paidOrders} />
    </>
  );
}
