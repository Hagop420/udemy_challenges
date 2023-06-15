let time;
let date=new Date();

// getting time stamp and getting times and dates
time=date.getTime()
time=date.valueOf()
time=date.getFullYear()
time = date.getMonth()
time = date.getDay()
time=date.getHours()
time=date.getMinutes()
time=date.getSeconds()
time = date.getMilliseconds()

     // making the date from templates
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

time = `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} /${date.getMilliseconds()}`
// time=`${monthNames[date.getMonth()]} ${date.getDate ()} ${date.getFullYear()} ${date.getHours()}:0${date.getMinutes()}pm`







// setting the days and mutating

// date.setFullYear(2028)
date.setMonth(09)

// Mutations end

// Date Intl API


// UK time
time = Intl.DateTimeFormat('en-GB').format(date)

// U.S time
time = Intl.DateTimeFormat('en-US').format(date)


// DEFAULT time

time = Intl.DateTimeFormat('default').format(date)

// Get only the month

time = Intl.DateTimeFormat('default', { month: 'long' }).format(date)


time = `It is currently: ${Intl.DateTimeFormat('default', { weekday: 'long' }).format(date)} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} /${date.getMilliseconds()}`



// Shorter way to do Intl.DateTimeFormat('default', { month: 'long' }).format(date)


time = `It is currently: ${date.toLocaleString('default', { weekday: 'long' })} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} /${date.getMilliseconds()}`


// console.log(date.toLocaleString('default', { month: 'short' }));



// console.log(Intl.DateTimeFormat('default', { month: 'short' }).format(date));

// same result
console.log(date.toLocaleString('default', { month: 'short' }));



// API Intl ending


// console.log(time);