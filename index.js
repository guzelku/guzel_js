'use strict';
let start=document.getElementById('start');
let btnPlus=document.getElementsByTagName('button');
let incomePlus=btnPlus[0];
let expensesPlus=btnPlus[1];
let depositCheck=document.querySelector('#deposit-check');
let additionalIncomeItem=document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeItems = document.querySelectorAll('.income-items');
let expensesItems = document.querySelectorAll('.expenses-items');
let expensesTitle = document.querySelector('items .expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');



let isNumber = function(n){

   return !isNaN(parseFloat(n)) && isFinite(n);
   };
   
let appData ={
   
       income:{},//все доходы
       incomeMonth:0,
       addIncome:[],//дополнительные доходы
       expenses:{},// расходы
       addExpenses:[],//возможные расходы
       deposit:false,
       percentDeposit:0,
       moneyDeposit:0,
       budget:0,
       budgetDay:0,
       budgetMonth:0, 
       expensesMonth:0, 
       target1:0,
   
     
         start: function(){
           
         appData.budget= +salaryAmount.value;
        
          
         appData.getExpenses();
         appData.getIncome();
          appData.getExpensesMonth();
       
         appData.getAddExpenses();
         appData.getAddIncome();
         appData.getBudget();
         appData.addBlocking();

         appData.showResult();
        },

        showResult: function(){
       
         budgetMonthValue.value = appData.budgetMonth;
         budgetDayValue.value = appData.budgetDay;
         expensesMonthValue.value = appData.expensesMonth;
         additionalExpensesValue.value = appData.addExpenses.join(', ');
         additionalIncomeValue.value = appData.addIncome.join(', ');
         targetMonthValue.value = Math.ceil(appData.getTargetMonth());
         incomePeriodValue.value = appData.calsSavedMoney();

         
         periodSelect.addEventListener('input',appData.addPeriod2);

        
          },
      

   addIncomeBlock: function(){
     
                     //console.log(incomeItems.parentNode);

                     let cloneIncomeItem=incomeItems[0].cloneNode(true);
                     
                     incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
                     incomeItems = document.querySelectorAll('.income-items');
                     
                     if(incomeItems.length ===3){
                        incomePlus.style.display='none';
                     }
                        },



   addExpensesBlock: function(){
     
                    // console.log(expensesItems.parentNode);
                     let cloneExpensesItem=expensesItems[0].cloneNode(true);
                     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
                     expensesItems = document.querySelectorAll('.expenses-items');

                     if(expensesItems.length ===3){
                        expensesPlus.style.display='none';
                     }
                        },

   addPeriod : function(){
   
                        periodAmount.innerHTML=periodSelect.value;
                        },
                        
   addPeriod2 : function(){
   
                           incomePeriodValue.value=appData.budgetMonth * periodSelect.value;

                      },


addBlocking: function(){
   if(salaryAmount.value ===''){

      start.setAttribute('disabled', 'true');
   }
   else 
   {
      start.removeAttribute('disabled');
   }
 },



   getExpenses: function(){
      expensesItems.forEach(function(item){
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;

         if(itemExpenses !=='' && cashExpenses !=='' ){
            appData.expenses[itemExpenses]=cashExpenses;
         }
      }
      )
   } , 
   
   getIncome: function(){
      incomeItems.forEach(function(item){
         let itemIncome = item.querySelector('.income-title').value;
         let cashIncome = item.querySelector('.income-amount').value;

         if (itemIncome !=='' && cashIncome !=='' ){
            appData.income[itemIncome]=cashIncome;
         }
      })

      for(let key in appData.income){
         appData.incomeMonth+=+appData.income[key];
      }

   } , 
   
  
                   getAddExpenses: function(){
                  let    addExpenses=additionalExpensesItem.value.split(',');

                  addExpenses.forEach(function(item){
                     item = item.trim();
                     if(item !==''){
                     appData.addExpenses.push(item);
                  } }
                  ) 
                      },

                   getAddIncome: function(){

                     additionalIncomeItem.forEach(function(item){
                    let    itemValue = item.value.trim();
                        if(item !==''){
                           appData.addIncome.push(itemValue);
                        }  }
                     )
                   },


                   getExpensesMonth:function(){
                     for(let key in appData.expenses ){
                       console.log ( 'расходы:  '+ appData.expenses[key]);//вывод расходов
                         
                       appData.expensesMonth += +appData.expenses[key] ;// суммируем расходы
                       }
                        console.log('расходы за месяц :'+ appData.expensesMonth);
                       },
                                         
                   getBudget:function(){
   
                     appData.budgetMonth=appData.budget + appData.incomeMonth-appData.expensesMonth;//Накопления за месяц 
                     appData.budgetDay = Math.floor(appData.budgetMonth/30);//бюджет на день накопления
                     },
   
                   /**достижение цели */
                   getTargetMonth:function(){
                      return targetAmount.value/appData.budgetMonth;
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
                     return appData.budgetMonth * periodSelect.value;
                   }
           
};

salaryAmount.addEventListener('input', appData.addBlocking);


start.addEventListener('click', appData.start );

incomePlus.addEventListener('click', appData.addIncomeBlock);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

periodSelect.addEventListener('input',appData.addPeriod);

  
   //appData.getTargetMonth();
 //  console.log(appData.getStatusIncome());