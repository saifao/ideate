const Project = require('../../models/project')

module.exports = { getAll, create }

async function getAll(req, res) {
    const projects = await Project.find({})
    res.json(projects)
}

async function create(req, res) {
    await Project.create(req.body.newProject)
    const projects = await Project.find({})
    res.json(projects)
}