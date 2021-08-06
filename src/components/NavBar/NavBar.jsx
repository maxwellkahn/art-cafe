import { Link } from "react-router-dom";
import * as UserService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        UserService.logOut();
        setUser(null);
    }
    return <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;
        <span>Welcome back {user.name}</span>
        &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>;
}
