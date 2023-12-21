// Arrow function with one parameter 

let namei = name => {
    return `Ya ${name}`;
}

console.log(namei('Rabbim'))

// Arrow function with tow parameter

let towParameter = (HELLO, NAME) => {
    return HELLO, NAME;
}

console.log(towParameter('Kudus fatihi', 'Salahedden Eyyubi'))

// Arrow functions example wihtout argument or parameter

let Mevlam = () => {
console.log('Ibrahimim nar et yerim')
}

Mevlam()

// Hoisting is not exist in Variables and arrow functions because 
// arrow functions are also based on variables. But they are exist in functions.

// Closures, first example

function outerFunction(){

    let Greeting = 'Hey there i am learning the concept of Colsures';

     function innerFunction(){
        console.log(Greeting)
    }
    return innerFunction;
}

let result = outerFunction()
result();

// second example

let a = 1

function number(){
    return function innerNumber(){
       console.log(a)
    }
}
let resutiiii = number()

resutiiii()

// Third example

function counter(){
    let count = 0;

    function increment(){
        count++;
        console.log('Current count:' ,count)
    }

    function decrement(){
        count--;
        console.log('Current count:' ,count)
    }

    return {
        increment,
        decrement
    };
}

const myCounter = counter();
myCounter.increment();
myCounter.decrement(); 





