import './ProjectListItemMob.css'

export default function ProjectMobileItem({ getProjectImages, projectName }) {

    return <span onClick={getProjectImages}> {projectName} | &nbsp;</span>
}

