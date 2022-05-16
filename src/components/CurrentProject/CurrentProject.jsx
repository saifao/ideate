import './CurrentProject.css'

export default function CurrentProject({ popProject, removeProject, activeImageId }) {
    return (
        <div>
            <span className="project-info">{popProject.name}</span><button onClick={() => removeProject(activeImageId)}>remove</button>
        </div>
    )
}