const Image = require('../../models/image')

module.exports = {
    getAll,
    getProjectImages,
    handleAddProject,
    removeProject,
    create,
    deleteImage
}

async function getAll(req, res) {
    const images = await Image.find({}).populate('project').exec()
    res.json(images)
}

async function getProjectImages(req, res) {
    const images = await Image.find({ project: req.params.projectId })
    res.json(images)
}

async function handleAddProject(req, res) {
    const query = { _id: req.body.imageId }
    const images = await Image.findOneAndUpdate(query, { project: req.body.projectId })
    res.json(images)
}

async function removeProject(req, res) {
    const query = { _id: req.body.activeImageId }
    const images = await Image.findOneAndUpdate(query, { project: null })
    res.json(images)
}

async function create(req, res) {
    const newImage = {
        url: req.body.imageUrl
    }

    try {
        await Image.create(newImage)
    } catch (e) {
        console.log("Did not save. Error message: ", e)
    }
}

async function deleteImage(req, res) {
    try {
        await Image.deleteOne({ _id: req.body.activeImageId })
    } catch (e) {
        console.log("Failed to delete image. Error message: ", e)
    }

}