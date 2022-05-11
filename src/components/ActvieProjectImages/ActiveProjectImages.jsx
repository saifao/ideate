import Image from '../../components/Image/Image'

export default function ActiveProjectImages({ images }) {

    const displayImages = images.map(image =>
        <Image key={image._id} imageUrl={image.url} />
    )

    return (
        <div>
            {displayImages}
        </div>
    );

}

