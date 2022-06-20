import * as imagesAPI from '../../utilities/images-api'
import ProjectListItemWide from '../ProjectListItemWide/ProjectListItemWide'
import ProjectListItemMob from '../ProjectListItemMob/ProjectListItemMob'
import './ProjectListItem.css'

export default function Project({ projectId, projectName, setImages, mobileView }) {

    async function getProjectImages() {
        const getProjectImagesAPI = await imagesAPI.getProjectImages(projectId);
        setImages(getProjectImagesAPI)
    }

    return (
        <>
            {mobileView ? <ProjectListItemMob getProjectImages={getProjectImages} projectName={projectName} /> : <ProjectListItemWide getProjectImages={getProjectImages} projectName={projectName} />}
        </>
    )
} 