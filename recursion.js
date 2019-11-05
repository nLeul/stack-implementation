function sum(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.pop() + sum(array);
}
let arr = [1, 2, 3, 4];
console.log(sum(arr));


function min(arra) {
    let min = arr[0];
    for (let i = 0; i < arra.length; i++) {
        if (arra[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [1, 2, 3, 4];
console.log(min(arr));