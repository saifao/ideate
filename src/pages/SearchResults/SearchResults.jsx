import SearchImage from '../../components/SearchImage/SearchImage';
import * as imagesAPI from '../../utilities/images-api'
import { useState } from 'react';
import './SearchResults.css'

export default function SearchResults({ results, submitSearch }) {

    const [page, setPage] = useState(1)

    async function saveImage(imageUrl) {
        const saveImageFromSearch = await imagesAPI.saveImage(imageUrl)
    }

    function handlePrev() {
        if (page !== 1) setPage(page - 1)
        submitSearch(undefined, page)
        console.log(page)

    }

    function handleNext() {
        setPage(page + 1)
        submitSearch(undefined, page)
        console.log(page)
    }

    const displayImages = results.map((image, idx) =>
        <span className="si-img">
            <span className="si-inner-img">
                <SearchImage key={idx} imageUrl={image.url} title={image.title} saveImage={saveImage} />
            </span>
        </span>
    )

    return (
        <div className="si-container">
            <div className="si-img-grid">
                {displayImages}
            </div>
            <br />
            <div>
                <button onClick={() => handlePrev()}>Prev Page</button><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><button onClick={() => handleNext()}>Next Page</button>
            </div>
        </div>

    );
}