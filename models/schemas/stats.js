const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stats = new Schema({
    dna : { type : String , unique : true, required : true, dropDups: true },
    mutant: Boolean,
});

module.exports = {
    stats
}