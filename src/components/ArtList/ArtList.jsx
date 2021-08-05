import ArtListItem from '../ArtListItem/ArtListItem';

export default function ArtList({artItems, handleAddToCart}) {
    return (
        <>
        <ul>
            {artItems.map(art => <ArtListItem key={art._id} artItem={art} handleAddToCart={handleAddToCart}/>)}
        </ul>
        </>
    );
}

