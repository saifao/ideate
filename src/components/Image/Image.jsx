import './Image.css'

export default function Image({ toggle, toggleDelImg, projectName, imageUrl, imageIdx }) {

    return (
        <div className="image-container">
            <img className="resize-h resize-w" src={imageUrl} alt="none"></img>
            <div className="image-info">
                <span className="image-info-name">{projectName}</span>
                <span>
                    <button className="add-project" onClick={() => toggle(imageIdx)}></button>
                    <button className="delete-image" onClick={() => toggleDelImg(imageIdx)}></button>
                </span>
            </div>
        </div>
    )
}