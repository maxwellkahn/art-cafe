import { useState, useEffect, useRef } from "react";
import artItemsAPI from "../../utilities/artItems-api";

export default function NewOrderPage() {
  const [artItems, setArtItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getArtItems() {
      const artItems = await artItemsAPI.getAll();
      categoriesRef.current = artItems.reduce((cats, artItem) => {
          const cat = artItem.category.name;
          return cats.includes(cat) ? cats : [...cats, cat];
      }, [])
      setArtItems(artItems);
    }
    getArtItems();
  }, []);

  return (
    <>
      <h1>NewOrderPage</h1>
      <button onClick={setArtItems}>Trigger re-render</button>
    </>
  );
}
