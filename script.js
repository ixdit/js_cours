
let money = 1000, //Доход за месяц
    income = 'фриланс', //доход
    addExpenses = 'интернет, такси, коммуналка', //расходы
    deposit = false, //накопления
    mission = 10000, //цель
    period = 9; //период

let budgetDay = money / 30;

let addExpensesLength = addExpenses.length;


alert ('ok');

console.log( typeof (money) );
console.log( typeof (income) );
console.log( typeof (deposit) );

console.log( budgetDay );
console.log( addExpensesLength );

console.log( 'Период равен ' + period + ' месяцев');
console.log( 'Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log( addExpenses.toLowerCase());

console.log( addExpenses.split(', '));