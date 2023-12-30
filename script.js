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

// Scoping first example

let globalVariable = 'I am a global Variable'

function localScop(){
    let localVariable = 'i am a local variable'

    console.log(globalVariable)
    console.log(localVariable)
}

     
localScop();          
        
// Hoisting first example  

let amIhoisting = 'I am not hoisting because i am a variable and variables never be hoisted';
console.log(amIhoisting)       
    
   
// console.log(amIhoisting)      
// let amIhoisting = 'I am not hoisting because i am a variable and variables never be hoisted';
     
iAmHoisting();                                            
   
function iAmHoisting(){
    var hoist = 'hey i am hoisting because i am function'
    console.log(hoist)    
}    

//Cloures
function nini(){
    return function bibio(){
        console.log('hey hou are u')
    }   
} 

let noFunc = nini();
noFunc();
 

// Coercion, Converting data types to another data types
let abc = 2
let c = "4"
console.log(c + abc)

let b = 2
let bb = '2'

console.log( b === bb)

//Arrys

const ai = [1,2,3,4,5]
 ai.push('hi')
console.log(ai)

const abcde = ["a","b","c","d","e"]
console.log(abcde[2])

const num = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

console.log(num[0][3])
console.log(num[1][2])
console.log(num[2][0])
console.log(num.length)


//Objects

const person = {
    name: "Zainab",
    age: 25,
    favoriteColor: "red",
    sayHi(){
        console.log('hello')
    }
}

person.sayHi()
console.log(person)

//second example

const book = {
    title : "Bible",
    Auther: {
        name: "Dudi",
        age: 43
    }
}

book.Auther.age = "NEW gee"

console.log(book.Auther.age)

//References

let A = 10
let B = "hi"
let C = [1,2]
let D = C
D.push(3)

console.log(C)

const me = {
    Name: "Zainu"
}
me.work = "developer"
console.log(me)

//Methods
let V = [1,2,3,4,]

// console.log(V)

let vi = V.find(numb =>{
    return numb > 2
})

console.log(vi)






