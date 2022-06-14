import { Link } from 'react-router-dom';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
        <div class="navbar">
            <Link to="/projects">Project</Link>
            <Link to="/">Home</Link>
            <div class="dropdown">
                <Link to="" className="dropitems">Account</Link>
                <div class="dropdown-content">
                    <Link to="">Welcome {user ? user.name : ''}</Link>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </div>
            </div>
        </div>

    );
}