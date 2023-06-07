function twoSum(arr, target) {
   arr.reduce((acc,curr)=>{
     if(acc+curr===target){
       return true
     }else{
       return false
     }
   })
   }
   
   function twoSumTests() {
     console.log(twoSum([1,2,5,7], 3), ' -> ', true);
     console.log(twoSum([1,2,5,7], 5), ' -> ', false);
     console.log(twoSum([1], 5), ' -> ', false);
     console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
   }
   
   twoSumTests() // uncomment to test







//    9*8*7*6*5*4*3*2
// 362880
// 10*362880
// 3628800
// function op(num){
//     if(num<=1){return 1}
//         //50            // 49
//     return num * op(num - 1)
// }



// const fac5= op(10)


// fac5
// 3628800
// 3628800*2
// 7257600
// function op(num){
//     if(num<=1){return 2}
//         //50            // 49
//     return num * op(num - 1)
// }



// const fac5= op(10)


// fac5
// 7257600
// function op(num){
//         //50            // 49
//     return num * op(num - 1)
// }



// const fac5= op(10)


// fac5
