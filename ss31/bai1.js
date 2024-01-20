function findLongestWord(str) {
    let worlds = str.split(' ');
    let maxLength = 0;
    let strLonges = [];
    for(let i=0;i<worlds.length;i++){
        if(worlds[i].length>maxLength){
            maxLength = worlds[i].length;
            strLonges = [worlds[i], maxLength];
        }
    }
    return strLonges;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
