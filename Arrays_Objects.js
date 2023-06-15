// Creating an array

let x;

const nums = [1, 2, 3, 4, 5]




// methods to access specific nums or indecies in array

x=nums[0]
x=nums[1] + nums[2]
x = `Hi, im adding nums[1] nums[2], so in this case its 2+3 which equals to, ${nums[1] + nums[2]}`

// add on to the end of the array

nums[nums.length] = 'abc'


// array methods
x = nums.push('lollipop')
// push off the last


// x = nums.pop()


// adding to the 0 index
x=nums.unshift('pie')

// reversed entire array elements
x = nums.reverse()



// length property on array


x = nums.length



// changing a number in the array


nums[2] = 2

x = nums



// length not just read only


// nums.length = 2123


// x=nums




x=nums

// old way to make arrays

const str1 = new Array('Apple', 'green', 'orange', 'taco')




// old array logging

// console.log(str1);


// check if array contains this value 

x=nums.includes('lollipop')

console.log(x);

// Creating an object