import React from 'react';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage';
// import SearchBar from '../SearchBar/SearchBar';
import ImageGrid from '../ImageGrid/ImageGrid';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

export default function App() {
    const [user, setUser] = useState(getUser())

    return (
        <main>
            <NavBar user={user} />
            {user ?
                <Routes>
                    <Route path="/" element={<ImageGrid />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
                :
                <AuthPage setUser={setUser} />
            }
        </main>
    )
}