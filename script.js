' use strict';

let money=50000; 
let income='фриланс'; 
let addExpenses='интернет, такси, коммуналка'; 
let deposit=true; 
let mission=1500000; 
let period=12;

/*let  budgetDay;
budgetDay=money/30;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен'+' '+ period +' ' +'месяцев');
console.log('Цель заработать'+' '+ mission +' ' +'рублей');
console.log(budgetDay);
console.log(addExpenses.length);
console.log(addExpenses.toLocaleLowerCase());
console.log(addExpenses.split(', '));*/

money=+prompt('Ваш месячный доход?');
console.log(money);

deposit=confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

addExpenses=prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

let expenses1=prompt('Введите обязательную статью расходов?');
let expenses2=prompt('Введите обязательную статью расходов?');
let amount1=+prompt('Во сколько это обойдется?');
let amount2=+prompt('Во сколько это обойдется?');
console.log(expenses1);
console.log(expenses2);
console.log(amount1);
console.log(amount2);

let addExpenses2=parseInt(addExpenses);
console.log(addExpenses2);

let budgetMonth=money-amount1-amount2;
console.log('бюджет на месяц'+' '+budgetMonth);

let month=mission/budgetMonth;
console.log('цель будет достигнута за'+' '+Math.ceil(month)+' '+'месяцев');//Округление в большую сторону

let  budgetDay=budgetMonth/30;
console.log('бюджет на день '+' '+Math.floor(budgetDay));//Округление в меньшуюs

if(budgetDay>1200){console.log('У вас высокий уровень дохода');}
else if(budgetDay>600 && budgetDay<1200){console.log('У вас средний уровень дохода');}
else if(budgetDay>0 && budgetDay<600){console.log('К сожалению у вас уровень дохода ниже среднего');}
else {console.log('Что то пошло не так');}
