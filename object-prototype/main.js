function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
}

function initPrintAnimalSound() {
    const animal = {
    	sound: 'grrrr'
    } 
    const result = getAnimalSound(animal);
    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  if (animal === undefined) {
  	return null;
  } else {
  	let sound = animal.sound;
  	return sound;
  }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
	let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
    	marksSum += parseInt(marks[i]);
    }
    let averageOfMarks = marksSum / marks.length;
    let roundedAverage = Math.round(averageOfMarks);
    return roundedAverage
}

initCalculateStatement();