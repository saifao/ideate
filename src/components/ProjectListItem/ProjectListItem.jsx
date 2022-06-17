import * as imagesAPI from '../../utilities/images-api'
import './ProjectListItem.css'

export default function Project({ projectId, projectName, setImages }) {

    async function getProjectImages() {
        const getProjectImagesAPI = await imagesAPI.getProjectImages(projectId);
        setImages(getProjectImagesAPI)
    }

    return (
        <div className='project-list-name' onClick={getProjectImages}> {projectName}</ div>
    )
} 