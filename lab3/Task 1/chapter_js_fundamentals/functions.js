//Is "else" required?
//The following function returns true if the parameter age is greater than 18.

//Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
//Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
//Is there any difference in the behavior of these two variants?
//Answer:In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

//Rewrite the function using '?' or '||'
//Before
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
//After
function checkAge(age){
    age > 18? true : confirm('Did parents allow you?');
}

//Function min(a, b)
function min(a,b){
    if(a>b) return b;
    else return a;  
}

//Function pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = +prompt("x?", '');
let n = +prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}