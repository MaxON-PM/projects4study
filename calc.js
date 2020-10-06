"use strict"
//Primitive calculator 
let calculator = {
    sum(){
      return this.a + this.b;
    },
    mul(){
      return this.a * this.b;
    },
    read(){
        this.a = +prompt ('Enter first number', 0);
        this.b = +prompt ('Enter thecond number', 0);
    }
}

calculator.read();
calculator.sum();
calculator.mul();
alert ( calculator.sum() );
alert ( calculator.mul() );