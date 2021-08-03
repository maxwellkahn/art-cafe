import React, { useState, useEffect } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrder/NewOrderPage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
// import * as artItemsAPI from "../../utilities/artItems-api";


function App() {
  const [user, setUser] = useState(getUser());
  // const [artItems, setArtItems] = useState([]);
  // useEffect(function () {
  //   async function getArtItems() {
  //     const artItems = await artItemsAPI.getAll();
  //     console.log('THE TIMES ', artItems)
  //     // categoriesRef.current = artItems.reduce((cats, artItem) => {
  //     //     const cat = artItem.category.name;
  //     //     return cats.includes(cat) ? cats : [...cats, cat];
  //     // }, [])
  //     setArtItems(artItems);
  //   }
  //   getArtItems();
  // }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
export default App;
