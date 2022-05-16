import './ProjectImage.css'

// toggle, projectName, imageUrl, imageIdx
export default function ProjectImage({ imageUrl }) {

    return (
        <div>
            <img className="resize-h resize-w" src={imageUrl} alt="none"></img>

        </div>
    )
}