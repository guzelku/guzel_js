//Напишите расширения метода прототипа:

//1) Два класса, First и Second, Second наследует от First .

//2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".

//3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First,
// а потом сразу печатал в консоль "А я наследуемый метод!"*/



 class First {
   constructor(name) {
      this.name = name;
      this.phrase= `Привет я метод родителя!`;
    }
    hello() {
 
      console.log(`${this.phrase}`);
      return this.phrase
   }
 }

 

 //прототипное наследование

 class Second extends First {
      hello(phrase) {
     console.log(`${super.hello(phrase)} 
А я наследуемый метод! `);
   }
 }

 const se = new Second();
se.hello(); 



