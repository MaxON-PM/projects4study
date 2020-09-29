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

let num; 

do {
num = prompt ('Ввидите число больше 100', 0);
}while (num <= 100 && num);



    