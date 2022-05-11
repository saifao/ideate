export default function CreateNewProject({ handleSubmit, newProject, setNewProject }) {

    function handleChange(evt) {
        const newProjectData = { ...newProject, [evt.target.name]: evt.target.value };
        setNewProject(newProjectData);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} required />
            <button type="submit">CREATE</button>
        </form>
    )
}