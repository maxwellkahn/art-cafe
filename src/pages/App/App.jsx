import React, { useState } from "react";
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
