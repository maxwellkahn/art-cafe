import { useState, useEffect, useRef } from "react";
import * as artItemsAPI from "../../utilities/artItems-api";
import ArtList from "../../components/ArtList/ArtList";

export default function NewOrderPage({user, setUser}) {
  const [artItems, setArtItems] = useState([]);
  // const [activeCat, setActiveCat] = useState('');
  // const categoriesRef = useRef([]);

  useEffect(function () {
    async function getArtItems() {
      const artItems = await artItemsAPI.getAll();
      console.log('THE TIMES ', artItems)
      // categoriesRef.current = artItems.reduce((cats, artItem) => {
      //     const cat = artItem.category.name;
      //     return cats.includes(cat) ? cats : [...cats, cat];
      // }, [])
      setArtItems(artItems);
    }
    getArtItems();
  }, []);

  return (
    <>
      <h1>NewOrderPage</h1>
      <ArtList artItems={artItems}/>
      <button onClick={setArtItems}>Trigger re-render</button>
    </>
  );
}
