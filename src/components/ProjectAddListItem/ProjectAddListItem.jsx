import './ProjectAddListItem.css'

export default function ProjectAddListItem({ project, handleAddProject }) {
    return <button className='project-add-btn' onClick={() => handleAddProject(project._id)}>{project.name}</button>
}