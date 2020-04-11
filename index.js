'use strict';
/**получить каждый элемент в отдельную переменную */

//Кнопку "Рассчитать" через id
let calculate=document.getElementById('start');
console.log(calculate);
  
//Кнопки “+” (плюс) через Tag, каждую в своей переменной
 let plus1=document.getElementsByTagName('button')[0];
 console.log(plus1);

let plus2=document.getElementsByTagName('button')[1];
 console.log(plus2);

 //Чекбокс по id через querySelector
 let checkbox=document.querySelector('#deposit-check');
 console.log(checkbox);

 //Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
 let additional=document.querySelectorAll('.additional_income-item');
 console.log(additional);

 /*Каждый элемент в правой части программы через класс,
  которые имеют в имени класса "-value", начиная с class=budget_day-value
   и заканчивая class="target_month-value"*/
   let value=document.querySelectorAll('.result .result-total');
   console.log(value);

   /**Оставшиеся поля через querySelector каждый в отдельную переменную:

поля ввода (input) с левой стороны и не забудьте про range */

let salaryAmount=document.querySelector('.salary-amount');
console.log(salaryAmount);

let incomeItems=document.querySelector('.income-items .income-title');
console.log(incomeItems);

let incomeAmount=document.querySelector('.income-amount');
console.log(incomeAmount);

let expensesItems=document.querySelector('.expenses-items .expenses-title');
console.log( expensesItems);

let expensesAmount=document.querySelector('.expenses-amount');
console.log(expensesAmount);

let additionalExpensesItem=document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);

let periodSelect=document.querySelector('.period-select');
console.log(periodSelect);

