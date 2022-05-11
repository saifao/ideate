import { Link } from 'react-router-dom';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
        <nav>

            <Link to="/projects">Project</Link>
            &nbsp; | &nbsp;
            &nbsp;<span>Welcome {user ? user.name : ''}</span>
            &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}