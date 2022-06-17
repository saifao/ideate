import SearchImage from '../../components/SearchImage/SearchImage';
import * as imagesAPI from '../../utilities/images-api'
import { useState } from 'react';
import './SearchResults.css'

export default function SearchResults({ results, submitSearch }) {

    const [page, setPage] = useState(1)
    const [resetIcon, setResetIcon] = useState(true)

    async function saveImage(imageUrl) {
        const saveImageFromSearch = await imagesAPI.saveImage(imageUrl)
    }

    function handlePrev() {
        if (page !== 1) setPage(page - 1)
        submitSearch(undefined, page)
        setResetIcon(!resetIcon)
        document.documentElement.scrollTop = 0;

    }

    function handleNext() {
        setPage(page + 1)
        submitSearch(undefined, page)
        setResetIcon(!resetIcon)
        document.documentElement.scrollTop = 0;
    }

    const displayImages = results.map((image, idx) =>
        <span className="si-img">
            <span className="si-inner-img">
                <SearchImage key={idx} imageUrl={image.url} title={image.title} saveImage={saveImage} resetIcon={resetIcon} />
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
                <button onClick={() => handlePrev()}>Load Previous 12 Results</button><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><button onClick={() => handleNext()}>Load Next 12 Results</button>
            </div>
        </div>

    );
}