/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    console.log('true');
  } else {
    console.log('false');
  }
}

const isAdultResult = isAdult(22);

function didStudentPass(score) {
  if (score >= 70) {
    console.log('true');
  } else {
    console.log('false');
  }
}

const didStudentPassResult = didStudentPass(99);

function gradeCalculator(score) {
  if (score <= 59) {
    console.log('F');
  } else if (score <= 69) {
    console.log('D');
  } else if (score <= 79) {
    console.log('C');
  } else if (score <= 89) {
    console.log('B');
  } else if (score <= 99) {
    console.log('A)');
  } else if (score >= 100) {
    console.log('A++');
  }
}
const gradeCalculatorResult = gradeCalculator(100);

function seasonMessenger(season) {
  if (season == 'summer') {
    console.log('it is hot today');
  } else if (season == 'spring') {
    console.log('the flowers are blooming');
  } else if (season == 'fall') {
    console.log('the leaves are changing colors');
  } else if (season == 'winter') {
    console.log('it is cold today');
  } else {
    console.log('please enter a valid season');
  }
}

const seasonMessengerResult = seasonMessenger('spring');

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek == 'saturday' || dayOfTheWeek == 'sunday') {
    console.log('have a good weekend');
  } else {
    console.log('It is a weekday!');
  }
}

const dayDetectorResult = dayDetector('saturday');
