import './CurrentProject.css'

export default function CurrentProject({ popProject, removeProject, activeImageId }) {
    return (
        <div className="project-info">
            <span className="project-name">{popProject.name}</span><button onClick={() => removeProject(activeImageId)}>remove</button>
        </div>
    )
}