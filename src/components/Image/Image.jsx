import './Image.css'
import { useState } from 'react'
import ProjectAdd from '../ProjectAdd/ProjectAdd'

export default function Image({ projectName, imageUrl }) {

    const [pop, setPop] = useState(false)

    function toggle() {
        setPop(!pop)
    }

    return (
        <div>
            <img src={imageUrl} alt="none" onClick={toggle}></img>
            {pop ? <ProjectAdd toggle={toggle} /> : null}
            <h3>{projectName}</h3>
        </div>
    )
}