// Task 3
let json = {
    people: [
        { first: 'steve', last: 'smith' },
        { first: 'pete', last: 'jones' },
        { first: 'jim', last: 'thompson' }
    ]
};

console.log(json);
console.log("\n");
json = JSON.stringify(json);
console.log("Stringified:")
console.log(json + "\n");
json = JSON.parse(json);
console.log("Parsed:")
console.log(json);