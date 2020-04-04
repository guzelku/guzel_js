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
while (!isNumber( money));
}

start();

let expenses=[];

let getExpensesMonth = function(){

let sum = 0;

for(let i=0; i<2; i++){
    expenses[i] = prompt('Введите обязательнуб статью расходов');
   
  let  x=prompt('Во сколько это обойдется?');
  while (!isNumber(x))
  {
  x= prompt('Во сколько это обойдется?')
  }
   sum+=x;
   
}console.log(expenses);
    return sum;
}



let expensesAmount =getExpensesMonth();


let getAccumulatedMonth =function (){
return money-expensesAmount;
}
let accumulatedMonth=getAccumulatedMonth();
console.log('Накопления за месяц:',accumulatedMonth);

let getTargetMonth =function (){
if (Math.ceil (mission/accumulatedMonth) <0) {console.log('цель не будет достигнута') ; }
else {
console.log('цель будет достигнута за'+' '+Math.ceil (mission/accumulatedMonth)+' '+'месяцев') ;
}
}
getTargetMonth();



budgetDay = accumulatedMonth/30;
console.log('бюджет на день '+' '+Math.floor(budgetDay));

let getStatusIncome = function() {
if(budgetDay>1200){return ('У вас высокий уровень дохода');}
else
if(budgetDay>600 && budgetDay<=1200)
{return ('У вас средний уровень дохода');}
else
if(budgetDay>0 && budgetDay<=600)
{return ('К сожалению у вас уровень дохода ниже среднего');}
else
{return ('Что то пошло не так');}
}

console.log(getStatusIncome());
