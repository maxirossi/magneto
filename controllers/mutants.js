const Response = require('../helpers/response').Response;
const response = new Response();
const helpers = require('../helpers/helpers');
const scanner = require('../helpers/scanner');

/* models */
const stats = require('../models/stats');

function mutant(req, res){
    if (!req.body.dna){
        response.error( req, res, null, null );
    }
    let dna = req.body.dna;
    if (helpers.isValidDNA(dna)){
        let validatChars = ['A','T','C','G'];
        let matches = new Array();
        let matrix = helpers.createMatrix(dna);
        let checkHorizontal = scanner.horizontalScanner(matrix, validatChars);
        let checkVertical = scanner.verticalScanner(matrix, validatChars);
        matches = helpers.addMatch(checkHorizontal, matches);
        matches = helpers.addMatch(checkVertical, matches);
        // check diagonal
        for(let x = 0; x < dna[0].length; x++){
            let result = new Array();
            result = scanner.diagonalScanner(matrix, validatChars, x);
            matches = helpers.addMatch(result, matches);
        }
        if (matches.length >= 2){
            let stat = {
                dna : dna.join(''),
                mutant : true
            }
            stats.add(stat)
                .then((res) => {
                    // [OK]
                })
                .catch((err) => {
                    // [KO]
                });
            response.success( req, res, 'Mutant DNA.', null )
        }else{
            let stat = {
                dna : dna.join(''),
                mutant : false
            }
            stats.add(stat)
                .then((res) => {
                    // [OK]
                })
                .catch((err) => {
                    // [KO]
                });
            response.error( req, res, 'Human DNA.', null , 403)
        }
    }else{
        response.error( req, res, 'Human DNA', null );
    }
    res.end();
}

module.exports = {
    mutant
}