' use strict';
let isNumber = function(n){

return !isNaN(parseFloat(n)) && isFinite(n);
};





let money;
let start = function(){
    do
    {
    money=prompt('Ваш месячный доход?',50000);
    }
    while (!isNumber( money));
    };
    
    start();



let appData ={

    income:{},//все доходы
    addIncome:[],//дополнительные доходы
    expenses:{},// расходы
    addExpenses:[],//возможные расходы
    deposit:false,
    percentDeposit:0,
    moneyDeposit:0,
    mission:50000,
    period:3,
    budget:money,
  
    budgetDay:0,
    budgetMonth:0, 
    expensesMonth:0, 





    asking: function(){
/*наименование дополнительного источника заработка текст
сумма дополнительного заработка цифра*/

      if(confirm('есть ли у Вас доп заработок')){
       let  itemIncome= prompt('Какой у Вас дополнительный заработок', 'таксую');
       while (isNumber(itemIncome) ||  itemIncome === null )
       {
        itemIncome=prompt('Какой у Вас дополнительный заработок', 'введите текст');
        }
      
      
        let cachIncome= prompt('Сколько на этом зарабатываете', 5000);
        while (!isNumber(cachIncome))
       {
        cachIncome= prompt('Сколько на этом зарабатываете', 5000);
        }

       appData.income[itemIncome]=cachIncome;
      }




      let    addExpenses= prompt('Перечислите  возможные расходы через запятую:','интернет, такси, коммуналка');
           
       
      appData.addExpenses=addExpenses.split(',');

      console.log(addExpenses.substring(0).toUpperCase());


      
             appData.deposit=confirm('есть ли у Вас депозит в банке');
                
             let sum = 0, question;

              for(let i=0; i<2; i++){
/* валидация ввод статьи обязательных расходов текст*/
                let  exp = prompt('Введите обязательнуб статью расходов', 'школа');
               
                while (isNumber(exp) || exp === null )
                {
                  exp=prompt('Введите обязательнуб статью расходов', 'введите текст');
                 }
               

                  question=prompt('Во сколько это обойдется?',2000);
                                                 
                 while (!isNumber(question))
                {
                  question=prompt('Во сколько это обойдется?');
                 }
               
                appData.expenses[exp]=+question; 
               }
               
              },
                getExpensesMonth:function(){
                  for(let key in appData.expenses ){
                    console.log ( 'расходы:  '+ appData.expenses[key]);//вывод расходов
                      
                    appData.expensesMonth += +appData.expenses[key] ;// суммируем расходы
                    }
                     console.log('расходы за месяц :'+ appData.expensesMonth);
                    },
                                      
                getBudget:function(){

                  appData.budgetMonth=appData.budget-appData.expensesMonth;//Накопления за месяц 
                  appData.budgetDay = Math.floor(appData.budgetMonth/30);//бюджет на день накопления
                  },

                /**достижение цели */
                getTargetMonth:function(){
                if (appData.mission/appData.budgetMonth <0) {console.log('цель не будет достигнута') ; }
                else {
                console.log('цель будет достигнута за'+' '+Math.ceil (appData.mission/appData.budgetMonth)+' '+'месяцев') ;
                }
                },

                /** уровень дохода*/
                getStatusIncome: function() {
                    if(appData.budgetDay>1200){return ('У вас высокий уровень дохода');}
                    else
                    if(appData.budgetDay>600 && appData.budgetDay<=1200)
                    {return ('У вас средний уровень дохода');}
                    else
                    if(appData.budgetDay>0 && appData.budgetDay<=600)
                    {return ('К сожалению у вас уровень дохода ниже среднего');}
                    else
                    {return ('Что то пошло не так');}
                    },

                     /* депозит в банке*/
 /*-валидация годовой процент депозита цифра?
   - валидация сумма депозита  цифра */                    
                getInfoDeposit: function(){
                  if(appData.deposit){
                  appData.percentDeposit = prompt('Какой процент депозита', 10);
                  while (!isNumber(appData.percentDeposit))
                  {
                    appData.percentDeposit=prompt('Какой процент депозита');
                   }

                  appData.moneyDeposit = prompt('Сколько денег в депозите', 1000);
                  while (!isNumber(appData.moneyDeposit))
                  {
                    appData.moneyDeposit=prompt('Сколько денег в депозите');
                   }
                  }
                },

                calsSavedMoney: function(){
                  return appData.budgetMonth * appData.period;
                }

              
             
        };


appData.asking();
console.log(appData.expenses);

appData.getExpensesMonth();
appData.getBudget(); 
 
appData.getTargetMonth();
console.log(appData.getStatusIncome());

 console.log ('Наша программа включает в себя: ');//

/*for(let key in appData ){
   
    console.log ( key + ': '+ appData[key]);//
    }*/

  