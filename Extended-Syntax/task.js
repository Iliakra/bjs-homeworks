

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

    // код для задачи №1 писать здесь
"use strict";
let a = 2;
let b = 4;
let c = -3;

function getResult(a,b,c) {
  let discrim = Math.pow(b, 2) - 4 * a * c;
  let rootFirst = (-b + Math.sqrt(discrim)) / (2 * a);
  let rootSecond = (-b - Math.sqrt(discrim)) / (2 * a);
  let arr = [rootFirst , rootSecond];
  if (discrim < 0) {
    arr = [];
  } else if (discrim === 0) {
    arr = [rootFirst];
  } else {
    arr = [rootFirst , rootSecond];
  }
  return(arr);
}


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}
    

    // код для задачи №2 писать здесь
let marks = [2 , 5];

function getAverageMark(marks) {
  let marksAmount = marks.length;
  let sum = 0;
  if (marksAmount > 5) {
    marks = marks.slice(0,5);
    alert("Количество оценок превышено!");
    }
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let averageMark = sum / marks.length;
  return(averageMark);
}



function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}