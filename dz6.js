'use strict';
function first(){
  //Do something
setTimeout(function(){
  console.log(1);
}, 500);

}

function second() {
  console.log(2);
}

first();
second();

// callback function

/* callback function - функция которая быть выполнена после того как другая функция завершила свое выполнение */

/* шаблон callback function - то что в другую функцию в качестве аргумента
 в будущем мы сможем передать другую функцию */
// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }
//  learnJS ('JavaScript', function(){
//      console.log('Я прошел этот урок');
//  });

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done(){
console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);// передали функцию как callback

/* функции callback позволяют нам быть уверенными в том, что определенный код 
не начнет исполнение до того момента пока другой код не завершит свое исполнение*/

