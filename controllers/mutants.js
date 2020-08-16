const Response = require('../helpers/response').Response;
const response = new Response();
const helpers = require('../helpers/helpers');

function mutant(req, res){
    if (!req.body.dna){
        response.error( req, res, null, null );
    }
    let dna = req.body.dna;
    if (helpers.isValidDNA(dna)){
        response.success( req, res, 'DNA valid.', null );
    }else{
        response.error( req, res, 'DNA invalid.', null );
    }
    res.end();
}

module.exports = {
    mutant
}