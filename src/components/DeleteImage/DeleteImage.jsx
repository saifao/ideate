import './DeleteImage.css'

export default function DeleteImage({ activeImageId, toggleDelImg, deleteImage, getData }) {

    function handleDelete(activeImageId) {
        deleteImage(activeImageId)
        toggleDelImg()
        getData()
    }

    return (
        <div className='delete-modal'>
            <div className='delete-modal-content'>
                <div className='delete-header'>Delete Image?</div>
                <div className='delete' onClick={() => handleDelete(activeImageId)}>Delete</div>
                <div className='delete-quit' onClick={() => toggleDelImg()}>Cancel</div>
            </div>
        </div>
    )
}