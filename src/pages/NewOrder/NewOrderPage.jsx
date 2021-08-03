import { useState, useEffect, useRef } from "react";
import * as artItemsAPI from "../../utilities/artItems-api";
import CategoryList from '../../components/CategoryList/CategoryList';
import ArtList from "../../components/ArtList/ArtList";
import ArtOrderDetails from '../../components/ArtOrderDetails/ArtOrderDetails';
import LogOut from '../../components/LogOut/LogOut';
import { Link } from 'react-router-dom';

export default function NewOrderPage({user, setUser}) {
  const [artItems, setArtItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
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
      <CategoryList categories={categoriesRef.current} activeCat={activeCat} setActiveCat={setActiveCat}/>
      <ArtList artItems={artItems}/>
      <Link to='/orders'>Other Orders</Link>
      <ArtOrderDetails />
      <LogOut user={user} setUser={setUser}/>
    </>
  );
}
