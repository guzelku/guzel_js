let num = 266219;
let multi = 1;

while (num>0){
multi=multi*(num%10);
num = Math.floor(num /10 );

}
console.log(multi);

let multi2=multi**3;
console.log(multi2);

multi2=''+multi2;

console.log(typeof(multi2));

console.log(multi2.substring(0,2));