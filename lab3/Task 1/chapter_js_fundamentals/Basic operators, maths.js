//The postfix and prefix forms
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

//Assignment result
let e = 2;

let x = 1 + (e *= 2);//Output is 5

//Type conversions
"" + 1 + 0 //"10"
"" - 1 + 0//-1
true + false //1
6 / "3"//2
"2" * "3"//6
4 + 5 + "px"//9px
"$" + 4 + 5//9$
"4" - 2//2
"4px" - 2//Nan
"  -9  " + 5// -9 5
"  -9  " - 5//-14
null + 1//1
undefined + 1//Nan
" \t \n" - 2//-2

//Fix the addition
let s = prompt("First number?", 1);
let y = prompt("Second number?", 2);

alert(s + y); // 12
//To fix it before variables in the alert we put +
alert(+s + +y) //3