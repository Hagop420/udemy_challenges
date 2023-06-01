//Challenge 1 
function modemean(array) {
   // mean calculation
const sum = array.reduce((acc, num) => acc + num, 0);
const mean = Math.floor(sum / array.length);

//  mode calculation
const frequencies = {};
let maxFrequency = 0;
let mode = null;



// comparing mode to mean

array.forEach((num) => {
 frequencies[num] = (frequencies[num] || 0) + 1;
 if (frequencies[num] > maxFrequency) {
   maxFrequency = frequencies[num];
   mode = num;
 }else{
   return true
 }
})
 return mean===mode;


 
}

const numbers = [1,1,2,3,4,33,2,344,56,77,89,8765,5434,45];
const result = modemean(numbers);

console.log(result)