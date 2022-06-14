import ProjectImage from '../../components/ProjectImage/ProjectImage'

export default function ActiveProjectImages({ images }) {

    const displayImages = images.map(image =>
        <span className="img">
            <span className="inner-img">
                <ProjectImage key={image._id} imageUrl={image.url} />
            </span>
        </span>
    )

    return (
        <div className="img-grid">
            {displayImages}
        </div>
    );

}

