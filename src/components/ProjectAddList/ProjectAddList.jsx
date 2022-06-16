import ProjectAddListItem from '../ProjectAddListItem/ProjectAddListItem'
import './ProjectAddList.css'

export default function ProjectAddList({ projects, handleAddProject }) {

    const projectList = projects.map(project => <ProjectAddListItem key={project._id} project={project} handleAddProject={handleAddProject} />)

    return (
        <div className="project-list">
            <div className='project-list-header'>Add Image to a Project:</div>
            <div className='project-list-items'>
                {projectList}
            </div>
        </div>
    )
}