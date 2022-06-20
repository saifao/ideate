import './ProjectListItemWide.css'

export default function ProjectWide({ getProjectImages, projectName }) {

    return <div className='project-list-name' onClick={getProjectImages}> {projectName}</ div>
}

