// printing

// console.log("Hello jiii");

// variable declaration
// JS only tells u that it is a variable not its type

// let a;
// a = 40;
// a = 40.4;
// a = "This is a string";
// a = "This is also a string";
// a = null;
// a = true;
// console.log("Variable contains",a);

// Variable Types - Primitive types : Numbers, String, Boolean, null

// if else // loops - for , while, // classes and objects // Arrays 
// JS -- Java, C, CPP

// let num = 10;
// for (let i = 1; i <= num; i++)
// console.log("Number equals",i);

// isprime

let num = 37;

let flag = true;

for(let div = 2; div * div <= num; div++)
{
    if(num % div == 0)
    {
        flag = false;
        break;
    }
}

if(flag)
console.log(num, "is prime");
else
console.log(num, "is not prime");




