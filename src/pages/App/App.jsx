import React, { useState, useEffect } from "react";
import * as artOrdersAPI from '../../utilities/artOrders-api';
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrder/NewOrderPage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";


function App() {
  const [user, setUser] = useState(getUser());
  const [paidOrders, setPaidOrders] = useState([]);

  useEffect(() => {
    async function pastOrders() {
      const orders = await artOrdersAPI.getAllOrders();
      setPaidOrders(orders);
    }
    pastOrders();
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage user={user} setUser={setUser}/>
            </Route>
            <Route path="/orders">
              <OrderHistoryPage paidOrders={paidOrders}/>
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
