const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stats = new Schema({
    dna : String,
    mutant: Boolean,
});

module.exports = {
    stats
}