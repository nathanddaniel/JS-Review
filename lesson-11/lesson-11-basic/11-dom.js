
const myArray = [10, 20, 30];

console.log(myArray);
console.log(myArray[0]);

myArray[0] = 99;

console.log(myArray[0]);
console.log(myArray.length);

myArray.push(5);
console.log(myArray);

myArray.splice(0, 1);
console.log(myArray);