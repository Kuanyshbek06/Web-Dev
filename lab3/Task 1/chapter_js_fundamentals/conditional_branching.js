//if (a string with zero)
if ("0") {
  alert( 'Hello' );
} //Output :true

//The name of JavaScript
let jsname=prompt("What's the official name of JavaScript?"," ");
if(jsname== 'ECMAScript'){
    alert("Right");
}else{
    alert("You don't know? “ECMAScript”!");
}

//Show the sign
let num=prompt("Type a number",'0')
if(num>0){
    alert(1);
}
else if(num<0){
    alert(-1);
}
else{
    alert (0);
}

//Rewrite 'if' into '?'
//Before
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
//After
let result1 = a+b<4 ? "Below" : "Over";

//Rewrite 'if..else' into '?'
//Before
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
//After
let message1 = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
