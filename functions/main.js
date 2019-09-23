//Задание 1

let a = 7;
let b = 20;
let c = -3;

'use strict'
function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return {D};
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    let roots = x1;
    return {roots, D};
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    roots = [x1, x2];
    return {roots, D};
  }
}


function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  alert(`Вычисляем корни квадратного уравнения ${a}x2+ ${b}x2 + ${c}`);
  alert(`Значение дискриминанта: ${result.D}`);
  if (result.D<0) {
    alert(`Уравнение не имеет вещественных корней`);
  } else if(result.D === 0){
    alert(`Уравнение имеет один корень X1=${result.roots}`);
  } else {
    alert(`Уравнение имеет два корня X1=${result.roots[0]} , X2=${result.roots[1]}`);
  }
  
}

showSolutionsMessage( a, b, c );


//Задание 2
let data = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [3, 5],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2]
};

function getMassiveAverage(massive) {
  let sum = 0;
  for (i=0; i<massive.length; i++) {
  sum += massive[i];
  }
  return sum / massive.length;
}

function getAverageScore(data) {
  let averageScore = 0;
  let dataSum = 0;
  let averageMassive = [];
	for (let prop in data) {
    let massive = data[prop];
    averageScore = getMassiveAverage(massive);
    console.log(`${prop}:${averageScore}`);
    averageMassive.push(averageScore);
    dataSum += averageScore;
	}
  
  console.log(`average:${dataSum / averageMassive.length}`);
}

getAverageScore(data);

//Задание 3.


let secretData = {
  aaa: 0,
  bbb: 0
}

function getName(name) {
    let realName = name===1 ? 'Эмильо' : 'Родриго';
    return realName
}

function getPersonData(secretData) {
  let firstName = secretData.aaa;
  let lastName = secretData.bbb;
  return {
    firstName: getName(firstName),
    lastName: getName(lastName)
  }
}

console.log(getPersonData(secretData));

