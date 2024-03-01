function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
   let input = JSON.parse(document.querySelector('#inputs textarea').value);
   let bestRestorant = '';
   let avrSalary = 0;
   let salary = 0;
   let restorants = {};

   for(let restorant of input){
      let [name, workers] = restorant.split(' - ');
      if(!restorants.hasOwnProperty(name)){
         restorants[name] = {};
      }
      let workersArr = workers.split(', ');
      
      for(let worker of workersArr){
         let [workerName, workerSalary] = worker.split(' ');
         workerSalary = Number(workerSalary);
         restorants[name][workerName] = workerSalary;           
      }
   }
   for(key in restorants){
      let arr = Object.entries(restorants[key]).sort((a, b) => b[1] - a[1]);
      let currentSum = 0;
      for(let salary of arr){
         currentSum += salary[1];
      }
      let currAvrSalary = currentSum / arr.length
      if(currAvrSalary > avrSalary){
         avrSalary = currAvrSalary;
         bestRestorant = key;
         salary = arr[0][1]
      }   
   }
   let output1 = `Name: ${bestRestorant} Average Salary: ${avrSalary.toFixed(2)} Best Salary: ${salary.toFixed(2)}`
   let workers = Object.entries(restorants[bestRestorant]);
   let sortedWorkers = workers.sort((a, b) => b[1] - a[1]);
   let output2 = '';
   for(let worker of sortedWorkers){
      let newString = `Name: ${worker[0]} With Salary: ${worker[1]}`
      output2 += newString + ' ';
   }
   document.querySelector('#bestRestaurant p').textContent = output1;
   document.querySelector('#workers p').textContent = output2;
   }
}