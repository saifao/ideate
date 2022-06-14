import './SearchImage.css'


export default function SearchImage({ imageUrl, title, saveImage }) {

    return (
        <div className="image-container">
            <img className="resize-h resize-w" src={imageUrl} alt="none"></img>
            <div className="image-info">
                <span className="image-info-name">{title}</span>
                <button className="add-image" onClick={() => saveImage(imageUrl)}></button>
            </div>
        </div>
    )
}
