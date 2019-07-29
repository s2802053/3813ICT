// Task 2
let arr = [0, 1, 2, 3, 4];
console.log(arr);
arr.push(5);
console.log(arr);
arr.unshift(-1);
console.log(arr)
arr.splice(3, 0, 1000);
console.log(arr);
arr.pop();
console.log(arr);
arr.splice(1, 1);
console.log(arr);
arr[4] = 100;
console.log(arr);
arr.sort((a, b) => { return a > b});
console.log(arr);