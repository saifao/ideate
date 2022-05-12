import './Image.css'

export default function Image({ toggle, projectName, imageUrl, imageIdx }) {

    return (
        <div>
            <img src={imageUrl} alt="none"></img>
            <h3>{projectName}</h3>
            <button onClick={() => toggle(imageIdx)}>Click to Toggle</button>
        </div>
    )
}