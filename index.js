
//QSTN1.....

// const parent=
// {
//      show:function(){
//     console.log(`Hi ${this.name} your age is ${this.age}`)
//            },
   
// }

// const obj1=Object.create(parent);
// obj1.name="mahesh"
// obj1.age=23;
// obj1.show();
//QSTN2.......
// const grandfather ={
//     sayhello:function(){
//         console.log("hello gfather");
//     }
// }
// const father=Object.create(grandfather);
// father.hello=function(){
//     console.log("hi father");
// }
// const you=Object.create(father);
// you.hi=function(){
//     console.log("hey buddy");
// }
// you.sayhello();
// you.hello();
// father.sayhello();
// you.hi();

// Array.prototype.calculateSum = function() {
//   var sum = 0;
//   for (var i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   return sum;
// };

// // Creating multiple arrays
// var array1 = [1, 2, 3, 4, 5];
// var array2 = [10, 20, 30];
// var array3 = [2, 4, 6, 8, 10, 12];

// // Calculating the sum using the method from the Array prototype
// var sum1 = array1.calculateSum();
// var sum2 = array2.calculateSum();
// var sum3 = array3.calculateSum();

// console.log(sum1); 
// console.log(sum2); 
// console.log(sum3); 

function getAllPropertyNames(obj) {
  var propertyNames = [];

  // Retrieve own property names
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      propertyNames.push(prop);
    }
  }

  // Retrieve inherited property names
  var prototype = Object.getPrototypeOf(obj);
  if (prototype !== null) {
    var inheritedPropertyNames = getAllPropertyNames(prototype);
    propertyNames = propertyNames.concat(inheritedPropertyNames);
  }

  return propertyNames;
}

// Example usage
var obj = {
  name: "John",
  age: 30
};

function Person() {
  this.gender = "Male";
}
Person.prototype = obj;

var person = new Person();
person.city = "New York";

var propertyNames = getAllPropertyNames(person);
console.log(propertyNames);


