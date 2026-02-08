//Last loop value
let i = 3;

while (i) {
  alert( i-- );
}//3 2 1 

//Which values does the while loop show?
   //1.The prefix form ++i:
   let y = 0;
   while (++y < 5) alert( y );// 1 2 3 4 
   //2.The postfix form i++:
   let x = 0;
   while (x++ < 5) alert( x ); // 1 2 3 4 5

//Output even numbers in the loop
for(i=0;i<10;i++){
    if(i % 2 == 0){
        alert(i);
    }
}
//Replace "for" with "while"
let d = 0;
while(d<3){
    alert( `number ${d}!` );
    d++;
}

//Repeat until the input is correct
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//Output prime numbers
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); // 
}