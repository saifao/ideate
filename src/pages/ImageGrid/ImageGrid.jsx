import { useState, useEffect } from "react";
import getAll from '../../utilities/images-api'
import Image from '../../components/Image/Image'

export default function ImageGrid() {

    const [images, setImages] = useState([])

    useEffect(function () {
        async function getImages() {
            const getImagesAPI = await getAll();
            setImages(getImagesAPI)
        }
        getImages()
    }, [])

    const displayImages = images.map(image =>
        <Image key={image._id} imageUrl={image.url} />
    )

    return (
        <div>
            {displayImages}
        </div>
    );

}

