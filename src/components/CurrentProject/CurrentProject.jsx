import './CurrentProject.css'

export default function CurrentProject({ popProject, removeProject, activeImageId }) {
    return (
        <div className="project-info">
            <div className="project-header">Current Project:</div>
            <div className="project-name">{popProject.name}</div>
            <button className="remove-project" onClick={() => removeProject(activeImageId)}>remove</button>
        </div>
    )
}