const Image = require('../../models/image')

module.exports = { getAll, getProjectImages, handleAddProject, removeProject }

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