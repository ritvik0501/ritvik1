function mergeArrays(...arrays) {
    return [].concat(...arrays);
}
let arrays1 = [[1, 2], [3, 4], [5, 6]];
console.log(mergeArrays(...arrays1))