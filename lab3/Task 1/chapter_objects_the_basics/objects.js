//Hello, object
let user = {};
user.name="Jonh";
user.surname="Smith";
user.name="Pete";
delete user.name;
//Check for emptiness
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
 for (let prop in salaries){
        sum+=salaries[prop];
    }
if(salaries.isEmpty()) return 0;
alert(sum);

//Multiply numeric property values by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};