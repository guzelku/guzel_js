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
   
const AppData= function(){
   this.income={};//все доходы
   this.incomeMonth=0;
   this.addIncome=[];//дополнительные доходы
   this.expenses={};// расходы
   this.addExpenses=[];//возможные расходы
   this.deposit=false;
   this.percentDeposit=0;
   this.moneyDeposit=0;
   this.budget=0;
   this.budgetDay=0;
   this.budgetMonth=0; 
   this.expensesMonth=0; 
   this.target1=0;
};

AppData.prototype.addIncomeBlock=function(){
   let cloneIncomeItem=incomeItems[0].cloneNode(true);
   cloneIncomeItem.classList.add('clone');
   incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
   
   incomeItems = document.querySelectorAll('.income-items');
     if(incomeItems.length ===3){
      incomePlus.style.display='none';
       
   }
};


AppData.prototype.start= function(){
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
   };
  
   AppData.prototype.showResult= function(){
  
    budgetMonthValue.value = this.budgetMonth;
 
    
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calsSavedMoney();

    
    periodSelect.addEventListener('input',this.addPeriod2.bind(this));

   
     };
    
     AppData.prototype.reset=function(){

this.addCancel2();
this.addBlocking();
periodSelect.value=1;
periodAmount.textContent=1;

incomePlus.style.display='initial';
expensesPlus.style.display='initial';
document.querySelectorAll('.clone').forEach(function(item){item.remove();});
document.getElementById('deposit-check').checked = false;
};



AppData.prototype.addIncomeBlock2= function(){

//console.log(incomeItems.parentNode);

let cloneIncomeItem2=incomeItems[0].cloneNode(true);

incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
incomeItems = document.querySelectorAll('.income-items');
let throwawayNode = node.parentNode.removeChild(cloneIncomeItem2);
incomePlus.style.display='block';
 };

AppData.prototype.addIncomeBlock= function(){

                //console.log(incomeItems.parentNode);

                let cloneIncomeItem=incomeItems[0].cloneNode(true);
                cloneIncomeItem.classList.add('clone');
                incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
                
                incomeItems = document.querySelectorAll('.income-items');
               

                
                if(incomeItems.length ===3){
                   incomePlus.style.display='none';
                    
                }
                   };
AppData.prototype.addExpensesBlock= function(){

               // console.log(expensesItems.parentNode);
                let cloneExpensesItem=expensesItems[0].cloneNode(true);
                cloneExpensesItem.classList.add('clone');
                expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
                expensesItems = document.querySelectorAll('.expenses-items');

                if(expensesItems.length ===3){
                   expensesPlus.style.display='none';
                }
                   };

AppData.prototype.addPeriod= function(){

                   periodAmount.innerHTML=periodSelect.value;
                   };


AppData.prototype.addPeriod2 = function(){

  

                      incomePeriodValue.value=this.budgetMonth * periodSelect.value;

                 };


AppData.prototype.addBlocking= function(){
if(salaryAmount.value ===''){

 start.setAttribute('disabled', true);
}
else 
{
 start.removeAttribute('disabled');
}
};

AppData.prototype.addCancel = function(){

start1.style.display='none';
cancel.style.display='block';
let inputText2=document.querySelectorAll('input[type=text]');
    inputText2.forEach(function(item){
    item.setAttribute('disabled', 'true');
 });

};

AppData.prototype.addCancel2 = function(){

start1.style.display='block';
cancel.style.display='none';


    inputText.forEach(function(item){
       item.value='';
       item.removeAttribute('disabled');
 });

};
AppData.prototype.getExpenses= function(){
   const _this=this;
 expensesItems.forEach(function(item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;

    if(itemExpenses !=='' && cashExpenses !=='' ){
      _this.expenses[itemExpenses]=cashExpenses;
    }
 }
 )
}; 

AppData.prototype.getIncome= function(){
   const _this=this;
 incomeItems.forEach(function(item){
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;

    if (itemIncome !=='' && cashIncome !=='' ){
       _this.income[itemIncome]=cashIncome;
    }
 })

 for(let key in this.income){
    this.incomeMonth+=+this.income[key];
 }

} ; 
             AppData.prototype.getAddExpenses= function(){
             let    addExpenses=additionalExpensesItem.value.split(',');
             const _this=this;
             addExpenses.forEach(function(item){
                item = item.trim();
                if(item !==''){
                _this.addExpenses.push(item);
             } }
             ) 
                 };

              AppData.prototype.getAddIncome= function(){
               const _this=this;

                additionalIncomeItem.forEach(function(item){
               let    itemValue = item.value.trim();
                   if(item !==''){
                      _this.addIncome.push(itemValue);
                   }  }
                )
              };


              AppData.prototype.getExpensesMonth= function(){
                for(let key in this.expenses ){
                  console.log ( 'расходы:  '+ this.expenses[key]);//вывод расходов
                    
                  this.expensesMonth += +this.expenses[key] ;// суммируем расходы
                  }
                   console.log('расходы за месяц :'+ this.expensesMonth);
                  };
                                    
              AppData.prototype.getBudget= function(){

                this.budgetMonth=this.budget + this.incomeMonth-this.expensesMonth;//Накопления за месяц 
                console.log(this.budgetMonth);
                this.budgetDay = Math.floor(this.budgetMonth/30);//бюджет на день накопления
                };

              /**достижение цели */
              AppData.prototype.getTargetMonth=function(){
                 return targetAmount.value/this.budgetMonth;
              if (this.mission/this.budgetMonth <0) {console.log('цель не будет достигнута') ; }
              else {
              console.log('цель будет достигнута за'+' '+Math.ceil (this.mission/this.budgetMonth)+' '+'месяцев') ;
              }
              };

              /** уровень дохода*/
              AppData.prototype.getStatusIncome= function() {
                  if(this.budgetDay>1200){return ('У вас высокий уровень дохода');}
                  else
                  if(this.budgetDay>600 && this.budgetDay<=1200)
                  {return ('У вас средний уровень дохода');}
                  else
                  if(this.budgetDay>0 && this.budgetDay<=600)
                  {return ('К сожалению у вас уровень дохода ниже среднего');}
                  else
                  {return ('Что то пошло не так');}
                  };

                   /* депозит в банке*/
/*-валидация годовой процент депозита цифра?
 - валидация сумма депозита  цифра */                    
              AppData.prototype.getInfoDeposit= function(){
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
              };

             AppData.prototype.calsSavedMoney= function(){
                return this.budgetMonth * periodSelect.value;
              };

 AppData.prototype.eventsListeners= function(){
   
   salaryAmount.addEventListener('input', this.addBlocking);


   window.addEventListener("load", this.addBlocking);
   
   start.addEventListener('click', this.start.bind(this) );
   cancel.addEventListener('click', this.reset.bind(this) );
   
   
   incomePlus.addEventListener('click', this.addIncomeBlock);
   
   expensesPlus.addEventListener('click', this.addExpensesBlock);
   
   periodSelect.addEventListener('input',this.addPeriod);

               
             };

const newData = new AppData();  

newData.eventsListeners();




