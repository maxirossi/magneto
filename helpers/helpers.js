let validateCharactersDNA = function (dna)
{
    let validatChars =  ['A','T','C','G'];
    dna = dna.toUpperCase();
    let isValid = true;
    for ( let x = 0; dna.length > x; x++){
        if (!validatChars.includes(dna[x])){
            isValid = false;
            break;
        }
    }
    return isValid;
}

let isValidDNA = function(dna)
{
    let isValid = true;
    if (!Array.isArray(dna)){
        isValid = false;
    }
    let lengthFirstElement = dna[0].length;
    for (let x = 0; dna.length > x; x++){
        if (!validateCharactersDNA(dna[x])){
            isValid = false;
            break;
        }
        if (dna[x].length !== lengthFirstElement){
            isValid = false;
            break;
        }
    }
    return isValid;
}

let createMatrix = function (dna)
{

}

module.exports = {
    isValidDNA,
}