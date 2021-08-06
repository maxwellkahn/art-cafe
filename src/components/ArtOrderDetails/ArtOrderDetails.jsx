import LineItem from "../LineItem/LineItem";

export default function ArtOrderDetails({ cart, handleCheckout, handleChangeQty }) {
  if (!cart) return null;

  const lineItems = cart.lineItems.map((art) => (
    <LineItem lineItem={art} isPaid={cart.isPaid} key={art._id} handleChangeQty={handleChangeQty}/>
  ));

  return (
    <div>
      {cart.isPaid ? (
          <span>New Order</span>
       
      ) : (
        <span>
        Order # <span>{cart.orderId}</span>
      </span>
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
