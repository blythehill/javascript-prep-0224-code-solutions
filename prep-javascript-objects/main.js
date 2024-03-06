const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  hobby: 'pickle ball',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Young Grandmother';
console.log("the person's current job is:", person.job);

person['previousJob'] = 'Mob wife';
console.log("the person's previous Job is", person['previousJob']);
console.log(person);
