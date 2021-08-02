import ArtListItem from '../ArtListItem/ArtListItem';

export default function ArtList({artItems}) {
    const artPieces = artItems.map(artPiece => 
        <ArtListItem 
            key={artPiece._id}
            artItem={artPiece}
        />
    );
    return (
        <>
            {artPieces}
        </>
    );
}