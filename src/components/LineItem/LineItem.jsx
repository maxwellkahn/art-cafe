export default function LineItem({ lineItem, isPaid }) {
  return (
    <div>
      <div className="ArtPiece">
        <span>{lineItem.item.name}</span>
        <span>{lineItem.item.price.toFixed(2)}</span>
      </div>
      <div className="AorSQty">
        {!isPaid && (
          <button onClick={() => alert("subtract quantity")}>-</button>
          )}
          <span>{lineItem.qty}</span>
        {!isPaid && 
            <button onClick={() => alert('add quantity')}>+</button>
        }
      </div>
      <div>${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
