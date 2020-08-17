const mongoose = require('mongoose');
var db = require('../includes/db');
db.connect( mongoose, 'main' );

/* schemas */

const schema = require('./schemas/stats').stats;
var stats = mongoose.model('stats', schema);

function add(data){
    return new Promise((resolve, reject) => {
        let stat = new stats(data);
        stat.save((err) => {
            if (err){ 
                reject({
                    "success" : false,
                    "data" : {},
                });
            }else{
                resolve({
                    "success" : true,
                    "data" : {
                        "id" : stat._id
                    },
                });
            }
            return;
        });
    });
}

async function get( isMutant ){
    return new Promise((resolve, reject) => {
        stats.find({ 
            "mutant" : isMutant,
        })
        .then((docs) => {
            resolve({
                "data" : docs
            });
            return;
        }).catch((err) => {
            reject({
                "error" : err
            });
            return;
        });
    });
}

module.exports = {
    add,
    get
}
