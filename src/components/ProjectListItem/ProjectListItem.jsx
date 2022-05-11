import * as imagesAPI from '../../utilities/images-api'

export default function Project({ projectId, projectName, setImages }) {

    async function getProjectImages() {
        const getProjectImagesAPI = await imagesAPI.getProjectImages(projectId);
        setImages(getProjectImagesAPI)
    }

    return (
        <h1 onClick={getProjectImages}> {projectName}</ h1>
    )
} 