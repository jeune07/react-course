// arrays literals

const numbers = new Array(100); // use that notation when you know the size of your array

const numbers2 = [1, 2, 3, 4, 5]; // use that notation when you don't know the size of your array

// you can use also the spead operator to add more elements to your array without modifying the original array using spush method

let numbers3 = [...numbers2, ...numbers];

console.log(numbers3);

// the map method receives a function as a parameter and returns a new array with the result of the function.
// the map method doesm't modify the original array 

const numbers4 = numbers3.map((elementInsideTheArray) =>{
    return elementInsideTheArray * 2
} );

//This code will give you some NaN values because the array numbers3 has some empty spaces  and the map method will try to multiply those empty spaces by 2 and the result will be NaN
console.log(`this  is result of multiplies each number of the array inside the array ${numbers4}`);