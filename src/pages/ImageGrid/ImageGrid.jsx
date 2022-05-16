import { useState, useEffect } from "react";
import * as imagesAPI from '../../utilities/images-api'
import * as projectsAPI from '../../utilities/projects-api'
import Image from '../../components/Image/Image'
import ProjectAdd from '../../components/ProjectAdd/ProjectAdd'
import './ImageGrid.css'

export default function ImageGrid() {

    const [images, setImages] = useState([])
    const [projects, setProjects] = useState([])
    const [pop, setPop] = useState(false)
    const [popProject, setPopProject] = useState('')
    const [activeImageId, setActiveImageId] = useState(null)

    async function getData() {
        const getImagesAPI = await imagesAPI.getAll();
        const getProjectsAPI = await projectsAPI.getAll();
        for (let i = 0; i < getImagesAPI.length; i++) {
            if (!getImagesAPI[i].project) {
                getImagesAPI[i].project = { name: null }
            }
        }
        setImages(getImagesAPI)
        setProjects(getProjectsAPI)

    }

    useEffect(function () {
        getData()
    }, [])

    function toggle(imageIdx) {
        if (imageIdx || imageIdx === 0) {
            setPopProject(images[imageIdx].project)
            setActiveImageId(images[imageIdx]._id)
        }
        setPop(!pop)
    }

    async function handleAddProject(projectId) {
        const newImageProject = await imagesAPI.handleAddProject(activeImageId, projectId)
        getData()
        toggle()
    }

    async function removeProject(activeImageId) {
        const removeProject = await imagesAPI.removeProject(activeImageId)
        getData()
        toggle()
    }

    const displayImages = images.map((image, idx) =>
        <span className="img">
            <span className="inner-img">
                <Image key={image._id} toggle={toggle} projectName={image.project.name} imageUrl={image.url} imageIdx={idx} />
            </span>
        </span>
    )

    return (
        <div className="container">
            {pop ? <ProjectAdd key={activeImageId} popProject={popProject} projects={projects} toggle={toggle} handleAddProject={handleAddProject} removeProject={removeProject} activeImageId={activeImageId} /> : null}
            <div className="img-grid">
                {displayImages}
            </div>
        </div>
    );

}