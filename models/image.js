const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    url: { type: String, required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

module.exports = mongoose.model('Image', imageSchema)