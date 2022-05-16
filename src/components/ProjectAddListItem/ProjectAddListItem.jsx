import './ProjectAddListItem.css'

export default function ProjectAddListItem({ project, handleAddProject }) {
    return <button onClick={() => handleAddProject(project._id)}>{project.name}</button>
}