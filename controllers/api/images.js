const Image = require('../../models/image')
const Project = require('../../models/project')

module.exports = { getAll, getProjectImages }

async function getAll(req, res) {
    const images = await Image.find({}).populate('project').exec()
    res.json(images)
}

async function getProjectImages(req, res) {
    console.log(req.params.projectId)
    const images = await Image.find({ project: req.params.projectId })
    res.json(images)
}