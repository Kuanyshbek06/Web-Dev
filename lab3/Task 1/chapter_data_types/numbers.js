//Sum numbers from the visitor
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );
//Why 6.35.toFixed(1) == 6.3?
alert( Math.round(6.35 * 10) / 10 );
//Repeat until the input is a number
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);
//An occasional infinite loop
let i = 0;
while (i != 10) {
  i += 0.2;
}//That’s because i would never equal 10.


