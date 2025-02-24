// With arrow functions you can create a function in just one line
let sum = (a, b) => a + b;
console.log(sum(3,5));

let sum2 = (a, b) => ({a , b});
console.log(sum2(3,5));

function Person() {
  this.name = 'John';
  this.age = 5;
  
  setInterval(()=>{
    // You can access this method with arrow functions here
    this.age++;
    console.log('johns age is:', this.age);
  }, 1000);
}

// Create person new object
let person = new Person();