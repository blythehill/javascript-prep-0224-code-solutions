function whileLoop1() {
  let index = 0;
  const numbersArray = [];
  while (index < 10) {
    numbersArray.push(index);
    index++;
    console.log(numbersArray[index]);
  }
  return numbersArray;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  let i = 0;
  const newArray = [];
  while (i < 20) {
    i += 2;
    newArray.push(i);
    console.log(newArray[i]);
  }
  return newArray;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array3 = [];
  for (let x = 0; x < 10; x++) {
    array3.push(x);
    console.log(x);
  }
  return array3;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  const array4 = [];
  for (let a = 100; a > 0; a--) {
    array4.push(a);
    console.log('Time to explosion' + ' ' + a);
  }
}
console.log('forLoop2 output', forLoop2());

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(person) {
  const array5 = [];
  for (const property in person) {
    array5.push(property);
    console.log(array5[property]);
  }
  return array5;
}

console.log('for in loop 1 output', forInLoop1(person));

function forInLoop2(person) {
  const array6 = [];
  for (const property in person) {
    array6.push(person[property]);
    console.log(array6[property]);
  }
  return array6;
}
console.log('for in loop 2 output', forInLoop2(person));
