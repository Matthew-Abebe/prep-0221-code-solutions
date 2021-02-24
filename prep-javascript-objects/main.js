var person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'sports',
  job: 'Software Developer',
  previousJob: 'Package Handler'
};
var fullName = person.firstName + ' ' + person.lastName;

var myCar = {
  make: 'Honda',
  model: 'Accord',
  year: '2016',
  owner: fullName,
  color: 'blue'
};
var myCarString = 'My name is ' + myCar.owner + ' and I drive a ' + myCar.year + ' ' + myCar.make + ' ' + myCar.model + '.';

console.log(person);
console.log("The person's name is: " + fullName + '.');
console.log("The person's current job is: " + person.job + '.');
console.log("The person's previous job is: " + person.previousJob + '.');
console.log('The complete person object: ', person);
console.log('My full car info: ', myCar);
console.log(myCarString);
