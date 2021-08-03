export default function ArtListItem({artItem}) {
    return (
        <div>
        <div>{artItem.name}</div>
        <div>{artItem.artist}</div>
        <div>{artItem.price}</div>
        <button onClick={() => console.log('added to cart')}>
            Add to Cart
        </button>
        </div>
    );
}