export default function ArtListItem({artItem, handleAddToCart}) {
    return (
        <div>
        <div>{artItem.name}</div>
        <div>{artItem.artist}</div>
        <div>{artItem.price}</div>
        <button onClick={() => handleAddToCart(artItem._id)}>
            Add to Cart
        </button>
        </div>
    );
}