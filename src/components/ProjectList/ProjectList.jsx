import ProjectListItem from '../ProjectListItem/ProjectListItem'
import './ProjectList.css'

export default function ProjectList({ projects, setImages, mobileView }) {
    const displayProjects = projects.map(project =>
        <ProjectListItem key={project._id} projectId={project._id} projectName={project.name} setImages={setImages} mobileView={mobileView} />
    )
    return (
        <>
            {mobileView ? <div className='mobile-projects'>{displayProjects}</div> : <div className='widescreen-projects'>{displayProjects}</div>}
        </>
    )
}
