export default function CurrentProject({ popProject, removeProject, activeImageId }) {
    return (
        <div>
            <h3>{popProject.name}</h3><button onClick={() => removeProject(activeImageId)}>X</button>
        </div>
    )
}