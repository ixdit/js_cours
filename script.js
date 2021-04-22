
let money = 1000, //Доход за месяц
    income = 'фриланс', //доход
    addExpenses = 'интернет, такси, коммуналка', //расходы
    deposit = false, //накопления
    mission = 10000, //цель
    period = 9; //период

let budgetDay = money / 30;
let addExpensesLength = addExpenses.length;

console.log( typeof (money) );
console.log( typeof (income) );
console.log( typeof (deposit) );
console.log( budgetDay );
console.log( addExpensesLength );
console.log( 'Период равен ' + period + ' месяцев');
console.log( 'Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log( addExpenses.toLowerCase());
console.log( addExpenses.split(', '));

//lesson 03

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую \n(пример: "Квартплата, проездной, кредит")');
deposit  = prompt('Есть ли у вас депозит в банке? (Да / Нет)');

let expenses1  = prompt('Введите обязательную статью расходов?');
let amount1  = prompt('Во сколько это обойдется?');
let expenses2  = prompt('Введите обязательную статью расходов?');
let amount2  = prompt('Во сколько это обойдется?');

let budgetMonth = null;

budgetMonth = money - amount1 - amount2;

let ambition = Math.ceil(mission / budgetMonth) ;

budgetDay = Math.floor(budgetMonth / 30 );

console.log( 'бюджет на месяц: ' + budgetMonth );
console.log( 'цель будет достигнута за: ' + ambition + 'мес.' );
console.log( 'Дневной бюджет: ' + budgetDay );

if( budgetDay > 1200 ){
    console.log('У вас высокий уровень дохода');
} else if(1200 > budgetDay > 600){
    console.log('У вас средний уровень дохода');
} else if( 600 > budgetDay > 0 ){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}