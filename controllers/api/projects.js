const Project = require('../../models/project')

module.exports = { getAll }

async function getAll(req, res) {
    const projects = await Project.find({})
    res.json(projects)
}