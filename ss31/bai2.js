function largestOfArrs(...arrs){
    if(arrs.length === 0){
        return [];
    }
    let subArr = [];
    for(let arr of arrs){
        if(arr.length === 0){
            subArr.push(undefined);
        } else {
            let max = Math.max(...arr);
            subArr.push(max);
        }
    }
    return subArr;
}


console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
console.log(largestOfArrs());
