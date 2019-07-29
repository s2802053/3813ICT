// declarative
function multiplyNums(x, y, z){
    return "new number is " + x * y * z;
}
console.log(multiplyNums(2, 3, 4));

// expression
let expressionMultiplyNums = function(x, y, z){
    return "new number is " + x * y * z;
}
console.log(expressionMultiplyNums(2, 3, 4));

// arrow syntax
let arrowMultiplyNums = (x, y, z) => "new number is " + x * y * z;
console.log(arrowMultiplyNums(2, 3, 4));