const random_one=Math.floor(Math.random()*100+1)
const random_two = Math.floor(Math.random() * 50 + 1)

let sum;
let diffrence;
let times;
let quotient;
let modulo;

sum=`${random_one}+${random_two}=${random_one+random_two}`
diffrence=`${random_one}-${random_two}=${random_one-random_two}`
quotient=`${random_one}/${random_two}=${random_one/random_two}`
modulo=`${random_one}%${random_two}=${random_one%random_two}`
// plus
console.log(sum);
// minus
console.log(diffrence);
// quotient
console.log(quotient);
// modulus operator
console.log(modulo);





