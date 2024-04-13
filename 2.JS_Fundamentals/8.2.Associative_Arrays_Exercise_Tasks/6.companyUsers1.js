function companyUsers(input) {
  let result = {};

  for (let element of input) {
    let [employer, employeeID] = element.split(" -> ");
    if (employer in result) {
        if(!result[employer].includes(employeeID)){
            result[employer].push(employeeID);
        }
    } else {
      result[employer] = [employeeID];
    }
  }
  let sortedResult = Object.entries(result).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  sortedResult.forEach((element) => {
    console.log(element[0]);
    for (let employeeID of element[1]) {
      console.log(`-- ${employeeID}`);
    }
  });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);
