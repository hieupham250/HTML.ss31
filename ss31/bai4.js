function truncate(str , n) {
    if(str.length > n){
        return str.substring(0, n) + "...";
    } else {
        return str;
    }
}

let result = truncate("Hello world, I’m Peter", 11);
console.log(result);