"use strict"
//let massage;
//massage ='Привет мир ';
//alert (massage);
//let admin = 'Джон';
//let name;
//name = admin;
//alert (name);
//let isGreater = 4 > 1;
//alert (isGreater);
//следующий урок
//let result = prompt ("Как тебя зовут", '');
//alert (`Привет ${result}`);
//let qestion = confirm ("Ты петух?");
//let answer = qestion;
//day 2
/*let name = prompt ("What is oficial name of JavaScript?",'');
    if (name == "ECMAScript") {
        alert ("It`s right")
    }else {
        alert ("you are stupid")
    }*/
/*var number = prompt ("Enter any numbet please", "");
    if (number > 0){
        alert ("Плюсовое число то")
    }
    else if (number < 0){
        alert ("Ну так это же сраной минусовое число")
    }
    else {
        alert ("Это ноль, придурок")
    }
    let result;

    (a + b < 4) ? result = 'Мало': result = 'Много';*/
//day 3
/* Логин-парольlet login = prompt("Enter your login", '');

if (login == 'Admin') {
    let password = prompt('Enter your password', '');
    
    if (password == 'passw0rd') {
       
        alert ('Welcome');
    
    }else if (password == '' || password == null){
       
        alert ('Canceled');
    
    }else {
        
        alert ('Wrong password');
    
    }
}else if (login == null || login == '') {
    alert ('Canceling');
}else {
    alert ('I don`t know who you are, bitch');
}*/
/*let sum = 5;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );*/

/*let num; 

do {
num = prompt ('Ввидите число больше 100', 0);
}while (num <= 100 && num);*/
//lesson 4 (October 1)




/*function calc(a, b) {
    let result = a;

    for (let d = 1; d < b; d++){
        result *= a;
    }
    return result;    
}
let a = prompt('enter A', '');
let b = prompt('Enter B', '');

if (b < 1){
    alert('No result for ${b}')
}else {
    alert ( calc(a, b) )
}
*/
//October 2 
/*function ask (qestion, nn, bb) {
    if (confirm(qestion)) nn()
    else bb ();
}
ask (
    'Are you agree?',
    function() { alert ('Ok let`s go'); },
    function() { alert ('Newer mind'); }
    ); */
//October 4 
/*let user = {
    name: "Max",
    age: "32",
    surname: "Vozhakov"
};
for (let key in user){
alert( key );
alert( user[key] );
}

let me = { myName: "Adward"};
let you = me;
you.myName = "Ihor";
alert (me.myName);*/
/*let user = { name: "Maxxx" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

let clone = Object.assign({}, user);
for (let key in clone) {
alert( key ); 
alert( clone[key] );
}*/
//tasks

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//функция проверки не пустой ли объект
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
return true;
}
//считаем сумму зарплат и проверяем не пустой ли объект
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390*/
  //october 6 
  
  
