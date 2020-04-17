'use strict';
let start=document.getElementById('start'),
 btnPlus=document.getElementsByTagName('button'),
 incomePlus=btnPlus[0],
 expensesPlus=btnPlus[1],
 depositCheck=document.querySelector('#deposit-check'),
 additionalIncomeItem=document.querySelectorAll('.additional_income-item'),
 budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
 budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
 expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
 additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
 additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
 incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
 targetMonthValue = document.getElementsByClassName('target_month-value')[0],
 salaryAmount = document.querySelector('.salary-amount'),
 incomeTitle = document.querySelector('.income-title'),
 incomeItems = document.querySelectorAll('.income-items'),
 expensesItems = document.querySelectorAll('.expenses-items'),
 expensesTitle = document.querySelector('items .expenses-title'),
 expensesAmount = document.querySelector('.expenses-amount'),
 additionalExpensesItem = document.querySelector('.additional_expenses-item'),
 periodSelect = document.querySelector('.period-select'),
 periodAmount = document.querySelector('.period-amount'),
 targetAmount = document.querySelector('.target-amount'),
 incomeItem = document.querySelectorAll('.income-items'),

 start1 = document.querySelector('#start'),
 cancel = document.querySelector('#cancel'),
 inputText =document.querySelectorAll('input[type=text]');


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
        this.budget= +salaryAmount.value;
                 
         this.getExpenses();
         this.getIncome();
         this.getExpensesMonth();
       
         this.getAddExpenses();
         this.getAddIncome();
         this.getBudget();
         this.addBlocking();
         
         this.addCancel();

         this.showResult();
        },

        showResult: function(){
       
         budgetMonthValue.value = this.budgetMonth;
         budgetDayValue.value = this.budgetDay;
         expensesMonthValue.value = this.expensesMonth;
         additionalExpensesValue.value = this.addExpenses.join(', ');
         additionalIncomeValue.value = this.addIncome.join(', ');
         targetMonthValue.value = Math.ceil(this.getTargetMonth());
         incomePeriodValue.value = this.calsSavedMoney();

         
         periodSelect.addEventListener('input',this.addPeriod2);

        
          },

reset:function(){

   this.addCancel2();
   this.addBlocking();
   periodSelect.value=1;
   periodAmount.textContent=1;

   incomePlus.style.display='initial';
   expensesPlus.style.display='initial';
   document.querySelectorAll('.clone').forEach(function(item){item.remove();});
   document.getElementById('deposit-check').checked = false;

   
},



addIncomeBlock2: function(){
     
   //console.log(incomeItems.parentNode);

   let cloneIncomeItem2=incomeItems[0].cloneNode(true);
   
   incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
   incomeItems = document.querySelectorAll('.income-items');
   let throwawayNode = node.parentNode.removeChild(cloneIncomeItem2);
   incomePlus.style.display='block';
      },








      

   addIncomeBlock: function(){
     
                     //console.log(incomeItems.parentNode);

                     let cloneIncomeItem=incomeItems[0].cloneNode(true);
                     cloneIncomeItem.classList.add('clone');
                     incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
                     
                     incomeItems = document.querySelectorAll('.income-items');
                    

                     
                     if(incomeItems.length ===3){
                        incomePlus.style.display='none';
                         
                     }
                        },




                        

   addExpensesBlock: function(){
     
                    // console.log(expensesItems.parentNode);
                     let cloneExpensesItem=expensesItems[0].cloneNode(true);
                     cloneExpensesItem.classList.add('clone');
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

      start.setAttribute('disabled', true);
   }
   else 
   {
      start.removeAttribute('disabled');
   }
 },



 addCancel : function(){
   
   start1.style.display='none';
   cancel.style.display='block';
   let inputText2=document.querySelectorAll('input[type=text]');
         inputText2.forEach(function(item){
         item.setAttribute('disabled', 'true');
      });

   },


addCancel2 : function(){
   
   start1.style.display='block';
   cancel.style.display='none';


         inputText.forEach(function(item){
            item.value='';
            item.removeAttribute('disabled');
      });
   
   

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

      for(let key in this.income){
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


                   getExpensesMonth: function(){
                     for(let key in this.expenses ){
                       console.log ( 'расходы:  '+ this.expenses[key]);//вывод расходов
                         
                       this.expensesMonth += +this.expenses[key] ;// суммируем расходы
                       }
                        console.log('расходы за месяц :'+ this.expensesMonth);
                       },
                                         
                   getBudget: function(){
   
                     this.budgetMonth=this.budget + this.incomeMonth-this.expensesMonth;//Накопления за месяц 
                     this.budgetDay = Math.floor(this.budgetMonth/30);//бюджет на день накопления
                     },
   
                   /**достижение цели */
                   getTargetMonth:function(){
                      return targetAmount.value/this.budgetMonth;
                   if (this.mission/this.budgetMonth <0) {console.log('цель не будет достигнута') ; }
                   else {
                   console.log('цель будет достигнута за'+' '+Math.ceil (this.mission/this.budgetMonth)+' '+'месяцев') ;
                   }
                   },
   
                   /** уровень дохода*/
                   getStatusIncome: function() {
                       if(this.budgetDay>1200){return ('У вас высокий уровень дохода');}
                       else
                       if(this.budgetDay>600 && this.budgetDay<=1200)
                       {return ('У вас средний уровень дохода');}
                       else
                       if(this.budgetDay>0 && this.budgetDay<=600)
                       {return ('К сожалению у вас уровень дохода ниже среднего');}
                       else
                       {return ('Что то пошло не так');}
                       },
   
                        /* депозит в банке*/
    /*-валидация годовой процент депозита цифра?
      - валидация сумма депозита  цифра */                    
                   getInfoDeposit: function(){
                     if(this.deposit){
                        this.percentDeposit = prompt('Какой процент депозита', 10);
                     while (!isNumber(this.percentDeposit))
                     {
                        this.percentDeposit=prompt('Какой процент депозита');
                      }
   
                      this.moneyDeposit = prompt('Сколько денег в депозите', 1000);
                     while (!isNumber(this.moneyDeposit))
                     {
                        this.moneyDeposit=prompt('Сколько денег в депозите');
                      }
                     }
                   },
   
                  calsSavedMoney: function(){
                     return this.budgetMonth * periodSelect.value;
                   }
           
};

salaryAmount.addEventListener('input', appData.addBlocking);


window.addEventListener("load", appData.addBlocking);

start.addEventListener('click', appData.start.bind (appData) );
cancel.addEventListener('click', appData.reset.bind (appData) );


incomePlus.addEventListener('click', appData.addIncomeBlock);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

periodSelect.addEventListener('input',appData.addPeriod);

  
   //appData.getTargetMonth();
 //  console.log(appData.getStatusIncome());