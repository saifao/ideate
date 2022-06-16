import './ProjectAdd.css'
import ProjectAddList from '../ProjectAddList/ProjectAddList'
import CurrentProject from '../CurrentProject/CurrentProject'

export default function ProjectAdd({ popProject, projects, toggle, handleAddProject, removeProject, activeImageId }) {

    return (
        <div className='modal'>
            <div className='modal_content'>
                <div className="quit" onClick={() => toggle()}>Cancel</div>
                {popProject.name ? <CurrentProject popProject={popProject} removeProject={removeProject} activeImageId={activeImageId} />
                    :
                    <ProjectAddList projects={projects} handleAddProject={handleAddProject} />
                }
            </div>
        </div>

    )
}