'use strict';
const start=document.getElementById('start'),
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

  let incomeItems = document.querySelectorAll('.income-items'),
 expensesItems = document.querySelectorAll('.expenses-items');
const isNumber = function(n){

   return !isNaN(parseFloat(n)) && isFinite(n);
   };
   
class AppData {
   constructor(){
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
}


addIncomeBlock(){
   const cloneIncomeItem=incomeItems[0].cloneNode(true);
   cloneIncomeItem.classList.add('clone');
   incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
   
   incomeItems = document.querySelectorAll('.income-items');
     if(incomeItems.length ===3){
      incomePlus.style.display='none';
       
   }
}


start(){
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
   }

  showResult(){
  
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calsSavedMoney();

    
    periodSelect.addEventListener('input',this.addPeriod2.bind(this));

   
     }

     reset(){

this.addCancel2();
this.addBlocking();
periodSelect.value=1;
periodAmount.textContent=1;

incomePlus.style.display='initial';
expensesPlus.style.display='initial';
document.querySelectorAll('.clone').forEach(item=>{item.remove();});
document.getElementById('deposit-check').checked = false;
}




addIncomeBlock(){

                //console.log(incomeItems.parentNode);

                const cloneIncomeItem=incomeItems[0].cloneNode(true);
                cloneIncomeItem.classList.add('clone');
                incomeItems[0].parentNode.insertBefore(cloneIncomeItem,incomePlus);
                
                incomeItems = document.querySelectorAll('.income-items');
               

                
                if(incomeItems.length ===3){
                   incomePlus.style.display='none';
                    
                }
                   }
addExpensesBlock(){

               // console.log(expensesItems.parentNode);
               const cloneExpensesItem=expensesItems[0].cloneNode(true);
                cloneExpensesItem.classList.add('clone');
                expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
                expensesItems = document.querySelectorAll('.expenses-items');

                if(expensesItems.length ===3){
                   expensesPlus.style.display='none';
                }
                   }

addPeriod(){

                   periodAmount.innerHTML=periodSelect.value;
                   }
                   
addPeriod2(){
   console.log(this.budgetMonth);
                      incomePeriodValue.value=this.budgetMonth * periodSelect.value;

                 }


addBlocking(){
if(salaryAmount.value ===''){

 start.setAttribute('disabled', true);
}
else 
{
 start.removeAttribute('disabled');
}
}

addCancel(){

start1.style.display='none';
cancel.style.display='block';
const inputText2=document.querySelectorAll('input[type=text]');
    inputText2.forEach(item=>{
    item.setAttribute('disabled', 'true');
 });

}

addCancel2() {

start1.style.display='block';
cancel.style.display='none';


    inputText.forEach(item=>{
       item.value='';
       item.removeAttribute('disabled');
 });

}
getExpenses(){
  // const _this=this;
 expensesItems.forEach(item=>{
   const itemExpenses = item.querySelector('.expenses-title').value;
   const cashExpenses = item.querySelector('.expenses-amount').value;

    if(itemExpenses !=='' && cashExpenses !=='' ){
      this.expenses[itemExpenses]=cashExpenses;
    }
 }
 )
}

getIncome(){
  // const _this=this;
 incomeItems.forEach(item=>{
   const itemIncome = item.querySelector('.income-title').value;
   const cashIncome = item.querySelector('.income-amount').value;

    if (itemIncome !=='' && cashIncome !=='' ){
       this.income[itemIncome]=cashIncome;
    }
 })

 for(const key in this.income){
    this.incomeMonth+=+this.income[key];
 }

}  
             getAddExpenses(){
               const    addExpenses=additionalExpensesItem.value.split(',');
             //const _this=this;
             addExpenses.forEach(item=>{
                item = item.trim();
                if(item !==''){
                this.addExpenses.push(item);
             } }
             ) 
                 }

              getAddIncome(){
               //const _this=this;

                additionalIncomeItem.forEach(item=>{
                  const    itemValue = item.value.trim();
                   if(item !==''){
                      this.addIncome.push(itemValue);
                   }  }
                )
              }


              getExpensesMonth(){
                for(const key in this.expenses ){
                  console.log ( 'расходы:  '+ this.expenses[key]);//вывод расходов
                    
                  this.expensesMonth += +this.expenses[key] ;// суммируем расходы
                  }
                   console.log('расходы за месяц :'+ this.expensesMonth);
                  }
                                    
              getBudget(){

                this.budgetMonth=this.budget + this.incomeMonth-this.expensesMonth;//Накопления за месяц 
                this.budgetDay = Math.floor(this.budgetMonth/30);//бюджет на день накопления
                }

              /**достижение цели */
             getTargetMonth(){
           
                 return targetAmount.value/this.budgetMonth;
             
              }

              /** уровень дохода*/
             getStatusIncome() {
                  if(this.budgetDay>1200){return ('У вас высокий уровень дохода');}
                  else
                  if(this.budgetDay>600 && this.budgetDay<=1200)
                  {return ('У вас средний уровень дохода');}
                  else
                  if(this.budgetDay>0 && this.budgetDay<=600)
                  {return ('К сожалению у вас уровень дохода ниже среднего');}
                  else
                  {return ('Что то пошло не так');}
                  }

                   /* депозит в банке*/
/*-валидация годовой процент депозита цифра?
 - валидация сумма депозита  цифра */                    
              getInfoDeposit(){
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
              }

             calsSavedMoney(){
                return this.budgetMonth * periodSelect.value;
              }

eventsListeners(){
   
   salaryAmount.addEventListener('input', this.addBlocking);


   window.addEventListener("load", this.addBlocking);
   
   start.addEventListener('click', this.start.bind (this) );
   cancel.addEventListener('click', this.reset.bind (this) );
   
   
   incomePlus.addEventListener('click', this.addIncomeBlock);
   
   expensesPlus.addEventListener('click', this.addExpensesBlock);
   
   periodSelect.addEventListener('input',this.addPeriod);

               
         }};

const newData = new AppData();  

newData.eventsListeners();







