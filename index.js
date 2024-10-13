// switch case
var day = parseInt(prompt("Enter a number from 1-7:"));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}


// subtraction using functions
function subtract(a, b) {
    return a - b;
}

var result = subtract(10, 4);
console.log("subtract",result);

// adding using functions
function add(a,b,c){
    return a+b+c;
}

var sum=add(10,5,4);
console.log("sum",sum);

// multiplication / function expression
var mul=function(a,b){
    return a*b;
}
var multi= mul(10,10);
console.log("multiplication",multi);

// set timeout
setTimeout(function(){
    console.log("Hey!..Welcome to js");
},5000);

// Arrays
{var currency=['Dollar','Rupee','Euro','Pound','Dirham'];

// print all elements present in the currency and it's length
console.log("length of array",currency.length);
console.log("currencys = ",currency);

// accessing array elements using index value
console.log(currency[2]);
console.log(currency[4]);
console.log(currency[0]);
}
// push and shift
{
var colour=['Red','Green','white','brown'];
// adding element in array
colour.push('Gold')
console.log(colour);
colour.shift()
}
// unshift and pop
{
var cars=['Bugatti','Rolls-Royce','Mercedes'];
cars.unshift('BMW')
console.log(cars);
cars.pop()
}