import { Link } from 'react-router-dom';
import { useState } from 'react';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';

import './NavBar.css'

export default function NavBar({ user, setUser, setSearchState, submitSearch, setPage }) {

    const [searchString, setSearchString] = useState('')

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    async function handleSearch(evt) {
        evt.preventDefault();
        setPage(2)
        setSearchState(searchString)
        submitSearch(searchString, 1)
    }

    return (
        <div className="navbar">
            <Link to="/projects">Project</Link>
            <Link to="/">Home</Link>
            <div className="dropdown">
                <Link to="" className="dropitems">Account</Link>
                <div className="dropdown-content">
                    <Link to="">Welcome {user ? user.name : ''}</Link>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </div>
            </div>
            <form className='search-bar' onSubmit={handleSearch}>
                <input className='search-input' type="text" placeholder="Search..." value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            </form>
        </div>

    );
}