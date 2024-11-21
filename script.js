

// Destructuring assignment is used to unpack values from an array or properties from objects into distinct variables

let arr =[3,5,6,7,2];
let [a,,b,...rest] = arr
console.log(a,b,rest);

//object destructuring
const person = {
    name : "Lily",
    age : 21,
    country : "India"
};
const {name,age,country} = person;
console.log(name);
console.log(age);

//The spread operator (...) in JavaScript is used to expand or spread elements of an iterable (like an array or object) into individual elements or properties

const numbers = [1,2,3];
const copy = [...numbers];
 console.log(copy)

const s1 = [12,13,14];
const s2 = [15,16,17];
 const merged = [...s1,...s2];
console.log(merged);
