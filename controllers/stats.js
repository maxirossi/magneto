const Response = require('../helpers/response').Response;
const response = new Response();

/* models */
const mStats = require('../models/stats');

async function stats(req, res){

    let humans = await mStats.get(false);
    let mutants = await mStats.get(true);
    let nMutants = mutants.data.length;
    let nHumans = humans.data.length;
    let stats = {
        count_human_dna : nHumans,
        count_mutant_dna : nMutants,
        ratio : getPercentageRatio(nHumans, nMutants),
   }
   response.success( req, res, null, stats ) ;
}

function getPercentageRatio(humans, mutans){
   let ratio = ((mutans * 100) / humans) / 100;
   return ratio;
}

module.exports = {
    stats
}