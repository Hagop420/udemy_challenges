// Creating an array

let x;

const nums = [11, 22, 31, 4, 51]




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
// x = nums.reverse()



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





// concat method and String conversion

x = String(nums.indexOf('lollipop')).concat(0)

// where it's located-indexOf

x = str1.indexOf('Apple')



// array slice and splice methods


// 1.slice

x=str1.slice(4)

// 2.splice


// splicing and chaining on methods
x=nums.splice(6,4).forEach(oop=>console.log(oop))

console.log(x);

// Creating an object