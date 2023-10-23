/*
Filename: sophisticated_code.js
Content: A sophisticated and elaborate example code in JavaScript.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a Company
class Company {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }

  hireEmployee(employee) {
    this.employees.push(employee);
  }

  fireEmployee(employeeName) {
    this.employees = this.employees.filter(employee => employee.name !== employeeName);
  }
}

// Create some people
const john = new Person("John", 25);
const alice = new Person("Alice", 30);
const bob = new Person("Bob", 35);

// Create a company
const myCompany = new Company("My Company", [john, alice]);

// Hire some employees
myCompany.hireEmployee(bob);

// Fire an employee
myCompany.fireEmployee("Alice");

// Print company name and employees
console.log(`Company: ${myCompany.name}`);
console.log("Employees:");
myCompany.employees.forEach(employee => employee.greet());