import LineItem from "../LineItem/LineItem";

export default function ArtOrderDetails({ order }) {
  if (!order) return null;

  const lineItems = order.lineItems.map((art) => (
    <LineItem lineItem={art} isPaid={order.isPaid} key={art._id} />
  ));

  return (
    <div>
      {order.isPaid ? (
        <span>
          Order # <span>{order.orderId}</span>
        </span>
      ) : (
        <span>New Order</span>
      )}
      <div>
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              {order.isPaid ? (
                <span>Total</span>
              ) : (
                <button
                  onClick={() => alert("Buy this")}
                  disabled={!lineItems.length}
                >
                  Checkout
                </button>
              )}
              <span>{order.totalQty}</span>
              <span>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div>Empty Cart</div>
        )}
      </div>
    </div>
  );
}
