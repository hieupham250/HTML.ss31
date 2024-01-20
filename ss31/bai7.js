function fakeFind(arr, fn) {
    let subArr = [];
    for(let i in arr){
        const result = fn(arr[i]);
        if(result === true){
            subArr.push(arr[i]);
        }
    }
    return console.log(subArr);
}

fakeFind([1,2,3,4], function(e) {
    if(e % 2 === 0) {
    return true;
} else {
    return false;
}
});

fakeFind([1,2,3,4], function(e) {
    if(e % 2 !== 0) {
    return true;
} else {
    return false;
}
});
