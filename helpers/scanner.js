
function horizontalScanner(dna, chars, n = 4)
{
    let length = dna[0].length;
    let charsMatch = [];
    for (i = 0; i < length; i++){
        line = dna[i].join('');
        let search = new Array();
        for (x = 0; x < chars.length; x++){
            let chain = chars[x] + chars[x] + chars[x] + chars[x];
            search[x] = chain;
            if (sarchMatch(line, chain, n-1, chars[x])){
                if (charsMatch.indexOf(chars[x]) == -1){
                    charsMatch.push(chars[x]);
                }
            }
        }
    }
    return charsMatch;
}


function verticalScanner(dna, chars, n = 4)
{
    let line = '';
    let length = dna[0].length;
    let charsMatch = [];
    let search = new Array();
    for (i = 0; i < length; i++){
        for (j = 0; j < length; j++){
            if ( j < length ){
                line += dna[j][i];
                if (line.length == length){
                    // evaluate
                    for (x = 0; x < chars.length; x++){
                        let chain = chars[x] + chars[x] + chars[x] + chars[x];
                        search[x] = chain;
                        if (sarchMatch(line, chain, n-1, chars[x])){
                            if (charsMatch.indexOf(chars[x]) == -1){
                                charsMatch.push(chars[x]);
                            }
                        }
                    }
                    line = '';
                }
            }
        }
    }
    return charsMatch;
}

function sarchMatch(dnaPart, chain, n, char )
{
    if (dnaPart.search(chain) !== -1){
        let prevChar = dnaPart[dnaPart.search(chain) - 1];
        let nextChar = dnaPart[dnaPart.search(chain) + (n+1)];
        if (prevChar !== char && nextChar !== char){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function diagonalScanner(dna, chars, n = 4, start = 0)
{
    let line = '';
    let length = dna[0].length;
    let charsMatch = [];
    let search = new Array();
    for (i = 0; i < dna.length; i++){
        if (i == 0 ){
            for (let j = 0; j < dna.length; j++){
                if (dna[j][j+start] === undefined && line !== ''){
                    // evaluate
                    for (let x = 0; x < chars.length; x++){
                        let chain = chars[x] + chars[x] + chars[x] + chars[x];
                        search[x] = chain;
                        if (sarchMatch(line, chain, n-1, chars[x])){
                            if (charsMatch.indexOf(chars[x]) == -1){
                                charsMatch.push(chars[x]);
                            }
                        }
                    }
                    line = '';
                }
                if (dna[j][j+start] !== undefined){
                    line += dna[j][j+start];
                }
            }
        }else{
            let c = i;
            for(let j = 0; j < dna.length; j++){
                if (dna[c] == undefined){
                    // evaluate
                    for (let x = 0; x < chars.length; x++){
                        let chain = chars[x] + chars[x] + chars[x] + chars[x];
                        search[x] = chain;
                        if (sarchMatch(line, chain, n-1, chars[x])){
                            if (charsMatch.indexOf(chars[x]) == -1){
                                charsMatch.push(chars[x]);
                            }
                        }
                    }
                    line = '';
                    break;
                }else{
                   if (dna[c][j+start] !== undefined){
                       line += dna[c][j+start];
                   }
                }
                c++;
            }
        }
    }
    return charsMatch;
}

module.exports =  {
    horizontalScanner,
    verticalScanner,
    diagonalScanner
}