' use strict';
         
    let money=50000;
    let income='фриланс';
    let addExpenses='интернет, такси, коммуналка';
    let deposit=true;
    let mission=1500000;
    let period=12;
    let budgetDay;
    
    
    let showTypeOf = function(data){
                console.log(data,typeof(data));
                };
    
    money=+prompt('Ваш месячный доход?');
    showTypeOf (money)
    
    deposit=confirm('Есть ли у вас депозит в банке?');
    
    showTypeOf (deposit);
    
    addExpenses=prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    showTypeOf (addExpenses);
    
    let expenses1=prompt('Введите обязательную статью расходов?');
    let expenses2=prompt('Введите обязательную статью расходов?');
    let amount1=+prompt('Во сколько это обойдется?');
    let amount2=+prompt('Во сколько это обойдется?');
    
    console.log(expenses1);
    console.log(expenses2);
    console.log(amount1);
    console.log(amount2);
    
    
    
    
    let getExpensesMonth = function(amount1,amount2){
    return ('сумма всех обязательных расходов за месяц '+(amount1+amount2));
    }
    console.log( getExpensesMonth(amount1,amount2));
    
    
    let getAccumulatedMonth =function (money,amount1,amount2){
    return money-amount1-amount2;
    }
    let accumulatedMonth=getAccumulatedMonth(money,amount1,amount2);
    console.log('Накопления за месяц:',accumulatedMonth);
    
    
    let getTargetMonth =function (){
    return Math.ceil (mission/accumulatedMonth);
    }
    console.log('цель будет достигнута за'+' '+getTargetMonth()+' '+'месяцев') ;
    
    
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

