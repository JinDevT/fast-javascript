// Good
const person = {
    name: "jintae",
  };
Object.prototype.sayHi = function() {
  console.log(`Hi ${this.name}`);
} 
  
person.sayHi(); // Hello jintae

