function nextDay(year, month, day){
let nextDate = new Date (year, month - 1, day + 1);
let newYear = nextDate.getFullYear();
let newMonth = nextDate.getMonth() + 1;
let newDay = nextDate.getDate();

console.log(`${newYear}-${newMonth}-${newDay}`); //2016-10-1
}
nextDay(2016, 9, 30)
 
