' use strict';
let isNumber = function(n)
{

return !isNaN(parseFloat(n)) && isFinite(n)
}

let showTypeOf = function(data){

console.log(data,typeof(data));

};

let budgetDay;
let money;
let income='фриланс';
let addExpenses='интернет, такси, коммуналка';
let deposit=true;
let mission=1500000;
let period=12;


deposit=confirm('Есть ли у вас депозит в банке?');
showTypeOf (deposit);

addExpenses=prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.toLowerCase().split(','));


let start = function(){
do
{
money=+prompt('Ваш месячный доход?');
}
while (!isNumber(money));
}

start();





let expenses=[];
/**Функция возвращает сумму всех обязательных */
let getExpensesMonth = function(){

let sum = 0;

for(let i=0; i<3; i++){
expenses[i] = prompt('Введите обязательнуб статью расходов');

let x=+prompt('Во сколько это обойдется?');

while (!isNumber(x))
{
x=+prompt('Во сколько это обойдется?');
}
sum+=x;

}console.log(expenses);
return sum;
}


/**переменная = сумму всех обязательных */
let expensesAmount =getExpensesMonth();



let getAccumulatedMonth =function (){
return money-expensesAmount;
}


let accumulatedMonth=getAccumulatedMonth();
console.log('Накопления за месяц:',accumulatedMonth);

/*Если getTargetMonth возвращает нам отрицательное значение,
то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута” */

let getTargetMonth =function (){
if (Math.ceil (mission/accumulatedMonth) <0) {console.log('цель не будет достигнута') ; }
else {
console.log('цель будет достигнута за'+' '+Math.ceil (mission/accumulatedMonth)+' '+'месяцев') ;
}
}
getTargetMonth();
