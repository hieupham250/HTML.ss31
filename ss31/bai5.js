function chunkArrayInGroups(arr, n) {
    let result = [];
    for( let i=0;i<arr.length;i+=n){
        let chunk = arr.slice(i, i+n);
        result.push(chunk);
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [ [“a”, “b”], [“c”, “d”] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3)); // [ [“a”, “b”, “c”], [“d”] ]
