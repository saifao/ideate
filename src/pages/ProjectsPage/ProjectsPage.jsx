import { useState, useEffect } from 'react';
import * as projectsAPI from '../../utilities/projects-api'
import ProjectList from '../../components/ProjectList/ProjectList'
import CreateNewProject from '../../components/CreateNewProject/CreateNewProject';
import ActiveProjectImages from '../../components/ActiveProjectImages/ActiveProjectImages'
// import { toggle, handleAddProject, removeProject } from '../ImageGrid/ImageGrid'
import './ProjectsPage.css'

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
        <div className='project-container'>
            <span className="project-list">
                <h3>Create New Project</h3>
                <CreateNewProject handleSubmit={handleSubmit} newProject={newProject} setNewProject={setNewProject} />
                <ProjectList projects={projects} setImages={setImages} />
            </span>
            <span className="vl"></span>
            <span className='active-projects'><ActiveProjectImages images={images} /></span>
        </div>
    )

}