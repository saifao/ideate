import './ProjectAdd.css'
import ProjectAddListItem from '../ProjectAddListItem/ProjectAddListItem'
import CurrentProject from '../CurrentProject/CurrentProject'

export default function ProjectAdd({ popProject, projects, toggle, handleAddProject, removeProject, activeImageId }) {

    return (
        <div className='modal'>
            <div className='modal_content'>
                <span className="quit" onClick={() => toggle()}>Cancel</span>
                <hr />
                {popProject.name ? <CurrentProject popProject={popProject} removeProject={removeProject} activeImageId={activeImageId} />
                    :
                    projects.map(project => <ProjectAddListItem key={project._id} project={project} handleAddProject={handleAddProject} />)
                }
            </div>
        </div>

    )
}