import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import getAll from '../../utilities/projects-api'
import * as projectsAPI from '../../utilities/projects-api'
import ProjectList from '../../components/ProjectList/ProjectList'
import CreateNewProject from '../../components/CreateNewProject/CreateNewProject';
import ActiveProjectImages from '../../components/ActvieProjectImages/ActiveProjectImages'

export default function ProjectPage() {

    const [projects, setProjects] = useState([])
    const [newProject, setNewProject] = useState('')
    const [images, setImages] = useState([])

    useEffect(function () {
        async function getProjects() {
            const getProjectsAPI = await projectsAPI.getAll()
            setProjects(getProjectsAPI)
        }
        getProjects()
    }, [])

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const newProjectSet = await projectsAPI.create(newProject)
            setProjects(newProjectSet)
        }
        catch {
            return "Create Project Failed"
        }
    }

    return (
        <main>
            <aside>
                <ProjectList projects={projects} setImages={setImages} />
                <hr />
                <h1>Create New Project</h1>
                <CreateNewProject handleSubmit={handleSubmit} newProject={newProject} setNewProject={setNewProject} />
            </aside>
            <ActiveProjectImages images={images} />
        </main>
    )


}