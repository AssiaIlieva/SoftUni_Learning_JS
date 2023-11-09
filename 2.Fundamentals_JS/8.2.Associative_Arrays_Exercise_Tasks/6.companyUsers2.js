function companyUsers(imput) {
  let companies = {};
  imput.forEach((element) => {
    let [company, id] = element.split(" -> ");
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    companies[company].push(id);
  });
  let sortedCompanies = Object.entries(companies);
  sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));
  for (let arr of sortedCompanies) {
    let company = arr[0];
    console.log(company);
    let set = new Set(arr[1]);
    for (let id of set) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
