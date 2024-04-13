function employees(array) {
  for (let epmployeeName of array) {
    let employee = {
      name: epmployeeName,
      personalNum: epmployeeName.length,
    };
    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNum}`
    );
  }
}
employees([ 
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
