import ArtListItem from '../ArtListItem/ArtListItem';

export default function ArtList({artItems}) {
    // const artPieces = artItems.map(art => 
    //     <ArtListItem 
    //         key={art._id}
    //         artItem={art}
    //     />
    // );
    return (
        <>
        <ul>
            {artItems.map(art => <ArtListItem key={art._id} artItem={art}/>)}
        </ul>
        </>
    );
}

// export default function ArtList({artItems}) {
//     return (
//         <ul>
//             {artItems.map(a => <ArtListItem key={a._id} artItem={a.artItem})} />
//         </ul>
//     )
// }