const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    sortOrder: Number
});

module.exports = mongoose.model('Project', projectSchema);
