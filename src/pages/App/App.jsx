import React from 'react';
import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage';
// import SearchBar from '../SearchBar/SearchBar';
import ImageGrid from '../ImageGrid/ImageGrid';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import * as searchAPI from '../../utilities/search-api'
import SearchResults from '../SearchResults/SearchResults';

export default function App() {
    const [user, setUser] = useState(getUser())
    const [searchState, setSearchState] = useState('')
    const [imageResults, setImageResults] = useState([])
    const navigate = useNavigate();

    async function submitSearch(searchString = searchState, pageNumber = 1) {
        const results = await searchAPI.imageSearch(searchString, pageNumber);
        setImageResults(results)
        navigate("/searchResults")
    }

    return (
        <main>
            <NavBar user={user} setUser={setUser} setSearchState={setSearchState} submitSearch={submitSearch} />
            {user ?
                <Routes>
                    <Route path="/" element={<ImageGrid />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/searchResults" element={<SearchResults results={imageResults} submitSearch={submitSearch} />} />
                </Routes>
                :
                <AuthPage setUser={setUser} />
            }
        </main>
    )
}