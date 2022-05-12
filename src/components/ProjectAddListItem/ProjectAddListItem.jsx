export default function ProjectAddListItem({ project, handleAddProject }) {
    return <li onClick={() => handleAddProject(project._id)}>{project.name}</li>
}