' use strict';
let isNumber = function(n)
{

return !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
let start = function(){
    do
    {
    money=prompt('Ваш месячный доход?',50000);
    }
    while (!isNumber( money));
    }
    
    start();



let appData ={

    income:{},//все доходы
    addIncome:[],//дополнительные доходы
    expenses:{},// расходы
    addExpenses:[],//возможные расходы
    deposit:false,
    mission:50000,
    period:3,
    budget:money,
  
    budgetDay:0,
    budgetMonth:0, 
    expensesMonth:0, 





    asking: function(){
      let    addExpenses= prompt('Перечислите  возможные расходы','  через запятую: интернет, такси, коммуналка');
            appData.addExpenses=addExpenses.toLowerCase().split(',');
      
             appData.deposit=confirm('есть ли у Вас депозит в банке');
                    
                   
             let sum = 0, question;

              for(let i=0; i<2; i++){

                  exp = prompt('Введите обязательнуб статью расходов', 'школа');
                 
                  question=prompt('Во сколько это обойдется?',2000);
                 
                  appData.expenses.exp=question; 
                  
                 //console.log(exp+': ' + appData.expenses.exp);
                                  
                 while (!isNumber(question))
                {
                  question=+prompt('Во сколько это обойдется?')
                }


                for(let key in appData.expenses ){
                console.log ( exp + ': '+ appData.expenses[key]);//вывод расходов
                  
                appData.expensesMonth += +appData.expenses[key] ;// суммируем расходы
                }
                
                }
                 
                console.log('расходы за месяц :'+ appData.expensesMonth);//вывод  суммы расходов

                appData.getBudget=function(){

                    appData.budgetMonth=appData.budget-appData.expensesMonth;//Накопления за месяц 
    
                   // console.log('Накопления за месяц '+' '+appData.budgetMonth);

                    appData.budgetDay = appData.budgetMonth/30;//бюджет на день накопления
    
               // console.log('бюджет на день '+' '+Math.floor(appData.budgetDay));
    
                    }
                    appData.getBudget(); 
                    
                   

                }
                         
             
        }


appData.asking();






/**Достижение цели миссия/накопления  если<>0 */

appData.getTargetMonth=function(){
if (Math.ceil (appData.mission/appData.budgetMonth) <0) {console.log('цель не будет достигнута') ; }
else {
console.log('цель будет достигнута за'+' '+Math.ceil (appData.mission/appData.budgetMonth)+' '+'месяцев') ;
}
}
 
appData.getTargetMonth();



/** уровень дохода*/
appData.getStatusIncome = function() {
if(appData.budgetDay>1200){return ('У вас высокий уровень дохода');}
else
if(appData.budgetDay>600 && appData.budgetDay<=1200)
{return ('У вас средний уровень дохода');}
else
if(appData.budgetDay>0 && appData.budgetDay<=600)
{return ('К сожалению у вас уровень дохода ниже среднего');}
else
{return ('Что то пошло не так');}
}

console.log(appData.getStatusIncome());