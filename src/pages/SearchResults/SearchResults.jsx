import SearchImage from '../../components/SearchImage/SearchImage';
import * as imagesAPI from '../../utilities/images-api'
import './SearchResults.css'

export default function SearchResults({ results }) {

    async function saveImage(imageUrl) {
        const saveImageFromSearch = await imagesAPI.saveImage(imageUrl)
    }

    const displayImages = results.map((image, idx) =>
        <span className="img">
            <span className="inner-img">
                <SearchImage key={idx} imageUrl={image.url} title={image.title} saveImage={saveImage} />
            </span>
        </span>
    )

    return (
        <div className="container">
            <div className="img-grid">
                {displayImages}
            </div>
        </div>

    );
}