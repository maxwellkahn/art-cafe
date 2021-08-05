import LineItem from "../LineItem/LineItem";

export default function ArtOrderDetails({ cart, handleCheckout }) {
  if (!cart) return null;

  const lineItems = cart.lineItems.map((art) => (
    <LineItem lineItem={art} isPaid={cart.isPaid} key={art._id} />
  ));

  return (
    <div>
      {cart.isPaid ? (
        <span>
          Order # <span>{cart.orderId}</span>
        </span>
      ) : (
        <span>New Order</span>
      )}
      <div>
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              {cart.isPaid ? (
                <span>Total</span>
              ) : (
                <button
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  Checkout
                </button>
              )}
              <span>{cart.totalQty}</span>
              <span>${cart.orderTotal}</span>
            </section>
          </>
        ) : (
          <div>Empty Cart</div>
        )}
      </div>
    </div>
  );
}
