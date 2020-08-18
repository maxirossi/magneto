
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
    let rowLength = dna[0].length;
    let matrix = new Array(rowLength);
    for ( i = 0; i < matrix.length; i++){
        matrix[i] = new Array(rowLength);
    }
    let c = 0;
    for (x = 0; x < rowLength; x++){
        let nRow = 0;
        if (nRow < rowLength){
            dna[x].split('').forEach((element, i) => {
                matrix[x][c] = element;
                c == rowLength - 1 ? c = 0 : c++;
            });
        }
    }
    return matrix;
}

let createReverseMatrix = function(dna)
{
    for(x = 0; dna.length > x; x++){
        dna[x] = reverseString(dna[x]);
    }
    let reverseMatrix = createMatrix(dna);
    return reverseMatrix;
}

let reverseString = function(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray;
}

let addMatch = function (results, matches)
{
    results.forEach((result) =>{
        if (!matches.includes(result)){
            matches.push(result);
        }
    });
    return matches;
}

module.exports = {
    isValidDNA,
    createMatrix,
    addMatch,
    createReverseMatrix
}