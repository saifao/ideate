import './CreateNewProject.css'

export default function CreateNewProject({ handleSubmit, newProject, setNewProject }) {

    function handleChange(evt) {
        const newProjectData = { ...newProject, [evt.target.name]: evt.target.value };
        setNewProject(newProjectData);

    }

    return (
        <form className='project-form' onSubmit={handleSubmit}>
            <div className='project-entry'>
                <label className='project-label'>Name</label>
                <input className='project-name' type="text" name="name" onChange={handleChange} required />
            </div>
            <button type="submit">CREATE</button>
        </form>
    )
}