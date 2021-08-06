export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div>
      <div className="ArtPiece">
        <span>{lineItem.item.name}</span>
        <span>{lineItem.item.price}</span>
      </div>
      <div className="AorSQty">
        {!isPaid && (
          <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty -= 1)}>-</button>
          )}
          <span>{lineItem.qty}</span>
        {!isPaid && 
            <button onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty += 1)}>+</button>
        }
      </div>
      <div>${lineItem.extPrice}</div>
    </div>
  );
}
