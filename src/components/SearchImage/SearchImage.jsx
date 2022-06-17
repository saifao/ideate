import { useState, useEffect } from 'react'
import './SearchImage.css'


export default function SearchImage({ imageUrl, title, saveImage, resetIcon }) {

    useEffect(function resetIcons() {
        setSaveIcon("add-image")
    }, [resetIcon])

    const [saveIcon, setSaveIcon] = useState("add-image")

    function handleSaveImage(imageUrl) {
        setSaveIcon("saved-image")
        saveImage(imageUrl)
    }

    return (
        <div className="si-image-container">
            <img className="si-pic si-resize-h si-resize-w" src={imageUrl} alt="none"></img>
            <div className="si-image-info">
                <span className="si-image-info-name">{title}</span>
                <button className={saveIcon} onClick={() => handleSaveImage(imageUrl)}></button>
            </div>
        </div>
    )
}
