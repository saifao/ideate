import { useState, useEffect } from "react";
import * as imagesAPI from '../../utilities/images-api'
import Image from '../../components/Image/Image'

export default function ImageGrid() {

    const [images, setImages] = useState([])

    useEffect(function () {
        async function getImages() {
            const getImagesAPI = await imagesAPI.getAll();
            for (let i = 0; i < getImagesAPI.length; i++) {
                if (!getImagesAPI[i].project) {
                    getImagesAPI[i].project = { name: '' }
                    console.log(getImagesAPI[i])
                }
            }
            setImages(getImagesAPI)
        }
        getImages()
    }, [])

    const displayImages = images.map(image =>
        <Image key={image._id} projectName={image.project.name} imageUrl={image.url} />
    )

    return (
        <div>
            {displayImages}
        </div>
    );

}