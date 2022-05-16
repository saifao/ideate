import ProjectImage from '../../components/ProjectImage/ProjectImage'

export default function ActiveProjectImages({ images }) {

    const displayImages = images.map(image =>
        <ProjectImage key={image._id} imageUrl={image.url} />
    )

    return (
        <div>
            {displayImages}
        </div>
    );

}

