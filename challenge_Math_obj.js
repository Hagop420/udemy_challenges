// const random_one=Math.floor(Math.random()*100+1)
// const random_two = Math.floor(Math.random() * 50 + 1)

// let sum;
// let diffrence;
// let times;
// let quotient;
// let modulo;

// sum=`${random_one}+${random_two}=${random_one+random_two}`
// diffrence=`${random_one}-${random_two}=${random_one-random_two}`
// quotient=`${random_one}/${random_two}=${random_one/random_two}`
// modulo=`${random_one}%${random_two}=${random_one%random_two}`
// // plus
// console.log(sum);
// // minus
// console.log(diffrence);
// // quotient
// console.log(quotient);
// // modulus operator
// console.log(modulo);



// // getting the sums using the Math obj


// const y=Math.random()*100+1
// const z = Math.random() * 7000 + 1


// console.log(`${y} + ${z} = ${y+z}`);
// console.log(`${y} - ${z} = ${y-z}`);
// console.log(`${y} * ${z} = ${y*z}`);
// console.log(`${y} / ${z} = ${y/z}`);
// console.log(`${y} % ${z} = ${y%z}`);



// // Date object


// console.log(new Date());

// const DatE=new Date()
// DatE.setFullYear(2024)
// DatE.setHours(2)
// DatE.setMilliseconds(10)

// console.log(new Date(04-07-22));
// console.log(new Date(04/07/2022));
// console.log(DatE);

// console.log(new Date('04/07/2022 02:30:11'));
// console.log(new Date('2023-01-11'));


// // always use a / not hyphens - for no time zone error


// console.log(new Date('2023-01-11'));

// console.log(new Date('2023/01/11'));


// require stack 
var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  
var server = app.listen(8000, function () {  
  var host = server.address();  
  var port = server.address()
  console.log('Example app listening at http://%s:%s', host, port);  
});  