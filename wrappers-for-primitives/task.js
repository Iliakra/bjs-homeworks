'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    let nowDate = "2019-09-25";
    let dateYear = parseInt(date.substring(0,4), 10);
    let nowDateYear = parseInt(nowDate.substring(0,4), 10);
    let dateMonth = parseInt(date.substring(5,7), 10);
    let nowDateMonth = parseInt(nowDate.substring(5,7), 10);
    let monthAmount = ((dateYear - nowDateYear) * 12) + (dateMonth - nowDateMonth);
    let result = calculateTotalMortgage(percent, contribution, amount, monthAmount);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, monthAmount) {
	let i = 0;
	if (typeof (arguments.i) = !"number") {
		parseInt(arguments.i, 10);
	} else if (typeof (parseInt(arguments.i,10)) = !"number") {
		alert(`Параметр ${arguments.i} содержит неправильное значение ${arguments[i]}`);
	}

    let creditAmount = amount - contribution;
    percent = (percent / 100) / 12; 
    let monthPayment = creditAmount * (percent + percent / (((1 + percent) ^ monthAmount) - 1));
    let totalAmount = contribution + (monthPayment * monthAmount);
    return totalAmount;
}

calculateMortgage();



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === "") {
    	return `Привет, мир! Меня зовут Аноним.`
    } else {
    	return `Привет, мир! Меня зовут ${name}`
    }
}

sayHello();