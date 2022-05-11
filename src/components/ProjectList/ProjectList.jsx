import ProjectListItem from '../ProjectListItem/ProjectListItem'

export default function ProjectList({ projects, setImages }) {
    const displayProjects = projects.map(project =>
        <ProjectListItem key={project._id} projectId={project._id} projectName={project.name} setImages={setImages} />
    )
    return displayProjects
}
