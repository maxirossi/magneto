let validateDNA = function (dna){
    // ATGCGA
    let validatChars =  ['A','T','C','G'];
    dna = dna.toUpperCase();
    let isValid = true;
    for ( x = 0; dna.length > x; x++){
        if (!validatChars.includes(dna[x])){
            isValid = false;
            break;
        }
    }
    return isValid;
}

module.exports = {
    validateDNA
}