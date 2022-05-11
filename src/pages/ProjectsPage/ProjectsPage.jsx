import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import getAll from '../../utilities/projects-api'
import * as projectsAPI from '../../utilities/projects-api'
import Project from '../../components/Project/Project'

export default function ProjectPage() {

    const [projects, setProjects] = useState([])
    const [newProject, setNewProject] = useState('')

    useEffect(function () {
        async function getProjects() {
            const getProjectsAPI = await projectsAPI.getAll()
            setProjects(getProjectsAPI)
        }
        getProjects()
    }, [])

    const displayProjects = projects.map(project =>
        <Project projectName={project.name} />
    )

    function handleChange(evt) {
        const newProjectData = { ...newProject, [evt.target.name]: evt.target.value };
        setNewProject(newProjectData);

    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        console.log(newProject)
        try {
            const newProjectSet = await projectsAPI.create(newProject)
            setProjects(newProjectSet)
        }
        catch {
            return "Create Project Failed"
        }
    }

    return (
        <div>
            {displayProjects}
            <hr />
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} required />
                <button type="submit">CREATE</button>
            </form>
        </div>
    )


}