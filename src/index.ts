// Basic Types

let age:number = 20;
let username:string = "Burhaan";
let isLogin:boolean = true;
let numbers:number[] = [1,2,3];
let person:[string,number] = ["Ali",20];

console.log(age);
console.log(username);
console.log(isLogin);
console.log(numbers);
console.log(person);


// Function

function greet(name:string):string{
    return "Hello " + name;
}

console.log(greet("Ali"));


// Arrow Function

const add = (a:number,b:number):number =>{
    return a+b;
}

console.log(add(10,20));


// Optional Parameter

function user(name:string,age?:number){
    return `Name: ${name}, Age: ${age}`;
}

console.log(user("Burhaan"));
console.log(user("Burhaan",20));


// Type Alias

type User = {
    name:string;
    age:number;
}

const person1:User = {
    name:"Ahmed",
    age:25
}

console.log(person1);


// Interface

interface Student{
    name:string;
    age:number;
}

const student:Student = {
    name:"Ali",
    age:22
}

console.log(student);


// Interface Extend

interface Admin extends Student{
    permissions:string[];
}

const admin:Admin = {
    name:"Admin User",
    age:30,
    permissions:["read","write","delete"]
}

console.log(admin);


// Union Type

let id:string | number;

id = "abc123";
console.log(id);

id = 123;
console.log(id);


// Optional Property

interface Product{
    id:number;
    name:string;
    description?:string;
}

const product:Product = {
    id:1,
    name:"Laptop"
}

console.log(product);


// Readonly Property

interface Config{
    readonly api:string;
}

const app:Config = {
    api:"example.com"
}

console.log(app);


// Generics

function contains<T>(arr:T[],item:T):boolean{
    return arr.includes(item);
}

console.log(
    contains<number>([1,2,3,4],2)
);